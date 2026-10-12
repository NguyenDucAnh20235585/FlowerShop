import { useCallback, useState } from "react"
import { Link, useLocation } from "react-router-dom"

import logo_desktop from "../assets/Images/Header/Our Blooms®.png"
import logo_mobile from "../assets/Images/Header/O.B.png"
import menu_icon from "../assets/Images/Header/Hamburger_icon.png"
import close_icon from "../assets/Images/Header/Cancel_icon.png"

export function Header() {
    const [is_menu_open, set_is_menu_open] = useState(false)
    const { pathname } = useLocation()
    const is_home = pathname === "/"

    const close_menu = useCallback(() => {
        set_is_menu_open(false)
    }, [])

    const toggle_menu = useCallback(() => {
        set_is_menu_open((current) => !current)
    }, [])

    return (
        <header className="sticky top-0 z-50 bg-white">
            <div
                className={`
        ${is_home
                        ? "mx-[40px]"
                        : "mx-[16px] min-[800px]:mx-[20px] min-[1280px]:mx-[40px]"
                    }

        ${is_menu_open
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
                    <Link to="/" onClick={close_menu}>
                        <picture>
                            <source
                                media="(min-width: 800px)"
                                srcSet={logo_desktop}
                            />

                            <img
                                src={logo_mobile}
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
                        onClick={toggle_menu}
                        className="min-[800px]:hidden"
                        aria-expanded={is_menu_open}
                        aria-label={
                            is_menu_open
                                ? "Close menu"
                                : "Open menu"
                        }
                    >
                        <img
                            src={
                                is_menu_open
                                    ? close_icon
                                    : menu_icon
                            }
                            alt=""
                            className="block h-auto w-[24px]"
                        />
                    </button>
                </div>
            </div>

            {is_menu_open && (
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
        ${is_home ? "mx-[40px]" : "mx-[16px]"}
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
                            onClick={close_menu}
                        >
                            GALLERY
                        </Link>

                        <Link
                            to="/about"
                            onClick={close_menu}
                        >
                            ABOUT
                        </Link>

                        <a
                            href="#contact"
                            onClick={close_menu}
                        >
                            CONTACT
                        </a>
                    </nav>
                </div>
            )}
        </header>
    )
}