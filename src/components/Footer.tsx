import { ImageView } from "./ImageView"

import footerMobile from "../assets/Images/Footer/footer-mobile.webp"
import footerTablet from "../assets/Images/Footer/footer-tablet.webp"
import footerDesktop from "../assets/Images/Footer/footer-desktop.webp"

export function Footer() {
    return (
        <footer id="contact">
            <div
                className="
                    relative
                    mx-auto
                    mt-10
                    h-[560px]
                    w-[80%]
                    max-w-[300px]
                    overflow-hidden
                    rounded-t-[30px]
                    tablet:h-[570px]
                    tablet:w-[82%]
                    tablet:max-w-[660px]
                    desktop:h-[560px]
                    desktop:w-[90%]
                    desktop:max-w-[1160px]
                "
            >
                <ImageView
                    mobile={{
                        src: footerMobile,
                        width: 526,
                        height: 1146,
                    }}
                    tablet={{
                        src: footerTablet,
                        width: 1280,
                        height: 1158,
                    }}
                    desktop={{
                        src: footerDesktop,
                        width: 2240,
                        height: 1164,
                    }}
                    alt="Orange Flower"
                    loading="lazy"
                />

                <div
                    className="
                        absolute
                        inset-0
                        text-white
                    "
                >
                    <p
                        className="
                            absolute
                            inset-x-0
                            top-[380px]
                            text-center
                            font-caprasimo
                            text-[112px]
                            leading-none
                        "
                    >
                        OB.
                    </p>

                    <span
                        className="
                            absolute
                            bottom-6
                            left-[30px]
                            whitespace-nowrap
                            font-outfit
                            text-[18px]
                            font-medium
                            leading-none
                            tablet:bottom-[25px]
                            tablet:text-[22px]
                            desktop:bottom-[27px]
                        "
                    >
                        Miami, FL
                    </span>

                    <a href="https://www.figma.com/sites/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            absolute
                            right-[30px]
                            bottom-6
                            whitespace-nowrap
                            font-outfit
                            text-[18px]
                            font-medium
                            leading-none
                            tablet:bottom-[25px]
                            tablet:text-[22px]
                            desktop:bottom-[27px]
                        "
                    >
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    )
}