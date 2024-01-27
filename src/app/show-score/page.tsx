"use client";
import { Footer } from "@/components/component/footer";
import { Button } from "@/components/ui/button";
import Chart from "@/components/component/donut-2";
import Link from "next/link";
import RainbowJittat from "@/components/component/rainbow-jittat";

export default function ShowScore() {
  const refreshPage = () => {
    window.location.reload();
  };
  const state = {
    message: "",
    myName: "",
    maxNormalPercent: 70,
    maxOptionalPercent: 10,
    myNormalPercent: 0,
    myOptionalPercent: 10,
    realOptionalPercent: 10,
    leftOverPercent: 0,
    leftOverNormalScore: 0,
    leftOverOptionalScore: 0,
  };

  const chartData = [
    { name: "A", value: state.myNormalPercent, color: "#0B60B0" },
    { name: "B", value: state.realOptionalPercent, color: "#40A2D8" },
    {
      name: "C",
      value: 70 - state.myNormalPercent - state.realOptionalPercent,
      color: "#F0EDCF",
    },
  ];
  return (
    <>
      <div>
        <div className="flex flex-col min-h-screen  bg-gray-100 ">
          <header className="flex items-center justify-between px-6 py-4 bg-gray-200 dark:bg-[#333]">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              My Problem Solve
            </h1>
            <Link href={"/"}>
              <Button
                onClick={refreshPage}
                className="text-gray-900 dark:text-gray-100"
                variant="outline"
              >
                Logout
              </Button>
            </Link>
          </header>
          <div className="animate-fade-up animate-ease-out flex-1 overflow-y-auto">
            {" "}
            {/* This enables vertical scrolling */}
            <div className="flex flex-col items-center justify-center p-10">
              <div className="mx-auto max-w-sm space-y-6">
                <div className="space-y-2 text-center">
                  <h1 className="pt-8 text-3xl font-bold">Your Score</h1>
                  <p className="text-gray-500 dark:text-gray-400">
                    ID: 6510503671
                  </p>
                  <div className="p-4">
                    {/* {console.log(chartData)} */}
                    <Chart data={chartData} />
                  </div>
                  <div className="pt-4 text-xl font-bold">
                    Homework Score:{" "}
                    <p className="font-normal">
                      {state.myNormalPercent}/{state.maxNormalPercent}
                    </p>
                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      คุณต้องทำอีก {state.leftOverNormalScore} คะแนน
                    </p>
                  </div>
                  <div className="">
                    {state.myOptionalPercent >= state.maxOptionalPercent ? (
                      <div className="text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        <div className="font-extrabold ">Optional Score: </div>
                        <p className="font-normal">
                          {state.myOptionalPercent}/{state.maxOptionalPercent}
                        </p>
                        <p className="text-sm font-normal ">
                          คะแนนของคุณเกินมา{" "}
                          {-Math.round(state.leftOverOptionalScore * 10) / 10}{" "}
                          คะแนน!
                        </p>
                        <p className=" text-md font-normal">
                          เก่งมาก {state.myName}!
                        </p>

                        <div className="flex justify-center items-center p-4">
                          <RainbowJittat />
                        </div>
                      </div>
                    ) : (
                      <div className="pt-4 text-xl font-bold">
                        Optional Score:{" "}
                        <p className="font-normal">
                          {state.myOptionalPercent}/{state.maxOptionalPercent}
                        </p>
                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                          คุณต้องทำอีก{" "}
                          {Math.round(state.leftOverOptionalScore * 10) / 10}{" "}
                          คะแนน
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="w-full p-4  text-center bg-gray-200 dark:bg-gray-700 bottom-0">
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
      </div>
    </>
  );
}
