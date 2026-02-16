'use client';

import { portfolioFiles, getAllFiles } from '@/lib/portfolio-content';
import { useState } from 'react';

// IDE Mode Banner Component
function IDEModeBanner({ onDismiss, onSwitchToIde }: { onDismiss: () => void; onSwitchToIde: () => void }) {
  return (
    <div
      className="border-b px-4 py-3 flex items-center justify-between gap-4"
      style={{
        background: 'var(--bg-sidebar)',
        borderColor: 'var(--border-color)',
      }}
    >
      <div className="flex items-center gap-3 flex-1">
        <span className="text-lg">💻</span>
        <div>
          <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
            Developer? Try <button
              className="underline text-accent cursor-pointer bg-transparent border-none p-0 m-0"
              style={{ color: 'var(--text-accent)', background: 'none' }}
              onClick={onSwitchToIde}
              aria-label="Switch to IDE mode"
            >IDE mode</button> for the full experience
          </p>
          <p className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>
            Click the IDE button in the top-right corner →
          </p>
        </div>
      </div>
      <button
        onClick={onDismiss}
        className="text-sm px-2 py-1 rounded hover:bg-opacity-80 transition-colors"
        style={{ color: 'var(--text-secondary)' }}
        aria-label="Dismiss banner"
      >
        ✕
      </button>
    </div>
  );
}

