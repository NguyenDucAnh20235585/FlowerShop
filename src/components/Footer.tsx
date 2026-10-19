import { ImageView } from "./ImageView";
import { useLocation } from "react-router-dom";

import footerMobile from "../assets/Images/Footer/footer-mobile.webp";
import footerTablet from "../assets/Images/Footer/footer-tablet.webp";
import footerDesktop from "../assets/Images/Footer/footer-desktop.webp";

export function Footer() {
  const { pathname } = useLocation();
  const useWideFooter = pathname === "/gallery" || pathname === "/about";
  return (
    <footer id="contact">
      <div
        className={`
        relative
        mx-auto
        h-[573px]
        overflow-hidden
        rounded-t-[30px]

        ${
          useWideFooter
            ? "w-[311px] tablet:w-[680px]"
            : "w-[263px] tablet:w-[80%] tablet:max-w-[640px]"
        }

        tablet:h-[579px]
        desktop:h-[582px]
        desktop:w-[87.5%]
        desktop:max-w-[1120px]
    `}
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
                            top-100
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
                            bottom-5
                            left-[30px]
                            whitespace-nowrap
                            font-outfit
                            text-[18px]
                            font-medium
                            leading-none
                            tablet:text-[22px]
                        "
          >
            Miami, FL
          </span>

          <a
            href="https://www.figma.com/sites/"
            target="_blank"
            rel="noopener noreferrer"
            className="
                            absolute
                            right-[30px]
                            bottom-5
                            whitespace-nowrap
                            font-outfit
                            text-[18px]
                            font-medium
                            leading-none
                            tablet:text-[22px]
                        "
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
