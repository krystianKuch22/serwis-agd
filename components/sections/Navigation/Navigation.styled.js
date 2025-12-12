import styled from "styled-components";

export const NavigationStyled = styled.nav`
  position: fixed;
  left: 0;
  width: 100%;
  top: 0;
  background-color: var(--main-color, #ffffff);
  color: ${(p) => p.theme?.text ?? "#111"};
  z-index: 40;

  .contact-container-desktop {
  display: none;

  @media (min-width: 1200px) {
    display: flex;
    color: var(--regular-white-color);

    h3{
      font-size: .8rem;
      margin-right: 1em;
    }
      

    .contact-column{
      display: flex;
      flex-direction: column;
      gap: 1em;
      padding-right: 2em;
    }
  }
}

@media (min-width: 1200px) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
}
`;

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8em 1.4em;

  @media (min-width: 1200px) {

    
    div{
      padding-left: 2em;

      a{
        padding-top: 1em;
      }
    }
  }


  .desktop-info {
    display: none;
    @media (min-width: 1200px) {
      display: block;
      color: var(--regular-white-color);
    }
  }
`;

export const Brand = styled.a`
  h1 {
    margin: 0;
    font-size: 1rem;
    color: var(--regular-white-color);
    text-transform: uppercase;
  }
`;

export const Menu = styled.div`
  overflow: hidden;
  max-height: ${(p) => (p.open ? "60vh" : "0px")};
  padding: ${(p) => (p.open ? "3em 0" : "0")};
  transition: max-height 1000ms, padding 500ms;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;


  a {
    color: var(--regular-white-color);
  }

  @media (min-width: 1200px) {
    overflow: visible;
    flex-direction: row;
    padding: 0;
    max-height: none;
    gap: 1em;
    font-size: .8rem;

    a{
      font-size: .9rem;
    }
  }
`;

export const NavWrapper = styled.div`
  /* set a minimal header height when closed */
  padding-top: 0;
`;
