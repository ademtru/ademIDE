'use client';

import { useState } from 'react';

interface Commit {
  hash: string;
  date: string;
  message: string;
  description?: string;
  branch: 'main' | 'feature' | 'education';
  tags?: string[];
  additions?: number;
  deletions?: number;
}

const commits: Commit[] = [
  {
    hash: 'z0a1b2c',
    date: '2026-02-03',
    message: 'feat(project): ademIDE portfolio website',
    description: 'Built an IDE-themed portfolio with Next.js, TypeScript, and Tailwind. Features syntax highlighting, file tree navigation, recruiter mode toggle, and this git history view.',
    branch: 'feature',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'portfolio'],
    additions: 5000,
    deletions: 0,
  },
  {
    hash: 'c3d4e5f',
    date: '2026-01-20',
    message: 'feat(project): CalmErrors VS Code extension',
    description: 'Developer-first VS Code extension that transforms cryptic compiler errors into calm, clear explanations with practical next steps. Making error messages less stressful and more actionable.',
    branch: 'feature',
    tags: ['VS Code', 'TypeScript', 'DX', 'extension'],
    additions: 1800,
    deletions: 0,
  },
  {
    hash: 'a1b2c3d',
    date: '2025-06-01',
    message: 'feat(career): join IBM as Associate Consultant',
    description: 'SAP HANA Basis role on Department of Defence project. Built Python automation for sensitive data redaction workflows. Completed 10+ certifications across AI, Cloud, ML, and Agile.',
    branch: 'main',
    tags: ['IBM', 'enterprise', 'SAP'],
    additions: 500,
    deletions: 0,
  },
  {
    hash: 'e4f5g6h',
    date: '2025-04-01',
    message: 'feat(contract): Sideline performance optimization as a Software Engineer contractor',
    description: 'Optimised algorithms reducing runtime from 30s to 8s (73% improvement). Enhanced Outlook add-in change tracking logic. Built TypeScript/Node.js integrations with Microsoft APIs.',
    branch: 'main',
    tags: ['contract', 'TypeScript', 'Microsoft'],
    additions: 1200,
    deletions: 800,
  },
  {
    hash: 'b3c4d5e',
    date: '2025-01-15',
    message: 'feat(project): AI Tasks Generator shipped to production',
    description: 'Integrated OpenAI API to generate structured tasks automatically. 300% efficiency improvement. Used across internal teams at Deckle.',
    branch: 'feature',
    tags: ['AI', 'OpenAI', 'TypeScript', 'Firebase'],
    additions: 2200,
    deletions: 150,
  },
  {
    hash: 'i7j8k9l',
    date: '2024-12-01',
    message: 'feat(startup): join Deckle as Full Stack Engineer',
    description: 'Architected scalable full-stack systems. Improved user retention by 15%. Worked across Node.js, Firebase, GCP, and Flutter.',
    branch: 'main',
    tags: ['startup', 'full-stack', 'Flutter'],
    additions: 3500,
    deletions: 200,
  },
  {
    hash: 'm0n1o2p',
    date: '2024-11-15',
    message: 'feat(ml): Traffic Sign Classification CNN completed',
    description: 'Computer vision project with VGG-inspired CNN architecture. Achieved 70.83% test accuracy with L2 regularisation and dropout. Built with Python, TensorFlow, and Keras.',
    branch: 'feature',
    tags: ['ML', 'computer-vision', 'Python', 'TensorFlow'],
    additions: 2800,
    deletions: 0,
  },
  {
    hash: 'j8k9l0m',
    date: '2024-05-01',
    message: 'feat(project): Voucher System for Deckle',
    description: 'Built voucher and promotional code system for the platform.',
    branch: 'feature',
    tags: ['Deckle', 'Firebase', 'Node.js'],
    additions: 1800,
    deletions: 100,
  },
  {
    hash: 'k9l0m1n',
    date: '2024-02-01',
    message: 'feat(project): Broadcast Channel for Deckle',
    description: 'Implemented broadcast messaging channel for platform-wide communications.',
    branch: 'feature',
    tags: ['Deckle', 'Firebase', 'real-time'],
    additions: 1400,
    deletions: 50,
  },
  {
    hash: 'f6g7h8i',
    date: '2023-06-01',
    message: 'feat(tooling): internal developer tools initiative',
    description: 'Built automation scripts, CI/CD improvements, and developer onboarding tools. Philosophy: time invested in tooling must compound.',
    branch: 'feature',
    tags: ['DevOps', 'CI/CD', 'automation'],
    additions: 1500,
    deletions: 300,
  },
  {
    hash: 'u6v7w8x',
    date: '2023-01-15',
    message: 'feat(career): join Cadre Capital Partners',
    description: 'Built in-house systems using Node.js, MySQL, and GCP. Optimised complex SQL queries for reporting and business intelligence. Led process improvements through technology.',
    branch: 'main',
    tags: ['finance', 'full-stack', 'Node.js'],
    additions: 4200,
    deletions: 0,
  },
  {
    hash: 'y9z0a1b',
    date: '2022-07-01',
    message: 'feat(education): begin Software Engineering at RMIT',
    description: 'Bachelor of Software Engineering - focus on systems design, AI, and scalable architectures.',
    branch: 'education',
    tags: ['university', 'RMIT'],
    additions: 9999,
    deletions: 0,
  },
  {
    hash: 'c2d3e4f',
    date: '2018-01-01',
    message: 'init: first lines of code',
    description: 'Started programming journey with Python and web fundamentals.',
    branch: 'main',
    tags: ['origin'],
    additions: 100,
    deletions: 0,
  },
];

