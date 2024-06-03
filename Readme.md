# Atom Copilot - React + Vite + Tauri

## Overview

Atom Copilot is a modern desktop application built using React for the frontend, Vite as the frontend build tool, and Tauri 2.0.0 framework for creating native desktop applications with a Rust core. This application facilitates team communication and collaboration, integrating features like chatting with team members and leveraging ChatGPT for assistance.

## Features

- Seamless integration with ChatGPT for real-time assistance.
- Intuitive user interface for smooth communication and collaboration.
- Cross-platform compatibility with native desktop applications.

## Prerequisites

Before getting started, ensure you have the following installed:

    ```bash
    npm init vite@latest
    ```

2. **Configure Vite**: Update the `vite.config.ts` file to ensure compatibility with Tauri. Add the following content:

    ```typescript
    import { defineConfig } from 'vite'

    export default defineConfig({
      // Prevent Vite from obscuring Rust errors
      clearScreen: false,
      // Tauri expects a fixed port, fail if that port is not available
      server: {
        strictPort: true,
      },
      // Access Tauri environment variables set by the CLI
      envPrefix: ['VITE_', 'TAURI_PLATFORM', 'TAURI_ARCH', 'TAURI_FAMILY', 'TAURI_PLATFORM_VERSION', 'TAURI_PLATFORM_TYPE', 'TAURI_DEBUG'],
      build: {
        // Tauri uses Chromium on Windows and WebKit on macOS and Linux
        target: process.env.TAURI_PLATFORM == 'windows' ? 'chrome105' : 'safari13',
        // Don't minify for debug builds
        minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
        // Produce sourcemaps for debug builds
        sourcemap: !!process.env.TAURI_DEBUG,
      },
    })
    ```

3. **Install Dependencies**: Navigate to your project directory and install dependencies using npm or yarn:

    ```bash
    npm install
    ```

4. **Start Development Server**: Run the following command to start the development server:

    ```bash
    npm run dev
    ```

### Setup Tauri

1. **Initialize Rust Project**: Use the Tauri CLI to scaffold a minimal Rust project pre-configured to use Tauri:

    ```bash
    npm install --save-dev @tauri-apps/cli
    npm run tauri init
    ```

    Follow the prompts to configure your project.

2. **Start Tauri**: To start a development build of your app, run:

    ```bash
    npm run tauri dev
    ```

## How to Use

- Use Atom Copilot for seamless team communication and collaboration.
- Leverage the integrated ChatGPT for real-time assistance and support.
- Explore various features and functionalities provided by the application's intuitive user interface.

## Additional Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Vite Documentation](https://vitejs.dev/guide/)
- [Tauri Documentation](https://tauri.studio/en/docs/getting-started/intro)

Get started with Atom Copilot today and enhance your team's productivity and collaboration experience!