// Extract structured data from about.ts
function parseAbout(content: string) {
  const nameMatch = content.match(/name\s*=\s*['"]([^'"]+)['"]/);
  const roleMatch = content.match(/role\s*=\s*['"]([^'"]+)['"]/);
  const locationMatch = content.match(/location\s*=\s*['"]([^'"]+)['"]/);
  const philosophyMatch = content.match(/philosophy\s*=\s*['"]([^'"]+)['"]/);
  
  // Extract background object
  const educationMatch = content.match(/education:\s*['"]([^'"]+)['"]/);
  const experienceMatch = content.match(/experience:\s*['"]([^'"]+)['"]/);
  const focusMatch = content.match(/focus:\s*['"]([^'"]+)['"]/);
  
  // Extract interests array
  const interestsMatch = content.match(/interests\s*=\s*\[([\s\S]*?)\]/);
  const interests = interestsMatch 
    ? interestsMatch[1].match(/['"]([^'"]+)['"]/g)?.map(s => s.replace(/['"]/g, ''))
    : [];

  return {
    name: nameMatch?.[1] || 'Unknown',
    role: roleMatch?.[1] || '',
    location: locationMatch?.[1] || '',
    philosophy: philosophyMatch?.[1] || '',
    education: educationMatch?.[1] || '',
    experience: experienceMatch?.[1] || '',
    focus: focusMatch?.[1] || '',
    interests: interests || [],
  };
}

// Extract skills from skills.ts
function parseSkills(content: string) {
  const extractArray = (name: string) => {
    const regex = new RegExp(`export const ${name}\\s*=\\s*\\[([\\s\\S]*?)\\]\\s*as const`, 'm');
    const match = content.match(regex);
    if (!match) return [];
    return match[1].match(/['"]([^'"]+)['"]/g)?.map(s => s.replace(/['"]/g, '')) || [];
  };

  return {
    languages: extractArray('languages'),
    frontend: extractArray('frontend'),
    backend: extractArray('backend'),
    databasesAndCloud: extractArray('databasesAndCloud'),
    aiAndData: extractArray('aiAndData'),
    tooling: extractArray('tooling'),
    learning: extractArray('learning'),
  };
}

// Extract experience from experience.ts
function parseExperience(content: string) {
  const roles: Array<{
    company: string;
    title: string;
    period: string;
    location: string;
    highlights: string[];
  }> = [];

  // Match each role object
  const roleMatches = content.matchAll(/\{\s*company:\s*['"]([^'"]+)['"]\s*,\s*title:\s*['"]([^'"]+)['"]\s*,\s*period:\s*['"]([^'"]+)['"]\s*,\s*location:\s*['"]([^'"]+)['"]\s*,\s*highlights:\s*\[([\s\S]*?)\]\s*,?\s*\}/g);

  for (const match of roleMatches) {
    const highlights = match[5].match(/['"]([^'"]+)['"]/g)?.map(s => s.replace(/['"]/g, '')) || [];
    roles.push({
      company: match[1],
      title: match[2],
      period: match[3],
      location: match[4],
      highlights,
    });
  }

  return roles;
}

// Extract values from values.ts
function parseValues(content: string) {
  const values: Array<{ name: string; principle: string; practice: string }> = [];
  
  const valueMatches = content.matchAll(/(\w+):\s*\{\s*principle:\s*['"]([^'"]+)['"]\s*,\s*practice:\s*['"]([^'"]+)['"]\s*,?\s*\}/g);
  
  for (const match of valueMatches) {
    values.push({
      name: match[1],
      principle: match[2],
      practice: match[3],
    });
  }

  return values;
}

// Extract contact info from contact.ts
function parseContact(content: string) {
  const emailMatch = content.match(/email:\s*['"]([^'"]+)['"]/);
  const githubMatch = content.match(/github:\s*['"]([^'"]+)['"]/);
  const linkedinMatch = content.match(/linkedin:\s*['"]([^'"]+)['"]/);
  const locationMatch = content.match(/location:\s*['"]([^'"]+)['"]/);
  const signoffMatch = content.match(/signoff\s*=[\s\S]*?['"]([^'"]+)['"]/);

  const openToMatch = content.match(/openTo:\s*\[([\s\S]*?)\]/);
  const openTo = openToMatch 
    ? openToMatch[1].match(/['"]([^'"]+)['"]/g)?.map(s => s.replace(/['"]/g, ''))
    : [];

  return {
    email: emailMatch?.[1] || '',
    github: githubMatch?.[1] || '',
    linkedin: linkedinMatch?.[1] || '',
    location: locationMatch?.[1] || '',
    openTo: openTo || [],
    signoff: signoffMatch?.[1] || '',
  };
}

// Extract project info
function parseProject(content: string) {
  const nameMatch = content.match(/name:\s*['"]([^'"]+)['"]/);
  const statusMatch = content.match(/status:\s*['"]([^'"]+)['"]/);
  const yearMatch = content.match(/year:\s*(\d+)/);
  const problemMatch = content.match(/problem:\s*['"]([^'"]+)['"]/);
  const solutionMatch = content.match(/solution:\s*['"]([^'"]+)['"]/);
  const lessonMatch = content.match(/lesson:\s*['"]([^'"]+)['"]/);

  const stackMatch = content.match(/stack:\s*\[([\s\S]*?)\]/);
  const stack = stackMatch 
    ? stackMatch[1].match(/['"]([^'"]+)['"]/g)?.map(s => s.replace(/['"]/g, ''))
    : [];

  // Extract results
  const resultsMatch = content.match(/results:\s*\{([\s\S]*?)\}/);
  const results: Record<string, string> = {};
  if (resultsMatch) {
    const resultItems = resultsMatch[1].matchAll(/(\w+):\s*['"]([^'"]+)['"]/g);
    for (const item of resultItems) {
      results[item[1]] = item[2];
    }
  }

  // Extract links
  const linksMatch = content.match(/links:\s*\{([\s\S]*?)\}/);
  const links: { demo?: string; github?: string } = {};
  if (linksMatch) {
    const demoMatch = linksMatch[1].match(/demo:\s*['"]([^'"]+)['"]/);
    const githubMatch = linksMatch[1].match(/github:\s*['"]([^'"]+)['"]/);
    if (demoMatch) links.demo = demoMatch[1];
    if (githubMatch) links.github = githubMatch[1];
  }

  return {
    name: nameMatch?.[1] || 'Unknown Project',
    status: statusMatch?.[1] || '',
    year: yearMatch?.[1] || '',
    problem: problemMatch?.[1] || '',
    solution: solutionMatch?.[1] || '',
    lesson: lessonMatch?.[1] || '',
    stack: stack || [],
    results,
    links,
  };
}

export function RecruiterView() {
  // Initialize banner state from localStorage
  const [showBanner, setShowBanner] = useState(() => {
    if (typeof window === 'undefined') return true;
    const dismissed = localStorage.getItem('ademide-ide-banner-dismissed');
    return !dismissed;
  });

  const handleDismissBanner = () => {
    setShowBanner(false);
    localStorage.setItem('ademide-ide-banner-dismissed', 'true');
  };

  // Add handler to switch to IDE mode using ViewModeToggle logic
  const handleSwitchToIde = () => {
    if (typeof window !== 'undefined') {
      // Use custom event to trigger mode change in parent
      window.dispatchEvent(new CustomEvent('ademide-switch-to-ide'));
    }
  };

  const allFiles = getAllFiles(portfolioFiles);
  
  const aboutFile = allFiles.find(f => f.name === 'about.ts');
  const skillsFile = allFiles.find(f => f.name === 'skills.ts');
  const experienceFile = allFiles.find(f => f.name === 'experience.ts');
  const valuesFile = allFiles.find(f => f.name === 'values.ts');
  const contactFile = allFiles.find(f => f.name === 'contact.ts');
  const projectFiles = allFiles.filter(f => f.path.includes('/projects/'));

  const about = aboutFile?.content ? parseAbout(aboutFile.content) : null;
  const skills = skillsFile?.content ? parseSkills(skillsFile.content) : null;
  const experience = experienceFile?.content ? parseExperience(experienceFile.content) : [];
  const values = valuesFile?.content ? parseValues(valuesFile.content) : [];
  const contact = contactFile?.content ? parseContact(contactFile.content) : null;
  const projects = projectFiles.map(f => f.content ? parseProject(f.content) : null).filter(Boolean);

  return (
    <div 
      className="h-full overflow-auto"
      style={{ 
        background: 'var(--bg-editor)',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}
    >
      {/* IDE Mode Banner */}
      {showBanner && <IDEModeBanner onDismiss={handleDismissBanner} onSwitchToIde={handleSwitchToIde} />}
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {/* Header */}
        {about && (
          <header className="mb-8 sm:mb-12 text-center">
            <h1 
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2"
              style={{ color: 'var(--text-primary)' }}
            >
              {about.name}
            </h1>
            <p 
              className="text-lg sm:text-xl mb-3"
              style={{ color: 'var(--text-accent)' }}
            >
              {about.role}
            </p>
            <p 
              className="text-sm sm:text-base"
              style={{ color: 'var(--text-secondary)' }}
            >
              📍 {about.location}
            </p>
            {contact && (
              <div 
                className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-4 text-xs sm:text-sm"
                style={{ color: 'var(--text-secondary)' }}
              >
                <a 
                  href={`mailto:${contact.email}`}
                  className="hover:underline"
                  style={{ color: 'var(--text-accent)' }}
                >
                  ✉️ {contact.email}
                </a>
                <a 
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                  style={{ color: 'var(--text-accent)' }}
                >
                  GitHub
                </a>
                <a 
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                  style={{ color: 'var(--text-accent)' }}
                >
                  LinkedIn
                </a>
              </div>
            )}
          </header>
        )}

        {/* About Section */}
        {about && (
          <Section title="About" id="about">
            <p 
              className="mb-4 text-sm sm:text-base leading-relaxed"
              style={{ color: 'var(--text-primary)' }}
            >
              {about.experience}. Focused on {about.focus.toLowerCase()}.
            </p>
            <p 
              className="mb-4 text-sm sm:text-base"
              style={{ color: 'var(--text-secondary)' }}
            >
              🎓 {about.education}
            </p>
            {about.philosophy && (
              <p 
                className="italic text-sm sm:text-base"
                style={{ color: 'var(--text-accent)' }}
              >
                &ldquo;{about.philosophy}&rdquo;
              </p>
            )}
          </Section>
        )}

        {/* Experience Section */}
        {experience.length > 0 && (
          <Section title="Experience" id="experience">
            <div className="space-y-6">
              {experience.map((role, i) => (
                <div key={i} className="border-l-2 pl-4" style={{ borderColor: 'var(--text-accent)' }}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
                    <div>
                      <h3 
                        className="font-semibold text-sm sm:text-base"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {role.title}
                      </h3>
                      <p 
                        className="text-sm"
                        style={{ color: 'var(--text-accent)' }}
                      >
                        {role.company}
                      </p>
                    </div>
                    <p 
                      className="text-xs sm:text-sm whitespace-nowrap"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {role.period}
                    </p>
                  </div>
                  <ul className="list-disc list-inside space-y-1">
                    {role.highlights.map((highlight, j) => (
                      <li 
                        key={j}
                        className="text-xs sm:text-sm"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Skills Section */}
        {skills && (
          <Section title="Skills" id="skills">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <SkillGroup title="Languages" skills={skills.languages} />
              <SkillGroup title="Frontend" skills={skills.frontend} />
              <SkillGroup title="Backend" skills={skills.backend} />
              <SkillGroup title="Databases & Cloud" skills={skills.databasesAndCloud} />
              <SkillGroup title="AI & Data" skills={skills.aiAndData} />
              <SkillGroup title="Tools & Practices" skills={skills.tooling} />
            </div>
          </Section>
        )}

        {/* Projects Section */}
        {projects.length > 0 && (
          <Section title="Projects" id="projects">
            <div className="space-y-6">
              {projects.map((project, i) => project && (
                <div 
                  key={i} 
                  className="p-4 rounded-lg"
                  style={{ background: 'var(--bg-secondary)' }}
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
                    <h3 
                      className="font-semibold text-sm sm:text-base"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {project.name}
                    </h3>
                    <span 
                      className="text-xs px-2 py-0.5 rounded self-start"
                      style={{ 
                        background: 'var(--text-accent)', 
                        color: 'var(--bg-primary)',
                        opacity: 0.9
                      }}
                    >
                      {project.status} {project.year && `• ${project.year}`}
                    </span>
                  </div>
                  {project.problem && (
                    <p 
                      className="text-xs sm:text-sm mb-2"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <strong>Problem:</strong> {project.problem}
                    </p>
                  )}
                  {project.solution && (
                    <p 
                      className="text-xs sm:text-sm mb-2"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <strong>Solution:</strong> {project.solution}
                    </p>
                  )}
                  {Object.keys(project.results).length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-2">
                      {Object.entries(project.results).map(([key, value]) => (
                        <span 
                          key={key}
                          className="text-xs px-2 py-1 rounded"
                          style={{ 
                            background: 'var(--bg-active)',
                            color: 'var(--text-primary)'
                          }}
                        >
                          {key}: {value}
                        </span>
                      ))}
                    </div>
                  )}
                  {project.stack.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech, j) => (
                        <span 
                          key={j}
                          className="text-xs px-2 py-0.5 rounded"
                          style={{ 
                            background: 'var(--bg-hover)',
                            color: 'var(--text-secondary)'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  {/* Project Links */}
                  {project.links && (
                    <div className="flex flex-wrap gap-3 mt-2">
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs px-3 py-1 rounded font-medium transition-opacity hover:opacity-80"
                          style={{ background: 'var(--text-accent)', color: 'var(--bg-primary)' }}
                        >
                          Live Demo
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs px-3 py-1 rounded font-medium transition-opacity hover:opacity-80"
                          style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Values Section */}
        {values.length > 0 && (
          <Section title="Engineering Values" id="values">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {values.map((value, i) => (
                <div 
                  key={i}
                  className="p-3 rounded-lg"
                  style={{ background: 'var(--bg-secondary)' }}
                >
                  <h3 
                    className="font-semibold text-sm capitalize mb-1"
                    style={{ color: 'var(--text-accent)' }}
                  >
                    {value.name}
                  </h3>
                  <p 
                    className="text-xs sm:text-sm"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {value.principle}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Contact Section */}
        {contact && (
          <Section title="Let's Connect" id="contact">
            <div className="text-center">
              {contact.openTo.length > 0 && (
                <div className="mb-4">
                  <p 
                    className="text-sm mb-2"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Open to:
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {contact.openTo.map((item, i) => (
                      <span 
                        key={i}
                        className="text-xs px-3 py-1 rounded-full"
                        style={{ 
                          background: 'var(--bg-secondary)',
                          color: 'var(--text-primary)'
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-4">
                <a 
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-opacity hover:opacity-80"
                  style={{ 
                    background: 'var(--text-accent)',
                    color: 'var(--bg-primary)'
                  }}
                >
                  ✉️ Email Me
                </a>
                <a 
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-opacity hover:opacity-80"
                  style={{ 
                    background: 'var(--bg-secondary)',
                    color: 'var(--text-primary)'
                  }}
                >
                  LinkedIn
                </a>
                <a 
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-opacity hover:opacity-80"
                  style={{ 
                    background: 'var(--bg-secondary)',
                    color: 'var(--text-primary)'
                  }}
                >
                  GitHub
                </a>
              </div>
              {contact.signoff && (
                <p 
                  className="italic text-sm"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {contact.signoff}
                </p>
              )}
            </div>
          </Section>
        )}

        {/* Footer */}
        <footer 
          className="mt-8 pt-6 text-center text-xs border-t"
          style={{ 
            borderColor: 'var(--border-color)',
            color: 'var(--text-muted)'
          }}
        >
          <p>Built with Next.js • View in IDE mode for the full experience</p>
        </footer>
      </div>
    </div>
  );
}

function Section({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) {
  return (
    <section className="mb-8 sm:mb-10" id={id}>
      <h2 
        className="text-lg sm:text-xl font-bold mb-4 pb-2 border-b"
        style={{ 
          color: 'var(--text-primary)',
          borderColor: 'var(--border-color)'
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

function SkillGroup({ title, skills }: { title: string; skills: string[] }) {
  if (skills.length === 0) return null;
  
  return (
    <div>
      <h3 
        className="text-xs sm:text-sm font-semibold mb-2"
        style={{ color: 'var(--text-accent)' }}
      >
        {title}
      </h3>
      <div className="flex flex-wrap gap-1.5">
        {skills.map((skill, i) => (
          <span 
            key={i}
            className="text-xs px-2 py-1 rounded"
            style={{ 
              background: 'var(--bg-secondary)',
              color: 'var(--text-primary)'
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
