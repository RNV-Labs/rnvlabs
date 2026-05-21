import type { Metadata } from 'next';
import { Services } from './components/services';
import { CtaBand } from '@/components/sections/cta-band';

export const metadata: Metadata = {
  title: 'Services',
};

export default function ServicesPage() {
  return (
    <>
      <Services />
      <CtaBand />
    </>
  );
}
