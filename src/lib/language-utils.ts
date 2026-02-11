/**
 * Language-specific file extension mappings
 */

import { type SupportedLanguage } from './portfolio-content';

export const languageExtensions: Record<SupportedLanguage, string> = {
    typescript: '.ts',
    javascript: '.js',
    python: '.py',
    cpp: '.cpp',
    pseudocode: '.pseudo',
};

/**
 * Convert a TypeScript filename to the appropriate extension for the given language
 */
export function getLanguageFilename(filename: string, language: SupportedLanguage): string {
    // If it's TypeScript, return as-is
    if (language === 'typescript') {
        return filename;
    }
    
    // Replace .ts extension with the target language extension
    const baseName = filename.replace(/\.ts$/, '');
    return baseName + languageExtensions[language];
}

/**
 * Get just the extension for display
 */
export function getLanguageExtension(language: SupportedLanguage): string {
    return languageExtensions[language];
}
