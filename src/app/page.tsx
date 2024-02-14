"use client";

import { useState } from "react";
import Image from "next/image";
import { getNoButtonLabel } from "@/app/(helper)/getNoButtonLabel";
import { getYesButtonLabel } from "@/app/(helper)/getYesButtonLabel";
import { getFromArray } from "@/helper/getFromArray";
import { useRouter } from "next/navigation";

const imageSrc = "https://media.tenor.com/18cWVLMRwm0AAAAi/bear.gif";

const scaleClasses = [
  "h-[40px] text-base",
  "h-[60px] text-xl",
  "h-[80px] text-2xl",
  "h-[100px] text-3xl",
];

export default function Home() {
  const router = useRouter();
  const [noCounter, setNoCounter] = useState(0);

  const yesButtonLabel = getYesButtonLabel(noCounter);
  const noButtonLabel = getNoButtonLabel(noCounter);
  const scaleClass = getFromArray(scaleClasses, noCounter);

  const handleYesClick = () => console.log("YES CLICKED");
  const handleNoClick = () => setNoCounter(noCounter + 1);

  return (
    <main className="flex h-full flex-col items-center justify-between">
      <div className="flex flex-col">
        <div className="mb-4">
          <h1 className="text-center text-4xl font-bold ">
            Will you be my valentine?
          </h1>
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

      <div className="w-full max-w-96 rounded-3xl bg-white px-5 py-5 text-center shadow-md">
        <div className="flex h-full w-full flex-col justify-center gap-4">
          <div className="flex h-[100px] flex-col justify-end">
            <button
              onClick={handleYesClick}
              className={`w-full origin-bottom rounded-[calc(1.5rem-0.5rem)] bg-pink-500 px-4 py-2 font-bold text-white shadow-lg transition-all duration-300 focus:outline-none  active:!bg-pink-700 active:shadow-inner [@media(hover:hover)]:hover:bg-pink-600  ${scaleClass}`}
            >
              {yesButtonLabel}
            </button>
          </div>
          <button
            onClick={handleNoClick}
            className="w-full rounded-[calc(1.5rem-0.5rem)] bg-blue-700 px-3 py-2 font-bold text-white shadow-lg transition-all duration-300 focus:outline-none  active:!bg-blue-900 active:shadow-inner [@media(hover:hover)]:hover:bg-blue-800"
          >
            {noButtonLabel}
          </button>
        </div>
      </div>
    </main>
  );
}
