import logoDesktop from "../../assets/Images/Home/logo-image-desktop.png"
import logoTablet from "../../assets/Images/Home/logo-image-tablet.png"
import logoMobile from "../../assets/Images/Home/logo-image-mobile.png"

import heroDesktop from "../../assets/Images/Home/hero-image-desktop.webp"
import heroTablet from "../../assets/Images/Home/hero-image-tablet.webp"
import heroMobile from "../../assets/Images/Home/hero-image-mobile.webp"

export function HeroSection() {
    return (
        <section
            className="
                pt-[54px]
min-[800px]:pt-[58px]
min-[1280px]:pt-[62px]
            "
        >
            <picture
                className="
                    mx-auto
                    block
                    w-[67%]

                    min-[800px]:w-[80%]

                    min-[1280px]:w-[88%]
                "
            >
                <source
                    media="(min-width: 1280px)"
                    srcSet={logoDesktop}
                />

                <source
                    media="(min-width: 800px)"
                    srcSet={logoTablet}
                />

                <img
                    src={logoMobile}
                    alt="Our Blooms"
                    className="block h-auto w-full"
                />
            </picture>

            <picture
                className="
        mx-auto
        mt-[40px]
        block
        w-[73%]
        overflow-hidden
        rounded-[20px]

        min-[800px]:mt-[40px]
        min-[800px]:w-[80%]
        min-[800px]:rounded-[28px]

        min-[1280px]:mt-[40px]
        min-[1280px]:w-[88%]
        min-[1280px]:rounded-[30px]
    "
            >
                <source
                    media="(min-width: 1280px)"
                    srcSet={heroDesktop}
                />

                <source
                    media="(min-width: 800px)"
                    srcSet={heroTablet}
                />

                <img
                    src={heroMobile}
                    alt="Flower"
                    className="block h-auto w-full"
                />
            </picture>
        </section>
    )
}