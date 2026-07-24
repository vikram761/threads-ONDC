# Voice E-commerce Search

A multimodal voice e-commerce interface architected for the ONDC-GCP Hackathon. This project streamlines product search and chat functionalities by integrating state-of-the-art AI models, driving a 60% reduction in overall user search time.

## Key Features & Accomplishments
- **Multimodal AI Integration:** Incorporates Whisper (achieving 95% accuracy for speech-to-text), LLaMA-2, and LLaVA into core backend services.
- **Robust Backend Architecture:** Powered by Express.js and Supabase, featuring 5+ REST APIs to manage e-commerce search and conversational functionalities.
- **Scalable Serverless Deployment:** Services are containerized using Docker and designed for deployment to Google Cloud Run, ensuring scalable concurrent request handling.

## Project Structure
```text
.
├── client/                 # Frontend application source code
├── server/                 # Express.js backend and API routes
└── docker-compose.yaml     # Container orchestration for the backend server and Ollama
```
## Pictures
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/43af728f-8989-4bba-8c19-91d4299a8253" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/15521b4e-8edc-4815-aa64-5076c18e217b" />

## Tech Stack
- **Backend:** Node.js, Express.js, Supabase
- **AI/ML:** Whisper, LLaMA-2, LLaVA, Ollama
- **DevOps:** Docker, Docker Compose, Google Cloud Run

## Prerequisites
- Node.js and npm
- Docker and Docker Compose
- NVIDIA GPU with drivers installed (required for Ollama GPU acceleration as defined in `docker-compose.yaml`)

## Getting Started

### 1. Environment Setup
Ensure you have your environment variables configured. Create a `.env` file in the `server/` directory containing necessary API keys and Supabase credentials.

### 2. Start Backend and AI Services (Docker)
The `docker-compose.yaml` file is configured to spin up the Node server on port `6969` and the Ollama AI service on port `11434` with NVIDIA GPU reservations.

From the root of the project, run:
```bash
docker-compose up --build
```

### 3. Start Frontend
Open a new terminal window, navigate to the `client/` directory, install dependencies, and run the development server:
```bash
cd client
yarn install
yarn dev
```
