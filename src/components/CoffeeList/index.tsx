import { Minus, Plus, ShoppingCart } from "phosphor-react";

import { coffee } from "../../shared/data/coffee";
import {
  formatCurrency,
  getCurrencyFormatNumbersOnly,
} from "../../shared/utils/currency";

import * as S from "./styles";

export function CoffeeList() {
  const format = getCurrencyFormatNumbersOnly("BRL");

  return (
    <S.Container>
      <h2>Nossos cafés</h2>

      <S.CoffeeListContainer>
        {coffee.map((item) => (
          <S.Coffee key={item.name}>
            <img src={item.image} />

            <S.CoffeeSpecifications>
              {item.specifications.map((specification) => (
                <span key={specification}>{specification}</span>
              ))}
            </S.CoffeeSpecifications>

            <strong>{item.name}</strong>
            <p>{item.description}</p>

            <footer>
              <S.Price>
                R${" "}
                <strong>
                  {formatCurrency(item.price / 100, format, "pt-BR")}
                </strong>
              </S.Price>

              <S.Quantity>
                <button type="button">
                  <Minus size={14} weight="bold" />
                </button>
                <span>1</span>
                <button type="button">
                  <Plus size={14} weight="bold" />
                </button>
              </S.Quantity>

              <S.AddToCartButton type="button">
                <ShoppingCart size={22} weight="fill" />
              </S.AddToCartButton>
            </footer>
          </S.Coffee>
        ))}
      </S.CoffeeListContainer>
    </S.Container>
  );
}
