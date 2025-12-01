import React from "react";
import { HeaderContainer } from "./Header.styled";
import Wraper from "@/components/layout/Wraper";
import Image from "next/image";
import Button from "@/components/common/Button";


export default function Header() {
  return (
    <HeaderContainer>
        <Wraper>
            <div className="headerImg">
              <Image src="/headerImg.png" alt="hero image" fill style={{objectFit: "contain"}} priority/>
            </div>
            <h1>
                <span>tr serwis</span><br/>
                serwis agd
            </h1>
            <div className="deco-line"></div>
            <p>
                Naprawiamy i serwisujemy sprzęty AGD: pralki, lodówki, zmywarki, płyty indukcyjne i wiele innych. Dojeżdżamy do klienta - Łódź i okolice. 
            </p>
            <div className="contact-btn">
                <Button/>
            </div>
        </Wraper>
    </HeaderContainer>
  );
}
