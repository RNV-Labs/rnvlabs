import {
  Layers,
  Cog,
  Database,
  Component,
  LifeBuoy,
  type LucideIcon,
} from 'lucide-react';

const ICONS: Record<string, LucideIcon> = {
  Layers,
  Cog,
  Database,
  Component,
  LifeBuoy,
};

export function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  const Icon = ICONS[icon] ?? Layers;

  return (
    <div className='relative rounded-card bg-canvas p-6 ring-1 ring-hairline h-full flex flex-col'>
      <div className='size-9 rounded-md bg-surface-card ring-1 ring-hairline inline-flex items-center justify-center text-ink'>
        <Icon className='size-4.5' strokeWidth={1.6} />
      </div>
      <h3
        className='mt-5 text-[17px] font-semibold text-ink'
        style={{ letterSpacing: '-0.02em' }}
      >
        {title}
      </h3>
      <p className='mt-2 text-[14px] leading-[1.6] text-body'>{description}</p>
    </div>
  );
}
