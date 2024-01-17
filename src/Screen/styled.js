import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 8px;
`;
export const StepTitle = styled.div`
  font-family: sans-serif;
  font-size: 24px;
  letter-spacing: 0.01em;
  font-weight: 500;
  text-align: center;
`;
export const FormGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(70px, auto); /* Set a minimum height for rows */
  gap: 32px;
  margin: 12px;
  margin-top: 18px;
  @media (max-width: 850px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const ButtonDiv = styled.div`
  text-align: right;
  padding: 8px;
`;
