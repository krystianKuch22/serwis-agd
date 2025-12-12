import Title from "@/components/common/Title/Title";
import { ServicesStyled } from "./Services.styled";
import ServiceTile from "@/components/common/ServiceTile";
import Wraper from "@/components/layout/Wraper";

export default function Services() {
  return (
    <ServicesStyled id="services">
      <Title>nasze usługi:</Title>
      <Wraper>
        <div className="services-container">
          <ServiceTile img="/fridge.png" alt="Naprawa lodówki">Lodówka</ServiceTile>
          <ServiceTile img="/vending.png" alt="Naprawa pralki">Pralka</ServiceTile>
          <ServiceTile img="/dish.png" alt="Naprawa Zmywarki">Zmywarka</ServiceTile>
          <ServiceTile img="/frozer.png" alt="Naprawa Zamrażarki">Zamrażarka</ServiceTile>
          <ServiceTile img="/okap.png" alt="Naprawa Okapu">Okap</ServiceTile>
          <ServiceTile img="/kitchen.png" alt="Naprawa Kuchenki">Kuchenka</ServiceTile>
          <ServiceTile img="/furnance.png" alt="Naprawa piekarnik">Piekarnik</ServiceTile>
          <ServiceTile img="/fire.png" alt="Naprawa płyty grzewczej">Płyta grzewcza</ServiceTile>
          <ServiceTile img="/induction.png" alt="Naprawa płyty indukcyjnej">Płyta indukcyjna</ServiceTile>
          <ServiceTile img="/dryer.png" alt="Naprawa suszarki">Suszarka</ServiceTile>
        </div>
      </Wraper>
    </ServicesStyled>
  );
}
