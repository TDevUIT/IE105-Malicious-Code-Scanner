<p align="center">
  <a href="https://ie-105-malicious-code-scanner.vercel.app/">
    <img src="https://github.com/user-attachments/assets/86d7edbe-df3f-4c3e-86b3-11f21bb11d5e" height="96" alt="QR code scan">
    <h3 align="center">Malicious Code Scanner</h3>
  </a>
</p>

<p align="center">A Next.js 14 application that leverages machine learning models to detect malicious code in uploaded files, featuring a FastAPI backend.</p>

<br/>

## Introduction

The **Malicious Code Scanner** is a robust web app developed using Next.js and FastAPI, designed to enable users to upload files in various formats and scan for potential malicious code. It features a user-friendly, dashboard-like UI for selecting models, monitoring upload progress, and displaying scan results. This tool is ideal for developers and security teams needing quick, reliable file safety assessments using custom AI/ML models.

## How It Works

The Python/FastAPI backend handles the AI/ML models, seamlessly integrated with the Next.js frontend through `/api/` endpoints. File uploads trigger model-based scans, with results presented in a structured dashboard format.

The integration is facilitated through [`next.config.js` rewrites](https://github.com/vanthaita/malicious-code-scanner/blob/main/next.config.js), routing requests to `/api/py/:path*` directly to FastAPI.

Locally, the FastAPI server runs at `127.0.0.1:8000`, while in production, it operates as [serverless Python functions](https://vercel.com/docs/concepts/functions/serverless-functions/runtimes/python) on Vercel.

## Demo

Explore the live demo here: [Malicious Code Scanner](https://ie-105-malicious-code-scanner.vercel.app/)

## Deploy Your Own

Clone & deploy it to Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvanthaita%2Fmalicious-code-scanner%2Ftree%2Fmain)

## Developing Locally

Set up the repository with:

```bash
npx create-next-app malicious-code-scanner --example "https://github.com/vanthaita/IE105-Malicious-Code-Scanner.git"
```

## Getting Started

### 1. Set up a virtual environment

```bash
python3 -m venv venv
source venv/bin/activate
```

### 2. Install dependencies

For the frontend, run:

```bash
npm install
# or
yarn
# or
pnpm install
```

For the backend, install Python packages listed in `requirements.txt`.

### 3. Run the development server

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Access the app at [http://localhost:3000](http://localhost:3000), with the FastAPI backend running at [http://127.0.0.1:8000](http://127.0.0.1:8000). Update the port in `package.json` and `next.config.js` as needed.

## Key Features

- **File Uploads**: Supports PDF and other common file formats.
- **Model Selection**: Allows users to choose from multiple models (in `.h5` format) for scanning.
- **Progress & Results Display**: Visualize scan progress and results in a dashboard format with graphical displays.

## Learn More

For further resources, check out:

- [Next.js Documentation](https://nextjs.org/docs)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)

We welcome your feedback and contributions via [our GitHub repository](https://github.com/vanthaita/malicious-code-scanner)!
```
