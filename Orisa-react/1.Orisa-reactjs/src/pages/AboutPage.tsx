import PageMeta from "@/seo/PageMeta";
import Section1 from "@/shared/sections/services-2/Section1";
import Section2 from "@/shared/sections/index-3/Section2";
import Section3 from "@/shared/sections/index-2/Section4";
import Section4 from "@/shared/sections/index-15/Section5";
import SectionFounder from "@/shared/sections/index-7/Section8";
import SectionBrandScroll from "@/shared/sections/index-2/SectionBrandScroll";
import SectionImageStrips from "@/shared/sections/index-2/SectionImageStrips";
import Section5 from "@/shared/sections/about-3/Section3";
import SectionAgastronGroup from "@/shared/sections/index-8/Section9";
import { SectionCtaPanel } from "@/shared/sections/pricing-2/Section4";
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
        badgeStyle="marketplace"
        title="What we hold to."
        copy=""
        showCta={false}
        gridColsClass="row row-cols-lg-3 row-cols-md-3 row-cols-1 gx-0 gy-0 sec-5-home-15__phases"
        phases={VALUES_ITEMS}
      />
      <SectionFounder
        containerClass="container"
        eyebrowStyle="testimonial"
        titleStyle="testimonial"
        eyebrowText="Founders"
        eyebrowLink="#founders"
        heading="Founders"
        desc="The People Behind It"
        showCta={false}
        col1Members={[
          {
            name: "Group Chairman",
            surname: "",
            role: "Chairman & Founder",
            img: "/assets/imgs/pages/home-7/team-1-darrell.webp",
            alt: "Darrell Steward",
            badgeClass: "",
          },
        ]}
        col2Members={[
          {
            name: "Group CEO",
            surname: "",
            role: "Chief Executive Officer",
            img: "/assets/imgs/pages/home-7/team-3-esther.webp",
            alt: "Esther Howard",
            badgeClass: "",
          },
        ]}
      />
      <SectionBrandScroll
        eyebrowText="Inauguration"
        title="Inaugurated by Ambassadors and Consuls General"
      />
      <SectionImageStrips />
      {/* <Section5 /> */}
      <SectionAgastronGroup
        title="Part of Agastron Group"
        lead="NeoFairs is one of the Agastron Group ventures, alongside Aranidhi, RulerInsights and Mayvrion. The NeoFairs platform was engineered in-house by Mayvrion, the group’s engineering arm."
        primaryBtnText="agastron.com"
        primaryBtnLink="https://agastron.com"
        isExternalPrimaryLink={true}
        secondaryBtnText=""
        showButtons={true}
        cardKicker="Agastron Group"
        cardText="NeoFairs is a product of CBP Technologies Private Limited, an Agastron Group company"
        cardLink="https://agastron.com"
        showCard={true}
      />
      <section className="pricing-2-cta pt-120 pb-120" aria-label="See what we’ve built">
        <div className="container">
          <SectionCtaPanel
            title="See what we’ve built."
            subtitle=""
            primaryBtnText="Book a Free Demo"
            primaryBtnLink="/contact-1"
            secondaryBtnText="See Upcoming Fairs"
            secondaryBtnLink="/virtual-trade-fairs"
            email=""
          />
        </div>
      </section>
      {/* <Section6 /> */}
    </>
  );
}
