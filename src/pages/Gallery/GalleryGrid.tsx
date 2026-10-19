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

const FLOWERS = [
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
        tabletWide: true,
    },
]

export function GalleryGrid() {
    return (
        <section
            className="
                mx-4
                mt-15
                pb-[70px]
                
                tablet:mx-5
                tablet:mt-21
                tablet:pb-[59px]

                desktop:mx-[3%]
                desktop:pb-0
            "
        >
            <div
                className="
                    desktop:grid
                    desktop:grid-cols-[150px_1030px]
                    desktop:gap-x-5
                "
            >
                <div
                    className="
                        heading-3
                        mb-11
                        text-muted

                        desktop:mb-0
                        desktop:w-[170.01px]
                    "
                >
                    SEASONAL ARRANGEMENTS
                </div>

                <div
                    className="
                        grid
                        grid-cols-1
                        gap-x-5
                        gap-y-6

                        tablet:grid-cols-2
                        tablet:gap-y-16
                        
                        desktop:grid-cols-[repeat(3,330px)]
                    "
                >
                    {FLOWERS.map((flower) => (
                        <article
                            key={flower.name}
                            className={
                                flower.tabletWide
                                    ? "tablet:col-span-2 desktop:col-span-1"
                                    : ""
                            }
                        >
                            <div
                                className="
                                    mb-[19px]
                                    flex
                                    items-baseline
                                    gap-[6px]
                                "
                            >
                                <h2 className="caption-2 whitespace-nowrap">
                                    {flower.name}
                                </h2>

                                <span className="heading-4 whitespace-nowrap text-muted">
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
                                    width: flower.tabletWide ? 1520 : 740,
                                    height: 637,
                                }}
                                desktop={{
                                    src: flower.desktopImage,
                                    width: 660,
                                    height: 637,
                                }}
                                alt={flower.alt}
                                className="
                                    h-[358.33px]
                                    w-full
                                    rounded-[20px]
                                    [&>img]:h-full
                                    [&>img]:object-cover

                                    tablet:h-auto
                                    tablet:rounded-[24px]
                                    tablet:[&>img]:h-auto

                                    desktop:rounded-[28px]
                                "
                            />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
