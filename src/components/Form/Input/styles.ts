import styled, { css } from "styled-components";

export const Container = styled.label``;

export const InputContainer = styled.div`
  position: relative;
`;

type InputFieldProps = {
  optional: boolean;
};

export const InputField = styled.input<InputFieldProps>`
  ${({ theme, optional }) => css`
    background: ${theme.colors["gray-300"]};
    width: 100%;
    height: 4.2rem;
    padding: 1.2rem;
    border: 1px solid ${theme.colors["gray-400"]};
    border-radius: 4px;
    outline: 0;

    font-size: ${theme.fontSize[14]};
    line-height: ${theme.lineHeight["1.3"]};
    color: ${theme.colors["gray-700"]};

    transition: all 0.25s;

    &::placeholder {
      color: ${theme.colors["gray-600"]};
    }

    &:focus {
      border-color: ${theme.colors["primary-dark"]};
    }

    ${optional &&
    css`
      padding-right: 6.4rem;
    `}
  `}
`;

export const OptionalText = styled.span`
  ${({ theme }) => css`
    position: absolute;
    top: 50%;
    right: 1.2rem;
    transform: translateY(-50%);

    font-size: ${theme.fontSize[12]};
    line-height: ${theme.lineHeight["1.3"]};
    color: ${theme.colors["gray-600"]};
    font-style: italic;
  `}
`;

export const ErrorText = styled.span`
  ${({ theme }) => css`
    display: block;
    margin-top: 4px;

    font-size: ${theme.fontSize[12]};
    line-height: ${theme.lineHeight["1.3"]};
    color: ${theme.colors["primary-dark"]};
  `}
`;
