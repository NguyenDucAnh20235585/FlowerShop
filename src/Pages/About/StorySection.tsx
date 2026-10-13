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

export function StorySection() {
    return (
        <div className="about-spacing">
            <section
                className="
                    mx-[4%]
                    pb-[var(--about-founded-story)]

                    min-[800px]:mx-[3%]
                    min-[800px]:grid
                    min-[800px]:grid-cols-[18%_minmax(0,1fr)]
                    min-[800px]:gap-x-[20px]

                    min-[1280px]:grid-cols-[125px_minmax(0,1fr)]
                "
            >
                <div className="hidden min-[800px]:block" />

                <div>
                    <h2 className="heading-2 max-w-[980px]">
                        Our Blooms was founded in honor of Lily Smith’s loving
                        aunts, Teresa and Beth.
                    </h2>

                    <div
                        className="
                            mt-[var(--about-founded-images)]
                            grid
                            grid-cols-1
                            gap-[10px]

                            min-[800px]:grid-cols-3
                            min-[800px]:gap-[20px]
                        "
                    >
                        <div className="overflow-hidden rounded-[20px] min-[800px]:rounded-[28px]">
                            <ImageView
                                mobile={{
                                    src: about01Mobile,
                                    width: 379,
                                    height: 451,
                                }}
                                tablet={{
                                    src: about01Tablet,
                                    width: 672,
                                    height: 800,
                                }}
                                desktop={{
                                    src: about01Desktop,
                                    width: 686,
                                    height: 800,
                                }}
                                alt="Bouquette of peonies"
                                loading="lazy"
                            />
                        </div>

                        <div className="overflow-hidden rounded-[20px] min-[800px]:rounded-[28px]">
                            <ImageView
                                mobile={{
                                    src: about02Mobile,
                                    width: 379,
                                    height: 451,
                                }}
                                tablet={{
                                    src: about02Tablet,
                                    width: 672,
                                    height: 800,
                                }}
                                desktop={{
                                    src: about02Desktop,
                                    width: 686,
                                    height: 800,
                                }}
                                alt="Pink flower"
                                loading="lazy"
                            />
                        </div>

                        <div className="overflow-hidden rounded-[20px] min-[800px]:rounded-[28px]">
                            <ImageView
                                mobile={{
                                    src: about03Mobile,
                                    width: 379,
                                    height: 451,
                                }}
                                tablet={{
                                    src: about03Tablet,
                                    width: 672,
                                    height: 800,
                                }}
                                desktop={{
                                    src: about03Desktop,
                                    width: 686,
                                    height: 800,
                                }}
                                alt="White flower"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="
                    mx-[4%]

                    min-[800px]:mx-[3%]
                    min-[800px]:grid
                    min-[800px]:grid-cols-[18%_minmax(0,1fr)]
                    min-[800px]:gap-x-[20px]

                    min-[1280px]:grid-cols-[120px_minmax(0,1fr)]
                "
            >
                <div className="hidden min-[800px]:block" />

                <div>
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

                            min-[800px]:rounded-[28px]
                        "
                    >
                        <ImageView
                            mobile={{
                                src: about04Mobile,
                                width: 379,
                                height: 451,
                            }}
                            tablet={{
                                src: about04Tablet,
                                width: 672,
                                height: 800,
                            }}
                            desktop={{
                                src: about04Desktop,
                                width: 686,
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
                            href="#contact"
                            className="mt-[var(--about-ending-button)]"
                        >
                            • &nbsp; BOOK A CONSULTATION
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}