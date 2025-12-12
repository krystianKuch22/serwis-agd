import Title from "@/components/common/Title/Title";
import { WhyTrustStyled } from "./WhyTrust.styled";
import TrustTile from "@/components/common/TrustTile";
import Wraper from "@/components/layout/Wraper";

export default function WhyTrust() {
  return (
    <WhyTrustStyled id="why-trust">
      <Title>dlaczego warto nam zaufać</Title>
      <Wraper view="desktop">
        <TrustTile
          imgSrc="/whyTrust/specialist.svg"
          title="Zespół specjalistów"
        >
          Nasz zespół to specjaliści z branży AGD z ogromnym doświadczeniem. Nie
          tylko naprawią szkodę, ale też doradzą i wesprą w obsłudze sprzętu.
        </TrustTile>
        <TrustTile imgSrc="/whyTrust/guarante.svg" title="Gwarancja serwisowa">
          Po zakończeniu prac sprawdzamy działanie urządzenia i wystawiamy
          gwarancję serwisową.
        </TrustTile>
        <TrustTile imgSrc="/whyTrust/location.svg" title="Naprawa na miejscu ">
          Po umówieniu dogodnego terminu, nasz technik przyjeżdża na miejsce,
          żeby zdiagnozować przyczynę awarii.
        </TrustTile>
        <TrustTile imgSrc="/whyTrust/quick.svg" title="Szybka obsługa">
          Zdajemy sobie sprawę, że awaria sprzętu AGD wymaga jak najszybszej
          reakcji. Dlatego oferujemy jak najszybszy dojazd na miejsce usterki.
        </TrustTile>
      </Wraper>
    </WhyTrustStyled>
  );
}