const branchColors = {
  main: 'var(--syntax-keyword)',      // Main career path
  feature: 'var(--syntax-function)',  // Projects & contracts
  education: 'var(--syntax-string)',  // Education & certs
};

export function GitHistory() {
  const [selectedCommit, setSelectedCommit] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'main' | 'feature' | 'education'>('all');

  const filteredCommits = filter === 'all' 
    ? commits 
    : commits.filter(c => c.branch === filter);

  return (
    <div 
      className="h-full overflow-auto p-4 font-mono text-sm"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Header */}
      <div className="mb-4 pb-3 border-b" style={{ borderColor: 'var(--border-color)' }}>
        <div className="flex items-center gap-2 mb-2">
          <GitBranchIcon />
          <span style={{ color: 'var(--text-primary)' }} className="font-semibold">
            git log --oneline --graph
          </span>
        </div>
        <p style={{ color: 'var(--text-muted)' }} className="text-xs">
          Career timeline as commits • {commits.length} commits total
        </p>
      </div>

      {/* Branch filter */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {(['all', 'main', 'feature', 'education'] as const).map((branch) => (
          <button
            key={branch}
            onClick={() => setFilter(branch)}
            className={`px-2 py-1 rounded text-xs transition-colors ${
              filter === branch ? 'ring-1 ring-[var(--text-accent)]' : ''
            }`}
            style={{
              background: filter === branch ? 'var(--bg-hover)' : 'transparent',
              color: branch === 'all' 
                ? 'var(--text-secondary)' 
                : branchColors[branch as keyof typeof branchColors],
            }}
          >
            {branch === 'all' ? '* all branches' : `○ ${branch}`}
          </button>
        ))}
      </div>

      {/* Commit list */}
      <div className="space-y-1">
        {filteredCommits.map((commit, index) => (
          <div key={commit.hash}>
            {/* Commit row */}
            <div
              className={`group flex items-start gap-3 p-2 rounded cursor-pointer transition-colors ${
                selectedCommit === commit.hash ? 'ring-1 ring-[var(--text-accent)]' : ''
              }`}
              style={{
                background: selectedCommit === commit.hash ? 'var(--bg-hover)' : 'transparent',
              }}
              onClick={() => setSelectedCommit(
                selectedCommit === commit.hash ? null : commit.hash
              )}
              onMouseEnter={(e) => {
                if (selectedCommit !== commit.hash) {
                  e.currentTarget.style.background = 'var(--bg-hover)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCommit !== commit.hash) {
                  e.currentTarget.style.background = 'transparent';
                }
              }}
            >
              {/* Graph line */}
              <div className="flex flex-col items-center w-4 flex-shrink-0">
                <div 
                  className="w-3 h-3 rounded-full border-2 flex-shrink-0"
                  style={{ 
                    borderColor: branchColors[commit.branch],
                    background: selectedCommit === commit.hash 
                      ? branchColors[commit.branch] 
                      : 'transparent',
                  }}
                />
                {index < filteredCommits.length - 1 && (
                  <div 
                    className="w-0.5 flex-1 min-h-[20px]"
                    style={{ background: 'var(--border-color)' }}
                  />
                )}
              </div>

              {/* Commit info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  {/* Hash */}
                  <code 
                    className="text-xs px-1 rounded"
                    style={{ 
                      background: 'var(--bg-secondary)',
                      color: 'var(--syntax-comment)',
                    }}
                  >
                    {commit.hash}
                  </code>
                  {/* Date */}
                  <span 
                    className="text-xs"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {formatDate(commit.date)}
                  </span>
                </div>
                
                {/* Message */}
                <p 
                  className="mt-1 break-words"
                  style={{ color: 'var(--text-primary)' }}
                >
                  <span style={{ color: branchColors[commit.branch] }}>
                    {commit.message.split(':')[0]}:
                  </span>
                  {commit.message.split(':').slice(1).join(':')}
                </p>

                {/* Tags */}
                {commit.tags && (
                  <div className="flex gap-1 mt-1 flex-wrap">
                    {commit.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-1.5 py-0.5 rounded"
                        style={{
                          background: 'var(--bg-secondary)',
                          color: 'var(--syntax-variable)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Stats */}
              <div 
                className="text-xs flex-shrink-0 hidden sm:block"
                style={{ color: 'var(--text-muted)' }}
              >
                {commit.additions && (
                  <span style={{ color: 'var(--syntax-string)' }}>
                    +{commit.additions}
                  </span>
                )}
                {commit.deletions && commit.deletions > 0 && (
                  <span style={{ color: 'var(--syntax-keyword)' }} className="ml-1">
                    -{commit.deletions}
                  </span>
                )}
              </div>
            </div>

            {/* Expanded details */}
            {selectedCommit === commit.hash && commit.description && (
              <div 
                className="ml-7 p-3 mb-2 rounded border-l-2 text-sm"
                style={{ 
                  background: 'var(--bg-secondary)',
                  borderColor: branchColors[commit.branch],
                  color: 'var(--text-secondary)',
                }}
              >
                {commit.description}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div 
        className="mt-6 pt-3 border-t text-xs"
        style={{ borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}
      >
        <p>$ git shortlog -sn</p>
        <p className="mt-1" style={{ color: 'var(--text-secondary)' }}>
          &nbsp;&nbsp;&nbsp;&nbsp;{commits.length}&nbsp;&nbsp;Adem Truong
        </p>
      </div>
    </div>
  );
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
  
  if (diffDays < 30) return `${diffDays} days ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
}

function GitBranchIcon() {
  return (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 16 16" 
      fill="currentColor"
      style={{ color: 'var(--text-accent)' }}
    >
      <path fillRule="evenodd" d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z" />
    </svg>
  );
}
