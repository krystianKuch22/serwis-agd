import Image from "next/image";
import { BrandLogoStyled } from "./BrandLogo.styled";

export default function BrandLogo({ logoImg }) {
  return (
    <BrandLogoStyled>
      <Image
        src={logoImg}
        alt="hero image"
        fill
        style={{ objectFit: "contain" }}
        priority
      />
    </BrandLogoStyled>
  );
}
