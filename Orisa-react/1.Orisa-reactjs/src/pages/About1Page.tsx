import PageMeta from "@/seo/PageMeta";
import ServiceImageHoverEffect from "@/shared/effects/ServiceImageHoverEffect";
import Section1 from "@/shared/sections/about-1/Section1";
import SectionComparison from "@/shared/sections/index-9/Section3";
import SectionFourSteps from "@/shared/sections/index-1/Section4";
import SectionExhibitors from "@/shared/sections/index-12/Section3";
import SectionLivingShowroom from "@/shared/sections/index-1/Section7";
import SectionBuyerAcquisition from "@/shared/sections/services-details/Section3";
import SectionOurClients from "@/shared/sections/index-2/SectionBrandScroll";
import SectionImageStrips from "@/shared/sections/index-2/SectionImageStrips";
import SectionPricedPerFair from "@/shared/sections/index-8/Section9";
import SectionFaq from "@/shared/sections/about-3/Section7";
import SectionExhibitForm from "@/shared/sections/about-1/SectionExhibitForm";
import { ALL_CLIENT_LOGOS } from "@/data/clientLogos";

// Virtual Trade Fairs uses client logos 1 to 15
const VIRTUAL_FAIR_CLIENT_LOGOS = ALL_CLIENT_LOGOS.slice(0, 15);

export default function About1Page() {
  return (
    <>
      <PageMeta title="NeoFairs — Virtual Trade Fairs" />
      <Section1 />
      <SectionComparison />
      <ServiceImageHoverEffect>
        <SectionFourSteps />
      </ServiceImageHoverEffect>
      <SectionExhibitors />
      <SectionBuyerAcquisition />
      <SectionLivingShowroom />
      <SectionOurClients logos={VIRTUAL_FAIR_CLIENT_LOGOS} />
      <SectionImageStrips />
      <SectionFaq />
      <SectionPricedPerFair />
      <SectionExhibitForm />
    </>
  );
}


