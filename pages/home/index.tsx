import { useContext } from "react";
import * as S from "./styles";

//types
import type { NextPage } from "next";

//context
import { CartContext } from "../../src/contexts/CartContext";

//components
import { ShopItems } from "../../src/components/ShopItems";

const Home: NextPage = () => {
  const { items } = useContext(CartContext);

  return (
    <S.Container>
      <S.Content>
        {items.map((item) => (
          <ShopItems key={item.uniqueId} item={item} />
        ))}
      </S.Content>
      
    </S.Container>
  );
};

export default Home;
