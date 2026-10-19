type ImageSource = {
  src: string;
  width: number;
  height: number;
};

type ImageViewProps = {
  mobile: ImageSource;
  tablet?: ImageSource;
  desktop?: ImageSource;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
};

export function ImageView({
  mobile,
  tablet,
  desktop,
  alt,
  className = "",
  loading = "eager",
}: ImageViewProps) {
  return (
    <picture className={`block overflow-hidden ${className}`}>
      {desktop && (
        <source
          media="(min-width: 1280px)"
          srcSet={desktop.src}
          width={desktop.width}
          height={desktop.height}
        />
      )}

      {tablet && (
        <source
          media="(min-width: 800px)"
          srcSet={tablet.src}
          width={tablet.width}
          height={tablet.height}
        />
      )}

      <img
        src={mobile.src}
        alt={alt}
        width={mobile.width}
        height={mobile.height}
        loading={loading}
        className="block h-auto w-full"
      />
    </picture>
  );
}
