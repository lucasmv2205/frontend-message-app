import React from "react";
import { Controller } from "react-hook-form";
import { Error } from "../Error";
import { InputArea } from "../InputArea";

export function ControlledTextArea({ control, name, error, ...rest }: any) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputArea onChange={onChange} value={value} {...rest} />
        )}
      />
      {error && <Error>{error.message}</Error>}
    </>
  );
}
