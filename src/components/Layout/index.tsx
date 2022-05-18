import React, { useState } from "react";
import * as S from "./styles";

//types
type IProps = {
  children: React.ReactNode;
};

//components
import Image from "next/image";

import { useRouter } from "next/router";

function Layout({ children }: IProps) {
  const router = useRouter();

  const pageName = router.pathname.slice(1);

  function handleMove() {
    pageName === "home" ? router.push("/cart") : router.push("/home");
  }

  return (
    <S.Container>
      <S.Card>
        <S.Header>
          <h1>{pageName === 'cart'? 'Meu Carrinho': pageName}</h1>
        </S.Header>
        <S.Body>
          <S.SwitchContainer>
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
          {children}
        </S.Body>
      </S.Card>
    </S.Container>
  );
}

export { Layout };
