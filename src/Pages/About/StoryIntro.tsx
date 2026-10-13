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

                min-[800px]:mx-[3%]
                min-[800px]:grid
                min-[800px]:grid-cols-[18%_40%_minmax(0,1fr)]
                min-[800px]:items-start
                min-[800px]:gap-x-[20px]
                min-[800px]:pb-[80px]

                min-[1280px]:grid-cols-[125px_460px_minmax(0,1fr)]
                min-[1280px]:pb-[100px]
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

                    min-[800px]:rounded-[28px]
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

                    min-[800px]:mt-0
                    min-[800px]:pt-[5px]
                "
            >
                <h2
                    className="
                        font-outfit
                        text-[16px]
                        font-bold
                        leading-[1.4]

                        min-[800px]:text-[16px]
                        min-[1280px]:text-[18px]
                    "
                >
                    LILY SMITH
                </h2><h2
                    className="
        font-outfit
        text-[16px]
        font-bold
        leading-[1.4]

        min-[1280px]:text-[18px]
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
        text-muted]
    "
                >
                    Owner
                </p>
            </div>
        </section>
    )
}