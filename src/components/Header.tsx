import { useCallback, useState } from "react"
import { Link, useLocation } from "react-router-dom"

import logoDesktop from "../assets/Images/Header/our-blooms.png"
import logoMobile from "../assets/Images/Header/o-b.png"
import menuIcon from "../assets/Images/Header/hamburger-icon.png"
import closeIcon from "../assets/Images/Header/cancel-icon.png"

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { pathname } = useLocation()
    const isHome = pathname === "/"

    const closeMenu = useCallback(() => {
        setIsMenuOpen(false)
    }, [])

    const toggleMenu = useCallback(() => {
        setIsMenuOpen((current) => !current)
    }, [])

    return (
        <header className="sticky top-0 z-50 bg-white">
            <div
                className={`
        ${isHome
                        ? "mx-[40px]"
                        : "mx-[16px] min-[800px]:mx-[20px] min-[1280px]:mx-[40px]"
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

    min-[800px]:h-[80px]
    min-[800px]:px-0
"
                >
                    <Link to="/" onClick={closeMenu}>
                        <picture>
                            <source
                                media="(min-width: 800px)"
                                srcSet={logoDesktop}
                            />

                            <img
                                src={logoMobile}
                                alt="Our Blooms"
                                className="
                                    block
                                    h-auto
                                    w-[40px]

                                    min-[800px]:w-[200px]
                                "
                            />
                        </picture>
                    </Link>

                    {/* Desktop / tablet */}
                    <nav
                        className="
        caption-1
        hidden
        items-center
        gap-[50px]

        min-[800px]:flex
    "
                    >
                        <Link to="/gallery">
                            GALLERY
                        </Link>

                        <Link to="/about">
                            ABOUT
                        </Link>

                        <a href="#contact">
                            CONTACT
                        </a>
                    </nav>

                    <button
                        type="button"
                        onClick={toggleMenu}
                        className="min-[800px]:hidden"
                        aria-expanded={isMenuOpen}
                        aria-label={
                            isMenuOpen
                                ? "Close menu"
                                : "Open menu"
                        }
                    >
                        <img
                            src={
                                isMenuOpen
                                    ? closeIcon
                                    : menuIcon
                            }
                            alt=""
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

                        min-[800px]:hidden
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
                        <Link
                            to="/gallery"
                            onClick={closeMenu}
                        >
                            GALLERY
                        </Link>

                        <Link
                            to="/about"
                            onClick={closeMenu}
                        >
                            ABOUT
                        </Link>

                        <a
                            href="#contact"
                            onClick={closeMenu}
                        >
                            CONTACT
                        </a>
                    </nav>
                </div>
            )}
        </header>
    )
}