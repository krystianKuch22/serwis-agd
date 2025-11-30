import styled from "styled-components";

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

export const Box = styled.span`
  width: 24px;
  height: 16px;
  display: inline-block;
  position: relative;
`;

export const Bar = styled.span`
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: ${(p) => p.theme?.text ?? "#FFF"};
  border-radius: 2px;
  transition: transform 0.35s cubic-bezier(0.2, 0.9, 0.3, 1),
    top 0.35s cubic-bezier(0.2, 0.9, 0.3, 1), opacity 0.2s;
  transform-origin: center;

  top: ${(p) =>
    p.index === 1
      ? p.open
        ? "7px"
        : "0px"
      : p.index === 2
      ? "7px"
      : p.open
      ? "7px"
      : "14px"};
  transform: ${(p) =>
    p.open
      ? p.index === 1
        ? "rotate(45deg)"
        : p.index === 2
        ? "scaleX(0)"
        : "rotate(-45deg)"
      : "none"};
  opacity: ${(p) => (p.open && p.index === 2 ? 0 : 1)};
`;
