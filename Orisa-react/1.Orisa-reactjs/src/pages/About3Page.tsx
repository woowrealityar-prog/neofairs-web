import PageMeta from "@/seo/PageMeta";
import Section1 from "@/shared/sections/about-3/Section1";
import SectionPdfProblem from "@/shared/sections/about-3/SectionPdfProblem";
import SectionBuiltForYou from "@/shared/sections/about-3/SectionBuiltForYou";
import SectionCatalogCantDo from "@/shared/sections/about-3/SectionCatalogCantDo";
import SectionShowroomGoesToWork from "@/shared/sections/about-3/SectionShowroomGoesToWork";
import SectionNora from "@/shared/sections/about-3/SectionNora";
import SectionPricingPlans from "@/shared/sections/about-3/SectionPricingPlans";
import SectionAnyIndustry from "@/shared/sections/about-3/SectionAnyIndustry";
import SectionFairStall from "@/shared/sections/about-3/SectionFairStall";
import SectionShowroomLiveDemo from "@/shared/sections/about-3/SectionShowroomLiveDemo";
import Section7 from "@/shared/sections/about-3/Section7";

export default function About3Page() {
  return (
    <>
      <PageMeta title="NeoFairs — Living Showroom" />
                <Section1 />
                <SectionPdfProblem />
                <SectionBuiltForYou />
                <SectionCatalogCantDo />
                <SectionShowroomGoesToWork />
                <SectionNora />
                <SectionPricingPlans />
                <SectionAnyIndustry />
                <SectionFairStall />
                <Section7 />
                <SectionShowroomLiveDemo />
            
    </>
  );
}
