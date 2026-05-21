import type { Service } from '@/lib/types';

export const services: Service[] = [
  {
    title: 'Product web apps',
    description:
      'Greenfield SaaS, dashboards, and internal customer portals built from a blank Figma to a production deploy.',
    icon: 'Layers',
  },
  {
    title: 'Internal tools',
    description:
      'The admin panel, ops console, or workflow tool your team has been faking with spreadsheets. Built right.',
    icon: 'Cog',
  },
  {
    title: 'APIs & data',
    description:
      'Typed APIs, query layers, integrations, and the boring data plumbing that quietly makes everything else possible.',
    icon: 'Database',
  },
  {
    title: 'UI engineering',
    description:
      'Design systems, component libraries, and the senior frontend work that turns a prototype into a product.',
    icon: 'Component',
  },
  {
    title: 'Maintenance & rescue',
    description:
      'Take over an unfinished codebase, stabilize it, ship the next release, and leave you with a project you can hire against.',
    icon: 'LifeBuoy',
  },
];
