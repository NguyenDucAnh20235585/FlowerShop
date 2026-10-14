import { ImageView } from "../../components/ImageView"

type GalleryServiceSectionProps = {
    number?: string
    title: string
    description: string
    image: string
    tabletImage?: string
    desktopImage?: string
    alt: string
}


export function GalleryServiceSection({
    title,
    description,
    image,
    tabletImage,
    desktopImage,
    alt,
}: GalleryServiceSectionProps) {

    {
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
}