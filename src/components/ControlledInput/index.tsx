import React from "react";
import { Controller } from "react-hook-form";
import { Error } from "../Error";
import { Input } from "../Input";

export function ControlledInput({ control, name, error, ...rest }: any) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChange={onChange} value={value} {...rest} />
        )}
      />
      {error && <Error>{error.message}</Error>}
    </>
  );
}
