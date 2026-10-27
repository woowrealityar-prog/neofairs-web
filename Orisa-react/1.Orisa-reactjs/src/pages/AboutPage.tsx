import PageMeta from "@/seo/PageMeta";
import Section1 from "@/shared/sections/services-2/Section1";
import Section2 from "@/shared/sections/services-2/Section2";
import Section3 from "@/shared/sections/index-2/Section4";
import Section4 from "@/shared/sections/about-3/Section3";
import Section5 from "@/shared/sections/services-2/Section3";

export default function AboutPage() {
  return (
    <>
      <PageMeta title="NeoFairs — About Us" />
      <Section1
        badge="About NeoFairs"
        title="Buyers for Indian businesses. Wherever the buyers are."
        subtitle="We took Indian exhibitors to buyers in 21 countries. Now we bring the same tools home."
      />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </>
  );
}
