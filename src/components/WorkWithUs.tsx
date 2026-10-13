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

                        tablet:mt-[70px]
                        tablet:px-[5%]

                        desktop:mt-[80px]
                        desktop:px-[3%]
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
                        loading="lazy"
                        className="
                            mx-auto
                            aspect-[295/400]
                            w-full
                            rounded-[20px]

                            [&>img]:h-full
                            [&>img]:object-cover

                            tablet:aspect-auto
                            tablet:rounded-[28px]
                            tablet:[&>img]:h-auto

                            desktop:rounded-[30px]
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

                            tablet:pt-[150px]
                            tablet:pb-[150px]

                            desktop:pt-[180px]
                            desktop:pb-[200px]
                        `
                        : `
                            py-[90px]

                            tablet:py-[110px]

                            desktop:pt-[170px]
                            desktop:pb-[160px]
                        `
                    }
                `}
            >
                <p className="heading-3 text-muted">
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