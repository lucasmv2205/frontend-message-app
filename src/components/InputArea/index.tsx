import { Container, TextArea } from './styles';

export function InputArea({ value, ...rest }: any) {

  return (
    <Container >
      <TextArea
        value={value}
        {...rest}
      />
    </Container>
  );
}