import type { Metadata } from 'next';
import { Process } from './components/process';
import { CtaBand } from '@/components/sections/cta-band';

export const metadata: Metadata = {
  title: 'Process',
};

export default function ProcessPage() {
  return (
    <>
      <Process />
      <CtaBand />
    </>
  );
}
