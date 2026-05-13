import { AIModel } from '@/types';

export const AI_MODELS: AIModel[] = [
  {
    id: 'aura-1',
    name: 'Aura 1',
    provider: 'Synapse',
    speed: 95,
    intelligence: 98,
    color: 'from-cyan-400 to-emerald-400',
    badge: 'DEFAULT',
    description: 'Highly intelligent with Deep Think reasoning. Tackles complex problems, science, and analysis with unmatched depth.'
  },
  {
    id: 'aura-2',
    name: 'Aura 2',
    provider: 'Synapse',
    speed: 92,
    intelligence: 90,
    color: 'from-green-400 to-emerald-500',
    badge: 'BILINGUAL',
    description: 'Explains any concept in both English and Hinglish — making knowledge accessible and easy to understand for everyone.'
  },
  {
    id: 'aura-coder',
    name: 'Aura Coder',
    provider: 'Synapse',
    speed: 98,
    intelligence: 95,
    color: 'from-purple-400 to-violet-500',
    badge: 'CODING',
    description: 'A world-class programming expert. Gets full, production-ready code with modern UI in any language or framework.'
  }
];

export const FEATURES = [
  {
    title: 'Multi-LLM Routing',
    description: 'Seamlessly route queries to the best model',
    icon: '🔄'
  },
  {
    title: 'Real-time AI Switching',
    description: 'Change models mid-conversation',
    icon: '⚡'
  },
  {
    title: 'Long-Term Memory',
    description: 'Persistent context across sessions',
    icon: '🧠'
  },
  {
    title: 'Developer API Access',
    description: 'Full programmability and integration',
    icon: '🔧'
  },
  {
    title: 'Voice + Vision Support',
    description: 'Multimodal interaction capabilities',
    icon: '👁️'
  },
  {
    title: 'Autonomous Workflows',
    description: 'Agentic task execution',
    icon: '🤖'
  }
];
