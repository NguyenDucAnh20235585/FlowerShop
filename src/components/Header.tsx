import { ImageView } from "./ImageView"
import { useState, useEffect } from "react"
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

    useEffect(() => {
        if (!isMenuOpen) return

        const previousOverflow = document.body.style.overflow

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsMenuOpen(false)
            }
        }

        document.body.style.overflow = "hidden"
        document.addEventListener("keydown", handleKeyDown)

        return () => {
            document.body.style.overflow = previousOverflow
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [isMenuOpen])

    return (
        <header className="sticky top-0 z-50 bg-white">
            <div
                className={`
        ${isHome
                        ? "mx-10"
                        : "mx-4 tablet:mx-5 desktop:mx-10"
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
    px-4
    tablet:h-[82px]
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
        w-10
        tablet:w-[200px]
    "
                        />
                    </Link>

                    <nav
                        className="
        caption-1
        hidden
        items-center
        gap-10
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

                        <a
                            href="mailto:hello@figma.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            CONTACT
                        </a>

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
                            width={60}
                            height={60}
                            className="block h-auto w-6"
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
        ${isHome ? "mx-10" : "mx-4"}
        flex
        flex-col
        items-start
        gap-[38px]
        border-b
        border-black/60
        px-4
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

                        <a
                            href="mailto:hello@figma.com"
                            target="_blank"
                            rel="noopener noreferrer"
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