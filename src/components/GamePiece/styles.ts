import styled, { css } from "styled-components";

export const GamePieceContainer = styled.div`
  width: 9rem;
  height: 9rem;
  background-color: #0056c0;
  cursor: pointer;
  margin: 0;
`;

export const GamePieceCircle = styled.div<{ pieceColor: string }>`
  width: 8rem;
  height: 8rem;
  border: 0.2rem solid #000;
  border-radius: 90px;

  ${({ pieceColor }) => {
    if (pieceColor === "white") {
      return css`
        background-color: white;
      `;
    } else if (pieceColor === "blue") {
      return css`
        background-color: blue;
      `;
    } else if (pieceColor === "red") {
      return css`
        background-color: red;
      `;
    }
  }}
`;
