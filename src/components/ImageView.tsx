type ImageViewProps = {
    mobileSrc: string
    tabletSrc?: string
    desktopSrc?: string
    alt: string
    className?: string
}

export function ImageView({
    mobileSrc,
    tabletSrc,
    desktopSrc,
    alt,
    className = "",
}: ImageViewProps) {
    return (
        <picture className={`block ${className}`}>
            {desktopSrc && (
                <source
                    media="(min-width: 1280px)"
                    srcSet={desktopSrc}
                />
            )}

            {tabletSrc && (
                <source
                    media="(min-width: 800px)"
                    srcSet={tabletSrc}
                />
            )}

            <img
                src={mobileSrc}
                alt={alt}
                className="block h-auto w-full"
            />
        </picture>
    )
}