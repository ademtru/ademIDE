# ademIDE

A personal portfolio website styled as a TypeScript IDE — because resumes are boring.

![ademIDE Screenshot](screenshot.png)

## ✨ Features

- **IDE-style layout** — File tree sidebar, tabbed editor, status bar
- **Syntax highlighting** — Powered by Shiki with VS Code themes
- **Typing animation** — Code types out when you open a file
- **Blinking cursor** — Click any line to place the cursor
- **Dark/Light themes** — Toggle between VS Code Dark+ and Light+
- **Line numbers** — CSS counter-based, perfectly aligned
- **Line highlighting** — Hover or click to highlight lines
- **Clickable links** — URLs and emails in code are interactive
- **Mobile responsive** — Collapsible sidebar with slide-in animation
- **JetBrains Mono** — The proper monospace font

## 🛠 Tech Stack

- **Next.js 16** — React framework with App Router
- **TypeScript** — Type-safe code
- **Tailwind CSS v4** — Utility-first styling
- **Shiki** — Syntax highlighting
- **JetBrains Mono** — Google Fonts

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Theme variables & Shiki styles
│   ├── layout.tsx       # Root layout with fonts
│   └── page.tsx         # Main page
├── components/
│   ├── ide-layout.tsx   # IDE shell with sidebar
│   ├── file-tree.tsx    # File explorer
│   ├── code-editor-client.tsx  # Editor with Shiki
│   └── theme-toggle.tsx # Dark/light switch
└── lib/
    └── portfolio-content.ts  # All portfolio content as TS files
```

## ✏️ Customisation

Edit your portfolio content in `src/lib/portfolio-content.ts`. Each file in the tree is a TypeScript string that gets syntax-highlighted.

## 📦 Deploy

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ademtru/ademIDE)

## 📄 License

MIT
