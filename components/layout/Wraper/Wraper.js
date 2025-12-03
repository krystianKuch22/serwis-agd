import { WraperStyled } from "./Wraper.styled";

export default function Wraper({children, view}) {
  return <WraperStyled className={view}>{children}</WraperStyled>;
}