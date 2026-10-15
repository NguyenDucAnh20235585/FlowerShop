import { Button } from "../../components/Button"

export function HomeAbout() {
    return (
        <section
            className="
                cta-stack
                px-[4%]
                pt-31
                text-center
            "
        >
            <p className="heading-3 text-muted">
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

            <Button
                to="/about"
                className="mt-[var(--title-button-gap)]"
            >
                • &nbsp; ABOUT US
            </Button>
        </section>
    )
}