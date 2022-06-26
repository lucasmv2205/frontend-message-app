import { Container, InputText } from './styles';

export function Input({ value, ...rest }: any) {

  return (
    <Container >
      <InputText
        value={value}
        {...rest}
      />
    </Container>
  );
}