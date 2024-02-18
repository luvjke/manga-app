import { ChangeEvent, ReactNode } from 'react';

export interface InputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  button?: ReactNode;
  placeholder?: string;
  isDisabled?: boolean;
  icon?: ReactNode;
  style: 'unfilled' | 'filled' | 'outline' | 'custom';
}
