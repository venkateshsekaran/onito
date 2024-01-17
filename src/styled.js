import { fadeOutAnimation } from "./Component/animation";
import styled from "@emotion/styled";

export const MainAppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-x: auto;
  animation: ${fadeOutAnimation} 2s ease-out;
`;
export const AppLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(152px, auto); /* Set a minimum height for rows */
  gap: 10px;
  padding: 12px;
  @media (max-width: 575px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const TimelineDiv = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  grid-row: span 4;
  grid-column: span 1;
  border-radius: 8px;
`;
export const FormDiv = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  grid-row: span 4;
  grid-column: span 2;
  border-radius: 8px;
  animation: ${fadeOutAnimation} 2s ease-out;
`;
export const TableDiv = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 12px;
  border-radius: 8px;
`;
