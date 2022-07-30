import styled from "styled-components";

const StyledHomepage = styled.div`
  .principal-container {
    gap: 20px;

    @media (min-width: 972px) {
      flex-direction: row;

      main {
        flex: 1;

        ul {
          flex-flow: row wrap;
          overflow: visible;
          height: unset;
        }
      }

      aside {
        width: 300px;
        height: max-content;

        position: sticky;
        top: calc(50vh - 240px);
        ul {
          max-height: 40vh;
          overflow-y: scroll;
        }
      }
    }
  }
`;

export default StyledHomepage;
