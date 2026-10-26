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
      <SectionOurClients />
      <SectionImageStrips />
      <SectionFaq />
      <SectionPricedPerFair />
      <SectionExhibitForm />
    </>
  );
}


