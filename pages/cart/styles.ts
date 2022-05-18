import styled from "styled-components";

type props = {
  opacity: number;
};

export const Container = styled.div`
  height: 100%;
`;

export const NoItems = styled.div`
  height: 100%;
  display: flex;

  h3 {
    margin: auto;
    text-align: center;
  }
`;

export const Content = styled.div`
  height: 450px;
  overflow-y: auto;
`;

export const Footer = styled.div`
  height: 180px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  button {
    background: ${({ theme }) => theme.COLORS.BLUE.light};
    border: none;
    border-radius: 15px;
    color: #fff;
    font-size: 20px;
    font-weight: bolder;
    height: 55px;
    margin: auto;
    width: 357px;
    cursor: pointer;
    transition: 0.1s;

    :hover {
      background: ${({ theme }) => theme.COLORS.BLUE.dark};
    }

    :active {
      opacity: 0.8;
    }
  }
`;

export const TotalContainer = styled.div`
  width: 100%;
  height: 110px;
  border: solid 1px #c4c4c4;
  border-inline: none;
  padding: 24px;

  div {
    display: flex;
    justify-content: space-between;

    span {
      font-weight: bold;
      font-size: 18px;
    }
  }
`;

export const PopUp = styled.div<props>`
  height: 40px;
  background: ${({ theme }) => theme.COLORS.GREEN.light};
  border-radius: 30px;
  margin: 8px auto;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: ${(props) => props.opacity};

  span {
    margin: auto;
    font-weight: normal;
    font-size: 15px !important;
    color: ${({ theme }) => theme.COLORS.GREEN.dark};
  }

  transition: 0.1s;
`;
