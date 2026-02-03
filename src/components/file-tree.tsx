'use client';

import { FileNode } from '@/lib/portfolio-content';
import { FileIcon, FolderIcon, FolderOpenIcon } from './icons';
import { useState } from 'react';

interface FileTreeProps {
  files: FileNode[];
  activeFilePath: string | null;
  onFileSelect: (path: string) => void;
}

export function FileTree({ files, activeFilePath, onFileSelect }: FileTreeProps) {
  return (
    <div className="py-2">
      <div 
        className="px-4 py-2 text-xs uppercase tracking-wide"
        style={{ color: 'var(--text-secondary)' }}
      >
        Explorer
      </div>
      <div className="px-2">
        <TreeNode
          nodes={files}
          activeFilePath={activeFilePath}
          onFileSelect={onFileSelect}
          depth={0}
        />
      </div>
    </div>
  );
}

interface TreeNodeProps {
  nodes: FileNode[];
  activeFilePath: string | null;
  onFileSelect: (path: string) => void;
  depth: number;
}

function TreeNode({ nodes, activeFilePath, onFileSelect, depth }: TreeNodeProps) {
  return (
    <ul className="list-none m-0 p-0">
      {nodes.map((node) => (
        <TreeItem
          key={node.path}
          node={node}
          activeFilePath={activeFilePath}
          onFileSelect={onFileSelect}
          depth={depth}
        />
      ))}
    </ul>
  );
}

interface TreeItemProps {
  node: FileNode;
  activeFilePath: string | null;
  onFileSelect: (path: string) => void;
  depth: number;
}

function TreeItem({ node, activeFilePath, onFileSelect, depth }: TreeItemProps) {
  const [isOpen, setIsOpen] = useState(true);
  const isActive = node.path === activeFilePath;
  const isFolder = node.type === 'folder';
  const paddingLeft = 8 + depth * 12;

  const handleClick = () => {
    if (isFolder) {
      setIsOpen(!isOpen);
    } else {
      onFileSelect(node.path);
    }
  };

  return (
    <li>
      <button
        onClick={handleClick}
        className="w-full flex items-center gap-1.5 px-2 py-0.5 text-left text-sm cursor-pointer border-none transition-colors duration-75"
        style={{ 
          paddingLeft,
          background: isActive ? 'var(--bg-active)' : 'transparent',
          color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
        }}
        onMouseEnter={(e) => {
          if (!isActive) {
            e.currentTarget.style.background = 'var(--bg-hover)';
            e.currentTarget.style.color = 'var(--text-primary)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isActive) {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--text-secondary)';
          }
        }}
      >
        {isFolder ? (
          isOpen ? <FolderOpenIcon /> : <FolderIcon />
        ) : (
          <FileIcon />
        )}
        <span>{node.name}</span>
      </button>
      
      {isFolder && isOpen && node.children && (
        <TreeNode
          nodes={node.children}
          activeFilePath={activeFilePath}
          onFileSelect={onFileSelect}
          depth={depth + 1}
        />
      )}
    </li>
  );
}
