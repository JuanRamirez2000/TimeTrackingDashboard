import ellipsis from "../assets/images/icon-ellipsis.svg";
import TimeData from "../types/TimeData";

export default function TimeCard({
  timeData,
  timeFrame,
}: {
  timeData: TimeData;
  timeFrame: string;
}) {
  const setTitleBackgroundColor = (activityType: string) => {
    switch (activityType) {
      case "Work":
        return "bg-orange-400 ";
      case "Play":
        return "bg-cyan-400";
      case "Study":
        return "bg-rose-400";
      case "Exercise":
        return "bg-green-400";
      case "Social":
        return "bg-indigo-600";
      case "Self Care":
        return "bg-yellow-300";
    }
  };

  const setCurrentTimeFrameInfo = (timeFrame: string) => {
    switch (timeFrame) {
      case "daily":
        return `${timeData.timeframes.daily.current}hrs`;
      case "weekly":
        return `${timeData.timeframes.weekly.current}hrs`;
      case "monthly":
        return `${timeData.timeframes.monthly.current}hrs`;
    }
  };

  const setPreviousTimeFrameInfo = (timeFrame: string) => {
    switch (timeFrame) {
      case "daily":
        return `Yesterday - ${timeData.timeframes.daily.previous}hrs`;
      case "weekly":
        return `Last Week - ${timeData.timeframes.weekly.current} hrs`;
      case "monthly":
        return `Last Month - ${timeData.timeframes.monthly.current} hrs`;
    }
  };

  return (
    <div className="w-64">
      <div
        className={`relative w-full rounded-t-2xl flex flex-row justify-end
          ${setTitleBackgroundColor(timeData.title)}
          `}
      >
        {/* 
          new URL() is used to dynamically import the image as recommended by vite
          https://vitejs.dev/guide/assets.html

          .replace(/\s/g, "-") is for the case of self-care
          All it does is replace the space from "Self Care" in data.json with a "-"
        */}
        <img
          className="w-16 h-16"
          src={
            new URL(
              `../assets/images/icon-${timeData.title
                .toLowerCase()
                .replace(/\s/g, "-")}.svg`,
              import.meta.url
            ).href
          }
          alt={timeData.title}
        />
      </div>
      <div className="relative w-full -top-4 bg-indigo-950 hover:bg-indigo-800 hover:cursor-pointer rounded-2xl">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-lg text-gray-100">{timeData.title}</h1>
          <img
            className="h-1 hover:cursor-pointer"
            src={ellipsis}
            alt="ellipsis"
          />
        </div>
        <div className="p-4 flex flex-row sm:flex-col sm:gap-2 sm:items-start justify-between items-center">
          <h2 className="text-2xl sm:text-5xl text-gray-100">
            {setCurrentTimeFrameInfo(timeFrame)}
          </h2>
          <p className=" text-xs sm:text-md text-gray-400">
            {setPreviousTimeFrameInfo(timeFrame)}
          </p>
        </div>
      </div>
    </div>
  );
}
