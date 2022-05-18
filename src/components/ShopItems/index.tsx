import { useContext } from "react";
import * as S from "./styles";

import Image from "next/image";

//types
import { IItems } from "../../types/Items.interface";

type IProps = {
  item: IItems;
  sell?: boolean;
};

//context
import { CartContext } from "../../contexts/CartContext";

//utils
import { currencyConverter } from "../../utils/currencyConverter";

function ShopItems({ item, sell }: IProps) {
  const { addItemToCart, removeItemToCart } = useContext(CartContext);

  function handleChangeCart() {
    sell ? removeItemToCart(item.uniqueId) : addItemToCart(item.uniqueId);
  }

  return (
    <S.Container onClick={handleChangeCart}>
      <S.ImageContainer>
        <Image src={item.imageUrl} width="100%" height="100%" alt={item.name} />
      </S.ImageContainer>
      <S.InfosContainer>
        <S.ItemName>{item.name}</S.ItemName>
        <S.ItemPrice>{currencyConverter(item.price)}</S.ItemPrice>
        <S.ItemSellPrice>
          {currencyConverter(item.sellingPrice)}
        </S.ItemSellPrice>
      </S.InfosContainer>
    </S.Container>
  );
}

export { ShopItems };
