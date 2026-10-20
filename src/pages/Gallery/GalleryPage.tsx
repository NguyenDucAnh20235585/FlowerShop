import { GalleryGrid } from "./GalleryGrid";
import { GalleryServiceSection } from "./GalleryServiceSection";
import { WorkWithUs } from "../../components/WorkWithUs";

import floralInstallationsMobile from "../../assets/Images/Gallery/floral-installations-gallery-mobile.webp";
import floralInstallationsTablet from "../../assets/Images/Gallery/floral-installations-gallery-tablet.webp";
import floralInstallationsDesktop from "../../assets/Images/Gallery/floral-installations-gallery-desktop.webp";

import nativePlantArrangementsMobile from "../../assets/Images/Gallery/native-plant-arrangements-gallery-mobile.webp";
import nativePlantArrangementsTablet from "../../assets/Images/Gallery/native-plant-arrangements-gallery-tablet.webp";
import nativePlantArrangementsDesktop from "../../assets/Images/Gallery/native-plant-arrangements-gallery-desktop.webp";

import customFloralConceptsMobile from "../../assets/Images/Gallery/custom-floral-concepts-gallery-mobile.webp";
import customFloralConceptsTablet from "../../assets/Images/Gallery/custom-floral-concepts-gallery-tablet.webp";
import customFloralConceptsDesktop from "../../assets/Images/Gallery/custom-floral-concepts-gallery-desktop.webp";

const SERVICES = [
  {
    title: "FLORAL INSTALLATIONS",
    description:
      "We create clean, contemporary designs that elevate any environment, from intimate gatherings to grand events.",
    mobileImage: floralInstallationsMobile,
    tabletImage: floralInstallationsTablet,
    desktopImage: floralInstallationsDesktop,
    alt: "Person making bouquet",
  },
  {
    title: "NATIVE PLANT ARRANGEMENTS",
    description:
      "Our selection of locally sourced flora brings natural resilience and effortless elegance to your home.",
    mobileImage: nativePlantArrangementsMobile,
    tabletImage: nativePlantArrangementsTablet,
    desktopImage: nativePlantArrangementsDesktop,
    alt: "Person making bouquet",
  },
  {
    title: "CUSTOM\u00A0FLORAL CONCEPTS",
    description:
      "Your vision, our blooms. We build arrangements that are both personal and exquisitely simple.",
    mobileImage: customFloralConceptsMobile,
    tabletImage: customFloralConceptsTablet,
    desktopImage: customFloralConceptsDesktop,
    alt: "Pink tulips",
  },
];

export function GalleryPage() {
  return (
    <>
      <section
        className="
                    mx-4
                    pt-15
                    tablet:mx-5
                    tablet:pt-11
                    desktop:mx-10
                "
      >
        <h1 className="heading-1">GALLERY</h1>
      </section>

      <GalleryGrid />

      <section
        className="
                    mx-4
                    mt-[34px]
                    tablet:mx-5
                    tablet:mt-[205px]
                    desktop:mx-10
                    desktop:mt-50
                    desktop:grid
                    desktop:grid-cols-[203.78px_minmax(0,1fr)]
                "
      >
        <p
          className="
                        heading-3
                        mb-10
                        text-muted
                        tablet:mb-[30px]
                        desktop:mb-0
                        desktop:pt-[10px]
                        desktop:text-black
                    "
        >
          SERVICES
        </p>

        <div
          className="
                        border-t
                        border-black/60
                        divide-y
                        divide-black/60
                    "
        >
          {SERVICES.map((service) => (
            <GalleryServiceSection key={service.title} {...service} />
          ))}
        </div>
      </section>

      <WorkWithUs
        className="
    pt-[114px]
    pb-[150px]
  "
        textClassName="
    w-full
    max-w-[230px]
    tablet:max-w-[400px]
  "
      />
    </>
  );
}
