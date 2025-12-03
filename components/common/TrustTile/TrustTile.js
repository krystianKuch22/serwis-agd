import Image from "next/image";
import { TrustTileStyled } from "./TrustTile.styled";

export default function TrustTile({children, title, imgSrc}) {
  return <TrustTileStyled>
    <div className="img">
        <Image
                    src={imgSrc}
                    alt="hero image"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
    </div>
    <h3>{title}</h3>
    <p>{children}</p>
  </TrustTileStyled>;
}
