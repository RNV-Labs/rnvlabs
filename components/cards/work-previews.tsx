import type { ReactNode } from 'react';
import type { WorkPreviewKey } from '@/lib/types';
import { MockupMarketing } from './mockup-marketing';

import { PetAdoptionCard } from './pet-adoption-card';

export const WORK_PREVIEWS: Record<WorkPreviewKey, ReactNode> = {
  marketing: <MockupMarketing />,
  adoption: <PetAdoptionCard />,
};
