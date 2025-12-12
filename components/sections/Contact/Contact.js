import Button from "@/components/common/Button";
import { ContactStyled } from "./Contact.styled";
import Image from "next/image";

export default function Contact() {
  return (
    <ContactStyled id="contact">
      <div className="first-div">
        <h2>
          skontaktuj się z nami <span>i zamów wizytę serwisanta</span>
        </h2>
        <a href="tel:+48502147044">502 147 044</a>
        <a href="mailto:trserwis@gmail.com">trserwis@gmail.com</a>
      </div>
      <div className="img">
        <Image
          src="/contactImg.png"
          alt="Kobieta oraz fachowiec podają sobie ręce"
          fill
          style={{ objectFit: "cover" }}
          priority
          fetchPriority="high"
        />
      </div>
    </ContactStyled>
  );
}
