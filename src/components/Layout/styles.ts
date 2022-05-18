import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
`;

export const Card = styled.div`
  max-width: 415px;
  height: 750px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND.primary};
  margin: auto;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  width: 100%;
  height: 65px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px #c4c4c4;

  h1 {
    font-size: 24px;
    text-transform: capitalize;
  }
`;

export const Body = styled.div`
  height: 620px;
  padding: 0px 12px;
`;

export const SwitchContainer = styled.div`
  //background: blue;
  display: flex;
  justify-content: end;
  margin: 8px 0px;
  padding: 0 10px;

  img {
    cursor: pointer;
  }
`;
