import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="relative">
        <div className="relative bg-cover h-auto w-fit">
          <Image
            src="/jittat.png"
            width={200}
            height={200}
            alt="Picture of the author"
          ></Image>
          <div className="animate-gradient bg-300% absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-600 via-green-600 to-blue-600 opacity-35"></div>
          <span className="text-2xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
            My gradient textasdf
          </span>
        </div>
      </div>
    </>
  );
}
