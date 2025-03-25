# AI Dungeon Master

AI Dungeon Master is a web-based application that dynamically generates Dungeons & Dragons (D&D) scenarios based on user input. It uses an AI model from Hugging Face to craft immersive stories for players.

## Features
- Generate custom D&D campaigns
- Input campaign settings, player characters, and campaign goals
- AI-driven story progression

## Tech Stack
- **Backend:** Node.js, Express, Axios, Hugging Face API
- **Frontend:** React, Tailwind CSS 
**Note:** The UI is minimal and not really designed. Feel free to customize and enhance it as needed.


## Setup Guide

### 1. Clone the Repository
```bash
git clone https://github.com/your-repo/ai-dungeon-master.git
cd ai-dungeon-master
```

### 2. Install Dependencies
Navigate to backend and frontend directories and install the required packages:
```bash
cd backend
npm install
cd ../frontend
npm install
```

### 3. Generate a Hugging Face API Key
1. Visit [Hugging Face](https://huggingface.co/)
2. Create an account or log in
3. Navigate to **Settings > Access Tokens**
4. Click **New Token**, set it as **Read**, and generate it
5. Copy the generated API key

### 4. Configure Environment Variables
Create a `.env` file in the `backend/` directory:
```
HF_API_KEY=your_huggingface_api_key_here
```

### 5. Start the Backend Server
```bash
cd backend
npm start
```
The backend will run on `http://localhost:3000`

### 6. Start the Frontend
```bash
cd frontend
npm start
```
The frontend will be available at `http://localhost:5173`

## Usage
1. Open the frontend in a browser
2. Enter campaign details and click **Submit**
3. Read and enjoy your AI-generated adventure!

## License
This project is open-source under the [MIT License](https://github.com/Rounik-Nikz/ai-dungeon-master/blob/main/LICENSE).

---

### Troubleshooting
- **Getting a 204 response?** Ensure your API key is correct and the Hugging Face model is available.
- **Getting a API error?** Dont Worry you might get api error due to request overload, since we are using a free api.
- **CORS issue?** Make sure the backend allows requests from the frontend.

For any issues, feel free to open an issue in the repository!
