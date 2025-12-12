import Title from "@/components/common/Title/Title";
import { BrandsStyled } from "./Brands.styled";
import BrandLogo from "@/components/common/BrandLogo";
import Wraper from "@/components/layout/Wraper";

export default function Brands() {
  return (
    <BrandsStyled id="brands">
      <Title>urządzenia marek:</Title>
      <Wraper>
        <div className="brands-container">
          <BrandLogo logoImg="/brands/amica.svg" alt="amica"/>
          <BrandLogo logoImg="/brands/zelmer.svg" alt="zelmer"/>
          <BrandLogo logoImg="/brands/bosh.svg" alt="bosh"/>
          <BrandLogo logoImg="/brands/whirlpool.svg" alt="whirlpool"/>
          <BrandLogo logoImg="/brands/electrolux.svg" alt="electrolux"/>
          <BrandLogo logoImg="/brands/siemens.svg" alt="siemens"/>
          <BrandLogo logoImg="/brands/aeg.svg" alt="aeg"/>
          <BrandLogo logoImg="/brands/miele.svg" alt="miele"/>
          <BrandLogo logoImg="/brands/zanussi.svg" alt="zanussi"/>
          <BrandLogo logoImg="/brands/beko.svg" alt="beko"/>
          <BrandLogo logoImg="/brands/ardo.svg" alt="ardo"/>
          <BrandLogo logoImg="/brands/candy.svg" alt="candy"/>
          <BrandLogo logoImg="/brands/indesit.svg" alt="indesit"/>
          <BrandLogo logoImg="/brands/lg.svg" alt="lg"/>
          <BrandLogo logoImg="/brands/samsung.svg" alt="samsung"/>
        </div>
      </Wraper>
    </BrandsStyled>
  );
}
