import React from 'react';
import { StyledButton, Title } from './styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <StyledButton {...rest}>
      <Title>
        {title}
      </Title>
    </StyledButton>
  );
}