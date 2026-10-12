import { Link } from "react-router-dom"

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
    const fallbackImage =
        mobileImage || tabletImage || desktopImage

    const hasImage = Boolean(fallbackImage)

    return (
        <section>
            {hasImage && (
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
                    <picture
                        className="
                            mx-auto
                            block
                            aspect-[295/400]
                            w-full
                            overflow-hidden
                            rounded-[20px]

                            min-[800px]:aspect-auto
                            min-[800px]:rounded-[28px]

                            min-[1280px]:rounded-[30px]
                        "
                    >
                        {desktopImage && (
                            <source
                                media="(min-width: 1280px)"
                                srcSet={desktopImage}
                            />
                        )}

                        {tabletImage && (
                            <source
                                media="(min-width: 800px)"
                                srcSet={tabletImage}
                            />
                        )}

                        <img
                            src={fallbackImage}
                            alt={alt}
                            className="
                                block
                                h-full
                                w-full
                                object-cover

                                min-[800px]:h-auto
                            "
                        />
                    </picture>
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

                <Link
                    to="/about"
                    className="
                        heading-4
                        mt-[var(--title-button-gap)]
                        inline-block
                        rounded-[4px]
                        bg-[#ffc400]
                        px-[12px]
                        py-[6px]

                        min-[1280px]:px-[14px]
                        min-[1280px]:py-[8px]
                    "
                >
                    • &nbsp; ABOUT US
                </Link>
            </div>
        </section>
    )
}