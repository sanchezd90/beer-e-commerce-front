# Challenge Frontend

This is the frontend application for the Challenge project. It's built with React, Vite, and uses React Query for data fetching.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v22)
- npm (comes with Node.js)
- The backend service running (see Backend Service section)

## Backend Service

This frontend application requires the backend service to be running. The backend service URL is configured through environment variables.

### Environment Variables

Create a `.env` file in the root directory with the following content:

```env
VITE_API_URL=http://localhost:3000  # Change this if your backend runs on a different port
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd challenge-frontend
```

2. Install dependencies:
```bash
npm install
```

## Development

To run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` by default.

## Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
challenge-frontend/
├── src/              # Source files
├── public/           # Static files
├── dist/             # Build output
├── index.html        # Entry HTML file
├── vite.config.js    # Vite configuration
└── package.json      # Project dependencies and scripts
```

## Dependencies

Main dependencies:
- React
- React Router DOM
- React Query
- Axios
- SASS