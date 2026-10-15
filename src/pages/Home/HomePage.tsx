import { HeroSection } from "./HeroSection"
import { FlowerWheel } from "./FlowerWheel"
import { WhatWeDo } from "./WhatWeDo"
import { HomeAbout } from "./HomeAbout"

import { HomeServiceSection } from "./HomeServiceSection"
import { WorkWithUs } from "../../components/WorkWithUs"

import floralInstallation from "../../assets/Images/Home/floral-installation-home.webp"
import nativePlant from "../../assets/Images/Home/native-plant-arrangement-home.webp"
import customFloral from "../../assets/Images/Home/custom-floral-concept-home.webp"

import workDesktop from "../../assets/Images/Home/work-with-us-desktop.webp"
import workTablet from "../../assets/Images/Home/work-with-us-tablet.webp"
import workMobile from "../../assets/Images/Home/work-with-us-mobile.webp"

const HOME_SERVICES = [
    {
        number: 1,
        title: "FLORAL INSTALLATIONS",
        description: "Living art for homes, businesses, and events.",
        image: floralInstallation,
        alt: "Person with bouquet of flowers",
        className: "pt-26",
    },
    {
        number: 2,
        title: "NATIVE PLANT ARRANGEMENTS",
        description:
            "Whether it’s a private retreat or a public space, we craft floral experiences that bloom beyond expectations.",
        image: nativePlant,
        alt: "Person making a bouquet of flowers",
    },
    {
        number: 3,
        title: "CUSTOM FLORAL CONCEPTS",
        description:
            "Your vision, our blooms. We build arrangements that are both personal and exquisitely simple. Whether it’s a private retreat or a public space, we craft floral experiences that bloom beyond expectations.",
        image: customFloral,
        alt: "Pink tulips",
    },
]

export function HomePage() {
    return (
        <>
            <HeroSection />

            <HomeAbout />

            <FlowerWheel />

            <WhatWeDo />

            {HOME_SERVICES.map((service) => (
                <HomeServiceSection
                    key={service.number}
                    {...service}
                />
            ))}

            <WorkWithUs
                image={{
                    mobile: workMobile,
                    tablet: workTablet,
                    desktop: workDesktop,
                    alt: "Purple flowers"
                }}
                className="
                    pt-[154px]
                    pb-[150px]
                    desktop:pt-51
                    desktop:pb-50
                "
                textClassName="work-textbox"
            />
        </>
    )
}