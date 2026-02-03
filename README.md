# ademIDE

My personal portfolio website — styled as a TypeScript IDE, because traditional resumes are boring.

🔗 **Live:** [adem-ide.vercel.app](https://adem-ide.vercel.app)

![ademIDE Screenshot](screenshot.png)

## About

This is my software engineering portfolio, presented as a fully interactive code editor experience. Each "file" in the explorer represents a section of my portfolio — about me, skills, experience, projects, values, and contact info — all written as valid, syntax-highlighted TypeScript.

The interface mimics a real IDE with features like file navigation, git history view, theme switching, and even a recruiter-friendly simplified view for quick scanning.

## ✨ Features

### IDE Experience
- **Authentic IDE layout** — File tree sidebar, multi-tab editor, status bar with file info
- **Syntax highlighting** — Powered by Shiki with VS Code themes
- **Typing animation** — Code types out character-by-character when opening files
- **Interactive cursor** — Blinking cursor that follows as code types, clickable line positioning
- **Line numbers & highlighting** — Hover or click to highlight specific lines
- **Clickable links** — URLs and emails in code comments are fully interactive

### Visual Features
- **Dark/Light themes** — Toggle between VS Code Dark+ and Light+ themes
- **Code minimap** — Visual overview of file structure (like VS Code)
- **Welcome screen** — Initial landing page with quick-start tips
- **Onboarding tooltips** — Contextual hints for first-time visitors

### Navigation & Views
- **Git history view** — Browse "commits" showing portfolio evolution
- **Recruiter view** — Clean, simplified layout for quick scanning
- **View mode toggle** — Switch between standard and recruiter-optimized layouts
- **Multi-tab support** — Open and switch between multiple files seamlessly

### Responsive Design
- **Mobile-first** — Fully responsive with collapsible sidebar for smaller screens
- **Touch-friendly** — Optimized interactions for mobile devices
- **Performance-optimized** — Fast load times and smooth animations

## 🛠 Built With

- **Next.js 16.1** — React framework with App Router and React 19
- **TypeScript 5** — Full type safety throughout
- **Tailwind CSS v4** — Modern utility-first styling with PostCSS
- **Shiki 3.22** — Industry-standard syntax highlighting
- **JetBrains Mono** — Professional monospace font for code display
- **React Compiler** — Automatic optimizations with Babel plugin

## 🚀 Run Locally

```bash
git clone https://github.com/ademtru/ademIDE.git
cd ademIDE
npm install
npm run dev
```

## 📁 Structure

```
src/
├── app/                    # Next.js app router
│   ├── globals.css        # Global styles and Tailwind setup
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main portfolio page
├── components/            # IDE components
│   ├── code-editor.tsx        # Main editor with syntax highlighting
│   ├── code-editor-client.tsx # Client-side editor logic
│   ├── file-tree.tsx          # File explorer sidebar
│   ├── ide-layout.tsx         # Overall IDE shell
│   ├── git-history.tsx        # Git commit history view
│   ├── minimap.tsx            # Code overview minimap
│   ├── welcome-screen.tsx     # Landing page
│   ├── recruiter-view.tsx     # Simplified portfolio view
│   ├── theme-toggle.tsx       # Dark/light theme switcher
│   ├── view-mode-toggle.tsx   # View mode switcher
│   ├── onboarding-tooltip.tsx # User guidance tooltips
│   └── icons.tsx              # SVG icon components
└── lib/
    └── portfolio-content.ts   # ← Edit this to update your portfolio!
```

## ✏️ Customise

To use this as your own portfolio:

1. **Edit content**: Modify `src/lib/portfolio-content.ts` — each file in the tree is a TypeScript string that gets syntax-highlighted
2. **Adjust styling**: Customize colors and spacing in `src/app/globals.css` and component files
3. **Update metadata**: Change site title, description, and URLs in `src/app/layout.tsx`
4. **Replace assets**: Add your own screenshot and favicon

The portfolio structure uses a flexible tree format, so you can easily add/remove sections or reorganize the file hierarchy.

## 📬 Contact

- **Email:** [ademtruong@gmail.com](mailto:ademtruong@gmail.com)
- **GitHub:** [@ademtru](https://github.com/ademtru)
- **LinkedIn:** [ademtruong](https://linkedin.com/in/ademtruong)

## 📄 License

MIT — feel free to fork and make it your own!
