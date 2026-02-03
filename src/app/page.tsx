'use client';

import { IDELayoutClient } from '@/components/ide-layout';
import { CodeEditorClient } from '@/components/code-editor-client';

export default function Home() {
  return (
    <IDELayoutClient>
      {(activeFilePath) => (
        <CodeEditorClient activeFilePath={activeFilePath} />
      )}
    </IDELayoutClient>
  );
}

