import { ImageView } from "./ImageView"
import { Button } from "./Button"

type WorkWithUsProps = {
    image?: {
        mobile: string
        tablet: string
        desktop: string
        alt: string
    }
    className?: string
    textClassName?: string
}

export function WorkWithUs({
    image,
    className = "",
    textClassName = ""
}: WorkWithUsProps) {

    return (
        <section>
            {image && (
                <div
                    className="
                        mt-[70px]
                        px-[10%]
                        tablet:mt-[70px]
                        tablet:px-[5%]
                        desktop:mt-20
                        desktop:px-[3%]
                    "
                >
                    <ImageView
                        mobile={{
                            src: image.mobile,
                            width: 295,
                            height: 400,
                        }}
                        tablet={{
                            src: image.tablet,
                            width: 1440,
                            height: 902,
                        }}
                        desktop={{
                            src: image.desktop,
                            width: 2400,
                            height: 1504,
                        }}
                        alt={image.alt}
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
                    ${className}
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
                        ${textClassName}

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