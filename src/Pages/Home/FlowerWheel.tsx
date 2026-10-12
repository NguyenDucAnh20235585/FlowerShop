import flower01 from "../../assets/Images/Home/flower-wheel-01.webp"
import flower02 from "../../assets/Images/Home/flower-wheel-02.webp"
import flower03 from "../../assets/Images/Home/flower-wheel-03.webp"
import flower04 from "../../assets/Images/Home/flower-wheel-04.webp"
import flower05 from "../../assets/Images/Home/flower-wheel-05.webp"

export function FlowerWheel() {
    const flowers = [
        flower01,
        flower02,
        flower03,
        flower04,
        flower05,
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
                        key={index}
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
                            src={flower}
                            alt=""
                            className="h-full w-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}