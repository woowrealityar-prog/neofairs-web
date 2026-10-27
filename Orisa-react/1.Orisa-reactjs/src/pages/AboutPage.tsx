import PageMeta from "@/seo/PageMeta";
import Section1 from "@/shared/sections/services-2/Section1";
import Section2 from "@/shared/sections/index-3/Section2";
import Section3 from "@/shared/sections/index-2/Section4";
import Section4 from "@/shared/sections/index-15/Section5";
import Section5 from "@/shared/sections/about-3/Section3";
import Section6 from "@/shared/sections/services-2/Section3";

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

const VALUES_ITEMS = [
  {
    num: "01",
    title: "We build it. You sell.",
    desc: "No tech team needed on your side.",
    delay: ".1",
  },
  {
    num: "02",
    title: "You keep 100%",
    desc: "No commission on any sale.",
    delay: ".15",
  },
  {
    num: "03",
    title: "Your data is yours",
    desc: "Every visitor, every RFQ, every buyer. Yours.",
    delay: ".2",
  },
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
      <Section4
        badge="Values"
        badgeMeta="Our principles"
        title="What we hold to."
        copy=""
        showCta={false}
        gridColsClass="row row-cols-lg-3 row-cols-md-3 row-cols-1 gx-0 gy-0 sec-5-home-15__phases"
        phases={VALUES_ITEMS}
      />
      <Section5 />
      <Section6 />
    </>
  );
}
