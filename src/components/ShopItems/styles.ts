import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 4px;
  min-height: 100px;
  width: auto;
  transition: 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND.hoverPrimary};
    cursor: pointer;
  }

  &:active {
    opacity: 0.7;
  }
`;

export const ImageContainer = styled.div`
  min-width: 95px;
  height: 95px;
  display: flex;
  border: 1px solid #c9c9c9;

  img {
    margin: auto;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const InfosContainer = styled.div`
  height: 95px;
  width: 100%;
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ItemName = styled.span`
  font-weight: bold;
  font-size: 13px;
`;

export const ItemPrice = styled.span`
  font-size: 12px;
`;

export const ItemSellPrice = styled.span`
  font-weight: bold;
`;
