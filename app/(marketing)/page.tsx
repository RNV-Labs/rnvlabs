import { Hero } from '@/components/sections/hero';
import { SelectedWork } from '@/components/sections/selected-work';
import { CtaBand } from '@/components/sections/cta-band';

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <CtaBand />
    </>
  );
}
