/**
 * Simple SVG icons for the file tree.
 * Intentionally minimal — just enough to be recognizable.
 */

type SupportedLanguage = 'typescript' | 'javascript' | 'python' | 'cpp' | 'pseudocode';

const languageColors: Record<SupportedLanguage, string> = {
  typescript: '#3178c6',
  javascript: '#f7df1e',
  python: '#3776ab',
  cpp: '#00599c',
  pseudocode: '#808080',
};

const languageLabels: Record<SupportedLanguage, string> = {
  typescript: 'TS',
  javascript: 'JS',
  python: 'PY',
  cpp: 'C++',
  pseudocode: 'PS',
};

export function FileIcon({ language = 'typescript' }: { language?: SupportedLanguage }) {
  const color = languageColors[language] || languageColors.typescript;
  const label = languageLabels[language] || languageLabels.typescript;
  const fontSize = language === 'cpp' ? '4' : '5'; // Smaller font for C++
  const x = language === 'cpp' ? '4.5' : '5'; // Adjust x position for C++
  
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="flex-shrink-0"
    >
      <path
        d="M4 2h5l3 3v9H4V2z"
        stroke={color}
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M9 2v3h3"
        stroke={color}
        strokeWidth="1"
        fill="none"
      />
      <text
        x={x}
        y="12"
        fontSize={fontSize}
        fill={color}
        fontFamily="sans-serif"
        fontWeight="bold"
      >
        {label}
      </text>
    </svg>
  );
}

export function FolderIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="flex-shrink-0"
    >
      <path
        d="M2 4h4l1 1h7v8H2V4z"
        fill="#dcb67a"
        opacity="0.9"
      />
    </svg>
  );
}

export function FolderOpenIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="flex-shrink-0"
    >
      <path
        d="M2 4h4l1 1h7v1H3l-1 7V4z"
        fill="#dcb67a"
        opacity="0.9"
      />
      <path
        d="M2 6h12l-2 7H2l2-7z"
        fill="#dcb67a"
        opacity="0.7"
      />
    </svg>
  );
}

export function ChevronRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="flex-shrink-0"
    >
      <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export function ChevronDown() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="flex-shrink-0"
    >
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}
