import React, { useState } from "react";
import BurgerButton from "@/components/common/BurgerButton";
import { NavigationStyled, TopRow, Brand, Menu } from "./Navigation.styled";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  const toggle = (e) => {
    setOpen((s) => !s);
  };

  return (
    <NavigationStyled>
      <TopRow>
        <div>
          <Brand href="#home">
            <h2>tr serwis - serwis agd</h2>
          </Brand>
          <a href="https://maps.app.goo.gl/Jhw7LhHBBtprxduY9" className="desktop-info">
            ul. Kolumny 616, 93-649 Łódź
          </a>
        </div>
        <BurgerButton
          isOpen={open}
          onClick={toggle}
          ariaLabel="Toggle navigation"
        />
      </TopRow>

      <Menu open={open}>
        <a href="#about-us" onClick={toggle}>
          O nas
        </a>
        <a href="#services" onClick={toggle}>
          Nasze Usługi
        </a>
        <a href="#brands" onClick={toggle}>
          Urządzenia Marek
        </a>
        <a href="#why-trust" onClick={toggle}>
          Dlaczego warto nam zaufać?
        </a>
        <a href="#contact" onClick={toggle}>
          Kontakt
        </a>
      </Menu>

      <div className="contact-container-desktop">
        <div>
          <h3>Skontaktuj się z nami:</h3>
        </div>
        <div className="contact-column">
          <a href="tel:+48502223344" className="phone-number">
            +48 502 223 344
          </a>
          <a href="mailto:tadeusz.rosiak@gmail.com" className="email">
            tadeusz.rosiak@gmail.com
          </a>
        </div>
      </div>
    </NavigationStyled>
  );
}
