import { Link } from "react-router-dom"

export function HomeAbout() {
    return (
        <section
            className="
        cta-stack
        px-[4%]
        pt-[115px]
        text-center

        min-[800px]:pt-[115px]
        min-[1280px]:pt-[125px]
    "
        >

            <p className="heading-3 text-[#555555]">
                WHO WE ARE
            </p>

            <h2
                className="
    heading-2
    home-about-textbox
    mx-auto
    mt-[var(--label-title-gap)]
"
            >
                We're Our Blooms® and we're here to help
                you find your floral story.
            </h2>

            <Link
                to="/about"
                className="
        heading-4
        mt-[var(--title-button-gap)]
        inline-block
        rounded-[4px]
        bg-[#ffc400]
        px-[12px]
        py-[6px]

        min-[1280px]:px-[14px]
        min-[1280px]:py-[8px]
    "
            >
                • &nbsp; ABOUT US
            </Link>
        </section>
    )
}