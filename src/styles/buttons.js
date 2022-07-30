import styled, { css } from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => {
    switch (theme) {
      case "primary":
        return css`
          background-color: var(--color-primary-100);
          color: var(--white);

          padding: 10px 20px;
          border-radius: 8px;

          &:hover {
            background-color: var(--color-primary-50);
          }
        `;

      case "secondary":
        return css`
          background-color: var(--grey-20);
          color: var(--grey-50);
          padding: 10px 20px;
          border-radius: 8px;

          &:hover {
            background-color: var(--grey-50);
            color: var(--grey-20);
          }
        `;

      default:
        return css`
          background-color: transparent;
          color: var(--grey-30);
          font-weight: 500;

          &:hover {
            color: var(--grey-50);
          }

          &:active {
            color: var(--color-primary-100);
            text-shadow: 1px 1px var(--color-primary-50);
          }
        `;
    }
  }}
`;

export default Button;
