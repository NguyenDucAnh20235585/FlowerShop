import flower01 from "../../assets/Images/Home/flower-wheel-01.webp";
import flower02 from "../../assets/Images/Home/flower-wheel-02.webp";
import flower03 from "../../assets/Images/Home/flower-wheel-03.webp";
import flower04 from "../../assets/Images/Home/flower-wheel-04.webp";
import flower05 from "../../assets/Images/Home/flower-wheel-05.webp";

const FLOWERS = [
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
];

export function FlowerWheel() {
  return (
    <section
      tabIndex={0}
      role="region"
      aria-label="Flower gallery, scroll horizontally to view more images"
      className="
        flower-wheel-scroll
        mx-auto
        mt-30
        w-[calc(100%-80px)]
        tablet:w-[calc(100%-80px)]
        overflow-x-auto
    "
    >
      <div
        className="
                    flex
                    w-max
                    gap-[13.35px]
                    tablet:gap-5
                    min-[1700px]:mx-auto
                "
      >
        {FLOWERS.map((flower, index) => (
          <div
            key={flower.src}
            className={`
                            aspect-square
                            w-[200.21px]
                            shrink-0
                            overflow-hidden
                            rounded-[20px]
                            tablet:w-[300px]
                            tablet:rounded-[28px]

                            ${
                              index === 0
                                ? "desktop:ml-[-200px] min-[1700px]:ml-0"
                                : ""
                            }
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
  );
}
