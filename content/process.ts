import type { ProcessStep } from '@/lib/types';

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We start by sitting with the problem. Two weeks of interviews, audits, and rough prototypes — enough to make the right plan, not enough to spend your runway.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Static screens are a poor proxy for software. We design in code from day one, in your stack, so what you sign off is what you can ship.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Weekly demos against a working URL. No mystery dev cycles, no surprise rewrites. You see the product the day after we do.',
  },
  {
    number: '04',
    title: 'Ship',
    description:
      'Production deploys, observability, and a handoff your engineers can pick up — or a partnership where we keep shipping with you.',
  },
];
