import { ButtonStyled } from "./Button.styled";

export default function Button({ onClick, isNavButton }) {
  if(isNavButton){
    return <ButtonStyled as="a" href="#contact">Kontakt</ButtonStyled>;
  } else {
    return <ButtonStyled onClick={onClick}>Kontakt</ButtonStyled>;
  }
}
