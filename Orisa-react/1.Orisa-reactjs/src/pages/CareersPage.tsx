import PageMeta from "@/seo/PageMeta";
import SectionHero from "@/shared/sections/careers/SectionHero";
import SectionCultureValues from "@/shared/sections/careers/SectionCultureValues";
import SectionOpenPositions from "@/shared/sections/careers/SectionOpenPositions";
import SectionCTA from "@/shared/sections/careers/SectionCTA";

export default function CareersPage() {
    return (
        <>
            <PageMeta title="Careers — NeoFairs" />
            {/* 1. Hero: Build the fairground */}
            <SectionHero />

            {/* 2. Culture & Values: What it’s like here */}
            <SectionCultureValues />

            {/* 3. Open Roles */}
            <SectionOpenPositions />

            {/* 4. Don't see your role? Open Application CTA */}
            <SectionCTA />
        </>
    );
}
