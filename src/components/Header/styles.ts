import styled, { css } from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;

  padding: 3.2rem 0;
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const LocationButton = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors["secondary-light"]};
    height: 3.8rem;
    padding: 0.8rem;
    border: 0;
    border-radius: 6px;

    display: flex;
    align-items: center;
    gap: 4px;

    cursor: pointer;

    font-size: ${theme.fontSize[14]};
    color: ${theme.colors["secondary-dark"]};

    > svg {
      flex-shrink: 0;
      color: ${theme.colors["secondary"]};
    }
  `}
`;

export const CartButton = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors["primary-light"]};
    width: 3.8rem;
    height: 3.8rem;
    border: 0;
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    cursor: pointer;

    color: ${theme.colors["primary-dark"]};
  `}
`;
