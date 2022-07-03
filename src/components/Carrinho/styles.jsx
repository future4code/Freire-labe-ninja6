import styled from "styled-components";

export const BalaoCarrinho = styled.div`
  display: ${({ mostrar }) => (mostrar ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  z-index: 1;
  top: 56px;
  right: 20px;
  left: auto;
  min-height: 100px;
  min-width: 260px;
  background-color: #e0e0e0;
  border-radius: 10px;
  border: 1px solid black;
  padding: 10px;
  &::after {
    content: "";
    position: absolute;
    top: -15px;
    left: 235px;
    border-left: 15px solid transparent;
    border-bottom: 15px solid #e0e0e0;
  }
  &::before {
    content: "";
    position: absolute;
    top: -18px;
    left: 234px;
    border-left: 17px solid transparent;
    border-bottom: 17px solid black;
  }
  & > hr {
    margin-bottom: 10px;
  }
  & > h2 {
    margin: 15px auto;
  }
`;

export const CardCarrinho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  width: 92%;
  padding: 10px;
  margin-bottom: 5px;
  & > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  & > div > span:first-child {
    font-weight: bold;
  }
`;

export const TituloCarrinho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`;

export const BotaoEsvaziar = styled.button`
  width: fit-content;
  margin: 5px 0;
`;

export const FinalCarrinho = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;