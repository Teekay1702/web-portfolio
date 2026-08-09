# Tokoloho Lekoro — Portfolio

A responsive personal portfolio website for **Tokoloho Hlompho Lekoro**, built with React, TypeScript, and Vite. The site presents professional experience, technical skills, selected projects, and contact information.

## Tech stack

- React
- TypeScript
- Vite
- CSS

## Getting started

### Prerequisites

- Node.js 20 or later
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will print a local URL, usually `http://localhost:5173`.

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Project structure

```text
src/
├── assets/                 # Images and other static design assets
├── components/             # Reusable portfolio UI components
├── constants/              # Profile, navigation, and icon constants
├── data/                   # Project and experience content
├── hooks/                  # Shared React hooks
├── types/                  # TypeScript interfaces and types
├── App.tsx                 # Application composition
├── main.tsx                # React application entry point
└── style.css               # Global and component styling
```

## Updating portfolio content

### Contact details

Edit the profile details in:

```text
src/constants/profile.ts
```

This controls the email address, phone number, location, GitHub, and LinkedIn links shown on the site.

### Projects

Edit the project list in:

```text
src/data/projects.ts
```

Each project supports the following fields:

```ts
{
  num: '01',
  title: 'Project name',
  type: 'Project type',
  desc: 'Short project description.',
  tags: ['React', 'TypeScript'],
  accent: 'violet',
  link: 'https://github.com/your-account/your-project',
}
```

> Replace all placeholder links with live deployments, GitHub repositories, or project case studies before publishing.

### Work experience

Edit the experience entries in:

```text
src/data/roles.ts
```

## Deployment

The portfolio can be deployed to any static hosting provider, including:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

Run `npm run build` and deploy the generated `dist` folder when required by your hosting provider.

## License

This project is intended as a personal portfolio website.
