import { ReactNode } from 'react';

export interface ButtonProps {
  onClick: () => void;
  style: 'unfilled' | 'filled' | 'outline';
  label: string;
  icon?: ReactNode;
  isDisabled?: boolean;
}
