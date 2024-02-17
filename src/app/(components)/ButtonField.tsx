"use client";

import React, { useEffect, useState } from "react";
import { getFromArray } from "@/helper/getFromArray";
import { getNoButtonLabel } from "@/app/(helper)/getNoButtonLabel";
import { getYesButtonLabel } from "@/app/(helper)/getYesButtonLabel";
import { useRouter } from "next/navigation";

const scaleClasses = [
  "h-[40px] text-base",
  "h-[60px] text-xl",
  "h-[80px] text-2xl",
  "h-[100px] text-3xl",
];

type Props = {};

const ButtonField = ({}: Props) => {
  const router = useRouter();
  const [noCounter, setNoCounter] = useState(0);

  const yesButtonLabel = getYesButtonLabel(noCounter);
  const noButtonLabel = getNoButtonLabel(noCounter);
  const scaleClass = getFromArray(scaleClasses, noCounter);

  const handleYesClick = () => router.push(`/yay?i=${noCounter}`);
  const handleNoClick = () =>
    noCounter < 3 ? setNoCounter(noCounter + 1) : router.push(`/sad`);

  useEffect(() => {
    router.prefetch("/yay");
    router.prefetch("/sad");
  }, [router]);

  return (
    <div className="flex h-full w-full flex-col justify-center gap-4">
      <div className="flex h-[100px] flex-col justify-end">
        <button
          onClick={handleYesClick}
          className={`w-full origin-bottom rounded-[calc(1.5rem-0.5rem)] bg-pink-500 px-3 py-2 font-bold text-white shadow-lg transition-all duration-300 focus:outline-none  active:!bg-pink-700 active:shadow-inner [@media(hover:hover)]:hover:bg-pink-600  ${scaleClass}`}
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
  );
};

export default ButtonField;
