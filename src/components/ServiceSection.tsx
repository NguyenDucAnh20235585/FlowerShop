import { ImageView } from "./ImageView"

type ServiceSectionProps = {
    number?: string
    title: string
    description: string
    image: string
    tabletImage?: string
    desktopImage?: string
    alt: string
    imageSize?: number
    variant?: "stacked" | "split"
}

export function ServiceSection({
    number,
    title,
    description,
    image,
    tabletImage,
    desktopImage,
    alt,
    imageSize = 432,
    variant = "stacked",
}: ServiceSectionProps) {

    if (variant === "split") {
        return (
            <section
                className="
        py-[28px]

        tablet:grid
        tablet:grid-cols-2
        tablet:items-start
        tablet:gap-[30px]
        tablet:py-[30px]

        desktop:gap-[60px]
    "
            >
                <div
                    className="
                        pb-[24px]

                        tablet:pb-0
                        tablet:pt-[6px]
                        tablet:pr-[10px]

                        desktop:pt-[10px]
                        desktop:pr-[20px]
                    "
                >
                    <h2 className="heading-1 max-w-[500px]">
                        {title}
                    </h2>

                    <p
                        className="
        paragraph-1
        mt-[20px]

        tablet:mt-[22px]
        desktop:mt-[24px]
    "
                    >
                        {description}
                    </p>
                </div>

                <ImageView
                    mobile={{
                        src: image,
                        width: 686,
                        height: 592,
                    }}
                    tablet={
                        tabletImage
                            ? {
                                src: tabletImage,
                                width: 740,
                                height: 1237,
                            }
                            : undefined
                    }
                    desktop={
                        desktopImage
                            ? {
                                src: desktopImage,
                                width: 977,
                                height: 842,
                            }
                            : undefined
                    }
                    loading="lazy"
                    alt={alt}
                    className="
        w-full
        rounded-[20px]
        tablet:rounded-[24px]
        desktop:rounded-[28px]
    "
                />
            </section>
        )
    }

    return (
        <section
            className={`
                home-service-spacing
                mx-[16%]
                flex
                flex-col
                items-center
                border-b
                border-black/60
                pb-[85px]
                text-center

                tablet:mx-[10%]
                tablet:pb-[80px]

                desktop:mx-[6%]
                desktop:pb-[90px]

                ${number === "1"
                    ? "pt-[95px]"
                    : "pt-[40px]"
                }
            `}
        >
            {number && (
                <p className="heading-1">
                    {number}
                </p>
            )}

            <div
                className="
                    mt-[var(--service-number-image)]
                    aspect-square
                    w-[145px]
                    overflow-hidden
                    rounded-[28px]
                "
            >
                <img
                    src={image}
                    alt={alt}
                    width={imageSize}
                    height={imageSize}
                    loading="lazy"
                    className="h-full w-full object-cover"
                />
            </div>

            <h2
                className="
        heading-1
        home-service-heading
        mx-auto
        mt-[var(--service-image-title)]
    "
            >
                {title}
            </h2>

            <p
                className="
        paragraph-1 home-service-textbox mx-auto
        mt-[var(--service-title-text)]
    "
            >
                {description}
            </p>
        </section>
    )
}