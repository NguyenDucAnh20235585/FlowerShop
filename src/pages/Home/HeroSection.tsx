import { ImageView } from "../../components/ImageView"

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
tablet:pt-[58px]
desktop:pt-[62px]
            "
        >
            <ImageView
                mobile={{
                    src: logoMobile,
                    width: 526,
                    height: 71,
                }}
                tablet={{
                    src: logoTablet,
                    width: 1280,
                    height: 172,
                }}
                desktop={{
                    src: logoDesktop,
                    width: 2240,
                    height: 300,
                }}
                alt=""
                className="
        mx-auto
        w-[67%]
        tablet:w-[80%]
        desktop:w-[88%]
    "
            />

            <ImageView
                mobile={{
                    src: heroMobile,
                    width: 526,
                    height: 1140,
                }}
                tablet={{
                    src: heroTablet,
                    width: 1280,
                    height: 1140,
                }}
                desktop={{
                    src: heroDesktop,
                    width: 2240,
                    height: 1140,
                }}
                alt="Rose"
                className="
        mx-auto
        mt-10
        w-[73%]
        rounded-[20px]

        tablet:w-[80%]
        tablet:rounded-[28px]

        desktop:w-[87.5%]
        desktop:rounded-[30px]
    "
            />
        </section>
    )
}