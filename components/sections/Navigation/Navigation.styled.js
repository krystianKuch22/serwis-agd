import styled from "styled-components";

export const NavigationStyled = styled.nav`
  position: fixed;
  left: 0;
  width: 100%;
  top: 0;
  background-color: var(--main-color, #ffffff);
  color: ${(p) => p.theme?.text ?? "#111"};
  z-index: 40;
`;

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8em 1.4em;
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
`;

export const NavWrapper = styled.div`
  /* set a minimal header height when closed */
  padding-top: 0;
`;
