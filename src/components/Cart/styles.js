import styled from "styled-components";

const StyledAside = styled.aside`
  border-radius: 8px;
  overflow: hidden;

  > div {
    min-height: 13.938rem;
  }

  h2 {
    background-color: var(--color-primary-100);
    color: var(--white);

    padding: 22px 20px;
  }

  .empty {
    flex: 1;
    justify-content: center;
    align-items: center;
  }

  .cart-info {
    padding: 20px;
    gap: 20px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;

    div {
      flex-direction: row;
      align-items: stretch;
      gap: 10px;

      .image {
        background-color: var(--grey-20);

        border-radius: 5px;
        width: 80px;

        img {
          width: 100%;
        }
      }

      .description {
        flex: 1;
        flex-direction: row;

        .details {
          justify-content: space-between;
          gap: 5px;

          em {
            background-color: var(--color-primary-100);
            color: var(--white);

            border-radius: 50%;
            width: 1.7rem;
            height: 1.7rem;

            display: flex;
            justify-content: center;
            align-items: center;
          }
        }

        .buttonContainer {
          flex: 1;
        }
      }
    }
  }

  .cart-details {
    border-top: 2px solid var(--grey-20);
    padding-top: 20px;

    gap: 20px;

    div {
      flex-direction: row;
      justify-content: space-between;

      h4 {
        color: var(--grey-100);
        font-weight: 600;
      }
    }

    button {
      height: 3.75rem;
    }
  }
`;

export default StyledAside;
