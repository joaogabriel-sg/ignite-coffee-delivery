import styled, { css } from "styled-components";

export const Container = styled.form`
  width: 100%;
  max-width: 112rem;
  padding: 4rem 2.4rem 24rem;
  margin: 0 auto;

  display: flex;
  align-items: start;
  gap: 3.2rem;
`;

export const OrderDetailsContainer = styled.section`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const SectionTitle = styled.h2`
  ${({ theme }) => css`
    font-family: ${theme.fonts.header};
    font-size: ${theme.fontSize[18]};
    font-weight: bold;
    line-height: ${theme.lineHeight["1.3"]};
    color: ${theme.colors["gray-800"]};
  `}
`;

export const OrderDetailContainer = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors["gray-200"]};
    padding: 4rem;
    border-radius: 6px;

    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  `}
`;

export const OrderDetailHeader = styled.header`
  ${({ theme }) => css`
    display: flex;
    gap: 0.8rem;

    > div {
      display: flex;
      flex-direction: column;
      gap: 2px;

      strong {
        font-size: ${theme.fontSize[16]};
        font-weight: 400;
        line-height: ${theme.lineHeight["1.3"]};
        color: ${theme.colors["gray-800"]};
      }

      span {
        font-size: ${theme.fontSize[14]};
        line-height: ${theme.lineHeight["1.3"]};
      }
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
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
  `}
`;

export const DeliveryAddressFieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

type InputContainerProps = {
  gridTemplateColumns?: string;
};

export const InputContainer = styled.div<InputContainerProps>`
  ${({ gridTemplateColumns }) => css`
    display: grid;
    grid-template-columns: ${gridTemplateColumns ?? "1fr"};
    gap: 1.2rem;
  `}
`;

export const PaymentMethodList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  list-style: none;

  li {
    flex: 1;
  }
`;

type PaymentMethodProps = {
  active?: boolean;
};

export const PaymentMethod = styled.button<PaymentMethodProps>`
  ${({ theme, active }) => css`
    background: ${theme.colors["gray-400"]};
    width: 100%;
    height: 5.1rem;
    padding: 1.75rem 1.6rem;
    border: 0;
    border-radius: 6px;

    cursor: pointer;
    transition: all 0.25s;

    display: flex;
    align-items: center;
    gap: 1.2rem;

    font-size: ${theme.fontSize[12]};
    line-height: ${theme.lineHeight["1.6"]};
    text-transform: uppercase;
    color: ${theme.colors["gray-700"]};

    svg {
      flex-shrink: 0;
      color: ${theme.colors.secondary};
    }

    ${active
      ? css`
          background: ${theme.colors["secondary-light"]};
          box-shadow: 0 0 0 1px ${theme.colors.secondary};
        `
      : css`
          &:hover {
            background: ${theme.colors["gray-500"]};
            color: ${theme.colors["gray-800"]};
          }
        `}
  `}
`;

export const OrderSummaryContainer = styled.aside`
  width: 100%;
  max-width: fit-content;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const OrderSummaryContent = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors["gray-200"]};
    padding: 4rem;
    border-radius: 6px 4.4rem 6px 4.4rem;
  `}
`;

export const Quantity = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors["gray-400"]};
    max-width: fit-content;
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
export const SummaryValues = styled.ul`
  ${({ theme }) => css`
    list-style: none;

    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin: 2.4rem 0;

    li {
      display: flex;
      justify-content: space-between;

      span {
        font-size: ${theme.fontSize[14]};
        line-height: ${theme.lineHeight["1.3"]};
        color: ${theme.colors["gray-700"]};
      }

      strong {
        font-size: ${theme.fontSize[20]};
        line-height: ${theme.lineHeight["1.3"]};
        color: ${theme.colors["gray-800"]};
      }
    }
  `}
`;

export const ConfirmOrderButton = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    width: 100%;
    height: 4.6rem;
    padding: 1.2rem;
    border: 0;
    border-radius: 6px;

    cursor: pointer;
    transition: background 0.25s;

    font-size: ${theme.fontSize[14]};
    font-weight: bold;
    line-height: ${theme.lineHeight["1.6"]};
    text-transform: uppercase;
    color: ${theme.colors.white};

    &:hover {
      background: ${theme.colors["primary-dark"]};
    }
  `}
`;

export const Coffee = styled.div``;

export const CoffeeItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 2rem;
    padding-bottom: 2.4rem;
    border-bottom: 1px solid ${theme.colors["gray-400"]};
    margin-bottom: 2.4rem;
  `}
`;

export const CoffeeItemImage = styled.img`
  width: 100%;
  max-width: 6.4rem;
`;

export const CoffeeItemContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.8rem;
`;

export const CoffeeItemName = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSize[16]};
    line-height: ${theme.lineHeight["1.3"]};
    color: ${theme.colors["gray-800"]};
  `}
`;

export const CoffeeItemPrice = styled.span`
  ${({ theme }) => css`
    flex-shrink: 0;
    font-size: ${theme.fontSize[16]};
    font-weight: 700;
    line-height: ${theme.lineHeight["1.3"]};
    color: ${theme.colors["gray-700"]};
    margin-left: auto;
  `}
`;

export const CoffeeItemOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const RemoveButton = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors["gray-400"]};
    max-width: fit-content;
    height: 3.8rem;
    border-radius: 6px;
    border: 0;
    padding: 8.5px 8px;

    display: flex;
    align-items: center;
    gap: 4px;

    font-size: ${theme.fontSize[12]};
    line-height: ${theme.lineHeight["1.6"]};
    color: ${theme.colors["gray-700"]};
    text-transform: uppercase;

    cursor: pointer;
    transition: all 0.25s;

    svg {
      color: ${theme.colors.secondary};
    }

    &:hover {
      background: ${theme.colors["gray-500"]};
      color: ${theme.colors["gray-800"]};
    }
  `}
`;
