import { ComponentPropsWithoutRef } from 'react';
import { cnProps } from '@/utils/mergeClassnames';

import sectionCN from './Section.module.scss';

export interface SectionProps extends ComponentPropsWithoutRef<'div'> {
  title?: string;
}

export const Section = ({ title, children, ...props }: SectionProps) => {
  return (
    <div
      {...cnProps(props, sectionCN.section, title && sectionCN.section_titled)}
    >
      {title && <p className={sectionCN.title}>{title}</p>}
      {children}
    </div>
  );
};