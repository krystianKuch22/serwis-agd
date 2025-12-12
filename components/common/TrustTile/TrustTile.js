import Image from "next/image";
import { TrustTileStyled } from "./TrustTile.styled";

export default function TrustTile({children, title, imgSrc, alt}) {
  return <TrustTileStyled>
    <div className="img">
        <Image
                    src={imgSrc}
                    alt={alt}
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
    </div>
    <h3>{title}</h3>
    <p>{children}</p>
  </TrustTileStyled>;
}
