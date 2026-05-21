export type Service = {
  title: string;
  description: string;
  icon: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type EngagementModel = {
  name: string;
  price?: string;
  cadence: string;
  blurb: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

export type WorkPreviewKey = 'marketing' | 'adoption';

export type WorkCase = {
  previewKey: WorkPreviewKey;
  kicker: string;
  title: string;
  outcome: string;
};
