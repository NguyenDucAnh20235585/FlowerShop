import { GalleryGrid } from "./GalleryGrid"
import { ServiceSection } from "../../components/ServiceSection"
import { WorkWithUs } from "../../components/WorkWithUs"

import floralInstallationsMobile from "../../assets/Images/Gallery/Floral-installations-gallery-mobile.png"
import floralInstallationsTablet from "../../assets/Images/Gallery/Floral-installations-gallery-tablet.png"
import floralInstallationsDesktop from "../../assets/Images/Gallery/Floral-installations-gallery-desktop.png"

import nativePlantArrangementsMobile from "../../assets/Images/Gallery/Native-plant-arrangements-gallery-mobile.png"
import nativePlantArrangementsTablet from "../../assets/Images/Gallery/Native-plant-arrangements-gallery-tablet.png"
import nativePlantArrangementsDesktop from "../../assets/Images/Gallery/Native-plant-arrangements-gallery-desktop.png"

import customFloralConceptsMobile from "../../assets/Images/Gallery/Custom-floral-concepts-gallery-mobile.png"
import customFloralConceptsTablet from "../../assets/Images/Gallery/Custom-floral-concepts-gallery-tablet.png"
import customFloralConceptsDesktop from "../../assets/Images/Gallery/Custom-floral-concepts-gallery-desktop.png"

export function GalleryPage() {
    return (
        <>
            <section
                className="
                    mx-[4%]
                    pt-[52px]

                    min-[800px]:mx-[3%]
                    min-[800px]:pt-[45px]

                    min-[1280px]:pt-[55px]
                "
            >
                <h1
                    className="
                        font-outfit
                        text-[36px]
                        font-bold
                        leading-[1.1]
                        tracking-[-0.02em]

                        min-[800px]:text-[45px]
                        min-[1280px]:text-[50px]
                    "
                >
                    GALLERY
                </h1>
            </section>

            <GalleryGrid />

            <section
                className="
                    mx-[4%]
                    mt-[70px]

                    min-[800px]:mx-[3%]
                    min-[800px]:mt-[90px]

                    min-[1280px]:mt-[100px]
                    min-[1280px]:grid
                    min-[1280px]:grid-cols-[180px_minmax(0,1fr)]
                    min-[1280px]:gap-x-[24px]
                "
            >
                <p
                    className="
                        mb-[28px]
                        font-outfit
                        text-[12px]
                        font-bold
                        leading-[1.4]
                        tracking-[0.02em]
                        text-[#555555]

                        min-[800px]:mb-[30px]
                        min-[800px]:text-[14px]

                        min-[1280px]:mb-0
                        min-[1280px]:pt-[10px]
                        min-[1280px]:text-black
                    "
                >
                    SERVICES
                </p>

                <div
                    className="
                        border-y
                        border-black/60
                        divide-y
                        divide-black/60
                    "
                >
                    <ServiceSection
                        variant="split"
                        title="FLORAL INSTALLATIONS"
                        description="We create clean, contemporary designs that elevate any environment, from intimate gatherings to grand events."
                        image={floralInstallationsMobile}
                        tabletImage={floralInstallationsTablet}
                        desktopImage={floralInstallationsDesktop}
                        alt="Floral installation"
                    />

                    <ServiceSection
                        variant="split"
                        title="NATIVE PLANT ARRANGEMENTS"
                        description="Our selection of locally sourced flora brings natural resilience and effortless elegance to your home."
                        image={nativePlantArrangementsMobile}
                        tabletImage={nativePlantArrangementsTablet}
                        desktopImage={nativePlantArrangementsDesktop}
                        alt="Native plant arrangement"
                    />

                    <ServiceSection
                        variant="split"
                        title={"CUSTOM\u00A0FLORAL CONCEPTS"}
                        description="Your vision, our blooms. We build arrangements that are both personal and exquisitely simple."
                        image={customFloralConceptsMobile}
                        tabletImage={customFloralConceptsTablet}
                        desktopImage={customFloralConceptsDesktop}
                        alt="Custom floral concept"
                    />
                </div>
            </section>

            <WorkWithUs />
        </>
    )
}