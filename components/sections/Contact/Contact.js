import Button from "@/components/common/Button";
import { ContactStyled } from "./Contact.styled";
import Image from "next/image";

export default function Contact() {
  return (
    <ContactStyled>
      <div className="first-div">
        <h2>
          skontaktuj się z nami <span>i zamów wizytę serwisanta</span>
        </h2>
        <Button />
      </div>
      <div className="img">
        <Image
          src="/contactImg.png"
          alt="hero image"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
    </ContactStyled>
  );
}
