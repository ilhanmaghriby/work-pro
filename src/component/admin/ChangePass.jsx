import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ChangePass = () => {
  const [changePass, setChangePass] = useState({
    current_password: "",
    new_password: "",
    new_confirm_password: "",
  });

  const history = useNavigate();

  const handleChangePass = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "current_password") {
      setChangePass({ ...changePass, current_password: value });
    } else if (name === "new_password") {
      setChangePass({ ...changePass, new_password: value });
    } else if (name === "new_confirm_password") {
      setChangePass({ ...changePass, new_confirm_password: value });
    }
  };

  const handleSubmitChangePass = (e) => {
    e.preventDefault();
    let { current_password, new_password, new_confirm_password } = changePass;
    let token = Cookies.get("token");
    axios
      .post("https://dev-example.sanbercloud.com/api/change-password", changePass, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        history("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section className="bg-[#BDCDD6]">
      <Navbar />
      <section className="flex justify-center px-10 py-32">
        <form className="w-full max-w-sm form-control" onSubmit={handleSubmitChangePass}>
          <h1 className="mb-4 text-4xl font-bold text-center">Change Password</h1>
          <label className="label">Current Password</label>
          <input
            onChange={handleChangePass}
            value={changePass.current_password}
            type="password"
            name="current_password"
            minLength={8}
            className="w-full border-black input input-bordered rounded-xl"
          />
          <label className="label">New Password</label>
          <input
            onChange={handleChangePass}
            value={changePass.new_password}
            name="new_password"
            type="password"
            minLength={8}
            className="w-full border-black input input-bordered rounded-xl"
          />
          <label className="label">Confirm New Password</label>
          <input
            onChange={handleChangePass}
            value={changePass.new_confirm_password}
            name="new_confirm_password"
            type="password"
            minLength={8}
            className="w-full border-black rounded-xl input input-bordered"
          />
          <button type="submit" className="mt-10 btn btn-neutral">
            Change Password
          </button>
        </form>
      </section>
      <Footer />
    </section>
  );
};

export default ChangePass;
