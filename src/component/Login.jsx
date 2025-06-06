import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const history = useNavigate();

  const handleLogin = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    if (name === "email") {
      setLogin({ ...login, email: value });
    } else if (name === "password") {
      setLogin({ ...login, password: value });
    }
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    let { email, password } = login;
    axios
      .post("https://dev-example.sanbercloud.com/api/login", login)
      .then((res) => {
        let { token } = res.data;
        Cookies.set("token", token, { expires: 1 });
        history("/");
      });
  };
  return (
    <div className="min-h-screen flex flex-col bg-[#BDCDD6]">
      <Navbar />

      <main className="flex-grow flex justify-center px-10 py-32">
        <form
          className="w-full max-w-sm form-control"
          onSubmit={handleSubmitLogin}
        >
          <h1 className="mb-4 text-4xl font-bold text-center">Let's Login</h1>
          <label className="label">Email</label>
          <input
            onChange={handleLogin}
            value={login.email}
            type="text"
            name="email"
            className="w-full border-black input rounded-xl"
          />
          <label className="label">Password</label>
          <input
            onChange={handleLogin}
            value={login.password}
            name="password"
            type="password"
            minLength={8}
            className="w-full border-black input rounded-xl"
          />
          <button type="submit" className="mt-10 btn btn-neutral rounded-xl">
            Login
          </button>
          <div className="mt-4 text-center">
            <h3>Don't Have Account?</h3>
            <Link to={"/register"}>
              <button className="mt-2 rounded-lg btn btn-neutral">
                Register Here
              </button>
            </Link>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
