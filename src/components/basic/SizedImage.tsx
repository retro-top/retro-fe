import Image, { StaticImageData } from "next/image";
import React from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

interface SizedImageProps extends DivProps {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  imageClassName?: string;
  noCorner?: boolean;
}

const SizedImage: React.FC<SizedImageProps> = ({
  src,
  alt,
  className = "h-[30rem] w-[70rem]",
  imageClassName = "",
  noCorner = false,
}) => {
  return (
    <div
      className={`${className} overflow-hidden relative ${
        noCorner ? "" : "rounded-md"
      }`}
    >
      <Image
        src={src}
        alt={alt}
        className={` ${imageClassName ? imageClassName : "object-cover"}`}
        loading="lazy"
        fill
      />
    </div>
  );
};

export default SizedImage;