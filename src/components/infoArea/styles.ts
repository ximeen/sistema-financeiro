import styled from "styled-components";

export const Container = styled.div`
  background-color: #27272a;
  box-shadow: 4px 4px 8px #27272a;
  border-radius: 10px;
  padding: 20px;
  margin-top: -40px;

  display: flex;
  align-items: center;

  @media (max-width: 666px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const MonthArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  max-width: 250px;
  width: 100%;
`;

export const MonthArrow = styled.div`
  text-align: center;
  cursor: pointer;
`;

export const MonthTitle = styled.h1`
  flex: 1;
  font-size: 1.4rem;
  text-align: center;

  @media (max-width: 666px) {
    font-size: 1.2rem;
  }
`;

export const ResumeArea = styled.div`
  flex: 1;
  display: flex;

  @media (max-width: 666px) {
    gap: 10px;
  }
`;
