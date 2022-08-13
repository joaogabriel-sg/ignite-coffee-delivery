import americanoImage from "../../assets/images/coffee/americano.png";
import arabeImage from "../../assets/images/coffee/arabe.png";
import cafeComLeiteImage from "../../assets/images/coffee/cafe-com-leite.png";
import cafeGeladoImage from "../../assets/images/coffee/cafe-gelado.png";
import capuccinoImage from "../../assets/images/coffee/capuccino.png";
import chocolateQuenteImage from "../../assets/images/coffee/chocolate-quente.png";
import cubanoImage from "../../assets/images/coffee/cubano.png";
import expressoCremosoImage from "../../assets/images/coffee/expresso-cremoso.png";
import expressoImage from "../../assets/images/coffee/expresso.png";
import havaianoImage from "../../assets/images/coffee/havaiano.png";
import irlandesImage from "../../assets/images/coffee/irlandes.png";
import latteImage from "../../assets/images/coffee/latte.png";
import macchiatoImage from "../../assets/images/coffee/macchiato.png";
import mochaccinoImage from "../../assets/images/coffee/mochaccino.png";

export const coffee = [
  {
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    image: expressoImage,
    specifications: ["Tradicional"],
    price: 490,
  },
  {
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    image: americanoImage,
    specifications: ["Tradicional"],
    price: 590,
  },

  {
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    image: expressoCremosoImage,
    specifications: ["Tradicional"],
    price: 690,
  },

  {
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    image: cafeGeladoImage,
    specifications: ["Tradicional", "Gelado"],
    price: 690,
  },
  {
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    image: cafeComLeiteImage,
    specifications: ["Tradicional", "Com leite"],
    price: 690,
  },
  {
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    image: latteImage,
    specifications: ["Tradicional", "Com leite"],
    price: 890,
  },
  {
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    image: capuccinoImage,
    specifications: ["Tradicional", "Com leite"],
    price: 990,
  },
  {
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    image: macchiatoImage,
    specifications: ["Tradicional", "Com leite"],
    price: 990,
  },
  {
    name: "Mochaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    image: mochaccinoImage,
    specifications: ["Tradicional", "Com leite"],
    price: 790,
  },
  {
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    image: chocolateQuenteImage,
    specifications: ["Especial", "Com leite"],
    price: 990,
  },
  {
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    image: cubanoImage,
    specifications: ["Especial", "Alcoólico", "Gelado"],
    price: 890,
  },
  {
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    image: havaianoImage,
    specifications: ["Especial"],
    price: 990,
  },
  {
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    image: arabeImage,
    specifications: ["Especial"],
    price: 890,
  },
  {
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    image: irlandesImage,
    specifications: ["Especial", "Alcoólico"],
    price: 990,
  },
];
