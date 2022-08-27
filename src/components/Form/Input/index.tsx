import { InputHTMLAttributes } from "react";
import * as S from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean;
  error?: string;
};

export function Input({ optional = false, error, ...props }: InputProps) {
  return (
    <S.Container>
      <S.InputContainer>
        <S.InputField optional={optional} {...props} />
        {optional && <S.OptionalText>Opcional</S.OptionalText>}
      </S.InputContainer>

      {!!error && <S.ErrorText>{error}</S.ErrorText>}
    </S.Container>
  );
}
