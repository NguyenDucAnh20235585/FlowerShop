import { ImageView } from "./ImageView"
import { Button } from "./Button"

type WorkWithUsProps = {
    mobileImage?: string
    tabletImage?: string
    desktopImage?: string
    alt?: string
}

export function WorkWithUs({
    mobileImage,
    tabletImage,
    desktopImage,
    alt = "",
}: WorkWithUsProps) {
    const hasImage = Boolean(
        mobileImage && tabletImage && desktopImage
    )

    return (
        <section>
            {hasImage && mobileImage && tabletImage && desktopImage && (
                <div
                    className="
                        mt-[70px]
                        px-[10%]

                        min-[800px]:mt-[70px]
                        min-[800px]:px-[5%]

                        min-[1280px]:mt-[80px]
                        min-[1280px]:px-[3%]
                    "
                >
                    <ImageView
                        mobile={{
                            src: mobileImage,
                            width: 295,
                            height: 400,
                        }}
                        tablet={{
                            src: tabletImage,
                            width: 1440,
                            height: 902,
                        }}
                        desktop={{
                            src: desktopImage,
                            width: 2400,
                            height: 1504,
                        }}
                        alt={alt}
                        loading={"lazy"}
                        className="
                            mx-auto
                            aspect-[295/400]
                            w-full
                            rounded-[20px]

                            [&>img]:h-full
                            [&>img]:object-cover

                            min-[800px]:aspect-auto
                            min-[800px]:rounded-[28px]
                            min-[800px]:[&>img]:h-auto

                            min-[1280px]:rounded-[30px]
                        "
                    />
                </div>
            )}

            <div
                className={`
                    cta-stack
                    px-[5%]
                    text-center

                    ${hasImage
                        ? `
                            pt-[130px]
                            pb-[135px]

                            min-[800px]:pt-[150px]
                            min-[800px]:pb-[150px]

                            min-[1280px]:pt-[180px]
                            min-[1280px]:pb-[200px]
                        `
                        : `
                            py-[90px]

                            min-[800px]:py-[110px]

                            min-[1280px]:pt-[170px]
                            min-[1280px]:pb-[160px]
                        `
                    }
                `}
            >
                <p className="heading-3 text-[#555555]">
                    WORK WITH US
                </p>

                <h2
                    className={`
                        heading-2
                        mx-auto
                        mt-[var(--label-title-gap)]

                        ${hasImage
                            ? "work-textbox"
                            : "gallery-work-textbox"
                        }
                    `}
                >
                    Discover how we can add a touch of
                    natural beauty to your next event.
                </h2>

                <Button
                    to="/about"
                    className="mt-[var(--title-button-gap)]"
                >
                    • &nbsp; ABOUT US
                </Button>

            </div>
        </section>
    )
}