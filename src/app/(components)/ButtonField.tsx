"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getFromArray } from "@/helper/getFromArray";
import { getNoButtonLabel } from "@/app/(helper)/getNoButtonLabel";
import { getYesButtonLabel } from "@/app/(helper)/getYesButtonLabel";
import Button from "@/components/Button";

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
        <Button
          onClick={handleYesClick}
          className={`origin-bottom ${scaleClass}`}
        >
          {yesButtonLabel}
        </Button>
      </div>
      <Button onClick={handleNoClick} color="blue">
        {noButtonLabel}
      </Button>
    </div>
  );
};

export default ButtonField;
