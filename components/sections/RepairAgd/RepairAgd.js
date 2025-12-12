import Image from "next/image";
import { RepairAgdStyled } from "./RepairAgd.styled";
import Wraper from "@/components/layout/Wraper";

export default function RepairAgd() {
  return (
    <RepairAgdStyled id="about-us">
      <Wraper view="desktop">
        <h2>naprawa agd</h2>
        <p>
          Niesprawna pralka, lodówka, a może zmywarka? Doskonale rozumiemy jak
          uciążliwa i kosztowna jest awaria podstawowych sprzętów gospodarstwa
          domowego. Dzięki wieloletniemu doświadczeniu w serwisowaniu i naprawie
          AGD, jesteśmy w stanie naprawić każdy sprzęt - pralki, lodówki,
          zamrażarki i wiele innych urządzeń. Działamy na produktach wielu
          znanych marek. Służymy fachową poradą oraz doradztwem przy wyborze
          sprzętu. Działamy na terenie Łodzi i okolic (z dojazdem do klienta).
        </p>
        
      </Wraper>
      <div className="repair-agd-img">
          <Image
            src="/repairAgdImg.png"
            alt="Kobieta załamana zepsutą pralką"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
    </RepairAgdStyled>
  );
}
