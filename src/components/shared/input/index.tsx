import { DetailedHTMLProps, forwardRef, InputHTMLAttributes, Ref } from "react";
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

function Input(
  { error, label, id, ...rest }: InputProps,
  ref: Ref<HTMLInputElement>
) {
  return (
    <InputContainer>
      <TopLabel htmlFor={id}>{label}</TopLabel>
      <InputStyles error={error} id={id} ref={ref} {...rest} />
      {error && <ErrorMessage htmlFor={id}>{error}</ErrorMessage>}
    </InputContainer>
  );
}

export default forwardRef(Input);
