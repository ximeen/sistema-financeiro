import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  background-color: #27272a;
  box-shadow: 0px 5px 7px #27272a;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
`;

export const TableHeadColum = styled.th<{ width?: number }>`
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  padding: 10px 0;
  text-align: left;
`;
