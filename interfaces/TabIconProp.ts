import React from 'react';

import { IconProps } from '@/types';

export interface ITabItemProp {
  iconComponent: React.ComponentType<Partial<IconProps> | undefined>;
  title: string;
  color: string;
  focused: boolean;
  size: number;
}
