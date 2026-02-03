# ademide — IDE-Style Portfolio

> If a feature does not improve readability or clarity, do not build it.

## Phase 1: Project Setup
- [x] Initialize Next.js project with TypeScript
- [x] Configure Tailwind CSS
- [x] Set up project structure
- [x] Add mono font (JetBrains Mono / Fira Code)
- [x] Choose and configure syntax highlighter (Shiki or Prism)

## Phase 2: Core Layout
- [x] Create IDE shell layout (sidebar + editor pane)
- [x] Build file tree sidebar component (20-25% width)
- [x] Build editor pane component
- [x] Add top bar with filename display
- [x] Implement responsive/mobile fallback (stacked layout)

## Phase 3: File Tree
- [x] Create file tree data structure
- [x] Render nested folders and files
- [x] Highlight active file
- [x] Handle file click → open in editor
- [x] Add file/folder icons

## Phase 4: Editor Pane
- [x] Syntax highlighting for TypeScript
- [ ] Line numbers
- [x] Read-only display
- [x] Scrollable content
- [ ] Selection highlights (subtle)

## Phase 5: Content Files
- [x] `about.ts` — Who I am
- [x] `skills.ts` — Technical skills
- [x] `experience.ts` — Work history
- [x] `projects/emailDiff.ts` — Project 1
- [x] `projects/startupWork.ts` — Project 2
- [x] `projects/tooling.ts` — Project 3
- [x] `values.ts` — Engineering values
- [x] `contact.ts` — Contact information

## Phase 6: State Management
- [x] Track `activeFile` state
- [ ] (Optional) Track `openFiles` for future tabs

## Phase 7: Polish
- [ ] Neutral dark theme (VS Code-like)
- [ ] Subtle hover/focus states
- [ ] Ensure accessibility (clickable, keyboard nav optional)
- [ ] Test readability of all content
- [ ] Mobile responsive check

## Phase 8: Deploy
- [ ] Build optimization
- [ ] Deploy to Vercel (or similar)
- [ ] Custom domain setup (optional)

---

## Out of Scope (Do Not Build)
- ❌ Terminal emulation
- ❌ Code execution
- ❌ Typing simulation
- ❌ Errors / linting display
- ❌ Fake cursor movement
- ❌ AI chat
- ❌ Drag/drop in file tree
- ❌ File creation
- ❌ Multiple tabs (MVP)

---

## Success Criteria
- [ ] Recruiter immediately understands the interface
- [ ] Content is readable without explanation
- [ ] Site feels confident and restrained
- [ ] Reflects real engineering taste
