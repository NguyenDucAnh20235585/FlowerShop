type HomeServiceSectionProps = {
  number: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  className?: string;
};

export function HomeServiceSection({
  number,
  title,
  description,
  image,
  alt,
  className,
}: HomeServiceSectionProps) {
  return (
    <section
      className={`
        mx-[16%]
        flex
        flex-col
        items-center
        border-b
        border-black/60
        pb-20
        text-center
        tablet:mx-[10%]
        desktop:mx-[6%]
        ${className ?? ""}
      `}
    >
      <p className="heading-1">{number}</p>

      <div
        className="
          mt-[84px]
          aspect-square
          w-[145.14px]
          overflow-hidden
          rounded-[28px]
        "
      >
        <img
          src={image}
          alt={alt}
          width={432}
          height={432}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      <h2
        className="
          heading-1
          mx-auto
          mt-[84px]
          w-full
          max-w-[245px]
          wrap-anywhere
          leading-[1.4]
          tablet:max-w-[650px]
          tablet:wrap-normal
          desktop:max-w-[1000px]
        "
      >
        {title}
      </h2>

      <p
        className="
          paragraph-1
          mx-auto
          mt-[34px]
          w-full
          max-w-[240px]
          tablet:max-w-[560px]
          desktop:max-w-[1200px]
        "
      >
        {description}
      </p>
    </section>
  );
}
