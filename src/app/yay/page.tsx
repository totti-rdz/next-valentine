"use client";

import { useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import H1 from "@/components/H1";

const images = [
  "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif",
  "https://media.tenor.com/sFStC1YwBzMAAAAi/milk-and-mocha-hug.gif",
  "https://media.tenor.com/ejMtbLv7H-gAAAAi/panda-bear-brown-bear.gif",
  "https://media.tenor.com/80nEPq9hvvIAAAAi/bear-love.gif",
];

export default function Yay() {
  const searchParams = useSearchParams();
  const initImageIndex = () => parseInt(searchParams.get("i") || "0");
  const [imageIndex, setImageIndex] = useState(initImageIndex);
  const imageSrc = images[imageIndex % images.length];

  const handleClick = () => setImageIndex(imageIndex + 1);

  return (
    <main
      className="flex h-full flex-col items-center justify-between"
      onClick={handleClick}
    >
      <div className="flex flex-col">
        <div className="mb-4 h-20">
          <H1>Okay, yay!!!! 😍</H1>
        </div>
        <div className="grid place-content-center">
          <Image
            src={imageSrc}
            alt=""
            className="mix-blend-multiply"
            width={400}
            height={400}
            priority
          />
        </div>
      </div>
    </main>
  );
}
