import { codeToHtml } from 'shiki';

interface CodeEditorProps {
  code: string;
  filename: string;
}

export async function CodeEditor({ code, filename }: CodeEditorProps) {
  const html = await codeToHtml(code, {
    lang: 'typescript',
    theme: 'github-dark-default',
  });

  return (
    <div className="h-full flex flex-col bg-bg-editor">
      {/* Tab bar */}
      <div className="flex items-center bg-bg-secondary border-b border-border h-9 px-2">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-bg-editor text-text-primary text-sm border-t-2 border-t-text-accent">
          <span className="text-icon-file-ts text-xs">TS</span>
          <span>{filename}</span>
        </div>
      </div>
      
      {/* Editor content */}
      <div className="flex-1 overflow-auto">
        <div 
          className="shiki-wrapper p-4 text-sm leading-6"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}
