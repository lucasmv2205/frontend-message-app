import React from 'react';
import { StyledButton, Title } from './styles';
import { HashLoader } from 'react-spinners';
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  statusButton?: boolean;
}

export function Button({ title, statusButton, ...rest }: Props) {
  return (
    <StyledButton {...rest}>
      <Title>
        {title}
      {statusButton && <HashLoader color='#bcb64f' size={20} />}
      </Title>
    </StyledButton>
  );
}