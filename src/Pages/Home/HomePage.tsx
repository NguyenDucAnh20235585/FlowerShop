import { HeroSection } from "./HeroSection"
import { FlowerWheel } from "./FlowerWheel"
import { WhatWeDo } from "./WhatWeDo"
import { HomeAbout } from "./HomeAbout"

import { ServiceSection } from "../../components/ServiceSection"
import { WorkWithUs } from "../../components/WorkWithUs"

import floralInstallation from "../../assets/Images/Home/Floral_installation_home.png"
import nativePlant from "../../assets/Images/Home/Native_plant_arrangement_home.png"
import customFloral from "../../assets/Images/Home/Custom_floral_concept_home.png"

import workDesktop from "../../assets/Images/Home/Work_with_us_desktop.png"
import workTablet from "../../assets/Images/Home/Work_with_us_tablet.png"
import workMobile from "../../assets/Images/Home/Work_with_us_mobile.png"

export function HomePage() {
    return (
        <>
            <HeroSection />

            <HomeAbout />

            <FlowerWheel />

            <WhatWeDo />

            <ServiceSection
                number="1"
                title="FLORAL INSTALLATIONS"
                description="Living art for homes, businesses, and events."
                image={floralInstallation}
                alt="Floral installation"
            />

            <ServiceSection
                number="2"
                title="NATIVE PLANT ARRANGEMENTS"
                description="Whether it’s a private retreat or a public space, we craft floral experiences that bloom beyond expectations."
                image={nativePlant}
                alt="Native plant arrangement"
            />

            <ServiceSection
                number="3"
                title="CUSTOM FLORAL CONCEPTS"
                description="Your vision, our blooms. We build arrangements that are both personal and exquisitely simple. Whether it’s a private retreat or a public space, we craft floral experiences that bloom beyond expectations."
                image={customFloral}
                alt="Custom floral concept"
            />

            <WorkWithUs
                mobileImage={workMobile}
                tabletImage={workTablet}
                desktopImage={workDesktop}
                alt="Blue flowers"
            />
        </>
    )
}