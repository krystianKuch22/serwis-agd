import { TitleStyled } from "./Title.styled";

export default function Title({ children }) {
  return (
    <TitleStyled>
      <h2>{children}</h2>
    </TitleStyled>
  );
}
