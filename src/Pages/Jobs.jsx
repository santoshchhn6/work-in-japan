import { useEffect, useState } from "react";
import { data } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { yenFormatter } from "../utils/japaneseCurrency";
import { setJobDetail } from "../redux/jobDetail";
import { Link } from "react-router-dom";
import LinkButton from "../Components/LinkButton";
import { formatDate } from "../utils/formatDate";

const Jobs = () => {
  return (
    <div className="flex gap-5 justify-center">
      <JobList />
      <JobDetails />
    </div>
  );
};

const JobList = () => {
  const [page, setPage] = useState(1);
  // const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setJobDetail(data[0]));
  }, []);

  // const options = {
  //   method: "GET",
  //   url: "https://jsearch.p.rapidapi.com/search",
  //   params: {
  //     query: "japan",
  //     page: "1",
  //     num_pages: "1",
  //   },
  //   headers: {
  //     "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
  //     "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  //   },
  // };

  // useEffect(() => {
  //   const fetchJobs = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await axios.request(options);
  //       setData(response.data.data);
  //       console.log(response.data);
  //       setLoading(false);
  //     } catch (error) {
  //       setLoading(false);
  //       setError(error);
  //       console.error(error);
  //     }
  //   };
  //   fetchJobs();
  // }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error:{error?.message}</div>;
  }

  return (
    <div className="flex flex-col gap-5">
      {data?.map((job) => (
        <Job key={job?.job_id} data={job} />
      ))}
    </div>
  );
};

const Job = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(setJobDetail(data))}
      className="w-96 border-2 rounded-lg shadow-md p-5 hover:scale-105 ease-out duration-300 cursor-pointer bg-white"
    >
      <h1 className="text-xl font-bold text-gray-700">{data?.job_title}</h1>
      {data?.job_naics_name ? (
        <h3 className="my-3 text-gray-700 truncate">{data?.job_naics_name}</h3>
      ) : null}

      {data?.job_city ? (
        <div className="flex gap-3 my-3 text-gray-700">
          {data?.job_city ? <p>{data?.job_city}</p> : null}
          {data?.job_state ? <p>{data?.job_state}</p> : null}
        </div>
      ) : null}

      {data?.job_is_remote ? (
        <p className="my-3 text-green-700">Remote</p>
      ) : null}

      <p className="line-clamp-3 my-3 text-gray-500">{data?.job_description}</p>
      <p className="text-sm text-green-700 font-bold bg-green-200 rounded-sm w-fit py-1 px-2">
        {data?.job_employment_type}
      </p>

      {data?.job_min_salary ? (
        <div className="mt-3 text-sm text-gray-500 font-bold rounded-sm bg-gray-300 w-fit py-1 px-2">
          <span>{yenFormatter.format(data?.job_min_salary)}</span>
          <span> - {yenFormatter.format(data?.job_max_salary)}</span>
        </div>
      ) : null}
    </div>
  );
};

const JobDetails = () => {
  const { job: data } = useSelector((state) => state.jobDetail);
  return (
    <div className="w-[600px] h-fit border-2 rounded-lg shadow-md p-5 bg-white sticky top-0 right-0">
      {/* <h1 className="text-3xl font-fold text-gray-600">
        {data?.job_job_title}
      </h1> */}
      <h1 className="mb-3 text-3xl font-bold text-gray-700">
        {data?.job_title}
      </h1>
      {data?.job_naics_name ? (
        <h3 className="mb-3 text-gray-700 ">{data?.job_naics_name}</h3>
      ) : null}

      {/* job_publisher: "Startup Jobs" */}
      <p className="mb-3 text-gray-500 font-bold cursor-pointer">
        {data?.job_publisher}
      </p>

      {data?.job_is_remote ? (
        <p className="my-3 text-green-700">Remote</p>
      ) : null}

      {data?.job_city ? (
        <div className="flex gap-3 mb-5 text-gray-700">
          {data?.job_city ? <p>{data?.job_city}</p> : null}
          {data?.job_state ? <p>{data?.job_state}</p> : null}
        </div>
      ) : null}
      <LinkButton to={data?.job_apply_link}>Apply</LinkButton>

      <div className="mt-5 pr-3 pt-3 border-t-2 h-[50vh] overflow-y-auto">
        {/* <p>Country:{data?.job_country}</p> */}
        <h2 className="text-2xl font-bold text-gray-600 ">Job Description</h2>
        <p className=" my-3 text-gray-500">{data?.job_description}</p>
        <p className="mb-3 font-bold text-gray-600">
          Job Type:
          <span className="ml-3 text-sm text-green-700 font-bold bg-green-200 rounded-sm w-fit py-1 px-2">
            {data?.job_employment_type}
          </span>
        </p>

        {data?.job_benefits ? (
          <p className="mb-3 font-bold text-gray-600">
            Benefit:
            <span className="ml-3 font-normal text-gray-500">
              {data?.job_benefits}
            </span>
          </p>
        ) : null}

        {data?.job_required_skills ? (
          <p className="mb-3 font-bold text-gray-600">
            Required Skills:
            <span className="ml-3 font-normal text-gray-500">
              {data?.job_required_skills}
            </span>
          </p>
        ) : null}

        {data?.job_min_salary ? (
          <div className="mb-3 font-bold text-gray-600 flex">
            Salary :
            <div className="ml-3 font-normal text-gray-500">
              <span>{yenFormatter.format(data?.job_min_salary)}</span>
              <span> - {yenFormatter.format(data?.job_max_salary)}</span>
            </div>
          </div>
        ) : null}

        {data?.job_posted_at_datetime_utc ? (
          <p className="mb-3 font-bold text-gray-600">
            Posted at :
            <span className="ml-3 font-normal text-gray-500">
              {formatDate(data?.job_posted_at_datetime_utc)}
            </span>
          </p>
        ) : null}

        {/* job_latitude: 35.676422 */}
        {/* job_longitude: 139.65002 */}
        {/* job_posted_at_datetime_utc: "2024-04-23T10:28:31.000Z" */}
        {/* job_posted_at_timestamp: 1713868111 */}
      </div>
    </div>
  );
};

export default Jobs;
