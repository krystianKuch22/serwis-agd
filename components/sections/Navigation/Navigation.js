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
        <Brand>tr serwis - serwis agd</Brand>
        <BurgerButton
          isOpen={open}
          onClick={toggle}
          ariaLabel="Toggle navigation"
        />
      </TopRow>

      <Menu open={open}>
        <a href="#aboutUs">O nas</a>
        <a href="#services">Nasze Usługi</a>
        <a href="#brands">Urządzenia Marek</a>
        <a href="#whyTrust">Dlaczego warto nam zaufać?</a>
        <a href="#contact">Kontakt</a>
      </Menu>
    </NavigationStyled>
  );
}
