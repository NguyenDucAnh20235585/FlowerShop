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

        min-[800px]:grid
        min-[800px]:grid-cols-2
        min-[800px]:items-start
        min-[800px]:gap-[30px]
        min-[800px]:py-[30px]

        min-[1280px]:gap-[60px]
    "
            >
                <div
                    className="
                        pb-[24px]

                        min-[800px]:pb-0
                        min-[800px]:pt-[6px]
                        min-[800px]:pr-[10px]

                        min-[1280px]:pt-[10px]
                        min-[1280px]:pr-[20px]
                    "
                >
                    <h2 className="heading-1 max-w-[500px]">
                        {title}
                    </h2>

                    <p
                        className="
        paragraph-1
        textbox-body
        mt-[20px]

        min-[800px]:mt-[22px]
        min-[1280px]:mt-[24px]
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
        min-[800px]:rounded-[24px]
        min-[1280px]:rounded-[28px]
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

                min-[800px]:mx-[10%]
                min-[800px]:pb-[80px]

                min-[1280px]:mx-[6%]
                min-[1280px]:pb-[90px]

                ${number === "1"
                    ? `
                            pt-[95px]
                            min-[800px]:pt-[95px]
                            min-[1280px]:pt-[95px]
                        `
                    : `
                            pt-[40px]
                            min-[800px]:pt-[40px]
                            min-[1280px]:pt-[40px]
                        `
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
        textbox-body
        mt-[var(--service-title-text)]
    "
            >
                {description}
            </p>
        </section>
    )
}