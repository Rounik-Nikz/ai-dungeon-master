import { useState } from "react";

export default function DungeonMaster() {
    const [campaignSetting, setCampaignSetting] = useState("");
    const [playerCharacters, setPlayerCharacters] = useState("");
    const [campaignGoal, setCampaignGoal] = useState("");
    const [story, setStory] = useState("Waiting for your adventure...");
    const [loading, setLoading] = useState(false);

    const generateStory = async () => {
        setLoading(true);
        setStory("Generating your adventure...");
        try {
            const response = await fetch("http://localhost:3000/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ campaignSetting, playerCharacters, campaignGoal })
            });
            const data = await response.json();
            setStory(data.story || "An unknown force clouds the adventure...");
        } catch (error) {
            setStory("Error connecting to the Dungeon Master AI");
        }
        setLoading(false);
    };

    return (
        <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4">
            <h1 className="text-2xl font-bold text-center">Welcome to AI Dungeon Master</h1>
            <p className="text-gray-600 text-center">Generates Dungeons & Dragons scenarios and manages gameplay as a virtual Dungeon Master.</p>
            
            <div>
                <label className="block text-sm font-medium">Campaign Setting</label>
                <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="e.g. A haunted forest, an ancient city..."
                    value={campaignSetting}
                    onChange={(e) => setCampaignSetting(e.target.value)}
                />
            </div>

            <div>
                <label className="block text-sm font-medium">Player Characters</label>
                <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="e.g. Character name, race, class..."
                    value={playerCharacters}
                    onChange={(e) => setPlayerCharacters(e.target.value)}
                />
            </div>

            <div>
                <label className="block text-sm font-medium">Campaign Goal</label>
                <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="e.g. Defeat the dragon, find the treasure..."
                    value={campaignGoal}
                    onChange={(e) => setCampaignGoal(e.target.value)}
                />
            </div>

            <button
                className="w-full bg-blue-500 text-white p-2 rounded disabled:bg-gray-400"
                onClick={generateStory}
                disabled={loading}
            >
                {loading ? "Generating..." : "Submit"}
            </button>

            <div className="mt-4 p-4 bg-gray-100 rounded">
                <h2 className="font-bold">Story:</h2>
                <p className="text-gray-700">{story}</p>
            </div>
        </div>
    );
}
