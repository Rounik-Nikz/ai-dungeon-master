const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

const API_KEY = process.env.HF_API_KEY;
const API_URL = "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.1";

async function generateStory(campaignSetting, playerCharacters, campaignGoal) {
    try {
        const prompt = `Campaign Setting: ${campaignSetting}\nPlayer Characters: ${playerCharacters}\nCampaign Goal: ${campaignGoal}\nWhat happens next?`;

        const response = await axios.post(
            API_URL,
            { inputs: prompt },
            { headers: { Authorization: `Bearer ${API_KEY}` } }
        );

        if (!response.data || response.data.length === 0) {
            return "The Dungeon Master remains silent... (No response from AI)";
        }

        return response.data[0]?.generated_text || "An unknown force clouds the adventure...";
    } catch (error) {
        return `An unseen force disrupts reality... (Error: ${error.message})`;
    }
}

app.post("/generate", async (req, res) => {
    const { campaignSetting, playerCharacters, campaignGoal } = req.body;

    if (!campaignSetting || !playerCharacters || !campaignGoal) {
        return res.status(400).json({ error: "All fields are required." });
    }

    const story = await generateStory(campaignSetting, playerCharacters, campaignGoal);
    res.status(200).json({ story });
});


app.listen(PORT, () => {
    console.log(`Dungeon Master API running on port ${PORT}`);
});
