import styled from "styled-components";

export const Input = styled.input`
  height: 25px;
  padding-left: 8px;
  margin-right: 15px;
  border: 1px solid lightgray;
  border-radius: 3px;
  margin-bottom: 10px;
  &:hover {
    border-color: black;
  }
  &:focus {
    outline: none;
    border-color: lightsalmon;
  }
`;
export const Select = styled.select`
  height: 29px;
  border-radius: 3px;
  border: 1px solid lightgray;
  &:hover {
    border-color: black;
    cursor: pointer;
  }
  &:focus {
    outline: none;
    border-color: lightsalmon;
  }
`;

export const Div = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  margin-top: 10px;
`;
