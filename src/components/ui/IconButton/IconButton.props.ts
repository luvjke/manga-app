import { ReactNode } from 'react';

export interface IconButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: ReactNode;
  disabled?: boolean;
}
