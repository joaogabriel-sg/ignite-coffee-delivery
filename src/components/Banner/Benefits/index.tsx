import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import * as S from "./styles";

const benefits = [
  {
    text: "Compra simples e segura",
    icon: <ShoppingCart weight="fill" size={16} />,
    color: "#C47F17",
  },
  {
    text: "Embalagem mantém o café intacto",
    icon: <Package weight="fill" size={16} />,
    color: "#574F4D",
  },
  {
    text: "Entrega rápida e rastreada",
    icon: <Timer weight="fill" size={16} />,
    color: "#DBAC2C",
  },
  {
    text: "O café chega fresquinho até você",
    icon: <Coffee weight="fill" size={16} />,
    color: "#8047F8",
  },
];

export function Benefits() {
  return (
    <S.Container>
      {benefits.map((benefit) => (
        <S.Benefit key={benefit.text}>
          <S.BenefitIconContainer color={benefit.color}>
            {benefit.icon}
          </S.BenefitIconContainer>
          {benefit.text}
        </S.Benefit>
      ))}
    </S.Container>
  );
}
