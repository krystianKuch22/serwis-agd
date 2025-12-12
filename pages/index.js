import Head from "next/head";
import Navigation from "@/components/sections/Navigation";
import Header from "@/components/sections/Header";
import RepairAgd from "@/components/sections/RepairAgd";
import Services from "@/components/sections/Services";
import Brands from "@/components/sections/Brands";
import WhyTrust from "@/components/sections/WhyTrust";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Naprawa AGD Łódź – TR Serwis Tadeusz Rosiak</title>
        <meta
          name="description"
          content="Profesjonalna naprawa pralek, lodówek i innego sprzętu AGD w Łodzi. TR Serwis – szybka i uczciwa pomoc."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navigation />
      <Header />
      <RepairAgd />
      <Services />
      <Brands />
      <WhyTrust />
      <Contact />
      <Footer />
    </>
  );
}
