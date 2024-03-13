# Tomato Tracker

## About Project

This is a simple time tracker that uses the Pomodoro Technique. It was build for learning purposes to try making
a desktop application using Wails and Go. The frontend is built using Vite and React. The UI components are from
shadcn/ui. The state management is done using jotai and zustand. The styling is done using TailwindCSS.

Feel free to try and criticize the project. I'm open to suggestions and improvements.

## About Tech Stack

- Wails - Go + Webview - Backend
- Vite + React - Frontend
- TailwindCSS - Styling
- shadcn/ui - UI Components
- jotai - State Management
- zustand - State Management

## Live Development

To run in live development mode, run `wails dev` in the project directory. This will run a Vite development
server that will provide very fast hot reload of your frontend changes. If you want to develop in a browser
and have access to your Go methods, there is also a dev server that runs on http://localhost:34115. Connect
to this in your browser, and you can call your Go code from devtools.

## Building

To build a redistributable, production mode package, use `wails build`.

## Potential improvements

- [ ] Move sound from frontend to backend for desktop
- [ ] Add task tracking (Notion API integration)
