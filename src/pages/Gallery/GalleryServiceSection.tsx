import { ImageView } from "../../components/ImageView";

type GalleryServiceSectionProps = {
  title: string;
  description: string;
  mobileImage: string;
  tabletImage: string;
  desktopImage: string;
  alt: string;
};

export function GalleryServiceSection({
  title,
  description,
  mobileImage,
  tabletImage,
  desktopImage,
  alt,
}: GalleryServiceSectionProps) {
  return (
    <section
      className="
                pb-[70px]
                tablet:grid
                tablet:grid-cols-2
                tablet:items-start
                tablet:gap-5
            "
    >
      <div
        className="
                    pt-[34px]
                "
      >
        <h2 className="heading-1 leading-[1.4]">{title}</h2>

        <p
          className="
                        paragraph-1
                        mt-7
                    "
        >
          {description}
        </p>
      </div>

      <ImageView
        mobile={{
          src: mobileImage,
          width: 686,
          height: 592,
        }}
        tablet={{
          src: tabletImage,
          width: 740,
          height: 1237,
        }}
        desktop={{
          src: desktopImage,
          width: 977,
          height: 842,
        }}
        loading="lazy"
        alt={alt}
        className="
                mt-6
                w-full
                rounded-[20px]
                tablet:mt-[30px]
                tablet:rounded-[24px]
                desktop:rounded-[28px]
                "
      />
    </section>
  );
}
