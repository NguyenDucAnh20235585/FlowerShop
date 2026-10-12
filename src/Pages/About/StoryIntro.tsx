import Lily_smith_desktop from "../../assets/Images/About/Lily_smith_desktop.webp"
import Lily_smith_tablet from "../../assets/Images/About/Lily_smith_tablet.webp"
import Lily_smith_mobile from "../../assets/Images/About/Lily_smith_mobile.webp"

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
            <p
                className="
                    mb-[46px]
                    font-outfit
                    text-[12px]
                    font-bold
                    leading-[1.4]
                    tracking-[0.02em]
                    text-[#555555]

                    min-[800px]:mb-0
                    min-[800px]:pt-[5px]
                    min-[800px]:text-[14px]
                "
            >
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
                <picture>
                    <source
                        media="(min-width: 1280px)"
                        srcSet={Lily_smith_desktop}
                    />

                    <source
                        media="(min-width: 800px)"
                        srcSet={Lily_smith_tablet}
                    />

                    <img
                        src={Lily_smith_mobile}
                        alt="Lily Smith"
                        className="block h-auto w-full"
                    />
                </picture>
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
                </h2>

                <p
                    className="
                        mt-[2px]
                        font-outfit
                        text-[14px]
                        font-medium
                        leading-[1.4]
                        text-[#555555]

                        min-[800px]:text-[14px]
                    "
                >
                    Owner
                </p>
            </div>
        </section>
    )
}