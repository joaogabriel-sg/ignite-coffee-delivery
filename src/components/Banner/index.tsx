import { Benefits } from "./Benefits";

import bannerCupOfCoffee from "../../assets/images/banner/banner-cup-of-coffee.png";

import * as S from "./styles";

export function Banner() {
  return (
    <S.Container>
      <div>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
          <Benefits />
        </div>

        <img src={bannerCupOfCoffee} />
      </div>
    </S.Container>
  );
}
