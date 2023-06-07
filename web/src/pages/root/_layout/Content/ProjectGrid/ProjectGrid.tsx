import { Card, CardProps } from '../Card';
import { ProjectGridLoading } from './ProjectGridLoading/ProjectGridLoading';

import projectGridCN from './ProjectGrid.module.scss';

export interface ProjectGridProps extends CardProps {}

export const ProjectGrid = (props: ProjectGridProps) => {
  return <Card {...props} className={projectGridCN.grid} />;
};

ProjectGrid.Loading = ProjectGridLoading;
