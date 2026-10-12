import { ImageView } from "./ImageView"

import footerMobile from "../assets/Images/Footer/Footer_mobile.png"
import footerTablet from "../assets/Images/Footer/Footer_tablet.png"
import footerDesktop from "../assets/Images/Footer/Footer_desktop.png"

export function Footer() {
    return (
        <footer id="contact">
            <div
                className="
                    relative
                    mx-auto
                    mt-[40px]

                    h-[560px]

                    w-[80%]
                    max-w-[300px]
                    overflow-hidden
                    rounded-t-[30px]

                    min-[800px]:h-[570px]
                    min-[800px]:w-[82%]
                    min-[800px]:max-w-[660px]

                    min-[1280px]:h-[560px]
                    min-[1280px]:w-[90%]
                    min-[1280px]:max-w-[1160px]
                "
            >
                <ImageView
                    mobileSrc={footerMobile}
                    tabletSrc={footerTablet}
                    desktopSrc={footerDesktop}
                    alt=""
                    className="
                        h-full
                        w-full

                        [&>img]:h-full
                        [&>img]:w-full
                        [&>img]:object-cover
                    "
                />

                <div
                    className="
                        pointer-events-none
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
                            bottom-[24px]
                            left-[30px]

                            whitespace-nowrap
                            font-outfit
                            text-[18px]
                            font-medium
                            leading-none

                            min-[800px]:bottom-[25px]
                            min-[800px]:text-[22px]

                            min-[1280px]:bottom-[27px]
                        "
                    >
                        Miami, FL
                    </span>

                    <span
                        className="
                            absolute
                            right-[30px]
                            bottom-[24px]

                            whitespace-nowrap
                            font-outfit
                            text-[18px]
                            font-medium
                            leading-none

                            min-[800px]:bottom-[25px]
                            min-[800px]:text-[22px]

                            min-[1280px]:bottom-[27px]
                        "
                    >
                        Contact
                    </span>
                </div>
            </div>
        </footer>
    )
}