import { ImageView } from "../../components/ImageView"
import { Button } from "../../components/Button"

import about01Desktop from "../../assets/Images/About/about-01-desktop.webp"
import about01Tablet from "../../assets/Images/About/about-01-tablet.webp"
import about01Mobile from "../../assets/Images/About/about-01-mobile.webp"

import about02Desktop from "../../assets/Images/About/about-02-desktop.webp"
import about02Tablet from "../../assets/Images/About/about-02-tablet.webp"
import about02Mobile from "../../assets/Images/About/about-02-mobile.webp"

import about03Desktop from "../../assets/Images/About/about-03-desktop.webp"
import about03Tablet from "../../assets/Images/About/about-03-tablet.webp"
import about03Mobile from "../../assets/Images/About/about-03-mobile.webp"

import about04Desktop from "../../assets/Images/About/about-04-desktop.webp"
import about04Tablet from "../../assets/Images/About/about-04-tablet.webp"
import about04Mobile from "../../assets/Images/About/about-04-mobile.webp"

const FOUNDED_IMAGES = [
    {
        mobile: { src: about01Mobile, width: 379, height: 451 },
        tablet: { src: about01Tablet, width: 672, height: 800 },
        desktop: { src: about01Desktop, width: 686, height: 800 },
        alt: "Bouquette of peonies",
    },
    {
        mobile: { src: about02Mobile, width: 379, height: 451 },
        tablet: { src: about02Tablet, width: 672, height: 800 },
        desktop: { src: about02Desktop, width: 686, height: 800 },
        alt: "Pink flower",
    },
    {
        mobile: { src: about03Mobile, width: 379, height: 451 },
        tablet: { src: about03Tablet, width: 672, height: 800 },
        desktop: { src: about03Desktop, width: 686, height: 800 },
        alt: "White flower",
    },
]

export function StorySection() {
    return (
        <div className="about-spacing">
            <section
                className="
                    mx-4
                    pb-[var(--about-founded-story)]

                    tablet:mx-5
                    tablet:grid
                    tablet:grid-cols-[152.32px_607.68px]

                    desktop:mx-10
                    desktop:grid-cols-[152.32px_1047.68px]
                "
            >
                <div className="tablet:col-start-2">
                    <h2 className="heading-2">
                        Our Blooms was founded in honor of Lily Smith’s loving
                        aunts, Teresa and Beth.
                    </h2>

                    <div
                        className="
                            mt-[var(--about-founded-images)]
                            grid
                            grid-cols-1
                            gap-5
                            tablet:grid-cols-3
                        "
                    >
                        {FOUNDED_IMAGES.map((image) => (
                            <div
                                key={image.mobile.src}
                                className="
                                    h-[400px]
                                    overflow-hidden
                                    rounded-[20px]
                                    [&>img]:h-full
                                    [&>img]:object-cover

                                    tablet:h-auto
                                    tablet:rounded-[28px]
                                    tablet:[&>img]:h-auto

                                    desktop:h-[400px]
                                    desktop:[&>img]:h-full
                                "
                            >
                                <ImageView
                                    mobile={image.mobile}
                                    tablet={image.tablet}
                                    desktop={image.desktop}
                                    alt={image.alt}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section
                className="
                    mx-4

                    tablet:mx-5
                    tablet:grid
                    tablet:grid-cols-[152.32px_607.68px]

                    desktop:mx-10
                    desktop:grid-cols-[152.32px_1047.68px]
                "
            >
                <div className="tablet:col-start-2">
                    <div className="paragraph-2 about-story-textbox">
                        <p>
                            Lily's journey with flowers began in the heart of Oregon,
                            amidst the flourishing fields of her aunts' flower farm.
                            It was there, surrounded by the abundance of nature, that
                            she discovered her passion for floral design. From learning
                            the names of each bloom to understanding the delicate
                            balance of a bouquet, she absorbed the artistry of flowers
                            like the rich Oregon soil.
                        </p>

                        <p className="mt-[var(--about-story-paragraph)]">
                            Bloom & Co. is the expression of that lifelong passion,
                            a place where her love for flowers translates into beautifully
                            curated arrangements that bring joy and elegance to your spaces.
                        </p>
                    </div>

                    <div
                        className="
                            mt-[var(--about-story-image)]
                            overflow-hidden
                            rounded-[20px]
                            tablet:rounded-[28px]
                        "
                    >
                        <ImageView
                            mobile={{
                                src: about04Mobile,
                                width: 686,
                                height: 800,
                            }}
                            tablet={{
                                src: about04Tablet,
                                width: 1216,
                                height: 800,
                            }}
                            desktop={{
                                src: about04Desktop,
                                width: 2096,
                                height: 800,
                            }}
                            alt="A floral bouquet"
                            loading="lazy"
                        />
                    </div>

                    <div
                        className="
                            pt-[var(--about-image-ending)]
                            pb-[var(--about-ending-footer)]
                        "
                    >
                        <p className="paragraph-2 about-story-textbox">
                            From humble beginnings, Bloom&Co has grown into a beloved
                            local destination, known for its artistic arrangements,
                            personal service, and commitment to quality.
                        </p>

                        <p
                            className="
                                paragraph-2
                                about-story-textbox
                                mt-[var(--about-ending-paragraph)]
                            "
                        >
                            Discover how we can add a touch of natural beauty to your
                            next event.
                        </p>

                        <Button
                            href="https://www.figma.com/sites/"
                            className="mt-[var(--about-ending-button)]"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            • &nbsp; BOOK A CONSULTATION
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}