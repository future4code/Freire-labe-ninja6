import styled from "styled-components";

export const Card = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 0.5fr;
  width: 25vw;
  /* height: 25vh; */
  border: 1px solid black;
  & > div {
    display: flex;
    justify-content: space-between;
  }
`;
export const Div = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
`;

export const CardContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;
