import Image from "next/image";
import { ServiceTileStyled } from "./Service.styled";

export default function ServiceTile({children, img, alt}) {
  return <ServiceTileStyled>
    <div className="tileImg">
        <Image src={img} alt={alt} fill style={{objectFit: "contain"}} loading="lazy"/>
    </div>
    <h3>{children}</h3>
  </ServiceTileStyled>;
}