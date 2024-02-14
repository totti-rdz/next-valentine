"use client";

import { useSearchParams } from "next/navigation";
import H1 from "@/components/H1";
import { StringHelper } from "@/helper/StringHelper";

const defaultTitle = "will you be my valentine?";

const Title = () => {
  const searchParams = useSearchParams();
  const valentineName = searchParams.get("v");

  const title = valentineName
    ? defaultTitle
    : StringHelper.capitalize(defaultTitle);

  return (
    <>
      {valentineName && <H1>{StringHelper.capitalize(valentineName)},</H1>}
      <H1>{title}</H1>
    </>
  );
};

export default Title;
