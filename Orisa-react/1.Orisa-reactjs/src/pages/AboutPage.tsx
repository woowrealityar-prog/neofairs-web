import PageMeta from "@/seo/PageMeta";
import Section1 from "@/shared/sections/services-2/Section1";
import Section2 from "@/shared/sections/index-3/Section2";
import Section3 from "@/shared/sections/index-2/Section4";
import Section4 from "@/shared/sections/about-3/Section3";
import Section5 from "@/shared/sections/services-2/Section3";

const STATS_ITEMS = [
  "21 Countries",
  "100+ Clients",
  "1,500+ Buyer Meetings",
  "30,000+ Minutes of Meetings",
  "21 Countries",
  "100+ Clients",
  "1,500+ Buyer Meetings",
  "30,000+ Minutes of Meetings",
];

export default function AboutPage() {
  return (
    <>
      <PageMeta title="NeoFairs — About Us" />
      <Section1
        badge="About NeoFairs"
        title="Buyers for Indian businesses. Wherever the buyers are."
        subtitle="We took Indian exhibitors to buyers in 21 countries. Now we bring the same tools home."
      />
      <Section2 items={STATS_ITEMS} />
      <Section3
        eyebrow="How we got here"
        rightLabel="© Since 2012"
        items={[
          {
            title: "We started with fairs",
            subtitle: "Virtual trade fairs across 21 countries.",
            description: "Trusted by the Ministry of Textiles, Govt of India.",
            image: "/assets/imgs/pages/img-30.webp",
            itemClass: "pb-40",
            btnText: "Explore Fairs",
            btnLink: "/virtual-trade-fairs",
          },
          {
            title: "The fairs worked. For three days a year.",
            subtitle: "Exhibitors needed more.",
            description: "Exhibitors kept telling us the same thing: we need buyers every day, not three days a year. So we built the Living Showroom.",
            image: "/assets/imgs/pages/img-31.webp",
            itemClass: "pb-40",
            btnText: "Explore Showrooms",
            btnLink: "/living-showroom",
          },
          {
            title: "Now, one ecosystem",
            subtitle: "Built for businesses finding buyers.",
            description: "A fair to meet buyers. A showroom that lives on after it. A marketplace that keeps you listed all year. Built for businesses finding buyers in India first, and abroad when they’re ready.",
            image: "/assets/imgs/pages/img-32.webp",
            itemClass: "pb-50",
            btnText: "Explore Marketplace",
            btnLink: "/marketplace",
          },
        ]}
      />
      <Section4 />
      <Section5 />
    </>
  );
}
