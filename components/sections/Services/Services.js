import Title from "@/components/common/Title/Title";
import { ServicesStyled } from "./Services.styled";
import ServiceTile from "@/components/common/ServiceTile";

export default function Services() {
  return (
    <ServicesStyled>
      <Title>nasze usługi:</Title>
      <div className="services-container">
        <ServiceTile img="/fridge.png">lodówka</ServiceTile>
        <ServiceTile img="/vending.png">lodówka</ServiceTile>
        <ServiceTile img="/dish.png">lodówka</ServiceTile>
        <ServiceTile img="/frozer.png">lodówka</ServiceTile>
        <ServiceTile img="/okap.png">lodówka</ServiceTile>
        <ServiceTile img="/kitchen.png">lodówka</ServiceTile>
        <ServiceTile img="/furnance.png">lodówka</ServiceTile>
        <ServiceTile img="/fire.png">lodówka</ServiceTile>
        <ServiceTile img="/induction.png">lodówka</ServiceTile>
        <ServiceTile img="/dryer.png">lodówka</ServiceTile>
      </div>
    </ServicesStyled>
  );
}
