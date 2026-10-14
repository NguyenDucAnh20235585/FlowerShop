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
        tablet:grid-cols-2
        tablet:items-start
        tablet:gap-[30px]
        tablet:py-[30px]
        desktop:gap-15
    "
        >
            <div
                className="
                        pb-6
                        tablet:pb-0
                        tablet:pt-[6px]
                        tablet:pr-[10px]
                        desktop:pt-[10px]
                        desktop:pr-5
                    "
            >
                <h2 className="heading-1 max-w-[500px]">
                    {title}
                </h2>

                <p
                    className="
        paragraph-1
        mt-5
        tablet:mt-[22px]
        desktop:mt-6
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
        tablet:rounded-[24px]
        desktop:rounded-[28px]
    "
            />
        </section>
    )
}