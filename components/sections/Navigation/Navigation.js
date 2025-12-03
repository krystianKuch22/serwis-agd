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
        <Brand href="#home"><h1>tr serwis - serwis agd</h1></Brand>
        <BurgerButton
          isOpen={open}
          onClick={toggle}
          ariaLabel="Toggle navigation"
        />
      </TopRow>

      <Menu open={open}>
        <a href="#about-us" onClick={toggle}>O nas</a>
        <a href="#services" onClick={toggle}>Nasze Usługi</a>
        <a href="#brands" onClick={toggle}>Urządzenia Marek</a>
        <a href="#why-trust" onClick={toggle}>Dlaczego warto nam zaufać?</a>
        <a href="#contact" onClick={toggle}>Kontakt</a>
      </Menu>
    </NavigationStyled>
  );
}
