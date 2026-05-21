import type { EngagementModel } from '@/lib/types';

export const engagementModels: EngagementModel[] = [
  {
    name: 'Prototype',
    price: 'On request',
    cadence: '2-week sprint, fixed scope',
    blurb:
      'A working slice in your stack — proof, not a deck. Best when you need to de-risk an investor demo or pre-build pitch.',
    features: [
      'Clickable in-code prototype, deployed',
      'Two structured user-research sessions',
      'Technical spike on the riskiest unknown',
      'Honest go / no-go recommendation',
    ],
    cta: 'Start a prototype',
  },
  {
    name: 'Build',
    price: 'On request',
    cadence: '8-week minimum, embedded team',
    blurb:
      'A focused two-person team embedded with yours. End-to-end web engineering — design, frontend, backend, infra, the lot.',
    features: [
      'Two senior engineers, dedicated',
      'Design, frontend, backend, infra',
      'Weekly demos against a live URL',
      'Production deploys from week three',
      'Direct Slack channel, no ticket dance',
    ],
    cta: 'Book a build',
    featured: true,
  },
  {
    name: 'Partnership',
    price: 'On request',
    cadence: 'Quarterly retainer, renewable',
    blurb:
      "Ongoing engineering capacity for teams we've already shipped with. Predictable cost, flexible scope, real continuity.",
    features: [
      'Reserved weekly hours, on-tap',
      'Roadmap planning every two weeks',
      'On-call coverage for production',
      'Quarterly architecture review',
    ],
    cta: 'Discuss partnership',
  },
];
