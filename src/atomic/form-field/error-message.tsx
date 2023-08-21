import React from 'react';
import { Caption } from '../../styles/text-styles';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <Caption>{message}</Caption>;
};
