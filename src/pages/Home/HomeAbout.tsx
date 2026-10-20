import { Button } from "../../components/Button";

export function HomeAbout() {
  return (
    <section
      className="
        px-[4%]
        pt-31
        text-center
      "
    >
      <p className="heading-3 text-muted">WHO WE ARE</p>

      <h2
        className="
          heading-2
          mx-auto
          mt-[24px]
          w-full
          max-w-[215px]
          tablet:max-w-[412px]
          desktop:max-w-[740px]
        "
      >
        We're Our Blooms® and we're here to help you find your floral story.
      </h2>

      <Button to="/about" className="mt-[44px]">
        • &nbsp; ABOUT US
      </Button>
    </section>
  );
}
