import { GalleryGrid } from "./GalleryGrid"
import { GalleryServiceSection } from "./GalleryServiceSection"
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
                    pt-13

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

                    desktop:mt-25
                    desktop:grid
                    desktop:grid-cols-[180px_minmax(0,1fr)]
                    desktop:gap-x-6
                "
            >
                <p
                    className="
        heading-3
        mb-7
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
                    <GalleryServiceSection
                        title="FLORAL INSTALLATIONS"
                        description="We create clean, contemporary designs that elevate any environment, from intimate gatherings to grand events."
                        mobileImage={floralInstallationsMobile}
                        tabletImage={floralInstallationsTablet}
                        desktopImage={floralInstallationsDesktop}
                        alt="Person making Bouquette"
                    />

                    <GalleryServiceSection
                        title="NATIVE PLANT ARRANGEMENTS"
                        description="Our selection of locally sourced flora brings natural resilience and effortless elegance to your home."
                        mobileImage={nativePlantArrangementsMobile}
                        tabletImage={nativePlantArrangementsTablet}
                        desktopImage={nativePlantArrangementsDesktop}
                        alt="Person making Bouquette"
                    />

                    <GalleryServiceSection
                        title={"CUSTOM\u00A0FLORAL CONCEPTS"}
                        description="Your vision, our blooms. We build arrangements that are both personal and exquisitely simple."
                        mobileImage={customFloralConceptsMobile}
                        tabletImage={customFloralConceptsTablet}
                        desktopImage={customFloralConceptsDesktop}
                        alt="Pink tulips"
                    />
                </div>
            </section>

            <WorkWithUs
                className="
        py-[90px]
        tablet:py-[110px]
        desktop:pt-[170px]
        desktop:pb-40
    "
                textClassName="gallery-work-textbox"
            />
        </>
    )
}