import Image from "next/image";
import ButtonField from "./(components)/ButtonField";
import Title from "./(components)/Title";

const imageSrc = "https://media.tenor.com/18cWVLMRwm0AAAAi/bear.gif";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-between">
      <div className="flex flex-1 flex-col">
        <div className="mb-4 h-32">
          <Title />
        </div>
        <div className="-mb-4 flex flex-1 flex-col items-center justify-end">
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

      <div className="z-10 w-full max-w-96 rounded-3xl bg-white px-5 py-5 text-center shadow-md">
        <ButtonField />
      </div>
    </main>
  );
}
