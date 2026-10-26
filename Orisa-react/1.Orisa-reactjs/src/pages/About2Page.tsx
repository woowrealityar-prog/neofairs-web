import PageMeta from "@/seo/PageMeta";
import Section1 from "@/shared/sections/about-2/Section1";
import SectionNotAnotherListing from "@/shared/sections/about-2/SectionNotAnotherListing";
import SectionWhatMembersGet from "@/shared/sections/about-2/SectionWhatMembersGet";
import SectionThreeSteps from "@/shared/sections/about-2/SectionThreeSteps";
import SectionBrowseByIndustry from "@/shared/sections/about-2/SectionBrowseByIndustry";
import SectionIntroductoryPricing from "@/shared/sections/about-2/SectionIntroductoryPricing";
import SectionMarketplaceFaq from "@/shared/sections/about-2/SectionMarketplaceFaq";
import SectionGetListedEarly from "@/shared/sections/about-2/SectionGetListedEarly";

export default function About2Page() {
  return (
    <>
      <PageMeta title="NeoFairs — B2B Marketplace" />
      <Section1 />
      <SectionNotAnotherListing />
      <SectionWhatMembersGet />
      <SectionThreeSteps />
      <SectionBrowseByIndustry />
      <SectionIntroductoryPricing />
      <SectionMarketplaceFaq />
      <SectionGetListedEarly />
    </>
  );
}
