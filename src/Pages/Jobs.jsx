import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setJobDetail } from "../redux/jobDetail";
import { Link, useNavigate } from "react-router-dom";
import LinkButton from "../Components/LinkButton";
import useWindowSize from "../utils/useWindowSize";
import JobSearch from "../Components/JobSearch";
import axios from "axios";
import { setData, setPage, setSearch } from "../redux/jobListSlice";
// import { data } from "../data";

const Jobs = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2 className="mb-5 text-center text-3xl md:text-3xl font-bold text-gray-500">
        Explore Jobs
      </h2>
      <JobSearch
        onSubmit={(value) => {
          console.log(value);
          dispatch(setSearch(value));
        }}
      />
      <div className="flex gap-5 justify-center">
        <JobList />
        <JobDetails />
      </div>
    </div>
  );
};

const JobList = () => {
  const { search, data } = useSelector((state) => state.jobList);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (data?.length) {
      dispatch(setJobDetail(data[0]));
    } else {
      dispatch(setJobDetail(null));
    }
  }, [data]);

  const options = {
    method: "GET",
    url: "https://jobs-api14.p.rapidapi.com/list",
    params: {
      query: search,
      location: "Japan",
      distance: "1.0",
      language: "en_GB",
      remoteOnly: "false",
      datePosted: "month",
      employmentTypes: "fulltime;parttime;intern;contractor",
      index: "0",
    },
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": "jobs-api14.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await axios.request(options);
        dispatch(setData(response.data.jobs));

        console.log(response);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
        console.error(error);
      }
    };
    if (search) {
      fetchJobs();
    }
  }, [search]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error:{error?.message}</div>;
  }

  if (!data?.length) {
    return <span className="text-3xl">No Results</span>;
  }

  return (
    <div className="flex flex-col gap-5">
      {data?.map((job) => (
        <Job key={job?.id} data={job} />
      ))}
    </div>
  );
};

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const size = useWindowSize();

  return (
    <div
      onClick={() => {
        dispatch(setJobDetail(data));
        if (size.width < 768) {
          navigate("/job_detail");
        }
      }}
      className="w-[95vw] sm:w-96 space-y-3 border-2 rounded-lg shadow-md p-5 hover:scale-105 ease-out duration-300 cursor-pointer bg-white"
    >
      <h1 className="text-2xl font-bold text-gray-700">{data?.title}</h1>

      {data?.company ? (
        <h3 className=" text-gray-700 truncate font-bold">{data?.company}</h3>
      ) : null}

      <p>{data?.location}</p>

      <p className="line-clamp-3 text-gray-500">{data?.description}</p>

      {data?.salaryRange ? (
        <p className="text-sm text-gray-500 font-bold rounded-sm bg-gray-300 w-fit py-1 px-2">
          {data?.salaryRange}
        </p>
      ) : null}

      <p className="text-sm text-green-700 font-bold bg-green-200 rounded-sm w-fit py-1 px-2">
        {data?.employmentType}
      </p>
    </div>
  );
};

const JobDetails = () => {
  const { job: data } = useSelector((state) => state.jobDetail);

  if (!data?.id) return <></>;
  return (
    <div className="hidden md:block w-[600px] h-fit border-2 space-y-3 rounded-lg shadow-md p-5 bg-white sticky top-0 right-0">
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

export default Jobs;
