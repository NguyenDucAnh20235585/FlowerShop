import flower01 from "../../assets/Images/Home/flower-wheel-01.webp"
import flower02 from "../../assets/Images/Home/flower-wheel-02.webp"
import flower03 from "../../assets/Images/Home/flower-wheel-03.webp"
import flower04 from "../../assets/Images/Home/flower-wheel-04.webp"
import flower05 from "../../assets/Images/Home/flower-wheel-05.webp"

export function FlowerWheel() {
    const flowers = [
        {
            src: flower01,
            alt: "Pink roses - image 1 out of 5",
        },
        {
            src: flower02,
            alt: "White rose - image 2 out of 5",
        },
        {
            src: flower03,
            alt: "Pink roses - image 3 out of 5",
        },
        {
            src: flower04,
            alt: "White tulips - image 4 out of 5",
        },
        {
            src: flower05,
            alt: "Orchid - image 5 out of 5",
        },
    ]

    return (
        <section
            className="
                mx-auto
                mt-[120px]
                w-[295px]
                overflow-x-auto

                min-[800px]:w-[720px]
                min-[1280px]:w-[1200px]
            "
        >
            <div
                className="
                    flex
                    w-max
                    gap-[12px]

                    min-[800px]:gap-[20px]
                "
            >
                {flowers.map((flower, index) => (
                    <div
                        key={flower.src}
                        className={`
            aspect-square
            w-[200px]
            shrink-0
            overflow-hidden
            rounded-[20px]

            min-[800px]:w-[300px]
            min-[800px]:rounded-[28px]

            ${index === 0 ? "min-[1280px]:ml-[-200px]" : ""}
        `}
                    >
                        <img
                            src={flower.src}
                            alt={flower.alt}
                            width={600}
                            height={600}
                            loading="lazy"
                            className="h-full w-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}