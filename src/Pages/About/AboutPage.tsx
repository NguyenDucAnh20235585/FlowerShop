import { StoryIntro } from "./StoryIntro"
import { StorySection } from "./StorySection"

export function AboutPage() {
    return (
        <>
            <section
                className="
        mx-[4%]
        pt-[40px]
        pb-[55px]

        min-[800px]:mx-[3%]
        min-[800px]:pt-[45px]
        min-[800px]:pb-[75px]

        min-[1280px]:pt-[55px]
        min-[1280px]:pb-[90px]
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