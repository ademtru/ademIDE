/**
 * Language translations for portfolio content
 * Maps file paths to their language-specific versions
 */

import { SupportedLanguage } from "./portfolio-content";

export const translations: Record<
    string,
    Partial<Record<SupportedLanguage, string>>
> = {
    "/portfolio/about.ts": {
        python: `"""
About Me

Analytical and adaptive Full Stack Software Engineer with
strong experience in startups, enterprise consulting,
and performance-critical systems.
"""

class About:
    def __init__(self):
        self.name = 'Adem Truong'
        self.role = 'Full Stack Software Engineer'
        self.location = 'Melbourne, Australia'
        
        self.background = {
            'education': 'Bachelor of Software Engineering (RMIT University)',
            'experience': '3+ years across startups, enterprise, and consulting',
            'focus': 'Scalable systems, AI integration, and developer productivity'
        }
        
        self.interests = [
            'developer tooling',
            'AI-assisted workflows',
            'human-in-the-loop AI',
            'system architecture',
            'performance optimisation',
            'clear documentation'
        ]
        
        # I actively advocate for AI tools in engineering —
        # not as a replacement for thinking, but as a force multiplier.
        # 
        # I spend a lot of time refining, validating, and correcting
        # AI-generated output so it's production-grade, accurate,
        # and aligned with real user and business needs.
        self.philosophy = 'Use AI aggressively, validate relentlessly'


# Create singleton instance
about = About()
`,
        javascript: `/**
 * About Me
 *
 * Analytical and adaptive Full Stack Software Engineer with
 * strong experience in startups, enterprise consulting,
 * and performance-critical systems.
 */

class About {
  constructor() {
    this.name = 'Adem Truong';
    this.role = 'Full Stack Software Engineer';
    this.location = 'Melbourne, Australia';

    this.background = {
      education: 'Bachelor of Software Engineering (RMIT University)',
      experience: '3+ years across startups, enterprise, and consulting',
      focus: 'Scalable systems, AI integration, and developer productivity',
    };

    this.interests = [
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
     * AI-generated output so it's production-grade, accurate,
     * and aligned with real user and business needs.
     */
    this.philosophy = 'Use AI aggressively, validate relentlessly';
  }
}

export default new About();
`,
        cpp: `/**
 * About Me
 *
 * Analytical and adaptive Full Stack Software Engineer with
 * strong experience in startups, enterprise consulting,
 * and performance-critical systems.
 */

#include <string>
#include <vector>
#include <map>

class About {
public:
    const std::string name = "Adem Truong";
    const std::string role = "Full Stack Software Engineer";
    const std::string location = "Melbourne, Australia";
    
    struct Background {
        std::string education = "Bachelor of Software Engineering (RMIT University)";
        std::string experience = "3+ years across startups, enterprise, and consulting";
        std::string focus = "Scalable systems, AI integration, and developer productivity";
    };
    
    const Background background;
    
    const std::vector<std::string> interests = {
        "developer tooling",
        "AI-assisted workflows",
        "human-in-the-loop AI",
        "system architecture",
        "performance optimisation",
        "clear documentation"
    };
    
    /**
     * I actively advocate for AI tools in engineering —
     * not as a replacement for thinking, but as a force multiplier.
     * 
     * I spend a lot of time refining, validating, and correcting
     * AI-generated output so it's production-grade, accurate,
     * and aligned with real user and business needs.
     */
    const std::string philosophy = "Use AI aggressively, validate relentlessly";
};

// Singleton instance
static About about;
`,
        pseudocode: `/**
 * ABOUT ME
 *
 * Analytical and adaptive Full Stack Software Engineer with
 * strong experience in startups, enterprise consulting,
 * and performance-critical systems.
 */

CLASS About:
    // Personal Information
    CONST name ← "Adem Truong"
    CONST role ← "Full Stack Software Engineer"
    CONST location ← "Melbourne, Australia"
    
    // Background
    CONST background ← {
        education: "Bachelor of Software Engineering (RMIT University)",
        experience: "3+ years across startups, enterprise, and consulting",
        focus: "Scalable systems, AI integration, and developer productivity"
    }
    
    // Interests
    CONST interests ← [
        "developer tooling",
        "AI-assisted workflows",
        "human-in-the-loop AI",
        "system architecture",
        "performance optimisation",
        "clear documentation"
    ]
    
    /**
     * PHILOSOPHY
     * 
     * I actively advocate for AI tools in engineering —
     * not as a replacement for thinking, but as a force multiplier.
     * 
     * I spend a lot of time refining, validating, and correcting
     * AI-generated output so it's production-grade, accurate,
     * and aligned with real user and business needs.
     */
    CONST philosophy ← "Use AI aggressively, validate relentlessly"

END CLASS

// Create instance
about ← NEW About()
`,
    },

    "/portfolio/skills.ts": {
        python: `"""
Technical Skills

Broad full-stack skillset with depth in
JavaScript/TypeScript, AI integration, and cloud platforms.
"""

# Programming Languages
languages = [
    'TypeScript',
    'JavaScript',
    'Python',
    'Java',
    'C++',
    'SQL',
    'PHP'
]

# Frontend Technologies
frontend = [
    'React',
    'Flutter',
    'Next.js',
    'HTML/CSS',
    'Vue.js',
    'React Native'
]

# Backend Technologies
backend = [
    'Node.js',
    'Express',
    'Spring Boot',
    'REST APIs',
    'GraphQL'
]

# Databases and Cloud
databases_and_cloud = [
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'Firebase',
    'AWS',
    'Azure',
    'GCP',
    'Docker',
    'Kubernetes'
]

# AI and Data Science
ai_and_data = [
    'Machine Learning',
    'Deep Learning',
    'Computer Vision',
    'CNNs & RNNs',
    'keras',
    'TensorFlow',
    'PyTorch',
    'OpenAI API',
    'Algorithms & Data Structures',
    'NLP'
]

# Development Tools
tooling = [
    'Git',
    'GitHub',
    'CI/CD',
    'DevOps',
    'Jest',
    'Agile / Scrum',
    'GitHub Copilot',
    'ChatGPT',
    'Claude Code'
]

# Currently Learning
learning = [
    'Advanced system design',
    'Scalable AI architectures',
    'High-performance computing'
]
`,
        javascript: `/**
 * Technical Skills
 *
 * Broad full-stack skillset with depth in
 * JavaScript/TypeScript, AI integration, and cloud platforms.
 */

const languages = [
  'TypeScript',
  'JavaScript',
  'Python',
  'Java',
  'C++',
  'SQL',
  'PHP',
];

const frontend = [
  'React',
  'Flutter',
  'Next.js',
  'HTML/CSS',
  'Vue.js',
  'React Native',
];

const backend = [
  'Node.js',
  'Express',
  'Spring Boot',
  'REST APIs',
  'GraphQL',
];

const databasesAndCloud = [
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'Firebase',
  'AWS',
  'Azure',
  'GCP',
  'Docker',
  'Kubernetes',
];

const aiAndData = [
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
];

const tooling = [
  'Git',
  'GitHub',
  'CI/CD',
  'DevOps',
  'Jest',
  'Agile / Scrum',
  'GitHub Copilot',
  'ChatGPT',
  'Claude Code',
];

const learning = [
  'Advanced system design',
  'Scalable AI architectures',
  'High-performance computing',
];

export {
  languages,
  frontend,
  backend,
  databasesAndCloud,
  aiAndData,
  tooling,
  learning,
};
`,
        cpp: `/**
 * Technical Skills
 *
 * Broad full-stack skillset with depth in
 * JavaScript/TypeScript, AI integration, and cloud platforms.
 */

#include <string>
#include <vector>

namespace Skills {
    // Programming Languages
    const std::vector<std::string> languages = {
        "TypeScript",
        "JavaScript",
        "Python",
        "Java",
        "C++",
        "SQL",
        "PHP"
    };

    // Frontend Technologies
    const std::vector<std::string> frontend = {
        "React",
        "Flutter",
        "Next.js",
        "HTML/CSS",
        "Vue.js",
        "React Native"
    };

    // Backend Technologies
    const std::vector<std::string> backend = {
        "Node.js",
        "Express",
        "Spring Boot",
        "REST APIs",
        "GraphQL"
    };

    // Databases and Cloud
    const std::vector<std::string> databasesAndCloud = {
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Firebase",
        "AWS",
        "Azure",
        "GCP",
        "Docker",
        "Kubernetes"
    };

    // AI and Data Science
    const std::vector<std::string> aiAndData = {
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "CNNs & RNNs",
        "keras",
        "TensorFlow",
        "PyTorch",
        "OpenAI API",
        "Algorithms & Data Structures",
        "NLP"
    };

    // Development Tools
    const std::vector<std::string> tooling = {
        "Git",
        "GitHub",
        "CI/CD",
        "DevOps",
        "Jest",
        "Agile / Scrum",
        "GitHub Copilot",
        "ChatGPT",
        "Claude Code"
    };

    // Currently Learning
    const std::vector<std::string> learning = {
        "Advanced system design",
        "Scalable AI architectures",
        "High-performance computing"
    };
}
`,
        pseudocode: `/**
 * TECHNICAL SKILLS
 *
 * Broad full-stack skillset with depth in
 * JavaScript/TypeScript, AI integration, and cloud platforms.
 */

// Programming Languages
CONST languages ← [
    "TypeScript",
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "SQL",
    "PHP"
]

// Frontend Technologies
CONST frontend ← [
    "React",
    "Flutter",
    "Next.js",
    "HTML/CSS",
    "Vue.js",
    "React Native"
]

// Backend Technologies
CONST backend ← [
    "Node.js",
    "Express",
    "Spring Boot",
    "REST APIs",
    "GraphQL"
]

// Databases and Cloud
CONST databasesAndCloud ← [
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Firebase",
    "AWS",
    "Azure",
    "GCP",
    "Docker",
    "Kubernetes"
]

// AI and Data Science
CONST aiAndData ← [
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "CNNs & RNNs",
    "keras",
    "TensorFlow",
    "PyTorch",
    "OpenAI API",
    "Algorithms & Data Structures",
    "NLP"
]

// Development Tools
CONST tooling ← [
    "Git",
    "GitHub",
    "CI/CD",
    "DevOps",
    "Jest",
    "Agile / Scrum",
    "GitHub Copilot",
    "ChatGPT",
    "Claude Code"
]

// Currently Learning
CONST learning ← [
    "Advanced system design",
    "Scalable AI architectures",
    "High-performance computing"
]
`,
    },

    "/portfolio/projects/aiTasksGenerator.ts": {
        python: `"""
Project: AI Tasks Generator

A user-facing AI-powered feature that automates
event task creation with minimal input.
"""

ai_tasks_generator = {
    'name': 'AI Tasks Generator',
    'status': 'Production',
    'year': 2025,

    'problem': 'Users struggled to create comprehensive task lists for their events',

    'solution': 'Integrated OpenAI API to generate structured event tasks from just a few parameters',

    'stack': [
        'TypeScript',
        'Node.js',
        'OpenAI API',
        'Firebase',
        'GCP',
    ],

    'results': {
        'efficiency': '300% improvement in task creation speed',
        'adoption': 'Used by platform users for event planning',
    },

    'lesson': 'AI delivers real value when it removes friction from user workflows',
}
`,
        javascript: `/**
 * Project: AI Tasks Generator
 *
 * A user-facing AI-powered feature that automates
 * event task creation with minimal input.
 */

const aiTasksGenerator = {
  name: 'AI Tasks Generator',
  status: 'Production',
  year: 2025,

  problem: 'Users struggled to create comprehensive task lists for their events',

  solution:
    'Integrated OpenAI API to generate structured event tasks from just a few parameters',

  stack: [
    'TypeScript',
    'Node.js',
    'OpenAI API',
    'Firebase',
    'GCP',
  ],

  results: {
    efficiency: '300% improvement in task creation speed',
    adoption: 'Used by platform users for event planning',
  },

  lesson:
    'AI delivers real value when it removes friction from user workflows',
};

export default aiTasksGenerator;
`,
        cpp: `/**
 * Project: AI Tasks Generator
 *
 * A user-facing AI-powered feature that automates
 * event task creation with minimal input.
 */

#include <string>
#include <vector>
#include <map>

struct ProjectResults {
    std::string efficiency = "300% improvement in task creation speed";
    std::string adoption = "Used by platform users for event planning";
};

struct AITasksGenerator {
    const std::string name = "AI Tasks Generator";
    const std::string status = "Production";
    const int year = 2025;
    
    const std::string problem = 
        "Users struggled to create comprehensive task lists for their events";
    
    const std::string solution = 
        "Integrated OpenAI API to generate structured event tasks from just a few parameters";
    
    const std::vector<std::string> stack = {
        "TypeScript",
        "Node.js",
        "OpenAI API",
        "Firebase",
        "GCP"
    };
    
    const ProjectResults results;
    
    const std::string lesson = 
        "AI delivers real value when it removes friction from user workflows";
};

static AITasksGenerator aiTasksGenerator;
`,
        pseudocode: `/**
 * PROJECT: AI TASKS GENERATOR
 *
 * A user-facing AI-powered feature that automates
 * event task creation with minimal input.
 */

DEFINE PROJECT aiTasksGenerator:
    name ← "AI Tasks Generator"
    status ← "Production"
    year ← 2025
    
    // Challenge
    problem ← "Users struggled to create comprehensive task lists for their events"
    
    // Implementation
    solution ← "Integrated OpenAI API to generate structured event tasks from just a few parameters"
    
    // Technology Stack
    stack ← [
        "TypeScript",
        "Node.js",
        "OpenAI API",
        "Firebase",
        "GCP"
    ]
    
    // Impact Metrics
    results ← {
        efficiency: "300% improvement in task creation speed",
        adoption: "Used by platform users for event planning"
    }
    
    // Key Takeaway
    lesson ← "AI delivers real value when it removes friction from user workflows"

END PROJECT
`,
    },

    "/portfolio/experience.ts": {
        python: `"""
Work Experience

A mix of enterprise consulting, startup engineering,
and contract performance optimisation work.
"""

from typing import List, Dict

class Role:
    def __init__(self, company: str, title: str, period: str, location: str, highlights: List[str]):
        self.company = company
        self.title = title
        self.period = period
        self.location = location
        self.highlights = highlights

experience = [
    Role(
        company='IBM',
        title='Associate Consultant (SAP HANA Basis)',
        period='Jun 2025 — Present',
        location='Melbourne, AU',
        highlights=[
            'Worked on Government client with SAP systems critical to public services',
            'Built Python automation for sensitive data redaction workflows',
            'Maintained and triaged operational systems',
            'Completed 10+ certifications across AI, Cloud, ML, and Agile',
        ]
    ),
    Role(
        company='Deckle',
        title='Full Stack Software Engineer',
        period='Dec 2024 — Present',
        location='Melbourne, AU',
        highlights=[
            'Architected scalable full-stack systems',
            'Improved user retention by 15% through system improvements',
            'Built AI Tasks Generator using OpenAI API (300% efficiency gain)',
            'Worked across Node.js, Firebase, GCP, and Flutter',
        ]
    ),
    Role(
        company='Sideline',
        title='Software Engineer (Contract)',
        period='Apr 2025 — Jun 2025',
        location='Melbourne, AU',
        highlights=[
            'Optimised algorithms reducing runtime from 30s to 8s (73%)',
            'Enhanced Outlook add-in change tracking logic',
            'Redesigned system architecture for maintainability',
            'Built TypeScript/Node.js integrations with Microsoft APIs',
        ]
    ),
    Role(
        company='Cadre Capital Partners',
        title='IT Developer Associate',
        period='Jan 2023 — Dec 2024',
        location='Melbourne, AU',
        highlights=[
            'Built in-house systems using Node.js, MySQL, and GCP',
            'Optimised complex SQL queries for reporting and business intelligence',
            'Led process improvements through technology',
            'Developed complex queries for business intelligence',
            'Contributed to strategic IT planning and growth',
        ]
    ),
]

theme = 'Strong engineering blends performance, clarity, and business impact'
`,
        javascript: `/**
 * Work Experience
 *
 * A mix of enterprise consulting, startup engineering,
 * and contract performance optimisation work.
 */

class Role {
  constructor(company, title, period, location, highlights) {
    this.company = company;
    this.title = title;
    this.period = period;
    this.location = location;
    this.highlights = highlights;
  }
}

const experience = [
  new Role(
    'IBM',
    'Associate Consultant (SAP HANA Basis)',
    'Jun 2025 — Present',
    'Melbourne, AU',
    [
      'Worked on Government client with SAP systems critical to public services',
      'Built Python automation for sensitive data redaction workflows',
      'Maintained and triaged operational systems',
      'Completed 10+ certifications across AI, Cloud, ML, and Agile',
    ]
  ),
  new Role(
    'Deckle',
    'Full Stack Software Engineer',
    'Dec 2024 — Present',
    'Melbourne, AU',
    [
      'Architected scalable full-stack systems',
      'Improved user retention by 15% through system improvements',
      'Built AI Tasks Generator using OpenAI API (300% efficiency gain)',
      'Worked across Node.js, Firebase, GCP, and Flutter',
    ]
  ),
  new Role(
    'Sideline',
    'Software Engineer (Contract)',
    'Apr 2025 — Jun 2025',
    'Melbourne, AU',
    [
      'Optimised algorithms reducing runtime from 30s to 8s (73%)',
      'Enhanced Outlook add-in change tracking logic',
      'Redesigned system architecture for maintainability',
      'Built TypeScript/Node.js integrations with Microsoft APIs',
    ]
  ),
  new Role(
    'Cadre Capital Partners',
    'IT Developer Associate',
    'Jan 2023 — Dec 2024',
    'Melbourne, AU',
    [
      'Built in-house systems using Node.js, MySQL, and GCP',
      'Optimised complex SQL queries for reporting and business intelligence',
      'Led process improvements through technology',
      'Developed complex queries for business intelligence',
      'Contributed to strategic IT planning and growth',
    ]
  ),
];

const theme = 'Strong engineering blends performance, clarity, and business impact';

export { experience, theme };
`,
        cpp: `/**
 * Work Experience
 *
 * A mix of enterprise consulting, startup engineering,
 * and contract performance optimisation work.
 */

#include <string>
#include <vector>

struct Role {
    std::string company;
    std::string title;
    std::string period;
    std::string location;
    std::vector<std::string> highlights;
};

const std::vector<Role> experience = {
    {
        "IBM",
        "Associate Consultant (SAP HANA Basis)",
        "Jun 2025 — Present",
        "Melbourne, AU",
        {
            "Worked on Government client with SAP systems critical to public services",
            "Built Python automation for sensitive data redaction workflows",
            "Maintained and triaged operational systems",
            "Completed 10+ certifications across AI, Cloud, ML, and Agile"
        }
    },
    {
        "Deckle",
        "Full Stack Software Engineer",
        "Dec 2024 — Present",
        "Melbourne, AU",
        {
            "Architected scalable full-stack systems",
            "Improved user retention by 15% through system improvements",
            "Built AI Tasks Generator using OpenAI API (300% efficiency gain)",
            "Worked across Node.js, Firebase, GCP, and Flutter"
        }
    },
    {
        "Sideline",
        "Software Engineer (Contract)",
        "Apr 2025 — Jun 2025",
        "Melbourne, AU",
        {
            "Optimised algorithms reducing runtime from 30s to 8s (73%)",
            "Enhanced Outlook add-in change tracking logic",
            "Redesigned system architecture for maintainability",
            "Built TypeScript/Node.js integrations with Microsoft APIs"
        }
    },
    {
        "Cadre Capital Partners",
        "IT Developer Associate",
        "Jan 2023 — Dec 2024",
        "Melbourne, AU",
        {
            "Built in-house systems using Node.js, MySQL, and GCP",
            "Optimised complex SQL queries for reporting and business intelligence",
            "Led process improvements through technology",
            "Developed complex queries for business intelligence",
            "Contributed to strategic IT planning and growth"
        }
    }
};

const std::string theme = "Strong engineering blends performance, clarity, and business impact";
`,
        pseudocode: `/**
 * WORK EXPERIENCE
 *
 * A mix of enterprise consulting, startup engineering,
 * and contract performance optimisation work.
 */

STRUCTURE Role:
    company: STRING
    title: STRING
    period: STRING
    location: STRING
    highlights: LIST of STRING
END STRUCTURE

CONST experience ← [
    Role {
        company: "IBM",
        title: "Associate Consultant (SAP HANA Basis)",
        period: "Jun 2025 — Present",
        location: "Melbourne, AU",
        highlights: [
            "Worked on Government client with SAP systems critical to public services",
            "Built Python automation for sensitive data redaction workflows",
            "Maintained and triaged operational systems",
            "Completed 10+ certifications across AI, Cloud, ML, and Agile"
        ]
    },
    Role {
        company: "Deckle",
        title: "Full Stack Software Engineer",
        period: "Dec 2024 — Present",
        location: "Melbourne, AU",
        highlights: [
            "Architected scalable full-stack systems",
            "Improved user retention by 15% through system improvements",
            "Built AI Tasks Generator using OpenAI API (300% efficiency gain)",
            "Worked across Node.js, Firebase, GCP, and Flutter"
        ]
    },
    Role {
        company: "Sideline",
        title: "Software Engineer (Contract)",
        period: "Apr 2025 — Jun 2025",
        location: "Melbourne, AU",
        highlights: [
            "Optimised algorithms reducing runtime from 30s to 8s (73%)",
            "Enhanced Outlook add-in change tracking logic",
            "Redesigned system architecture for maintainability",
            "Built TypeScript/Node.js integrations with Microsoft APIs"
        ]
    },
    Role {
        company: "Cadre Capital Partners",
        title: "IT Developer Associate",
        period: "Jan 2023 — Dec 2024",
        location: "Melbourne, AU",
        highlights: [
            "Built in-house systems using Node.js, MySQL, and GCP",
            "Optimised complex SQL queries for reporting and business intelligence",
            "Led process improvements through technology",
            "Developed complex queries for business intelligence",
            "Contributed to strategic IT planning and growth"
        ]
    }
]

CONST theme ← "Strong engineering blends performance, clarity, and business impact"
`,
    },

    "/portfolio/projects/trafficSignClassification.ts": {
        python: `"""
Project: Traffic Sign Classification (CNN)

A computer vision project implementing and iterating on
convolutional neural networks to classify traffic sign
shapes with strong generalisation performance.
"""

traffic_sign_classification = {
    'name': 'Traffic Sign Classification',
    'domain': 'Computer Vision / Machine Learning',
    'status': 'Completed',
    'year': 2024,

    # Problem
    'problem': 'Reliable image classification with limited data and high overfitting risk',

    # Dataset
    'data': {
        'totalImages': 3699,
        'training': 2961,
        'validation': 738,
        'inputShape': '28×28×3 (RGB)',
        'classes': ['diamond', 'hexagon', 'round', 'square', 'triangle'],
    },

    # Model Architecture Evolution
    'architecture': {
        'baseModel': {
            'description': 'VGG-inspired CNN',
            'details': [
                '3 convolutional blocks (16 → 32 → 64 filters)',
                '3×3 convolution kernels',
                'MaxPooling layers',
            ],
            'training': '25 epochs',
        },
        'regularisedModel': {
            'improvements': [
                'L2 weight regularisation (λ = 0.001)',
                '50% dropout layer',
            ],
            'outcome': 'Significantly reduced overfitting',
            'training': '20 epochs',
        },
        'finalModel': {
            'optimisation': 'Kernel size tuning',
            'changes': ['2×2 convolution kernels'],
            'outcome': 'Best generalisation performance',
        },
    },

    # Results
    'results': {
        'testAccuracy': '70.83% on custom test set',
        'generalisation': 'Improved stability across validation and test data',
    },

    # Technical Stack
    'stack': [
        'Python',
        'TensorFlow',
        'Keras',
        'NumPy',
        'Pandas',
        'Matplotlib',
    ],

    # Key Skills Demonstrated
    'skills': [
        'CNN architecture design',
        'Overfitting prevention (dropout, L2 regularisation)',
        'Hyperparameter tuning',
        'Data preprocessing and augmentation',
        'Model evaluation and visualisation',
    ],

    # Takeaway
    'lesson': 'Generalisation comes from discipline, not deeper networks',
}
`,
        javascript: `/**
 * Project: Traffic Sign Classification (CNN)
 *
 * A computer vision project implementing and iterating on
 * convolutional neural networks to classify traffic sign
 * shapes with strong generalisation performance.
 */

const trafficSignClassification = {
  name: 'Traffic Sign Classification',
  domain: 'Computer Vision / Machine Learning',
  status: 'Completed',
  year: 2024,

  problem: 'Reliable image classification with limited data and high overfitting risk',

  data: {
    totalImages: 3699,
    training: 2961,
    validation: 738,
    inputShape: '28×28×3 (RGB)',
    classes: ['diamond', 'hexagon', 'round', 'square', 'triangle'],
  },

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

  results: {
    testAccuracy: '70.83% on custom test set',
    generalisation: 'Improved stability across validation and test data',
  },

  stack: [
    'Python',
    'TensorFlow',
    'Keras',
    'NumPy',
    'Pandas',
    'Matplotlib',
  ],

  skills: [
    'CNN architecture design',
    'Overfitting prevention (dropout, L2 regularisation)',
    'Hyperparameter tuning',
    'Data preprocessing and augmentation',
    'Model evaluation and visualisation',
  ],

  lesson: 'Generalisation comes from discipline, not deeper networks',
};

export default trafficSignClassification;
`,
        cpp: `/**
 * Project: Traffic Sign Classification (CNN)
 *
 * A computer vision project implementing and iterating on
 * convolutional neural networks to classify traffic sign
 * shapes with strong generalisation performance.
 */

#include <string>
#include <vector>
#include <map>

struct Dataset {
    int totalImages = 3699;
    int training = 2961;
    int validation = 738;
    std::string inputShape = "28×28×3 (RGB)";
    std::vector<std::string> classes = {"diamond", "hexagon", "round", "square", "triangle"};
};

struct ModelDetails {
    std::string description;
    std::vector<std::string> details;
    std::vector<std::string> improvements;
    std::vector<std::string> changes;
    std::string training;
    std::string outcome;
    std::string optimisation;
};

struct TrafficSignClassification {
    const std::string name = "Traffic Sign Classification";
    const std::string domain = "Computer Vision / Machine Learning";
    const std::string status = "Completed";
    const int year = 2024;
    
    const std::string problem = 
        "Reliable image classification with limited data and high overfitting risk";
    
    const Dataset data;
    
    const std::map<std::string, ModelDetails> architecture = {
        {"baseModel", {
            "VGG-inspired CNN",
            {
                "3 convolutional blocks (16 → 32 → 64 filters)",
                "3×3 convolution kernels",
                "MaxPooling layers"
            },
            {},
            {},
            "25 epochs"
        }},
        {"regularisedModel", {
            "",
            {},
            {
                "L2 weight regularisation (λ = 0.001)",
                "50% dropout layer"
            },
            {},
            "20 epochs",
            "Significantly reduced overfitting"
        }},
        {"finalModel", {
            "",
            {},
            {},
            {"2×2 convolution kernels"},
            "",
            "Best generalisation performance",
            "Kernel size tuning"
        }}
    };
    
    const std::map<std::string, std::string> results = {
        {"testAccuracy", "70.83% on custom test set"},
        {"generalisation", "Improved stability across validation and test data"}
    };
    
    const std::vector<std::string> stack = {
        "Python", "TensorFlow", "Keras", "NumPy", "Pandas", "Matplotlib"
    };
    
    const std::vector<std::string> skills = {
        "CNN architecture design",
        "Overfitting prevention (dropout, L2 regularisation)",
        "Hyperparameter tuning",
        "Data preprocessing and augmentation",
        "Model evaluation and visualisation"
    };
    
    const std::string lesson = "Generalisation comes from discipline, not deeper networks";
};

static TrafficSignClassification trafficSignClassification;
`,
        pseudocode: `/**
 * PROJECT: TRAFFIC SIGN CLASSIFICATION (CNN)
 *
 * A computer vision project implementing and iterating on
 * convolutional neural networks to classify traffic sign
 * shapes with strong generalisation performance.
 */

DEFINE PROJECT trafficSignClassification:
    name ← "Traffic Sign Classification"
    domain ← "Computer Vision / Machine Learning"
    status ← "Completed"
    year ← 2024
    
    // Problem Statement
    problem ← "Reliable image classification with limited data and high overfitting risk"
    
    // Dataset Information
    data ← {
        totalImages: 3699,
        training: 2961,
        validation: 738,
        inputShape: "28×28×3 (RGB)",
        classes: ["diamond", "hexagon", "round", "square", "triangle"]
    }
    
    // Model Architecture Evolution
    architecture ← {
        baseModel: {
            description: "VGG-inspired CNN",
            details: [
                "3 convolutional blocks (16 → 32 → 64 filters)",
                "3×3 convolution kernels",
                "MaxPooling layers"
            ],
            training: "25 epochs"
        },
        regularisedModel: {
            improvements: [
                "L2 weight regularisation (λ = 0.001)",
                "50% dropout layer"
            ],
            outcome: "Significantly reduced overfitting",
            training: "20 epochs"
        },
        finalModel: {
            optimisation: "Kernel size tuning",
            changes: ["2×2 convolution kernels"],
            outcome: "Best generalisation performance"
        }
    }
    
    // Results
    results ← {
        testAccuracy: "70.83% on custom test set",
        generalisation: "Improved stability across validation and test data"
    }
    
    // Technology Stack
    stack ← [
        "Python",
        "TensorFlow",
        "Keras",
        "NumPy",
        "Pandas",
        "Matplotlib"
    ]
    
    // Key Skills
    skills ← [
        "CNN architecture design",
        "Overfitting prevention (dropout, L2 regularisation)",
        "Hyperparameter tuning",
        "Data preprocessing and augmentation",
        "Model evaluation and visualisation"
    ]
    
    // Key Takeaway
    lesson ← "Generalisation comes from discipline, not deeper networks"

END PROJECT
`,
    },

    "/portfolio/projects/outlookChangeTracking.ts": {
        python: `"""
Project: Outlook Change Tracking Optimisation

Performance-critical system for detecting and tracking
changes in Outlook add-ins.
"""

outlook_change_tracking = {
    'name': 'Outlook Change Tracking',
    'status': 'Contract',
    'year': 2025,

    'problem': 'Change detection algorithms were slow and expensive',

    'solution': 'Redesigned algorithms and system architecture for efficiency',

    'stack': [
        'TypeScript',
        'Node.js',
        'Microsoft Outlook API',
    ],

    'results': {
        'performance': '73% reduction in compute time',
        'maintainability': 'Cleaner, more modular architecture',
    },

    'lesson': 'Algorithmic improvements often beat infrastructure scaling',
}
`,
        javascript: `/**
 * Project: Outlook Change Tracking Optimisation
 *
 * Performance-critical system for detecting and tracking
 * changes in Outlook add-ins.
 */

const outlookChangeTracking = {
  name: 'Outlook Change Tracking',
  status: 'Contract',
  year: 2025,

  problem: 'Change detection algorithms were slow and expensive',

  solution: 'Redesigned algorithms and system architecture for efficiency',

  stack: [
    'TypeScript',
    'Node.js',
    'Microsoft Outlook API',
  ],

  results: {
    performance: '73% reduction in compute time',
    maintainability: 'Cleaner, more modular architecture',
  },

  lesson: 'Algorithmic improvements often beat infrastructure scaling',
};

export default outlookChangeTracking;
`,
        cpp: `/**
 * Project: Outlook Change Tracking Optimisation
 *
 * Performance-critical system for detecting and tracking
 * changes in Outlook add-ins.
 */

#include <string>
#include <vector>
#include <map>

struct OutlookChangeTracking {
    const std::string name = "Outlook Change Tracking";
    const std::string status = "Contract";
    const int year = 2025;
    
    const std::string problem = "Change detection algorithms were slow and expensive";
    
    const std::string solution = "Redesigned algorithms and system architecture for efficiency";
    
    const std::vector<std::string> stack = {
        "TypeScript",
        "Node.js",
        "Microsoft Outlook API"
    };
    
    const std::map<std::string, std::string> results = {
        {"performance", "73% reduction in compute time"},
        {"maintainability", "Cleaner, more modular architecture"}
    };
    
    const std::string lesson = "Algorithmic improvements often beat infrastructure scaling";
};

static OutlookChangeTracking outlookChangeTracking;
`,
        pseudocode: `/**
 * PROJECT: OUTLOOK CHANGE TRACKING OPTIMISATION
 *
 * Performance-critical system for detecting and tracking
 * changes in Outlook add-ins.
 */

DEFINE PROJECT outlookChangeTracking:
    name ← "Outlook Change Tracking"
    status ← "Contract"
    year ← 2025
    
    // Challenge
    problem ← "Change detection algorithms were slow and expensive"
    
    // Implementation
    solution ← "Redesigned algorithms and system architecture for efficiency"
    
    // Technology Stack
    stack ← [
        "TypeScript",
        "Node.js",
        "Microsoft Outlook API"
    ]
    
    // Impact Metrics
    results ← {
        performance: "73% reduction in compute time",
        maintainability: "Cleaner, more modular architecture"
    }
    
    // Key Takeaway
    lesson ← "Algorithmic improvements often beat infrastructure scaling"

END PROJECT
`,
    },

    "/portfolio/projects/calmErrors.ts": {
        python: `"""
Project: CalmErrors

A developer-first VS Code extension that makes
error messages less stressful and more actionable.
"""

calm_errors = {
    'name': 'CalmErrors',
    'status': 'Released',
    'year': 2026,

    'problem': 'Cryptic compiler errors cause frustration and slow debugging',

    'solution': 'VS Code extension that transforms errors into calm, clear explanations with practical next steps',

    'stack': [
        'TypeScript',
        'VS Code Extension API',
    ],

    'results': {
        'dx': 'Reduced cognitive load when debugging',
        'adoption': 'Pending publication on VS Code Marketplace',
    },

    'lesson': 'Developer experience improvements compound across every debugging session',
}
`,
        javascript: `/**
 * Project: CalmErrors
 *
 * A developer-first VS Code extension that makes
 * error messages less stressful and more actionable.
 */

const calmErrors = {
  name: 'CalmErrors',
  status: 'Released',
  year: 2026,

  problem: 'Cryptic compiler errors cause frustration and slow debugging',

  solution:
    'VS Code extension that transforms errors into calm, clear explanations with practical next steps',

  stack: [
    'TypeScript',
    'VS Code Extension API',
  ],

  results: {
    dx: 'Reduced cognitive load when debugging',
    adoption: 'Pending publication on VS Code Marketplace',
  },

  lesson:
    'Developer experience improvements compound across every debugging session',
};

export default calmErrors;
`,
        cpp: `/**
 * Project: CalmErrors
 *
 * A developer-first VS Code extension that makes
 * error messages less stressful and more actionable.
 */

#include <string>
#include <vector>
#include <map>

struct CalmErrors {
    const std::string name = "CalmErrors";
    const std::string status = "Released";
    const int year = 2026;
    
    const std::string problem = "Cryptic compiler errors cause frustration and slow debugging";
    
    const std::string solution = 
        "VS Code extension that transforms errors into calm, clear explanations with practical next steps";
    
    const std::vector<std::string> stack = {
        "TypeScript",
        "VS Code Extension API"
    };
    
    const std::map<std::string, std::string> results = {
        {"dx", "Reduced cognitive load when debugging"},
        {"adoption", "Pending publication on VS Code Marketplace"}
    };
    
    const std::string lesson = "Developer experience improvements compound across every debugging session";
};

static CalmErrors calmErrors;
`,
        pseudocode: `/**
 * PROJECT: CALMERRORS
 *
 * A developer-first VS Code extension that makes
 * error messages less stressful and more actionable.
 */

DEFINE PROJECT calmErrors:
    name ← "CalmErrors"
    status ← "Released"
    year ← 2026
    
    // Challenge
    problem ← "Cryptic compiler errors cause frustration and slow debugging"
    
    // Implementation
    solution ← "VS Code extension that transforms errors into calm, clear explanations with practical next steps"
    
    // Technology Stack
    stack ← [
        "TypeScript",
        "VS Code Extension API"
    ]
    
    // Impact Metrics
    results ← {
        dx: "Reduced cognitive load when debugging",
        adoption: "Pending publication on VS Code Marketplace"
    }
    
    // Key Takeaway
    lesson ← "Developer experience improvements compound across every debugging session"

END PROJECT
`,
    },

    "/portfolio/projects/ademIDE.ts": {
        python: `"""
Project: ademIDE

An IDE-themed portfolio website showcasing
career history and technical projects.
"""

adem_ide = {
    'name': 'ademIDE',
    'status': 'Live',
    'year': 2026,

    'problem': 'Traditional portfolios feel generic and forgettable',

    'solution': 'Built an IDE-themed portfolio with file tree navigation, syntax highlighting, and interactive git history',

    'stack': [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Shiki',
    ],

    'features': [
        'File tree navigation',
        'Syntax highlighting',
        'Recruiter mode toggle',
        'Git history timeline',
        'Dark/light themes',
    ],

    'lesson': 'The best portfolio is one that demonstrates your skills while showing them',
}
`,
        javascript: `/**
 * Project: ademIDE
 *
 * An IDE-themed portfolio website showcasing
 * career history and technical projects.
 */

const ademIDE = {
  name: 'ademIDE',
  status: 'Live',
  year: 2026,

  problem: 'Traditional portfolios feel generic and forgettable',

  solution:
    'Built an IDE-themed portfolio with file tree navigation, syntax highlighting, and interactive git history',

  stack: [
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Shiki',
  ],

  features: [
    'File tree navigation',
    'Syntax highlighting',
    'Recruiter mode toggle',
    'Git history timeline',
    'Dark/light themes',
  ],

  lesson:
    'The best portfolio is one that demonstrates your skills while showing them',
};

export default ademIDE;
`,
        cpp: `/**
 * Project: ademIDE
 *
 * An IDE-themed portfolio website showcasing
 * career history and technical projects.
 */

#include <string>
#include <vector>

struct AdemIDE {
    const std::string name = "ademIDE";
    const std::string status = "Live";
    const int year = 2026;
    
    const std::string problem = "Traditional portfolios feel generic and forgettable";
    
    const std::string solution = 
        "Built an IDE-themed portfolio with file tree navigation, syntax highlighting, and interactive git history";
    
    const std::vector<std::string> stack = {
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Shiki"
    };
    
    const std::vector<std::string> features = {
        "File tree navigation",
        "Syntax highlighting",
        "Recruiter mode toggle",
        "Git history timeline",
        "Dark/light themes"
    };
    
    const std::string lesson = "The best portfolio is one that demonstrates your skills while showing them";
};

static AdemIDE ademIDE;
`,
        pseudocode: `/**
 * PROJECT: ADEMIDE
 *
 * An IDE-themed portfolio website showcasing
 * career history and technical projects.
 */

DEFINE PROJECT ademIDE:
    name ← "ademIDE"
    status ← "Live"
    year ← 2026
    
    // Challenge
    problem ← "Traditional portfolios feel generic and forgettable"
    
    // Implementation
    solution ← "Built an IDE-themed portfolio with file tree navigation, syntax highlighting, and interactive git history"
    
    // Technology Stack
    stack ← [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Shiki"
    ]
    
    // Features
    features ← [
        "File tree navigation",
        "Syntax highlighting",
        "Recruiter mode toggle",
        "Git history timeline",
        "Dark/light themes"
    ]
    
    // Key Takeaway
    lesson ← "The best portfolio is one that demonstrates your skills while showing them"

END PROJECT
`,
    },
    "/portfolio/projects/codescope.ts": {
        python: `"""
Project: Codescope

A web app for instant codebase visualization and architecture exploration.
"""

codescope = {
    'name': 'Codescope',
    'status': 'Live',
    'year': 2026,

    'problem': 'Developers lack a fast, visual way to explore codebases and understand architecture.',

    'solution': 'Built a web app for instant codebase visualization, file tree navigation, and architecture diagrams.',

    'stack': [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Shiki',
        'React Flow',
    ],

    'features': [
        'Codebase visualization',
        'File tree navigation',
        'Architecture diagrams',
        'Syntax highlighting',
        'Live demo',
    ],

    'links': {
        'demo': 'https://codescope-beige.vercel.app/',
        'github': 'https://github.com/ademtru/codescope',
    },

    'lesson': 'Visual tools accelerate understanding and onboarding.',
}`,
        javascript: `
/**
 * Project: Codescope
 *
 * A web app for instant codebase visualization and architecture exploration.
 */

const codescope = {
    name: 'Codescope',
    status: 'Live',
    year: 2026,

    problem: 'Developers lack a fast, visual way to explore codebases and understand architecture.',

    solution:
        'Built a web app for instant codebase visualization, file tree navigation, and architecture diagrams.',

    stack: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Shiki',
        'React Flow',
    ],

    features: [
        'Codebase visualization',
        'File tree navigation',
        'Architecture diagrams',
        'Syntax highlighting',
        'Live demo',
    ],

    links: {
        demo: 'https://codescope-beige.vercel.app/',
        github: 'https://github.com/ademtru/codescope',
    },

    lesson:
        'Visual tools accelerate understanding and onboarding.',
};

export default codescope;`,
        cpp: `
/**
 * Project: Codescope
 *
 * A web app for instant codebase visualization and architecture exploration.
 */

#include <string>
#include <vector>
#include <map>

struct Codescope {
    const std::string name = "Codescope";
    const std::string status = "Live";
    const int year = 2026;

    const std::string problem = "Developers lack a fast, visual way to explore codebases and understand architecture.";

    const std::string solution = "Built a web app for instant codebase visualization, file tree navigation, and architecture diagrams.";

    const std::vector<std::string> stack = {
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Shiki",
        "React Flow"
    };

    const std::vector<std::string> features = {
        "Codebase visualization",
        "File tree navigation",
        "Architecture diagrams",
        "Syntax highlighting",
        "Live demo"
    };

    const std::map<std::string, std::string> links = {
        {"demo", "https://codescope-beige.vercel.app/"},
        {"github", "https://github.com/ademtru/codescope"}
    };

    const std::string lesson = "Visual tools accelerate understanding and onboarding.";
};

static Codescope codescope;`,
        pseudocode: `/**
* PROJECT: CODESCOPE
*
* A web app for instant codebase visualization and architecture exploration.
*/

DEFINE PROJECT codescope:
    name ← "Codescope"
    status ← "Live"
    year ← 2026

    // Challenge
    problem ← "Developers lack a fast, visual way to explore codebases and understand architecture."

    // Implementation
    solution ← "Built a web app for instant codebase visualization, file tree navigation, and architecture diagrams."

    // Technology Stack
    stack ← [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Shiki",
        "React Flow"
    ]

    // Features
    features ← [
        "Codebase visualization",
        "File tree navigation",
        "Architecture diagrams",
        "Syntax highlighting",
        "Live demo"
    ]

    // Links
    links ← {
        demo: "https://codescope-beige.vercel.app/",
        github: "https://github.com/ademtru/codescope"
    }

    // Key Takeaway
    lesson ← "Visual tools accelerate understanding and onboarding."

END PROJECT`,
    },

    "/portfolio/values.ts": {
        python: `"""
Engineering Values

Principles shaped by startups, enterprise,
and performance-critical systems.
"""

values = {
    'clarity': {
        'principle': 'Readable systems scale better',
        'practice': 'Prefer explicit, boring solutions',
    },
    'performance': {
        'principle': 'Efficiency is a feature',
        'practice': 'Measure, optimise, then scale',
    },
    'ownership': {
        'principle': 'Build for the team, not the ego',
        'practice': 'Write code others can safely extend',
    },
    'feedback': {
        'principle': 'Ship, learn, iterate',
        'practice': 'Small changes, fast feedback loops',
    },
    'documentation': {
        'principle': 'Knowledge should outlive people',
        'practice': 'Document decisions, not just APIs',
    },
    'aiJudgement': {
        'principle': 'AI is a tool, not an authority',
        'practice': 'Use AI to accelerate work, then rigorously review, refine, and correct outputs before shipping',
    },
}
`,
        javascript: `/**
 * Engineering Values
 *
 * Principles shaped by startups, enterprise,
 * and performance-critical systems.
 */

const values = {
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

export default values;
`,
        cpp: `/**
 * Engineering Values
 *
 * Principles shaped by startups, enterprise,
 * and performance-critical systems.
 */

#include <string>
#include <map>

struct ValuePair {
    std::string principle;
    std::string practice;
};

const std::map<std::string, ValuePair> values = {
    {"clarity", {
        "Readable systems scale better",
        "Prefer explicit, boring solutions"
    }},
    {"performance", {
        "Efficiency is a feature",
        "Measure, optimise, then scale"
    }},
    {"ownership", {
        "Build for the team, not the ego",
        "Write code others can safely extend"
    }},
    {"feedback", {
        "Ship, learn, iterate",
        "Small changes, fast feedback loops"
    }},
    {"documentation", {
        "Knowledge should outlive people",
        "Document decisions, not just APIs"
    }},
    {"aiJudgement", {
        "AI is a tool, not an authority",
        "Use AI to accelerate work, then rigorously review, refine, and correct outputs before shipping"
    }}
};
`,
        pseudocode: `/**
 * ENGINEERING VALUES
 *
 * Principles shaped by startups, enterprise,
 * and performance-critical systems.
 */

STRUCTURE Value:
    principle: STRING
    practice: STRING
END STRUCTURE

CONST values ← {
    clarity: {
        principle: "Readable systems scale better",
        practice: "Prefer explicit, boring solutions"
    },
    performance: {
        principle: "Efficiency is a feature",
        practice: "Measure, optimise, then scale"
    },
    ownership: {
        principle: "Build for the team, not the ego",
        practice: "Write code others can safely extend"
    },
    feedback: {
        principle: "Ship, learn, iterate",
        practice: "Small changes, fast feedback loops"
    },
    documentation: {
        principle: "Knowledge should outlive people",
        practice: "Document decisions, not just APIs"
    },
    aiJudgement: {
        principle: "AI is a tool, not an authority",
        practice: "Use AI to accelerate work, then rigorously review, refine, and correct outputs before shipping"
    }
}
`,
    },

    "/portfolio/contact.ts": {
        python: `"""
Contact

Best ways to reach me.
"""

contact = {
    'email': 'ademtruong@gmail.com',
    'github': 'https://github.com/ademtru',
    'linkedin': 'https://linkedin.com/in/ademtruong',
    'location': 'Melbourne, Australia',

    'preferred': 'email',

    'openTo': [
        'Full stack engineering roles',
        'Startup opportunities',
        'AI-driven product work',
        'Challenging technical problems',
    ],

    'notLookingFor': [
        'Unpaid work',
        'Low-impact projects',
    ],

    'responseTime': '2–5 business days',
}

signoff = 'Thanks for reading — let\\'s build something meaningful.'
`,
        javascript: `/**
 * Contact
 *
 * Best ways to reach me.
 */

const contact = {
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

const signoff = 'Thanks for reading — let\\'s build something meaningful.';

export { contact, signoff };
`,
        cpp: `/**
 * Contact
 *
 * Best ways to reach me.
 */

#include <string>
#include <vector>

struct Contact {
    const std::string email = "ademtruong@gmail.com";
    const std::string github = "https://github.com/ademtru";
    const std::string linkedin = "https://linkedin.com/in/ademtruong";
    const std::string location = "Melbourne, Australia";
    
    const std::string preferred = "email";
    
    const std::vector<std::string> openTo = {
        "Full stack engineering roles",
        "Startup opportunities",
        "AI-driven product work",
        "Challenging technical problems"
    };
    
    const std::vector<std::string> notLookingFor = {
        "Unpaid work",
        "Low-impact projects"
    };
    
    const std::string responseTime = "2–5 business days";
};

static Contact contact;

const std::string signoff = "Thanks for reading — let's build something meaningful.";
`,
        pseudocode: `/**
 * CONTACT
 *
 * Best ways to reach me.
 */

CONST contact ← {
    email: "ademtruong@gmail.com",
    github: "https://github.com/ademtru",
    linkedin: "https://linkedin.com/in/ademtruong",
    location: "Melbourne, Australia",
    
    preferred: "email",
    
    openTo: [
        "Full stack engineering roles",
        "Startup opportunities",
        "AI-driven product work",
        "Challenging technical problems"
    ],
    
    notLookingFor: [
        "Unpaid work",
        "Low-impact projects"
    ],
    
    responseTime: "2–5 business days"
}

CONST signoff ← "Thanks for reading — let's build something meaningful."
`,
    },
};

/**
 * Get the translated content for a given file path and language
 */
export function getTranslatedContent(
    filePath: string,
    language: SupportedLanguage,
    originalContent: string,
): string {
    // For TypeScript, return original
    if (language === "typescript") {
        return originalContent;
    }

    // Check if translation exists
    const fileTranslations = translations[filePath];
    if (fileTranslations && fileTranslations[language]) {
        return fileTranslations[language]!;
    }

    // Fall back to original content
    return originalContent;
}
