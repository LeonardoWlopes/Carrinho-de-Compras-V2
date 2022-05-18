import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import * as S from "./styles";

//types
type IProps = {
  children: React.ReactNode;
};

//components
import Image from "next/image";

//context
import { CartContext } from "../../contexts/CartContext";

function Layout({ children }: IProps) {
  const router = useRouter();

  const {cart} = useContext(CartContext);

  const pageName = router.pathname.slice(1);

  function handleMove() {
    pageName === "home" ? router.push("/cart") : router.push("/home");
  }

  return (
    <S.Container>
      <S.Card>
        <S.Header>
          <h1>{pageName === "cart" ? "Meu Carrinho" : pageName}</h1>
        </S.Header>
        <S.SwitchContainer>
          <span>{cart.length}</span>
          <Image
            onClick={handleMove}
            src={
              pageName === "home"
                ? "/icons/bx-shopping-bag.svg"
                : "/icons/bx-home-alt.svg"
            }
            width="30"
            height="30"
            alt=""
          />
        </S.SwitchContainer>
        <S.Body>{children}</S.Body>
      </S.Card>
    </S.Container>
  );
}

export { Layout };
