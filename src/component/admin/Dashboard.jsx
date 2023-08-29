import React, { useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Aside from "../../assets/Aside";
import dashboard from "../../assets/img/dashboard.jpg";
import dashboard2 from "../../assets/img/dashboard2.jpg";
import { GlobalContext } from "../context/GlobalContext";
import Hamburger from "../../assets/Hamburger";

const Dashboard = () => {
  const { bagianState } = useContext(GlobalContext);
  const { data, setData } = bagianState;

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

  const totalJob = data !== null && data.length;
  const sumJobStatus = data !== null && data.reduce((total, item) => total + item.job_status, 0);

  return (
    <div className="dashboard bg-[#BDCDD6] min-h-screen">
      <Hamburger />

      <Aside />

      {/* Isi Dashboard*/}
      <div className="p-4 sm:ml-64">
        <div className="my-3 text-2xl font-bold text-center">
          <h1>Welcome To Dashboard</h1>
        </div>
        <div className="grid mb-3 sm:grid-cols-1 xl:grid-cols-2">
          <img src={dashboard} alt="dashboard" className="w-auto mb-2 rounded-lg h-96" />
          <img src={dashboard2} alt="dashboard2" className="w-auto rounded-lg xl:ml-2 h-96 " />
        </div>
        <div className="max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow ">
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Job Vacancy</h1>
          <div className="job">
            <div className="grid job-title md:grid-cols-1 xl:grid-cols-2">
              <div className="job-1">
                <h3 className="mt-10 text-xl font-semibold">Total Job Vacancy</h3>
                <p className="mt-5 mb-3 text-lg font-normal text-gray-700 ">{totalJob}</p>
              </div>
              <div className="job-2">
                <h3 className="mt-10 text-xl font-semibold ">Active Status</h3>
                <p className="mt-5 mb-3 text-lg font-normal text-gray-700 ">{sumJobStatus}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
