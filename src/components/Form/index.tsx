import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { Container, Title } from './styles';
import { ControlledInput } from "../ControlledInput";
import { ControlledTextArea } from "../ControlledTextArea";
import { api } from "../../services/api";

type FormData = {
  name: string;
  email: string;
  message: string;
}

const schema = yup.object({
  name: yup.string().required("inform your name"),
  email: yup.string().email("Invalid e-mail").required("inform your email"),
  message: yup.string().min(10, "Message must be at least 20 caracters").required("Inform a message"),
})

export default function Form(){
  const { control, handleSubmit, formState } = useForm<FormData>({
    resolver: yupResolver(schema)
  })
  const { errors } = formState

  async function handleSubmitMessage(data: FormData) {
    try {
      const response = await api.post("message", {data})
      console.log(response);
    } catch (error) {
      
    }
    console.log(data);
  }

  return(
    <Container>
      <Title>Reach out us!</Title>
      <ControlledInput
        name="name"
        placeholder="Your name*"
        control={control}
        error={errors.name}
      />
      <ControlledInput
        name="email"
        placeholder="Your e-mail*"
        control={control}
        error={errors.email}
      />
      <ControlledTextArea
        name="message"
        placeholder="Your message*"
        control={control}
        error={errors.email}
      />
      <Button
        title="Send message"
        onClick={handleSubmit(handleSubmitMessage)}
      />
    </Container>
  )
}