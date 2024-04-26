import { useSelector } from "react-redux";
import LinkButton from "../Components/LinkButton";

const JobDetailPage = () => {
  const { job: data } = useSelector((state) => state.jobDetail);
  console.log(data);
  return (
    <div className="w-full h-fit border-2 rounded-lg shadow-md p-5 bg-white sticky top-0 right-0">
      <h1 className="text-3xl font-bold text-gray-700">{data?.title}</h1>

      <h3 className=" text-gray-700 font-bold">{data?.company}</h3>

      <p className=" text-gray-500 font-bold cursor-pointer">
        {data?.jobProviders[0].jobProviders}
      </p>

      <p className="">{data?.location}</p>

      <div className="my-5">
        <LinkButton to={data?.jobProviders[0].url}>Apply</LinkButton>
      </div>

      <div className="space-y-3 mt-5 pr-3 pt-3 border-t-2 h-[70vh]  overflow-y-auto">
        <h2 className="text-2xl font-bold text-gray-600 ">Job Description</h2>
        <pre className="text-sm my-3 text-gray-500 whitespace-pre-wrap font-sans">
          {data?.description}
        </pre>
        {data?.salaryRange ? (
          <p>
            <span className="font-bold text-gray-600">Salary :</span>{" "}
            <span className="text-sm text-gray-500 font-bold rounded-sm bg-gray-300 w-fit py-1 px-2">
              {data?.salaryRange}
            </span>
          </p>
        ) : null}
        <p>
          <span className="font-bold text-gray-600">Job type :</span>{" "}
          <span className="text-sm text-green-700 font-bold bg-green-200 rounded-sm w-fit py-1 px-2">
            {data?.employmentType}
          </span>
        </p>
        <p>
          <span className="font-bold text-gray-600">Job Posted on :</span>{" "}
          {data?.datePosted}
        </p>
      </div>
    </div>
  );
};

export default JobDetailPage;
