"use client";
import { Footer } from "@/components/component/footer";
import { Button } from "@/components/ui/button";
import Chart from "@/components/component/donut-2";
import Link from "next/link";

export default function ShowScore() {
  const refreshPage = () => {
    window.location.reload();
  };
  const state = {
    message: "",
    myName: "นายภาณุพงศ์ เลิศวีรนนทรัตน์",
    maxNormalPercent: 60,
    maxOptionalPercent: 10,
    myNormalPercent: 50,
    myOptionalPercent: 14,
    realOptionalPercent: 10,
    leftOverPercent: 10,
  };

  const chartData = [
    { name: "A", value: 50, color: "#0B60B0" },
    { name: "B", value: 10, color: "#40A2D8" },
    {
      name: "C",
      value: 10,
      color: "#F0EDCF",
    },
  ];
  return (
    <>
      <div className="w-96 h-96">
        <Chart
          data={[
            {
              name: "Cluster 1",
              value: 50,
              color: "red",
            },
            {
              name: "Cluster 2",
              value: 30,
              color: "green",
            },
            {
              name: "Cluster 3",
              value: 12,
              color: "blue",
            },
          ]}
        />
      </div>
      {/* <div>
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
            <div className="flex flex-col items-center justify-center p-10">
              <div className="mx-auto max-w-sm space-y-6">
                <div className="space-y-2 text-center">
                  <h1 className="pt-8 text-3xl font-bold">Your Score</h1>
                  <p className="text-gray-500 dark:text-gray-400">
                    ID: 6510503671
                  </p>
                  <div className="p-4">
                    <Chart data={chartData} />
                  </div>
                  <div className="pt-4 text-xl font-bold">
                    Homework Score:{" "}
                    <p className="font-normal">
                      {state.myNormalPercent}/{state.maxNormalPercent}
                    </p>
                  </div>
                  <div className="">
                    {state.myOptionalPercent >= state.maxOptionalPercent ? (
                      <div>
                        <div className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                          Optional Score:{" "}
                          <p className="font-normal">
                            {state.myOptionalPercent}/{state.maxOptionalPercent}
                          </p>
                        </div>
                        เก่งมาก {state.myName} 😲👍
                      </div>
                    ) : (
                      <div className="pt-4 text-xl font-bold">
                        Optional Score:{" "}
                        <p className="font-normal">
                          {state.myOptionalPercent}/{state.maxOptionalPercent}
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
              {`ไม่ phishing คับดูโค้ดได้ที่ `}
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
      </div> */}
    </>
  );
}
