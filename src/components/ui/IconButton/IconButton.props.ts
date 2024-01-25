import { ReactNode } from 'react';

export interface IconButtonProps {
  onClick?: () => void;
  icon?: ReactNode;
  disabled?: () => void;
}
