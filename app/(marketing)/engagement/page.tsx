import type { Metadata } from 'next';
import { EngagementModels } from './components/engagement-models';
import { CtaBand } from '@/components/sections/cta-band';

export const metadata: Metadata = {
  title: 'Engagement',
};

export default function EngagementPage() {
  return (
    <>
      <EngagementModels />
      <CtaBand />
    </>
  );
}
