import Image from "next/image";
import { ServiceTileStyled } from "./Service.styled";

export default function ServiceTile({children, img}) {
  return <ServiceTileStyled>
    <div className="tileImg">
        <Image src={img} alt="hero image" fill style={{objectFit: "contain"}} priority/>
    </div>
    <h3>{children}</h3>
  </ServiceTileStyled>;
}