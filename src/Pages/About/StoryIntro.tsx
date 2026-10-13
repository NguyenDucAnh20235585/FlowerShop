import { ImageView } from "../../components/ImageView"

import lilySmithDesktop from "../../assets/Images/About/lily-smith-desktop.webp"
import lilySmithTablet from "../../assets/Images/About/lily-smith-tablet.webp"
import lilySmithMobile from "../../assets/Images/About/lily-smith-mobile.webp"

export function StoryIntro() {
    return (
        <section
            className="
                mx-[4%]
                pb-[80px]

                tablet:mx-[3%]
                tablet:grid
                tablet:grid-cols-[18%_40%_minmax(0,1fr)]
                tablet:items-start
                tablet:gap-x-[20px]
                tablet:pb-[80px]

                desktop:grid-cols-[125px_460px_minmax(0,1fr)]
                desktop:pb-[100px]
            "
        >
            <p className="heading-3 text-muted">
                OUR STORY
            </p>

            <div
                className="
                    w-full
                    overflow-hidden
                    rounded-[20px]

                    tablet:rounded-[28px]
                "
            >
                <ImageView
                    mobile={{
                        src: lilySmithMobile,
                        width: 632,
                        height: 709,
                    }}
                    tablet={{
                        src: lilySmithTablet,
                        width: 686,
                        height: 769,
                    }}
                    desktop={{
                        src: lilySmithDesktop,
                        width: 893,
                        height: 1000,
                    }}
                    alt="Person carrying flowers"
                    loading="lazy"
                />
            </div>

            <div
                className="
                    mt-[18px]

                    tablet:mt-0
                    tablet:pt-[5px]
                "
            >
                <h2
                    className="
                        font-outfit
                        text-[16px]
                        font-bold
                        leading-[1.4]

                        tablet:text-[16px]
                        desktop:text-[18px]
                    "
                >
                    LILY SMITH
                </h2>
                <h2
                    className="
        font-outfit
        text-[16px]
        font-bold
        leading-[1.4]

        desktop:text-[18px]
    "
                >
                    LILY SMITH
                </h2><h2
                    className="
        font-outfit
        text-[16px]
        font-bold
        leading-[1.4]

        desktop:text-[18px]
    "
                >
                    LILY SMITH
                </h2>

                <p
                    className="
        mt-[2px]
        font-outfit
        text-[14px]
        font-medium
        leading-[1.4]
        text-muted
    "
                >
                    Owner
                </p>
            </div>
        </section>
    )
}