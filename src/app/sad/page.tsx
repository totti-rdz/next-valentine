"use client";

import { useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import H1 from "@/components/H1";

const images = [
  "https://media.tenor.com/Q9VuGIKQqEMAAAAi/love-bear.gif",
  "https://media.tenor.com/Pbv3D2Gk_uYAAAAi/dudu-bubu.gif",
  "https://media.tenor.com/QOzMqPvW8PUAAAAi/love-you.gif",
  "https://media.tenor.com/vHrITzhzd0YAAAAi/bear-panda.gif",
  "https://media.tenor.com/RJgIui1E_2QAAAAi/teddy-bear.gif",
];

export default function Sad() {
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
        <div className="mb-4 h-32">
          <H1>Okay...</H1>
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
