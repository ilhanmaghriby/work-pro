import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Aside from "../../assets/Aside";
import { GlobalContext } from "../context/GlobalContext";
import Hamburger from "../../assets/Hamburger";

const ListJobDetails = () => {
  const { id } = useParams();
  const { bagianState, bagianHandle } = useContext(GlobalContext);
  const { data2, setData2 } = bagianState;
  const { handleDelete, handleEdit } = bagianHandle;

  const formatRupiah = (number) => {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });

    return formatter.format(number);
  };

  useEffect(() => {
    axios
      .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`)
      .then((res) => {
        setData2(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className=" listjobdetails bg-[#BDCDD6] min-h-screen">
      <Hamburger />
      <Aside />
      <div className="grid p-4 pt-20 xl:grid-cols-2 sm:ml-64 sm:grid-cols-1">
        <div className="image-job ">
          <img
            src={data2.company_image_url}
            alt="company logo"
            className="w-auto mx-auto rounded-lg h-2/3 "
          />
        </div>
        <div className="mx-4 mb-10 text-job">
          <h1 className="mb-2 text-2xl font-bold">{data2.title}</h1>
          <h2 className="mb-2 text-xl font-semibold">
            {data2.company_name} ({data2.company_city})
          </h2>
          <h3>
            {data2.job_type} - {data2.job_tenure}
          </h3>
          <h3 className="mb-2">Status : {data2.job_status}</h3>
          <h3 className="text-lg font-medium ">Description:</h3>
          <p className="mb-2 ">{data2.job_description}</p>
          <h3 className="text-lg font-medium">Requirements:</h3>
          <p className="mb-2">{data2.job_qualification}</p>
          <h3 className="text-lg font-medium">
            Salary: {formatRupiah(data2.salary_min)} - {formatRupiah(data2.salary_max)}
          </h3>
          <button
            onClick={handleEdit}
            value={data2.id}
            type="button"
            className="mt-4 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            value={data2.id}
            type="button"
            className="mt-4 text-white bg-rose-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListJobDetails;
