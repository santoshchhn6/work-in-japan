import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { data } from "../data";

const Jobs = () => {
  const [page, setPage] = useState(1);
  // const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
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
  // Format for Japanese Yen
  const yenFormatter = new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
  });
  return (
    <div className="w-96 border-2 rounded-lg shadow-md p-5 hover:scale-105 ease-out duration-300 cursor-pointer bg-white">
      <h1 className="text-xl font-bold text-gray-700">{data?.job_title}</h1>
      {data?.job_naics_name ? (
        <h3 className="my-3 text-gray-700 truncate">{data?.job_naics_name}</h3>
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
  return (
    <div className="w-96 border-2 rounded-lg shadow-md p-5 hover:scale-105 ease-out duration-300 cursor-pointer bg-white">
      {/* <h1 className="text-3xl font-fold text-gray-600">
        {data?.job_job_title}
      </h1> */}
      <h1 className="text-xl font-bold text-gray-700">{data?.job_title}</h1>
      {data?.job_naics_name ? (
        <h3 className="my-3 text-gray-700 truncate">{data?.job_naics_name}</h3>
      ) : null}

      {data?.job_is_remote ? (
        <p className="my-3 text-green-700">Remote</p>
      ) : null}
      {/* <Link to={data?.job_apply_link}>Apply</Link> */}

      {/* <p>Benefit:{data?.job_benefits}</p> */}
      {/* <div className="flex gap-3">
        {data?.job_city ? <p>{data?.job_city}</p> : null}
        {data?.job_state ? <p>{data?.job_state}</p> : null}
      </div> */}

      {/* <p>Country:{data?.job_country}</p> */}
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

      {/* <p>Required Skills:{data?.job_required_skills}</p> */}
      {/* job_latitude: 35.676422 */}
      {/* job_longitude: 139.65002 */}
      {/* job_posted_at_datetime_utc: "2024-04-23T10:28:31.000Z" */}
      {/* job_posted_at_timestamp: 1713868111 */}
      {/* job_publisher: "Startup Jobs" */}
    </div>
  );
};

export default Jobs;
