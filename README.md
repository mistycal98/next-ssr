# Company Website: Server Side Rendering

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Features

- Every Page Server Side Rendered(NextJS-SSR)
- Individual Company pages for
  - Raw Engineering
  - ContentStack
  - Surfboard Ventures
- FontAwesome
- Prop Types validation with some components

# Implementation

- BootStrap Implementation
  - [Bootstrap](https://getbootstrap.com/) Library(v5.0.0-beta-1) [npm package](https://www.npmjs.com/package/bootstrap)
  - react-bootstrap for JSX Components

# Downloading and Running on LocalHost

Clone the repository

```
$ git clone https://github.com/mistycal98/next-ssr.git
```

Downloading Dependencies

```bash
$ npm i
# or
$ yarn install
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder Structure

```
.
├── components
│   ├── contentstack
│   │   ├── ContentStackBody.jsx
│   │   ├── ContentStackFooter.jsx
│   │   ├── contentStack.module.scss
│   │   └── ContentStackNavbar.jsx
│   ├── Contentstack.jsx
│   ├── Footer.jsx
│   ├── Layout.jsx
│   ├── Navigation.jsx
│   ├── raweng
│   │   ├── RawBody.jsx
│   │   ├── raweng.module.scss
│   │   ├── RawFooter.jsx
│   │   └── RawNavbar.jsx
│   ├── Raw.jsx
│   ├── surfboard
│   │   ├── SurfBoardBody.jsx
│   │   ├── SurfBoardFooter.jsx
│   │   ├── surfboard.module.scss
│   │   └── SurfBoardNavbar.jsx
│   └── Surfboard.jsx
├── fontawesome.js
├── next.config.js
├── package.json
├── pages
│   ├── api
│   │   └── hello.js
│   ├── _app.js
│   ├── companies
│   │   ├── contentstack.js
│   │   ├── raweng.js
│   │   └── surfboard.js
│   ├── index.js
│   └── test.js (test code file)
├── public
│   ├── 50001008.5332ba36.png
│   ├── favicon.ico
│   └── vercel.svg
├── README.md
└── styles
    ├── app.scss
    ├── bootstrap.scss
    └── variables.scss

```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Live Hosted on [Vercel](https://next-ssr.mistycal98.vercel.app/)
