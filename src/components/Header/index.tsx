import { MapPin, ShoppingCart } from "phosphor-react";

import logoCoffeeDelivery from "../../assets/images/brand/logo-coffee-delivery.svg";

import * as S from "./styles";

export function Header() {
  return (
    <S.Container>
      <img src={logoCoffeeDelivery} />

      <S.MenuContainer>
        <S.LocationButton type="button">
          <MapPin size={22} weight="fill" />
          Boa Viagem, CE
        </S.LocationButton>

        <S.CartButton type="button">
          <ShoppingCart size={22} weight="fill" />
        </S.CartButton>
      </S.MenuContainer>
    </S.Container>
  );
}
