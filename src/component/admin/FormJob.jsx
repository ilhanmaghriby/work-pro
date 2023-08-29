import Input from "../../assets/Input";
import React, { useContext, useEffect } from "react";
import axios from "axios";
import Aside from "../../assets/Aside";
import { GlobalContext } from "../context/GlobalContext";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import Hamburger from "../../assets/Hamburger";

const FormJob = () => {
  const { id } = useParams();
  const { bagianState, bagianHandle } = useContext(GlobalContext);
  const { input, setInput } = bagianState;
  const { handleInput, handleSubmit } = bagianHandle;

  useEffect(() => {
    let token = Cookies.get("token");

    if (id !== undefined) {
      axios
        .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          let data = res.data;
          setInput({
            title: data.title,
            job_description: data.job_description,
            job_qualification: data.job_qualification,
            job_type: data.job_type,
            job_tenure: data.job_tenure,
            job_status: data.job_status,
            company_name: data.company_name,
            company_image_url: data.company_image_url,
            company_city: data.company_city,
            salary_min: data.salary_min,
            salary_max: data.salary_max,
          });
        });
    }
  }, []);

  return (
    <div className="formjob bg-[#BDCDD6]">
      <Hamburger />
      <Aside />
      <div className="p-4 job-vacancy sm:ml-64 ">
        <form onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold text-center">Form</h1>
          <Input
            title="Title Job"
            change={handleInput}
            value={input.title}
            type="text"
            name="title"
          />
          <Input
            title="Job Description"
            change={handleInput}
            value={input.job_description}
            type="text"
            name="job_description"
          />
          <Input
            title="Job Qualification"
            change={handleInput}
            value={input.job_qualification}
            type="text"
            name="job_qualification"
          />
          <Input
            title="Job Type"
            change={handleInput}
            value={input.job_type}
            type="text"
            name="job_type"
          />
          <Input
            title="Job Tenure"
            change={handleInput}
            value={input.job_tenure}
            type="text"
            name="job_tenure"
          />
          <Input
            title="Job Status"
            change={handleInput}
            value={input.job_status}
            type="number"
            name="job_status"
          />
          <Input
            title="Company Name"
            change={handleInput}
            value={input.company_name}
            type="text"
            name="company_name"
          />
          <Input
            title="Company Image URL"
            change={handleInput}
            value={input.company_image_url}
            type="text"
            name="company_image_url"
          />
          <Input
            title="Company City"
            change={handleInput}
            value={input.company_city}
            type="text"
            name="company_city"
          />
          <Input
            title="Min Salary"
            change={handleInput}
            value={input.salary_min}
            type="number"
            name="salary_min"
          />
          <Input
            title="Max Salary"
            change={handleInput}
            value={input.salary_max}
            type="number"
            name="salary_max"
          />
          <input type="submit" className="p-2 my-3 font-bold text-white rounded-md bg-sky-700" />
        </form>
      </div>
    </div>
  );
};

export default FormJob;
