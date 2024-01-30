import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

const HelloComponent = () => {
  return (
    <div className=" overflow-hidden ">
      <div className="animate-fade-up animate-ease-out flex flex-col items-center justify-center p-4 min-h-screen bg-gray-100 dark:bg-gray-800">
        <div className="mx-auto max-w-sm space-y-6">
          <div className=" space-y-2 text-center">
            <h1 className="text-3xl font-bold">Probsolve-Score</h1>
            <p className="text-gray-500 dark:text-gray-400">
              คะแนนเก็บ Probsolve 60% + 10% (optional) ตอนนี้คุณมีเท่าไร?
              เราจะช่วยนับคะแนนให้เอง
            </p>
          </div>
          <div className="space-y-4">
            <form action="">
              <div className="space-y-2">
                <Label htmlFor="username">Nontri Account</Label>
                <Input name="username" placeholder="b651050xxxx" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  name="password"
                  placeholder="password ตามที่อาจารย์ให้ในห้อง"
                  required
                  type="password"
                />
              </div>
              <div className="pt-4">
                <Button className="w-full" type="submit">
                  Login
                </Button>
              </div>
            </form>
            <Link
              className="inline-block w-full text-center text-sm underline"
              href="https://www.instagram.com/faithpanupong"
            >
              เจอบัคหรอ? แจ้งมาเลย 🥹
            </Link>
          </div>
        </div>
        {/* <p className="p-4 mt-[26rem] mx-auto max-w-sm  absolute text-xs font-normal text-gray-400 dark:text-gray-400">
          *คะแนนอาจคลาดเคลื่อนเล็กน้อยเนื่องจากอาจมีข้อที่ปิดไป
          แนะนำให้ทำคะแนนให้ได้เกินกว่าเป้าหมายเล็กน้อย
        </p> */}
      </div>
      <div className="text-xs font-normal p-4 text-center text-gray-400 max-w-sm mx-auto w-full absolute bottom-20  left-0 right-0">
        *คะแนนอาจคลาดเคลื่อนเล็กน้อยเนื่องจากอาจมีข้อที่ปิดไป
        แนะนำให้ทำคะแนนให้ได้เกินกว่าเป้าหมายเล็กน้อย
      </div>
      {/* <div className="max-w-sm mx-auto w-full absolute bottom-20 p-4 text-xs font-normal text-gray-400 dark:text-gray-400">
        *คะแนนอาจคลาดเคลื่อนเล็กน้อยเนื่องจากอาจมีข้อที่ปิดไป
        แนะนำให้ทำคะแนนให้ได้เกินกว่าเป้าหมายเล็กน้อย
      </div> */}

      <footer className="w-full p-4  text-center bg-gray-200 dark:bg-gray-700 absolute bottom-0">
        <p className="text-gray-600 dark:text-gray-300">
          {`ไม่มีการเก็บข้อมูลคับดูโค้ดได้ที่ `}
          <Link
            className="text-blue-500 underline"
            href="https://github.com/inspirezuza/my-probsolve-score"
          >
            GitHub
          </Link>
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {`"เพราะเราก็ขี้เกียจนับคะแนนเองเหมือนกัน😔"`}
        </p>
      </footer>
    </div>
  );
};

export default HelloComponent;
