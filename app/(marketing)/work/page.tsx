import type { Metadata } from 'next';
import { Work } from './components/work';
import { CtaBand } from '@/components/sections/cta-band';

export const metadata: Metadata = {
  title: 'Work',
};

export default function WorkPage() {
  return (
    <>
      <Work />
      <CtaBand />
    </>
  );
}
