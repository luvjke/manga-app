import { ReactNode } from 'react';

export interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style: 'unfilled' | 'filled' | 'outline' | 'custom';
  label: string;
  icon?: ReactNode;
  disabled?: boolean;
}
