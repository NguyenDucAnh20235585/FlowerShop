import About_01_desktop from "../../assets/Images/About/About_01_desktop.png"
import About_01_tablet from "../../assets/Images/About/About_01_tablet.png"
import About_01_mobile from "../../assets/Images/About/About_01_mobile.png"

import About_02_desktop from "../../assets/Images/About/About_02_desktop.png"
import About_02_tablet from "../../assets/Images/About/About_02_tablet.png"
import About_02_mobile from "../../assets/Images/About/About_02_mobile.png"

import About_03_desktop from "../../assets/Images/About/About_03_desktop.png"
import About_03_tablet from "../../assets/Images/About/About_03_tablet.png"
import About_03_mobile from "../../assets/Images/About/About_03_mobile.png"

import About_04_desktop from "../../assets/Images/About/About_04_desktop.png"
import About_04_tablet from "../../assets/Images/About/About_04_tablet.png"
import About_04_mobile from "../../assets/Images/About/About_04_mobile.png"

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
                            <picture>
                                <source
                                    media="(min-width: 1280px)"
                                    srcSet={About_01_desktop}
                                />

                                <source
                                    media="(min-width: 800px)"
                                    srcSet={About_01_tablet}
                                />

                                <img
                                    src={About_01_mobile}
                                    alt=""
                                    className="block h-auto w-full"
                                />
                            </picture>
                        </div>

                        <div className="overflow-hidden rounded-[20px] min-[800px]:rounded-[28px]">
                            <picture>
                                <source
                                    media="(min-width: 1280px)"
                                    srcSet={About_02_desktop}
                                />

                                <source
                                    media="(min-width: 800px)"
                                    srcSet={About_02_tablet}
                                />

                                <img
                                    src={About_02_mobile}
                                    alt=""
                                    className="block h-auto w-full"
                                />
                            </picture>
                        </div>

                        <div className="overflow-hidden rounded-[20px] min-[800px]:rounded-[28px]">
                            <picture>
                                <source
                                    media="(min-width: 1280px)"
                                    srcSet={About_03_desktop}
                                />

                                <source
                                    media="(min-width: 800px)"
                                    srcSet={About_03_tablet}
                                />

                                <img
                                    src={About_03_mobile}
                                    alt=""
                                    className="block h-auto w-full"
                                />
                            </picture>
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
                        <picture>
                            <source
                                media="(min-width: 1280px)"
                                srcSet={About_04_desktop}
                            />

                            <source
                                media="(min-width: 800px)"
                                srcSet={About_04_tablet}
                            />

                            <img
                                src={About_04_mobile}
                                alt="Flowers"
                                className="block h-auto w-full"
                            />
                        </picture>
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

                        <a
                            href="#contact"
                            className="
                                heading-4
                                mt-[var(--about-ending-button)]
                                inline-block
                                rounded-[4px]
                                bg-[#ffc400]
                                px-[10px]
                                py-[5px]

                                min-[1280px]:px-[18px]
                                min-[1280px]:py-[10px]
                            "
                        >
                            • &nbsp; BOOK A CONSULTATION
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}