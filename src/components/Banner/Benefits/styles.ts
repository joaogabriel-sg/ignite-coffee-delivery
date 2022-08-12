import styled, { css } from "styled-components";

export const Container = styled.ul`
  margin-top: 6.6rem;

  display: grid;
  grid-template-columns: auto auto;
  column-gap: 4rem;
  row-gap: 2rem;

  list-style: none;
`;

export const Benefit = styled.li`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1.2rem;

    font-size: ${theme.fontSize[16]};
    line-height: ${theme.lineHeight["1.3"]};
    color: ${theme.colors["gray-700"]};
  `}
`;

type IBenefitIconContainerProps = {
  color: string;
};

export const BenefitIconContainer = styled.span<IBenefitIconContainerProps>`
  ${({ theme, color }) => css`
    background: ${color};
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: ${theme.colors["gray-100"]};
    }
  `}
`;
