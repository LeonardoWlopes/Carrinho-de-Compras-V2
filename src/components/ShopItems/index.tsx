import Image from "next/image";
import * as S from "./styles";

//types
import { IItems } from "../../types/Items.interface";
import { currencyConverter } from "../../utils/currencyConverter";

type IProps = {
  item: IItems;
};

function ShopItems({ item }: IProps) {
  return (
    <S.Container>
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
