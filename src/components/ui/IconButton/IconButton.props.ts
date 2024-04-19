import { ReactNode } from 'react';
import { To } from 'react-router-dom';

export interface IconButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: ReactNode;
  disabled?: boolean;
  version: 'unfilled' | 'filled' | 'outline' | 'custom' | 'custom2';
  tag?: 'link' | 'button';
  href?: To;
  state?: any;
  target?: string;
}
