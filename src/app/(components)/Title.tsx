"use client";

import { useSearchParams } from "next/navigation";
import H1 from "@/components/H1";

const Title = () => {
  const searchParams = useSearchParams();
  const valentineName = searchParams.get("v");

  const title = valentineName
    ? "will you be my valentine?"
    : "Will you be my valentine?";

  return (
    <>
      {valentineName && <H1>{valentineName},</H1>}
      <H1>{title}</H1>
    </>
  );
};

export default Title;
