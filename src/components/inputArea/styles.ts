import styled from "styled-components";

export const Container = styled.div`
  background-color: #27272a;
  box-shadow: 4px 4px 8px #27272a;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;

  display: flex;
  align-items: center;

  @media (max-width: 830px) {
    flex-direction: column;
    align-items: stretch;
  }
  @media (max-width: 666px) {
    align-items: stretch;
  }
`;

export const InputLabel = styled.label`
  flex: 1;
  margin: 10px;
`;
export const InputTitle = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;
export const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid #6d28d9;
  border-radius: 5px;
  background-color: #27272a;
  outline: none;
`;
export const Select = styled.select`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid #6d28d9;
  background-color: #27272a;
  border-radius: 5px;
  outline: none;
`;
export const Button = styled.button`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid #6d28d9;
  border-radius: 5px;
  background-color: #6d28d9;
  color: white;
  cursor: pointer;
  transition: all 0.1s ease-out;

  &:hover {
    background-color: #8b5cf6;
    border: 1px solid #8b5cf6;

    color: white;
  }
`;
