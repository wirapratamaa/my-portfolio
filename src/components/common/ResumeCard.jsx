import { MdWork } from "react-icons/md";

const ResumeCard = ({ data }) => {
  const { time, job, company, task } = data;
  return (
    <div className="flex flex-col md:flex-row md:space-x-6 bg-gray-800 rounded-md px-4 py-6">
      <div className="flex flex-row mx-3 space-x-3 items-center md:items-start">
        <div className="w-fit bg-zinc-200 rounded-full p-2">
          <MdWork className="h-10 w-10" />
        </div>
        <div className="flex flex-col md:hidden">
          <span className="text-zinc-200 text-base font-bold">{time}</span>
          <span className="text-zinc-200 text-base font-bold">{job}</span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-zinc-200 text-lg font-bold hidden md:block">
          {time}
        </span>
        <span className="text-zinc-200 text-2xl font-bold hidden md:block">
          {job}
        </span>
        <span className="text-zinc-200 text-lg mt-3 md:mt-0 font-bold pb-1 md:pb-0 border-b-2 md:border-b-0">
          {company}
        </span>

        {task.map((item, i) => (
          <span
            className={`text-zinc-200 text-sm ${i === 0 ? "mt-4" : "mt-2"}`}
            key={i}
          >
            - {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ResumeCard;
