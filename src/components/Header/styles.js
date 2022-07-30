const { default: styled } = require("styled-components");

const StyledHeader = styled.header`
  .content {
    align-items: center;
    gap: 14px;

    @media (min-width: 440px) {
      flex-direction: row;
    }
  }

  h1 {
    color: var(--grey-100);
    width: 13.724rem;
    font: var(--heading-2);
    text-align: center;

    span {
      color: var(--color-secondary);
      font: var(--heading-4);
    }

    @media (min-width: 440px) {
      text-align: start;
    }
  }

  .search {
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    input {
      background-color: var(--white);
      color: var(--grey-20);

      width: 100%;
      border: 2px solid var(--grey-20);
      border-radius: 8px;
      padding: 20px 7.6rem 20px 15px;

      &:focus {
        border-color: var(--grey-100);
      }

      &::placeholder {
        color: var(--grey-20);
      }

      @media (min-width: 440px) {
        max-width: 365px;
      }
    }

    button {
      margin: 10px;
      position: absolute;
    }
  }
`;

export default StyledHeader;
