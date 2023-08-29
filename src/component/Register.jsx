import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Register = () => {
  const [register, setRegister] = useState({
    name: "",
    image_url: "",
    email: "",
    password: "",
  });

  const history = useNavigate();

  const handleRegister = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    if (name === "name") {
      setRegister({ ...register, name: value });
    } else if (name === "image_url") {
      setRegister({ ...register, image_url: value });
    } else if (name === "email") {
      setRegister({ ...register, email: value });
    } else if (name === "password") {
      setRegister({ ...register, password: value });
    }
  };

  const handleSubmitRegis = (e) => {
    e.preventDefault();
    let { name, email, password, image_url } = register;
    axios
      .post("https://dev-example.sanbercloud.com/api/register", register)
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
        <form className="w-full max-w-sm form-control" onSubmit={handleSubmitRegis}>
          <h1 className="mb-4 text-4xl font-bold text-center">Let's Register</h1>
          <label className="label">Name</label>
          <input
            onChange={handleRegister}
            value={register.name}
            type="text"
            name="name"
            className="w-full border-black input input-bordered rounded-xl"
          />
          <label className="label">Image URL</label>
          <input
            onChange={handleRegister}
            value={register.image_url}
            type="text"
            name="image_url"
            className="w-full border-black input input-bordered rounded-xl"
          />
          <label className="label">Email</label>
          <input
            onChange={handleRegister}
            value={register.email}
            type="text"
            name="email"
            className="w-full border-black input input-bordered rounded-xl"
          />
          <label className="label">Password</label>
          <input
            onChange={handleRegister}
            value={register.password}
            name="password"
            type="password"
            minLength={8}
            className="w-full border-black input input-bordered rounded-xl"
          />
          <button type="submit" className="mt-10 rounded-lg btn btn-neutral">
            Register
          </button>
        </form>
      </section>
      <Footer />
    </section>
  );
};

export default Register;
