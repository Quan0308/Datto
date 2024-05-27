import React from 'react';

import { IconProps } from '@/types';
export interface ITabInfo {
  title: string;
  tabName: string;
  component: React.ComponentType<Partial<IconProps> | undefined>;
}
