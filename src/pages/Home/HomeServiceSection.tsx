type HomeServiceSectionProps = {
    number?: number
    title: string
    description: string
    image: string
    alt: string
    imageSize?: number
    className?: string
}

export function HomeServiceSection({
    number,
    title,
    description,
    image,
    alt,
    imageSize = 432,
    className = "pt-10",
}: HomeServiceSectionProps) {
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
                tablet:pb-20
                desktop:mx-[6%]
                desktop:pb-[90px]
                ${className}
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
                    paragraph-1
                    home-service-textbox
                    mx-auto
                    mt-[var(--service-title-text)]
                "
            >
                {description}
            </p>
        </section>
    )
}