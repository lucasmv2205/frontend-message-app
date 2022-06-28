import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { Container, Title } from "./styles";
import { ControlledInput } from "../ControlledInput";
import { ControlledTextArea } from "../ControlledTextArea";
import { api } from "../../services/api";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const schema = yup.object({
  name: yup.string().required("inform your name"),
  email: yup.string().email("Invalid e-mail").required("inform your email"),
  message: yup
    .string()
    .min(10, "Message must be at least 20 caracters")
    .required("Inform a message"),
});

export default function Form() {
  const [statusButton, setStatusButton] = useState<Boolean>(false);
  const { control, handleSubmit, formState } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const { errors } = formState;

  async function handleSubmitMessage(data: FormData) {
    setStatusButton(true);
    try {
      const response = await api.post("message", data);
      console.log(response);
      if (response.status === 201) {
        //toast
      }
      setStatusButton(false);
    } catch (error) {
      console.log(error);
      setStatusButton(false);
    }
  }

  return (
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
        statusButton={statusButton}
        onClick={handleSubmit(handleSubmitMessage)}
      />
    </Container>
  );
}
