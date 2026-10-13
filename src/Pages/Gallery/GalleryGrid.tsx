import { ImageView } from "../../components/ImageView"

import dawnBloomMobile from "../../assets/Images/Gallery/dawn-bloom-mobile.webp"
import dawnBloomTablet from "../../assets/Images/Gallery/dawn-bloom-tablet.webp"
import dawnBloomDesktop from "../../assets/Images/Gallery/dawn-bloom-desktop.webp"

import solsticeStemsMobile from "../../assets/Images/Gallery/solstice-stems-mobile.webp"
import solsticeStemsTablet from "../../assets/Images/Gallery/solstice-stems-tablet.webp"
import solsticeStemsDesktop from "../../assets/Images/Gallery/solstice-stems-desktop.webp"

import whisperGreensMobile from "../../assets/Images/Gallery/whisper-greens-mobile.webp"
import whisperGreensTablet from "../../assets/Images/Gallery/whisper-greens-tablet.webp"
import whisperGreensDesktop from "../../assets/Images/Gallery/whisper-greens-desktop.webp"

import clarityPetalsMobile from "../../assets/Images/Gallery/clarity-petals-mobile.webp"
import clarityPetalsTablet from "../../assets/Images/Gallery/clarity-petals-tablet.webp"
import clarityPetalsDesktop from "../../assets/Images/Gallery/clarity-petals-desktop.webp"

import riverStoneMobile from "../../assets/Images/Gallery/river-stone-mobile.webp"
import riverStoneTablet from "../../assets/Images/Gallery/river-stone-tablet.webp"
import riverStoneDesktop from "../../assets/Images/Gallery/river-stone-desktop.webp"

import moonlitMeadowMobile from "../../assets/Images/Gallery/moonlit-meadow-mobile.webp"
import moonlitMeadowTablet from "../../assets/Images/Gallery/moonlit-meadow-tablet.webp"
import moonlitMeadowDesktop from "../../assets/Images/Gallery/moonlit-meadow-desktop.webp"

import emberLeafMobile from "../../assets/Images/Gallery/ember-leaf-mobile.webp"
import emberLeafTablet from "../../assets/Images/Gallery/ember-leaf-tablet.webp"
import emberLeafDesktop from "../../assets/Images/Gallery/ember-leaf-desktop.webp"

import skylineBloomMobile from "../../assets/Images/Gallery/skyline-bloom-mobile.webp"
import skylineBloomTablet from "../../assets/Images/Gallery/skyline-bloom-tablet.webp"
import skylineBloomDesktop from "../../assets/Images/Gallery/skyline-bloom-desktop.webp"

import stillWatersMobile from "../../assets/Images/Gallery/still-waters-mobile.webp"
import stillWatersTablet from "../../assets/Images/Gallery/still-waters-tablet.webp"
import stillWatersDesktop from "../../assets/Images/Gallery/still-waters-desktop.webp"

export function GalleryGrid() {
    const flowers = [
        {
            name: "DAWN BLOOM",
            price: "$55/Bunch",
            alt: "Sun flowers",
            mobileImage: dawnBloomMobile,
            tabletImage: dawnBloomTablet,
            desktopImage: dawnBloomDesktop,
        },
        {
            name: "SOLSTICE STEMS",
            price: "$30/Bunch",
            alt: "Bouquette of lilies and carnations",
            mobileImage: solsticeStemsMobile,
            tabletImage: solsticeStemsTablet,
            desktopImage: solsticeStemsDesktop,
        },
        {
            name: "WHISPER GREENS",
            price: "$120/Bunch",
            alt: "Bouquette of tulips",
            mobileImage: whisperGreensMobile,
            tabletImage: whisperGreensTablet,
            desktopImage: whisperGreensDesktop,
        },
        {
            name: "CLARITY PETALS",
            price: "$55/Bunch",
            alt: "Pink flowers",
            mobileImage: clarityPetalsMobile,
            tabletImage: clarityPetalsTablet,
            desktopImage: clarityPetalsDesktop,
        },
        {
            name: "RIVER STONE",
            price: "$30/Bunch",
            alt: "Bouquette of peonies",
            mobileImage: riverStoneMobile,
            tabletImage: riverStoneTablet,
            desktopImage: riverStoneDesktop,
        },
        {
            name: "MOONLIT MEADOW",
            price: "$120/Bunch",
            alt: "Bouquette of lilies and carnations",
            mobileImage: moonlitMeadowMobile,
            tabletImage: moonlitMeadowTablet,
            desktopImage: moonlitMeadowDesktop,
        },
        {
            name: "EMBER LEAF",
            price: "$55/Bunch",
            alt: "White tulips",
            mobileImage: emberLeafMobile,
            tabletImage: emberLeafTablet,
            desktopImage: emberLeafDesktop,
        },
        {
            name: "SKYLINE BLOOM",
            price: "$75/Bunch",
            alt: "Purple flower",
            mobileImage: skylineBloomMobile,
            tabletImage: skylineBloomTablet,
            desktopImage: skylineBloomDesktop,
        },
        {
            name: "STILL WATERS",
            price: "$250/Bunch",
            alt: "Pink tulip",
            mobileImage: stillWatersMobile,
            tabletImage: stillWatersTablet,
            desktopImage: stillWatersDesktop,
        },
    ]

    return (
        <section
            className="
                mx-[4%]
                mt-[65px]
                pb-[70px]

                min-[800px]:mx-[20px]
                min-[800px]:mt-[80px]
                min-[800px]:pb-[90px]

                min-[1280px]:mx-[3%]
                min-[1280px]:mt-[80px]
                min-[1280px]:pb-[100px]
            "
        >
            <div
                className="
                    min-[1280px]:grid
                    min-[1280px]:grid-cols-[150px_minmax(0,1fr)]
                    min-[1280px]:gap-x-[20px]
                "
            >
                <div
                    className="
                        heading-3
                        mb-[40px]
                        text-[#555555]

                        min-[800px]:mb-[45px]
                        min-[800px]:text-[14px]

                        min-[1280px]:mb-0
                    "
                >
                    SEASONAL ARRANGEMENTS
                </div>

                <div
                    className="
                        grid
                        grid-cols-1
                        gap-x-[20px]
                        gap-y-[18px]

                        min-[800px]:grid-cols-2
                        min-[800px]:gap-y-[60px]

                        min-[1280px]:grid-cols-3
                        min-[1280px]:gap-y-[55px]
                    "
                >
                    {flowers.map((flower, index) => (
                        <article
                            key={flower.name}
                            className={
                                index === flowers.length - 1
                                    ? "min-[800px]:col-span-2 min-[1280px]:col-span-1"
                                    : ""
                            }
                        >
                            <div
                                className="
                                    mb-[16px]
                                    flex
                                    items-baseline
                                    gap-[6px]

                                    min-[1280px]:mb-[14px]
                                "
                            >
                                <h2 className="caption-2 whitespace-nowrap">
                                    {flower.name}
                                </h2>

                                <span className="heading-4 whitespace-nowrap text-[#666666]">
                                    {flower.price}
                                </span>
                            </div>

                            <ImageView
                                mobile={{
                                    src: flower.mobileImage,
                                    width: 686,
                                    height: 637,
                                }}
                                tablet={{
                                    src: flower.tabletImage,
                                    width: index === flowers.length - 1 ? 1520 : 740,
                                    height: 637,
                                }}
                                desktop={{
                                    src: flower.desktopImage,
                                    width: 660,
                                    height: 637,
                                }}
                                alt={flower.alt}
                                className="w-full"
                                loading="lazy"
                            />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
