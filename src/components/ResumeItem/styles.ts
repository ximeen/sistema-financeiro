import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
`;

export const Title = styled.h4`
  text-align: center;
  margin-bottom: 5px;
  color: #888;
`;

export const Value = styled.div<{ color?: string }>`
  text-align: center;
  color: ${(props) => props.color ?? "white"};
`;
