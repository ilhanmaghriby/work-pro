import React, { createContext } from "react";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [currentId, setCurrentId] = useState(-1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [data, setData] = useState(null);
  const [data2, setData2] = useState({});
  const [input, setInput] = useState({
    title: "",
    job_description: "",
    job_qualification: "",
    job_type: "",
    job_tenure: "",
    job_status: 0,
    company_name: "",
    company_image_url: "",
    company_city: "",
    salary_min: 0,
    salary_max: 0,
  });

  const token = Cookies.get("token");
  const history = useNavigate();

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDelete = (e) => {
    let idBaru = parseInt(e.target.value);
    axios
      .delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${idBaru}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        history("/dashboard/list-job");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = (e) => {
    let idBaru = parseInt(e.target.value);
    setCurrentId(idBaru);
    history(`/dashboard/list-job/edit/${idBaru}`);
  };
  const handleInput = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    if (name === "title") {
      setInput({ ...input, title: value });
    } else if (name === "job_description") {
      setInput({ ...input, job_description: value });
    } else if (name === "job_qualification") {
      setInput({ ...input, job_qualification: value });
    } else if (name === "job_type") {
      setInput({ ...input, job_type: value });
    } else if (name === "job_tenure") {
      setInput({ ...input, job_tenure: value });
    } else if (name === "job_status") {
      setInput({ ...input, job_status: value });
    } else if (name === "company_name") {
      setInput({ ...input, company_name: value });
    } else if (name === "company_image_url") {
      setInput({ ...input, company_image_url: value });
    } else if (name === "company_city") {
      setInput({ ...input, company_city: value });
    } else if (name === "salary_min") {
      setInput({ ...input, salary_min: value });
    } else if (name === "salary_max") {
      setInput({ ...input, salary_max: value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let {
      title,
      job_description,
      job_qualification,
      job_type,
      job_tenure,
      job_status,
      company_name,
      company_image_url,
      company_city,
      salary_min,
      salary_max,
    } = input;

    if (currentId === -1) {
      axios
        .post("https://dev-example.sanbercloud.com/api/job-vacancy", input, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          history("/dashboard/list-job");
        });
    } else {
      axios
        .put(`https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`, input, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          history("/dashboard/list-job");
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setCurrentId(-1);
    setInput({
      title: "",
      job_description: "",
      job_qualification: "",
      job_type: "",
      job_tenure: "",
      job_status: 0,
      company_name: "",
      company_image_url: "",
      company_city: "",
      salary_min: 0,
      salary_max: 0,
    });
  };
  let bagianState = {
    data,
    setData,
    data2,
    setData2,
    input,
    setInput,
    isDropdownOpen,
    setIsDropdownOpen,
    currentId,
    setCurrentId,
  };

  let bagianHandle = {
    handleInput,
    handleSubmit,
    handleDelete,
    handleEdit,
    handleDropdownToggle,
  };

  return (
    <GlobalContext.Provider value={{ bagianState, bagianHandle }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
