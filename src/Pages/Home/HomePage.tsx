import { HeroSection } from "./HeroSection"
import { FlowerWheel } from "./FlowerWheel"
import { WhatWeDo } from "./WhatWeDo"
import { HomeAbout } from "./HomeAbout"

import { ServiceSection } from "../../components/ServiceSection"
import { WorkWithUs } from "../../components/WorkWithUs"

import floralInstallation from "../../assets/Images/Home/floral-installation-home.webp"
import nativePlant from "../../assets/Images/Home/native-plant-arrangement-home.webp"
import customFloral from "../../assets/Images/Home/custom-floral-concept-home.webp"

import workDesktop from "../../assets/Images/Home/work-with-us-desktop.webp"
import workTablet from "../../assets/Images/Home/work-with-us-tablet.webp"
import workMobile from "../../assets/Images/Home/work-with-us-mobile.webp"

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