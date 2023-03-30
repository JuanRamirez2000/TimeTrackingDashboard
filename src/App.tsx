import { useState } from "react";
import "./App.css";
import ProfileCard from "./components/ProfileCard";
import TimeCard from "./components/TimeCard";
import data from "./data/data.json";
import TimeData from "./types/TimeData";

function App() {
  const timeData: TimeData[] = data;
  const [timeFrame, setTimeFrame] = useState<string>("monthly");

  return (
    <div className="flex flex-col sm:flex-row sm:h-screen w-screen items-center justify-around sm:justify-center gap-4">
      <ProfileCard setTimeFrame={setTimeFrame} />
      <div className="sm:grid sm:grid-cols-3 h-fit  sm:w-fit sm:gap-4 ">
        {timeData.map((timeData) => (
          <TimeCard
            timeData={timeData}
            timeFrame={timeFrame}
            key={timeData.title}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
