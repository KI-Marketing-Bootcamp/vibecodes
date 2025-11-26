import { TimelineEvent } from './types';

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    year: '2020',
    title: 'Die ersten Gehversuche',
    description: 'OpenAI veröffentlicht GPT-3 als API. Noch experimentell, aber der Grundstein ist gelegt.',
    details: [
      'Erste Gehversuche mit Sprachmodellen',
      'API-Zugriff für Entwickler',
      'Grundstein für Generative Text AI'
    ],
    icon: 'cpu',
  },
  {
    year: '2021',
    title: 'Tools entstehen',
    description: 'Erste GPT-basierte Writing-Tools wie Jasper.ai erscheinen auf dem Markt.',
    details: [
      'Entstehung der "Prompt Engineer" Rolle',
      'Erste kommerzielle Applikationen',
      'Fokus auf Short-Copy Marketing'
    ],
    icon: 'rocket',
  },
  {
    year: '2022',
    title: 'Der Urknall',
    description: 'ChatGPT (3.5) geht live. 100 Mio. Nutzer in 2 Monaten. Alles ändert sich.',
    details: [
      '30. November: ChatGPT Release',
      'Stable Diffusion wird Open Source',
      'Gründung des KI Marketing Bootcamps',
      'Midjourney ermöglicht erste künstlerische Bilder'
    ],
    icon: 'sparkles',
    highlight: true,
  },
  {
    year: '2023',
    title: 'Visuelle Revolution',
    description: 'Fotorealismus ist da. Video aus Text beginnt.',
    details: [
      'Midjourney v5 & Stable Diffusion XL',
      'Runway Gen-2: Text-to-Video',
      'GPT-4: Massiver Intelligenzsprung'
    ],
    icon: 'video',
  },
  {
    year: '2024',
    title: 'Das Jahr der Reife',
    description: 'Google Gemini & Claude werden echte Konkurrenz.',
    details: [
      'Black Forest Labs veröffentlicht Flux.1',
      'Runway ML und Pika Labs entwickeln sich weiter',
      'Buchveröffentlichung: "Content Marketing mit KI"',
      'Sora wird angekündigt'
    ],
    icon: 'book',
  },
  {
    year: '2025',
    title: 'Regulierung & Agenten',
    description: 'EU AI Act tritt in Kraft. Unternehmen brauchen Wissen, nicht nur Tools.',
    details: [
      'ChatGPT-5 Launch (Erwartet)',
      'Google Veo lässt Sora alt aussehen',
      'Aufstieg der "Context Engineers"',
      'Automatisierung durch Agenten-Systeme'
    ],
    icon: 'robot',
  },
  {
    year: '2026',
    title: 'Future Outlook',
    description: 'KI-Video für die Masse & das Uncanny Valley wird übersprungen.',
    details: [
      'Professionelle Videoproduktion für jeden',
      'Zuverlässige autonome Agenten',
      'Marketing verändert sich grundlegend'
    ],
    icon: 'sparkles',
    highlight: true,
  },
];

export const HYPE_CYCLE_DATA = [
  { name: '2020', interest: 10, tech: 5 },
  { name: '2021', interest: 25, tech: 15 },
  { name: '2022', interest: 85, tech: 30 },
  { name: '2023', interest: 60, tech: 45 },
  { name: '2024', interest: 100, tech: 60 },
  { name: '2025', interest: 80, tech: 70 },
  { name: '2026', interest: 85, tech: 80 },
];