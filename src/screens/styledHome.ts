import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  text-align: justify;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const StyledQuoteDiv = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: row;
  :hover {
    background-color: black;
    color: #f2f2f2;
    transition: 0.5s;
  }
`;

export const StyledHr = styled.hr`
  height: 130px;
  color: #f3e096;
  background-color: #f3e096;
  width: 6px;
  border: 0px;
`;

export const StyledRandomButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  align-self: flex-end;
  margin-right: 50px;
`;

export const StyledQuoteText = styled.text`
  display: flex;
  align-items: center;
  width: 500px;
  margin-left: 15px;
  font-family: cambria;
  font-size: 20px;
`;
