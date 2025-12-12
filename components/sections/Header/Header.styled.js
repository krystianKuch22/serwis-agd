import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  min-height: 60vh;
  background: ${(p) =>
    p.theme?.headerBg ?? "var(--section-one-bg-color, #ffffff)"};
  color: ${(p) => p.theme?.text ?? "#111"};
  padding-top: 8em;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.04);

  .headerImg {
    position: relative;
    width: 8em;
    height: 8em;
  }
  h1 {
    text-align: center;
    text-transform: uppercase;

    span {
      font-size: 0.6em;
    }
  }

  .deco-line {
    width: 100%;
    height: 2px;
    margin-top: 0.5em;
    margin-bottom: 2em;
    background-color: var(--deco-line-color);

    @media (min-width: 1200px) {
      display: none;
    }
  }

  p {
    text-align: center;
    font-weight: 500;
    color: var(--header-paragraph-color);
  }

  .contact-btn {
    margin: 3em 0;
  }

  .desktop {
    display: none;
  }

  @media (min-width: 1200px) {
    .mobile {
      display: none;
    }
    .desktop {
      display: flex;
      flex-direction: row;
      .desktop-column {
        display: flex;
        flex-direction: column;
        align-items: start;
        width: 50%;
        gap: 1em;

        h1 {
          text-align: left;
          font-size: 4rem;
        }

        P {
          text-align: left;
          font-size: 1.4rem;
        }
      }

      .headerImg {
        width: 50%;
        height: 30em;
      }
    }

    .contact-btn {
      margin: 1em 0;
    }
  }
`;
