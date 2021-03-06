import { useContext, useEffect, useState } from "react";
import * as S from "../src/styles/cart";

//types
import type { NextPage } from "next";

//context
import { CartContext } from "../src/contexts/CartContext";

//components
import { ShopItems } from "../src/components/ShopItems";

//utils
import { currencyConverter } from "../src/utils/currencyConverter";

const Cart: NextPage = () => {
  const { cart } = useContext(CartContext);

  const [totalCartValue, setTotalCartValue] = useState(0);

  useEffect(() => {
    if (cart[0]) {
      const totalValue = cart
        .map((prod) => prod.sellingPrice)
        .reduce((total, preco) => total + preco);

      setTotalCartValue(totalValue);
    } else {
      setTotalCartValue(0);
    }
  }, [cart]);

  if (!cart[0]) {
    return (
      <S.Container>
        <S.NoItems>
          <h3>Sem items em seu carrinho, experimente adicionar alguns!</h3>
        </S.NoItems>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Content>
        {cart.map((item) => (
          <ShopItems key={item.uniqueId} item={item} sell />
        ))}
      </S.Content>
      <S.Footer>
        <S.TotalContainer>
          <div>
            <span>Total</span>
            <span>{currencyConverter(totalCartValue)}</span>
          </div>
          <S.PopUp opacity={totalCartValue > 1000 ? 1 : 0}>
            <span>Parabéns, sua compra tem frete grátis !</span>
          </S.PopUp>
        </S.TotalContainer>
        <button onClick={() => alert('Mande o feedback para leonardolopessocial@gmail.com')}>Finalizar compra</button>
      </S.Footer>
    </S.Container>
  );
};

export default Cart;
