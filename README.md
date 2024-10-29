<p align="center">
  <a href="https://malicious-code-scanner.vercel.app/">
    <img src="https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" height="96">
    <h3 align="center">Malicious Code Scanner</h3>
  </a>
</p>

<p align="center">A Next.js 14 application that utilizes machine learning models to detect malicious code in uploaded files, with FastAPI as the backend.</p>

<br/>

## Introduction

The Malicious Code Scanner is a Next.js + FastAPI application that enables users to upload files in multiple formats and scan them for potential malicious code. The app provides a clean, dashboard-like UI for model selection, upload progress, and result displays. It is ideal for developers and security teams who need to quickly assess file safety using custom models.

## How It Works

The backend Python/FastAPI server runs AI/ML models and is integrated with the Next.js app under the `/api/` endpoint. Model-based scans can be triggered by file uploads, and the results are displayed in an intuitive dashboard format.

The integration is handled through [`next.config.js` rewrites](https://github.com/vanthaita/malicious-code-scanner/blob/main/next.config.js), routing requests to `/api/py/:path*` directly to FastAPI.

On localhost, the FastAPI server runs at `127.0.0.1:8000`, while in production, it is hosted as [Python serverless functions](https://vercel.com/docs/concepts/functions/serverless-functions/runtimes/python) on Vercel.

## Demo

https://malicious-code-scanner.vercel.app/

## Deploy Your Own

You can clone & deploy it to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvanthaita%2Fmalicious-code-scanner%2Ftree%2Fmain)

## Developing Locally

Clone and create the repository with the following command:

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

For the backend, install Python packages in `requirements.txt`.

### 3. Run the development server

Start the server with:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app, while the FastAPI server is available at [http://127.0.0.1:8000](http://127.0.0.1:8000). Update the port in `package.json` and `next.config.js` as needed.

## Key Features

- **File Uploads**: Supports PDF and other common formats.
- **Model Selection**: Choose from multiple models (in `.h5` format) for scanning.
- **Progress & Results Display**: Track scan progress and view results in a dashboard format with graphical displays.

## Learn More

To learn more about Next.js and FastAPI, check out:

- [Next.js Documentation](https://nextjs.org/docs)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)

We welcome your feedback and contributions via [our GitHub repository](https://github.com/vanthaita/malicious-code-scanner)!

