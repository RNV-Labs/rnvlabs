import { cn } from '@/lib/utils';

export function Container({
  as: Tag = 'div',
  className,
  children,
}: {
  as?: 'div' | 'section' | 'header' | 'footer' | 'nav' | 'main';
  className?: string;
  children: React.ReactNode;
}) {
  return <Tag className={cn('container-1200', className)}>{children}</Tag>;
}
