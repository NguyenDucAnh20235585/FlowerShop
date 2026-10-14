import { GalleryGrid } from "./GalleryGrid"
import { ServiceSection } from "../../components/ServiceSection"
import { WorkWithUs } from "../../components/WorkWithUs"

import floralInstallationsMobile from "../../assets/Images/Gallery/floral-installations-gallery-mobile.webp"
import floralInstallationsTablet from "../../assets/Images/Gallery/floral-installations-gallery-tablet.webp"
import floralInstallationsDesktop from "../../assets/Images/Gallery/floral-installations-gallery-desktop.webp"

import nativePlantArrangementsMobile from "../../assets/Images/Gallery/native-plant-arrangements-gallery-mobile.webp"
import nativePlantArrangementsTablet from "../../assets/Images/Gallery/native-plant-arrangements-gallery-tablet.webp"
import nativePlantArrangementsDesktop from "../../assets/Images/Gallery/native-plant-arrangements-gallery-desktop.webp"

import customFloralConceptsMobile from "../../assets/Images/Gallery/custom-floral-concepts-gallery-mobile.webp"
import customFloralConceptsTablet from "../../assets/Images/Gallery/custom-floral-concepts-gallery-tablet.webp"
import customFloralConceptsDesktop from "../../assets/Images/Gallery/custom-floral-concepts-gallery-desktop.webp"

export function GalleryPage() {
    return (
        <>
            <section
                className="
                    mx-[4%]
                    pt-[52px]

                    tablet:mx-[3%]
                    tablet:pt-[45px]

                    desktop:pt-[55px]
                "
            >
                <h1 className="heading-1">
                    GALLERY
                </h1>
            </section>

            <GalleryGrid />

            <section
                className="
                    mx-[4%]
                    mt-[70px]

                    tablet:mx-[3%]
                    tablet:mt-[90px]

                    desktop:mt-[100px]
                    desktop:grid
                    desktop:grid-cols-[180px_minmax(0,1fr)]
                    desktop:gap-x-[24px]
                "
            >
                <p
                    className="
        heading-3
        mb-[28px]
        text-muted

        tablet:mb-[30px]

        desktop:mb-0
        desktop:pt-[10px]
        desktop:text-black
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
                        alt="Person making Bouquette"
                    />

                    <ServiceSection
                        variant="split"
                        title="NATIVE PLANT ARRANGEMENTS"
                        description="Our selection of locally sourced flora brings natural resilience and effortless elegance to your home."
                        image={nativePlantArrangementsMobile}
                        tabletImage={nativePlantArrangementsTablet}
                        desktopImage={nativePlantArrangementsDesktop}
                        alt="Person making Bouquette"
                    />

                    <ServiceSection
                        variant="split"
                        title={"CUSTOM\u00A0FLORAL CONCEPTS"}
                        description="Your vision, our blooms. We build arrangements that are both personal and exquisitely simple."
                        image={customFloralConceptsMobile}
                        tabletImage={customFloralConceptsTablet}
                        desktopImage={customFloralConceptsDesktop}
                        alt="Pink tulips"
                    />
                </div>
            </section>

            <WorkWithUs
                className="
        pt-[130px]
        pb-[135px]
        tablet:pt-[150px]
        tablet:pb-[150px]
        desktop:pt-[180px]
        desktop:pb-[200px]
    " />
        </>
    )
}