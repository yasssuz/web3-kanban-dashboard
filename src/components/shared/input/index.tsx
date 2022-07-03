import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { InputContainer, InputStyles, ErrorMessage, TopLabel } from "./styles";

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  id: string;
  name: string;
  label?: string;
  error?: string;
}

function Input({ error, label, id, ...rest }: InputProps) {
  return (
    <InputContainer>
      <TopLabel htmlFor={id}>{label}</TopLabel>
      <InputStyles error={error} id={id} {...rest} />
      {error && <ErrorMessage htmlFor={id}>{error}</ErrorMessage>}
    </InputContainer>
  );
}

export default Input;
