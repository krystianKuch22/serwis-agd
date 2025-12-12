import Image from "next/image";
import { BrandLogoStyled } from "./BrandLogo.styled";

export default function BrandLogo({ logoImg, alt }) {
  return (
    <BrandLogoStyled>
      <Image
        src={logoImg}
        alt={alt}
        fill
        style={{ objectFit: "contain" }}
        loading="lazy"
      />
    </BrandLogoStyled>
  );
}
