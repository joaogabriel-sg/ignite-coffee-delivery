import styled, { css } from "styled-components";

export const Container = styled.section`
  ${({ theme }) => css`
    width: 100%;
    max-width: 112rem;
    padding: 0rem 2.4rem 15.7rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 5.4rem;

    > h2 {
      font-family: ${theme.fonts.header};
      font-size: ${theme.fontSize[32]};
      line-height: ${theme.lineHeight["1.3"]};
      color: ${theme.colors["gray-800"]};
    }
  `}
`;

export const CoffeeListContainer = styled.ul`
  list-style: none;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(24.4rem, auto));
  gap: 4rem 3.2rem;
`;

export const Coffee = styled.li`
  ${({ theme }) => css`
    background: ${theme.colors["gray-200"]};
    width: 100%;
    padding: 0 2rem 2rem;
    border-radius: 6px 3.6rem 6px 3.6rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    > img {
      margin-top: -2rem;
    }

    > strong {
      margin-top: 1.6rem;

      font-family: ${theme.fonts.header};
      font-size: ${theme.fontSize[20]};
      line-height: ${theme.lineHeight["1.3"]};
      color: ${theme.colors["gray-800"]};
    }

    > p {
      margin: 0.8rem 0 3.3rem 0;
      font-size: ${theme.fontSize[14]};
      line-height: ${theme.lineHeight["1.3"]};
      color: ${theme.colors["gray-600"]};
      text-align: center;
    }

    > footer {
      width: 100%;
      margin-top: auto;

      display: flex;
      align-items: center;
      gap: 8px;
    }
  `}
`;

export const CoffeeSpecifications = styled.div`
  ${({ theme }) => css`
    margin-top: 1.2rem;

    display: flex;
    align-items: center;
    gap: 4px;

    span {
      background: ${theme.colors["primary-light"]};
      padding: 4px 8px;
      border-radius: 99999px;

      font-weight: bold;
      font-size: ${theme.fontSize[10]};
      line-height: ${theme.lineHeight["1.3"]};
      text-transform: uppercase;
      color: ${theme.colors["primary-dark"]};
    }
  `}
`;

export const Price = styled.span`
  ${({ theme }) => css`
    margin-right: auto;
    font-size: ${theme.fontSize[14]};
    line-height: ${theme.lineHeight["1.3"]};
    color: ${theme.colors["gray-700"]};

    strong {
      font-family: ${theme.fonts.header};
      font-size: ${theme.fontSize[24]};
    }
  `}
`;

export const Quantity = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors["gray-400"]};
    height: 3.8rem;
    border-radius: 6px;

    display: flex;
    align-items: center;
    gap: 4px;

    button {
      background: none;
      border: 0;
      padding: 8.5px 8px;

      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;
      color: ${theme.colors.secondary};
      transition: color 0.25s;

      &:hover {
        color: ${theme.colors["secondary-dark"]};
      }
    }

    span {
      user-select: none;
      font-size: ${theme.fontSize[16]};
      line-height: ${theme.lineHeight["1.3"]};
      color: ${theme.colors["gray-900"]};
    }
  `}
`;

export const AddToCartButton = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors["secondary-dark"]};
    width: 3.8rem;
    height: 3.8rem;
    border: 0;
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    cursor: pointer;
    color: ${theme.colors["gray-200"]};
    transition: background 0.25s;

    &:hover {
      background: ${theme.colors["secondary"]};
    }
  `}
`;
