import { ImageView } from "../../components/ImageView"

type GalleryServiceSectionProps = {
    title: string
    description: string
    mobileImage: string
    tabletImage?: string
    desktopImage?: string
    alt: string
}

export function GalleryServiceSection({
    title,
    description,
    mobileImage,
    tabletImage,
    desktopImage,
    alt,
}: GalleryServiceSectionProps) {
    return (
        <section
            className="
                py-7

                tablet:grid
                tablet:grid-cols-[370px_370px]
                tablet:items-start
                tablet:gap-5
                tablet:pt-0
                tablet:pb-[70px]

                desktop:grid-cols-[488.11px_488.11px]
                desktop:gap-5
                desktop:pt-0
                desktop:pb-[70px]
            "
        >
            <div
                className="
                    pb-6

                    tablet:pb-0
                    tablet:pt-[34px]
                    tablet:pr-0

                    desktop:pt-[34px]
                    desktop:pr-0
                "
            >
                <h2 className="heading-1">
                    {title}
                </h2>

                <p
                    className="
                        paragraph-1
                        mt-5
                        tablet:mt-7
                        desktop:mt-7
                    "
                >
                    {description}
                </p>
            </div>

            <ImageView
                mobile={{
                    src: mobileImage,
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

                    tablet:mt-[30px]
                    tablet:rounded-[24px]

                    desktop:mt-[30px]
                    desktop:rounded-[28px]
                "
            />
        </section>
    )
}