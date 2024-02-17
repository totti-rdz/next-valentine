"use client";

import { useState } from "react";
import H1 from "@/components/H1";
import ShareButton from "./(components)/ShareButton";
import Button from "@/components/Button";
import CopyButton from "./(components)/CopyButton";
import { getPersonalizedLink } from "./(helper)/getPersonalizedLink";

function SharingPage() {
  const [name, setName] = useState("");

  const link = getPersonalizedLink(name);

  return (
    <main className="flex h-full flex-col items-center justify-between">
      <div className="flex flex-1 flex-col">
        <div className="mb-4 h-32">
          <div className="mb-4 h-32">
            <H1>Share your personalized valentines page</H1>
          </div>
        </div>
      </div>

      <div className="z-10 w-full max-w-96 rounded-3xl bg-white px-5 py-5 text-center shadow-md">
        <div className="flex h-full w-full flex-col justify-center gap-4">
          <input
            placeholder="Your valentine"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-[calc(1.5rem-0.5rem)] border border-pink-700 px-3 py-2 text-pink-700 outline-pink-700 placeholder:text-pink-300"
          />
          {name.length !== 0 ? (
            <>
              <ShareButton link={link} />
              <CopyButton link={link} />
            </>
          ) : (
            <>
              <Button onClick={() => alert("Enter a name")}>Share</Button>
              <Button onClick={() => alert("Enter a name")}>Copy</Button>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default SharingPage;
