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
          <BrandLogo logoImg="/brands/amica.svg" />
          <BrandLogo logoImg="/brands/zelmer.svg" />
          <BrandLogo logoImg="/brands/bosh.svg" />
          <BrandLogo logoImg="/brands/whirlpool.svg" />
          <BrandLogo logoImg="/brands/electrolux.svg" />
          <BrandLogo logoImg="/brands/siemens.svg" />
          <BrandLogo logoImg="/brands/aeg.svg" />
          <BrandLogo logoImg="/brands/miele.svg" />
          <BrandLogo logoImg="/brands/zanussi.svg" />
          <BrandLogo logoImg="/brands/beko.svg" />
          <BrandLogo logoImg="/brands/ardo.svg" />
          <BrandLogo logoImg="/brands/candy.svg" />
          <BrandLogo logoImg="/brands/indesit.svg" />
          <BrandLogo logoImg="/brands/lg.svg" />
          <BrandLogo logoImg="/brands/samsung.svg" />
        </div>
      </Wraper>
    </BrandsStyled>
  );
}
