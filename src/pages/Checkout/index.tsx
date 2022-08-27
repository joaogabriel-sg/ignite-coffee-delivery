import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from "phosphor-react";
import { useTheme } from "styled-components";

import { Input } from "../../components/Form/Input";

import { coffee } from "../../shared/data/coffee";

import * as S from "./styles";

export function Checkout() {
  const theme = useTheme();

  return (
    <S.Container>
      <S.OrderDetailsContainer>
        <S.SectionTitle>Complete seu pedido</S.SectionTitle>

        <S.OrderDetailContainer>
          <S.OrderDetailHeader>
            <MapPinLine size={22} color={theme.colors["primary-dark"]} />
            <div>
              <strong>Endereço de Entrega</strong>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </S.OrderDetailHeader>

          <S.DeliveryAddressFieldsContainer>
            <S.InputContainer gridTemplateColumns="200px">
              <Input placeholder="CEP" />
            </S.InputContainer>

            <S.InputContainer gridTemplateColumns="1fr">
              <Input placeholder="Rua" />
            </S.InputContainer>

            <S.InputContainer gridTemplateColumns="200px 1fr">
              <Input placeholder="Número" />
              <Input placeholder="Complemento" optional />
            </S.InputContainer>

            <S.InputContainer gridTemplateColumns="200px 1fr 60px">
              <Input placeholder="Bairro" />
              <Input placeholder="Cidade" />
              <Input placeholder="UF" />
            </S.InputContainer>
          </S.DeliveryAddressFieldsContainer>
        </S.OrderDetailContainer>

        <S.OrderDetailContainer>
          <S.OrderDetailHeader>
            <CurrencyDollar size={22} color={theme.colors["secondary"]} />
            <div>
              <strong>Pagamento</strong>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </S.OrderDetailHeader>

          <S.PaymentMethodList>
            <li>
              <S.PaymentMethod type="button">
                <CreditCard size={16} />
                Cartão de crédito
              </S.PaymentMethod>
            </li>
            <li>
              <S.PaymentMethod type="button">
                <Bank size={16} />
                Cartão de débito
              </S.PaymentMethod>
            </li>
            <li>
              <S.PaymentMethod type="button">
                <Money size={16} />
                Dinheiro
              </S.PaymentMethod>
            </li>
          </S.PaymentMethodList>
        </S.OrderDetailContainer>
      </S.OrderDetailsContainer>

      <S.OrderSummaryContainer>
        <S.SectionTitle>Cafés selecionados</S.SectionTitle>

        <S.OrderSummaryContent>
          <S.Coffee>
            <S.CoffeeItem>
              <S.CoffeeItemImage src={coffee[0].image} />

              <S.CoffeeItemContent>
                <S.CoffeeItemName>Expresso Tradicional</S.CoffeeItemName>
                <S.CoffeeItemOptions>
                  <S.Quantity>
                    <button type="button">
                      <Minus size={14} weight="bold" />
                    </button>
                    <span>1</span>
                    <button type="button">
                      <Plus size={14} weight="bold" />
                    </button>
                  </S.Quantity>

                  <S.RemoveButton>
                    <Trash size={16} />
                    Remover
                  </S.RemoveButton>
                </S.CoffeeItemOptions>
              </S.CoffeeItemContent>

              <S.CoffeeItemPrice>R$ 9,90</S.CoffeeItemPrice>
            </S.CoffeeItem>
          </S.Coffee>

          <S.SummaryValues>
            <li>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </li>
            <li>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </li>
            <li>
              <strong>Total de itens</strong>
              <strong>R$ 33,20</strong>
            </li>
          </S.SummaryValues>

          <S.ConfirmOrderButton type="submit">
            Confirmar pedido
          </S.ConfirmOrderButton>
        </S.OrderSummaryContent>
      </S.OrderSummaryContainer>
    </S.Container>
  );
}
