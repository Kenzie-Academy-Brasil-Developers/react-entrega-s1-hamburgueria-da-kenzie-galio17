import styled from "styled-components";

const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

const StyledMain = styled.main`
  flex: 1;

  ul {
    height: 21.625rem;

    overflow-x: scroll;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;

    ::-webkit-scrollbar {
      background-color: var(--black);
    }

    ::-webkit-scrollbar-thumb {
      border-color: var(--black);
    }
  }

  li {
    border-radius: 8px;
    border: 2px solid var(--grey-20);
    width: 18.75rem;
    max-width: 70vw;
    height: 21.625rem;

    overflow: hidden;

    display: inline-flex;

    div {
      height: 100%;

      justify-content: space-between;
      align-items: center;

      .description {
        background-color: ${darkMode ? "var(--black)" : "var(--white)"};
        padding: 23px 20px;
        gap: 14px;

        .details {
          gap: 14px;

          h3 {
            color: var(--grey-100);
          }
        }
      }
    }
  }
`;

export default StyledMain;
