import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Aside from "../../assets/Aside";
import Hamburger from "../../assets/Hamburger";

const ListJob = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        setData([...res.data.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="listjob bg-[#BDCDD6]">
      <Hamburger />
      <Aside />
      <div className="p-4 job-vacancy sm:ml-64 ">
        <div className="mt-4 text-xl font-bold text-center title xl:text-3xl xl:mt-10">
          <h1>JOB VACANCY</h1>
        </div>
        <div className="mt-6 xl:mt-10 button-listjob">
          <Link to={"/dashboard/list-job/form-job"}>
            <button
              type="button"
              className="mt-4 btn bg-[#EEE9DA]  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Create New Job
            </button>
          </Link>
        </div>

        {data !== null && (
          <div className="grid grid-cols-1 gap-4 mb-10 sm:grid-cols-2 xl:grid-cols-3">
            {data.map((item) => {
              return (
                <div
                  key={item.id}
                  className="max-w-sm bg-white border border-gray-200 rounded-lg shadow "
                >
                  <figure className="flex justify-center px-10 pt-10">
                    <img
                      src={item.company_image_url}
                      alt="Company Logo"
                      className="w-auto h-24 rounded-xl"
                    />
                  </figure>

                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight ">{item.title}</h5>
                    <h6 className="mb-3 font-semibold ">{item.company_name}</h6>
                    <h6 className="mb-3 font-normal ">
                      {item.job_type} - {item.job_tenure}
                    </h6>

                    <h6 className="mb-3 font-normal ">{item.company_city}</h6>

                    <Link to={`/dashboard/list-job/${item.id}`}>
                      <button className="btn inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-[#EEE9DA] rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                        Click Here For More
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListJob;
