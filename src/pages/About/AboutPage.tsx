import { StoryIntro } from "./StoryIntro"
import { StorySection } from "./StorySection"

export function AboutPage() {
    return (
        <>
            <section
                className="
        mx-[4%]
        pt-10
        pb-[55px]
        tablet:mx-5
        tablet:pt-12
        tablet:pb-21
    "
            >
                <h1 className="heading-1">
                    ABOUT
                </h1>
            </section>

            <StoryIntro />
            <StorySection />
        </>
    )
}