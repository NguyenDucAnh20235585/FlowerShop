import { ImageView } from "./ImageView"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

import logoDesktop from "../assets/Images/Header/our-blooms.png"
import logoMobile from "../assets/Images/Header/o-b.png"
import menuIcon from "../assets/Images/Header/hamburger-icon.png"
import closeIcon from "../assets/Images/Header/cancel-icon.png"

const NAV_LINKS = [
    { to: "/gallery", label: "GALLERY" },
    { to: "/about", label: "ABOUT" },
]

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { pathname } = useLocation()
    const isHome = pathname === "/"

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    const toggleMenu = () => {
        setIsMenuOpen((current) => !current)
    }

    return (
        <header className="sticky top-0 z-50 bg-white">
            <div
                className={`
        ${isHome
                        ? "mx-[40px]"
                        : "mx-[16px] tablet:mx-[20px] desktop:mx-[40px]"
                    }

        ${isMenuOpen
                        ? ""
                        : "border-b border-black/60"
                    }
    `}
            >
                <div
                    className="
    flex
    h-[70px]
    items-center
    justify-between
    px-[16px]

    tablet:h-[80px]
    tablet:px-0
"
                >
                    <Link to="/" onClick={closeMenu}>
                        <ImageView
                            mobile={{
                                src: logoMobile,
                                width: 78,
                                height: 29,
                            }}
                            tablet={{
                                src: logoDesktop,
                                width: 384,
                                height: 49,
                            }}
                            alt=""
                            className="
        w-[40px]
        tablet:w-[200px]
    "
                        />
                    </Link>

                    <nav
                        className="
        caption-1
        hidden
        items-center
        gap-[50px]
        tablet:flex
    "
                    >
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                            >
                                {link.label}
                            </Link>
                        ))}

                    </nav>

                    <button
                        type="button"
                        onClick={toggleMenu}
                        className="tablet:hidden"
                        aria-expanded={isMenuOpen}
                        aria-label={
                            isMenuOpen
                                ? "Close menu"
                                : "Open menu"
                        }
                    >
                        <img
                            src={isMenuOpen ? closeIcon : menuIcon}
                            alt="Hamburger menu"
                            width={60}
                            height={60}
                            className="block h-auto w-[24px]"
                        />
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div
                    className="
                        absolute
                        left-0
                        right-0
                        top-[70px]
                        bg-white

                        tablet:hidden
                    "
                >
                    <nav
                        className={`
        caption-1
        ${isHome ? "mx-[40px]" : "mx-[16px]"}
        flex
        flex-col
        items-start
        gap-[38px]
        border-b
        border-black/60
        px-[16px]
        pt-[45px]
        pb-[65px]
    `}
                    >
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                onClick={closeMenu}
                            >
                                {link.label}
                            </Link>
                        ))}

                    </nav>
                </div>
            )}
        </header>
    )
}