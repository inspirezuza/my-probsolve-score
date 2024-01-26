import { Footer } from "@/components/component/footer";
import { Button } from "@/components/ui/button";
import Chart from "@/components/component/donut-2";

export default function ShowScore() {
  const state = {
    message: "",
    myName: "นายภาณุพงศ์ เลิศวีรนนทรัตน์",
    maxNormalPercent: 60,
    maxOptionalPercent: 10,
    myNormalPercent: 1,
    myOptionalPercent: 14,
    realOptionalPercent: 10,
  };

  const chartData = [
    { name: "A", value: state.myNormalPercent, color: "#0B60B0" },
    { name: "B", value: state.realOptionalPercent, color: "#40A2D8" },
    {
      name: "C",
      value:
        state.maxNormalPercent +
        state.maxOptionalPercent -
        state.myNormalPercent -
        state.realOptionalPercent,
      color: "#F0EDCF",
    },
  ];
  return (
    <>
      <div className="flex flex-col min-h-screen  bg-gray-100 ">
        <header className="flex items-center justify-between px-6 py-4 bg-gray-200 dark:bg-[#333]">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            My Problem Solve
          </h1>
          <Button
            className="text-gray-900 dark:text-gray-100"
            variant="outline"
          >
            Logout
          </Button>
        </header>

        <div className=" flex flex-col items-center justify-center p-10">
          <div className="mx-auto max-w-sm space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="pt-8 text-3xl font-bold">Your Score</h1>
              <p className="text-gray-500 dark:text-gray-400">ID: 6510503671</p>
              <div className="p-4">
                <Chart data={chartData} />
              </div>
              <div className="pt-4 text-xl font-bold">
                Homework Score:{" "}
                <p className="font-normal">
                  {state.myNormalPercent}/{state.maxNormalPercent}
                </p>
              </div>
              <div className="pb-10">
                {state.myOptionalPercent >= state.maxOptionalPercent ? (
                  <div>
                    <div className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                      Optional Score:{" "}
                      <p className="font-normal">
                        {state.myOptionalPercent}/{state.maxOptionalPercent}
                      </p>
                    </div>
                    เก่งมาก 😲👍
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
        <Footer />
      </div>
    </>
  );
}
