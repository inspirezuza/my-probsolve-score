import Image from "next/image";

export default function RainbowJittat() {
  return (
    <>
      <div className="relative flex flex-col justify-center items-center">
        <span className="text-xl font-bold pt-4 bg-gradient-to-r  from-red-600 via-green-600 to-blue-600 text-transparent bg-clip-text bg-300% animate-gradient">
          ปลดล็อกสกินจิตรทัศน์สีรุ้ง!
        </span>
        <span className="text-sm pb-4 bg-gradient-to-r  from-red-600 via-green-600 to-blue-600 text-transparent bg-clip-text bg-300% animate-gradient">
          คะแนนของคุณถูกปรับเป็น 10% เนื่องจากคุณทำเยอะเกิน!
        </span>
        <div className=" relative bg-cover h-auto w-fit">
          <Image
            src="/jittat.png"
            width={200}
            height={200}
            alt="Picture of the author"
            className="rounded-xl"
          ></Image>
          <div className=" rounded-xl animate-gradient bg-300% absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-600 via-green-600 to-blue-600 opacity-35"></div>
        </div>
      </div>
    </>
  );
}
