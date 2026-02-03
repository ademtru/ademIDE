/**
 * Portfolio content represented as TypeScript file strings.
 * Each file maps to a portfolio section.
 */

export interface FileNode {
    name: string;
    path: string;
    type: "file" | "folder";
    children?: FileNode[];
    content?: string;
}

export const portfolioFiles: FileNode[] = [
    {
        name: "about.ts",
        path: "/portfolio/about.ts",
        type: "file",
        content: `/**
 * About Me
 *
 * Analytical and adaptive Full Stack Software Engineer with
 * strong experience in startups, enterprise consulting,
 * and performance-critical systems.
 */

export class About {
  readonly name = 'Adem Truong';
  readonly role = 'Full Stack Software Engineer';
  readonly location = 'Melbourne, Australia';

  readonly background = {
    education: 'Bachelor of Software Engineering (RMIT University)',
    experience: '3+ years across startups, enterprise, and consulting',
    focus: 'Scalable systems, AI integration, and developer productivity',
  };

    readonly interests = [
    'developer tooling',
    'AI-assisted workflows',
    'human-in-the-loop AI',
    'system architecture',
    'performance optimisation',
    'clear documentation',
  ];

  /**
   * I actively advocate for AI tools in engineering —
   * not as a replacement for thinking, but as a force multiplier.
   * 
   * I spend a lot of time refining, validating, and correcting
   * AI-generated output so it’s production-grade, accurate,
   * and aligned with real user and business needs.
   */
  readonly philosophy = 'Use AI aggressively, validate relentlessly';

}

export default new About();
`,
    },
    {
        name: "skills.ts",
        path: "/portfolio/skills.ts",
        type: "file",
        content: `/**
 * Technical Skills
 *
 * Broad full-stack skillset with depth in
 * JavaScript/TypeScript, AI integration, and cloud platforms.
 */

export const languages = [
  'TypeScript',
  'JavaScript',
  'Python',
  'Java',
  'C++',
  'SQL',
  'PHP',
] as const;

export const frontend = [
  'React',
  'Flutter',
  'Next.js',
  'HTML/CSS',
  'Vue.js',
  'React Native',
  ] as const;

export const backend = [
  'Node.js',
  'Express',
  'Spring Boot',
  'REST APIs',
  'GraphQL',
] as const;

export const databasesAndCloud = [
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'Firebase',
  'AWS',
  'Azure',
  'GCP',
  'Docker',
  'Kubernetes',
] as const;

export const aiAndData = [
  'Machine Learning',
  'Deep Learning',
  'Computer Vision',
  'CNNs & RNNs',
  'keras',
  'TensorFlow',
  'PyTorch',
  'OpenAI API',
  'Algorithms & Data Structures',
  'NLP',
] as const;

export const tooling = [
  'Git',
  'GitHub',
  'CI/CD',
  'DevOps',
  'Jest',
  'Agile / Scrum',
  'GitHub Copilot',
  'ChatGPT',
  'Claude Code',
] as const;

export const learning = [
  'Advanced system design',
  'Scalable AI architectures',
  'High-performance computing',
] as const;
`,
    },
    {
        name: "experience.ts",
        path: "/portfolio/experience.ts",
        type: "file",
        content: `/**
 * Work Experience
 *
 * A mix of enterprise consulting, startup engineering,
 * and contract performance optimisation work.
 */

interface Role {
  company: string;
  title: string;
  period: string;
  location: string;
  highlights: string[];
}

export const experience: Role[] = [
  {
    company: 'IBM',
    title: 'Associate Consultant (SAP HANA Basis)',
    period: 'Jun 2025 — Present',
    location: 'Melbourne, AU',
    highlights: [
      'Worked on Department of Defence project',
      'Built Python automation for sensitive data redaction workflows',
      'Maintained and triaged operational systems',
      'Completed 10+ certifications across AI, Cloud, ML, and Agile',
    ],
  },
  {
    company: 'Deckle',
    title: 'Full Stack Software Engineer',
    period: 'Dec 2024 — Present',
    location: 'Melbourne, AU',
    highlights: [
      'Architected scalable full-stack systems',
      'Improved user retention by 15% through system improvements',
      'Built AI Tasks Generator using OpenAI API (300% efficiency gain)',
      'Worked across Node.js, Firebase, GCP, and Flutter',
    ],
  },
  {
    company: 'Sideline',
    title: 'Software Engineer (Contract)',
    period: 'Apr 2025 — Jun 2025',
    location: 'Melbourne, AU',
    highlights: [
      'Optimised algorithms reducing runtime from 30s to 8s (73%)',
      'Enhanced Outlook add-in change tracking logic',
      'Redesigned system architecture for maintainability',
      'Built TypeScript/Node.js integrations with Microsoft APIs',
    ],
  },
  {
    company: 'Cadre Capital Partners',
    title: 'IT Developer Associate',
    period: 'Jan 2023 — Dec 2024',
    location: 'Melbourne, AU',
    highlights: [
      'Built in-house systems using Node.js, MySQL, and GCP',
      'Optimised complex SQL queries for reporting and business intelligence',
      'Led process improvements through technology',
      'Developed complex queries for business intelligence',
      'Contributed to strategic IT planning and growth',
    ],
  },
];

export const theme =
  'Strong engineering blends performance, clarity, and business impact';
`,
    },
    {
        name: "projects",
        path: "/portfolio/projects",
        type: "folder",
        children: [
            {
                name: "aiTasksGenerator.ts",
                path: "/portfolio/projects/aiTasksGenerator.ts",
                type: "file",
                content: `/**
 * Project: AI Tasks Generator
 *
 * An internal AI-powered feature to automate task creation
 * and reduce operational overhead.
 */

export const aiTasksGenerator = {
  name: 'AI Tasks Generator',
  status: 'Production',
  year: 2025,

  problem: 'Manual task creation slowed teams and introduced errors',

  solution:
    'Integrated OpenAI API to generate structured tasks automatically',

  stack: [
    'TypeScript',
    'Node.js',
    'OpenAI API',
    'Firebase',
    'GCP',
  ],

  results: {
    efficiency: '300% improvement',
    adoption: 'Used across internal teams',
  },

  lesson:
    'AI delivers real value when embedded directly into workflows',
};
`,
            },
            {
                name: "trafficSignClassification.ts",
                path: "/portfolio/projects/trafficSignClassification.ts",
                type: "file",
                content: `/**
 * Project: Traffic Sign Classification (CNN)
 *
 * A computer vision project implementing and iterating on
 * convolutional neural networks to classify traffic sign
 * shapes with strong generalisation performance.
 */

export const trafficSignClassification = {
  name: 'Traffic Sign Classification',
  domain: 'Computer Vision / Machine Learning',
  status: 'Completed',
  year: 2024,

  /**
   * Problem
   *
   * Automatically classify traffic sign shapes from images
   * under varying conditions while minimising overfitting
   * on a relatively small dataset.
   */
  problem:
    'Reliable image classification with limited data and high overfitting risk',

  /**
   * Dataset
   */
  data: {
    totalImages: 3699,
    training: 2961,
    validation: 738,
    inputShape: '28×28×3 (RGB)',
    classes: ['diamond', 'hexagon', 'round', 'square', 'triangle'],
  },

  /**
   * Model Architecture Evolution
   *
   * Iteratively refined CNN architectures to improve
   * generalisation and reduce overfitting.
   */
  architecture: {
    baseModel: {
      description: 'VGG-inspired CNN',
      details: [
        '3 convolutional blocks (16 → 32 → 64 filters)',
        '3×3 convolution kernels',
        'MaxPooling layers',
      ],
      training: '25 epochs',
    },

    regularisedModel: {
      improvements: [
        'L2 weight regularisation (λ = 0.001)',
        '50% dropout layer',
      ],
      outcome: 'Significantly reduced overfitting',
      training: '20 epochs',
    },

    finalModel: {
      optimisation: 'Kernel size tuning',
      changes: ['2×2 convolution kernels'],
      outcome: 'Best generalisation performance',
    },
  },

  /**
   * Results
   */
  results: {
    testAccuracy: '70.83% on custom test set',
    generalisation: 'Improved stability across validation and test data',
  },

  /**
   * Technical Stack
   */
  stack: [
    'Python',
    'TensorFlow',
    'Keras',
    'NumPy',
    'Pandas',
    'Matplotlib',
  ],

  /**
   * Key Skills Demonstrated
   */
  skills: [
    'CNN architecture design',
    'Overfitting prevention (dropout, L2 regularisation)',
    'Hyperparameter tuning',
    'Data preprocessing and augmentation',
    'Model evaluation and visualisation',
  ],

  /**
   * Takeaway
   *
   * Small architectural and regularisation choices
   * often matter more than adding complexity.
   */
  lesson:
    'Generalisation comes from discipline, not deeper networks',
};
`,
            },
            {
                name: "outlookChangeTracking.ts",
                path: "/portfolio/projects/outlookChangeTracking.ts",
                type: "file",
                content: `/**
 * Project: Outlook Change Tracking Optimisation
 *
 * Performance-critical system for detecting and tracking
 * changes in Outlook add-ins.
 */

export const outlookChangeTracking = {
  name: 'Outlook Change Tracking',
  status: 'Contract',
  year: 2025,

  problem: 'Change detection algorithms were slow and expensive',

  solution:
    'Redesigned algorithms and system architecture for efficiency',

  stack: [
    'TypeScript',
    'Node.js',
    'Microsoft Outlook API',
  ],

  results: {
    performance: '73% reduction in compute time',
    maintainability: 'Cleaner, more modular architecture',
  },

  lesson:
    'Algorithmic improvements often beat infrastructure scaling',
};
`,
            },
            {
                name: "internalTooling.ts",
                path: "/portfolio/projects/internalTooling.ts",
                type: "file",
                content: `/**
 * Project: Internal Developer Tooling
 *
 * Tools built to improve productivity, onboarding,
 * and system reliability.
 */

export const internalTooling = {
  name: 'Internal Developer Tools',
  status: 'Ongoing',
  year: 2023,

  philosophy: 'Time invested in tooling must compound',

  tools: [
    {
      name: 'Automation Scripts',
      impact: 'Reduced manual operational work',
    },
    {
      name: 'CI/CD Improvements',
      impact: 'Faster, safer deployments',
    },
    {
      name: 'Developer Onboarding',
      impact: 'New engineers productive faster',
    },
  ],

  lesson:
    'The best tooling quietly removes friction',
};
`,
            },
        ],
    },
    {
        name: "values.ts",
        path: "/portfolio/values.ts",
        type: "file",
        content: `/**
 * Engineering Values
 *
 * Principles shaped by startups, enterprise,
 * and performance-critical systems.
 */

export const values = {
  clarity: {
    principle: 'Readable systems scale better',
    practice: 'Prefer explicit, boring solutions',
  },
  performance: {
    principle: 'Efficiency is a feature',
    practice: 'Measure, optimise, then scale',
  },
  ownership: {
    principle: 'Build for the team, not the ego',
    practice: 'Write code others can safely extend',
  },
  feedback: {
    principle: 'Ship, learn, iterate',
    practice: 'Small changes, fast feedback loops',
  },
  documentation: {
    principle: 'Knowledge should outlive people',
    practice: 'Document decisions, not just APIs',
  },
  aiJudgement: {
    principle: 'AI is a tool, not an authority',
    practice:
      'Use AI to accelerate work, then rigorously review, refine, and correct outputs before shipping',
  },

};

export type Value = keyof typeof values;
`,
    },
    {
        name: "contact.ts",
        path: "/portfolio/contact.ts",
        type: "file",
        content: `/**
 * Contact
 *
 * Best ways to reach me.
 */

export const contact = {
  email: 'ademtruong@gmail.com',
  github: 'https://github.com/ademtru',
  linkedin: 'https://linkedin.com/in/ademtruong',
  location: 'Melbourne, Australia',

  preferred: 'email',

  openTo: [
    'Full stack engineering roles',
    'Startup opportunities',
    'AI-driven product work',
    'Challenging technical problems',
  ],

  notLookingFor: [
    'Unpaid work',
    'Low-impact projects',
  ],

  responseTime: '2–5 business days',
};

export const signoff =
  'Thanks for reading — let's build something meaningful.';
`,
    },
    {
        name: "git-history.log",
        path: "/portfolio/git-history.log",
        type: "file",
        content: "__COMPONENT__:GitHistory",
    },
];

/**
 * Flatten the file tree for easy lookup
 */
export function getAllFiles(nodes: FileNode[]): FileNode[] {
    const files: FileNode[] = [];

    function traverse(nodeList: FileNode[]) {
        for (const node of nodeList) {
            if (node.type === "file") {
                files.push(node);
            }
            if (node.children) {
                traverse(node.children);
            }
        }
    }

    traverse(nodes);
    return files;
}

/**
 * Find a file by path
 */
export function findFile(path: string): FileNode | undefined {
    const allFiles = getAllFiles(portfolioFiles);
    return allFiles.find((f) => f.path === path);
}

/**
 * Default file to show on load
 */
export const defaultFilePath = "/portfolio/about.ts";
