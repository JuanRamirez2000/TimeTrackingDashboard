import profilePhoto from "../assets/images/image-jeremy.png";

export default function ProfileCard({
  setTimeFrame,
}: {
  setTimeFrame: React.Dispatch<string>;
}) {
  return (
    <div className="w-64 h-fit">
      <div className="relative flex flex-row sm:flex-col gap-2 sm:gap-6 items-center sm:items-start z-10 w-full p-6 sm:p-8 bg-indigo-600 rounded-xl">
        <img
          className="w-14 h-14 sm:w-16 sm:h-16 border-2 sm:border-4 rounded-full"
          src={profilePhoto}
          alt="profilePhoto"
        />
        <div className="sm:pb-16">
          <p className="text-gray-400">Report for</p>
          <p className="text-lg font-light text-gray-100 sm:text-4xl">
            Jeremy Robson
          </p>
        </div>
      </div>
      <div className="relative flex flex-row sm:flex-col w-full gap-6 -top-2 p-6 justify-evenly bg-indigo-950 rounded-b-2xl ">
        <p
          className="text-sm text-gray-400 hover:text-gray-200 hover:cursor-pointer"
          onClick={() => {
            setTimeFrame("daily");
          }}
        >
          Daily
        </p>
        <p
          className="text-sm text-gray-400 hover:text-gray-200 hover:cursor-pointer"
          onClick={() => {
            setTimeFrame("weekly");
          }}
        >
          Weekly
        </p>
        <p
          className="text-sm text-gray-400 hover:text-gray-200 hover:cursor-pointer"
          onClick={() => {
            setTimeFrame("monthly");
          }}
        >
          Monthly
        </p>
      </div>
    </div>
  );
}
