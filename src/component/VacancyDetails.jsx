import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const VacancyDetails = () => {
  const { id } = useParams();
  const [data2, setData2] = useState({});

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
    <section className="bg-[#BDCDD6]">
      <Navbar />
      <section>
        <div className="min-h-screen py-20 xl:py-32 hero">
          <div className="flex-col hero-content lg:flex-row">
            <img
              src={data2.company_image_url}
              className="max-w-xs rounded-lg shadow-2xl xl:max-w-sm "
            />
            <div>
              <div className="mx-2">
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
                <h3>
                  {formatRupiah(data2.salary_min)} - {formatRupiah(data2.salary_max)}
                </h3>
              </div>
              <Link to={"/"}>
                <button className="mt-4 btn bg-[#EEE9DA] rounded-lg ">Apply Now</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default VacancyDetails;
