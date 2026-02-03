/**
 * Simple SVG icons for the file tree.
 * Intentionally minimal — just enough to be recognizable.
 */

export function FileIcon() {
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
        stroke="#3178c6"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M9 2v3h3"
        stroke="#3178c6"
        strokeWidth="1"
        fill="none"
      />
      <text
        x="5"
        y="12"
        fontSize="5"
        fill="#3178c6"
        fontFamily="sans-serif"
        fontWeight="bold"
      >
        TS
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
