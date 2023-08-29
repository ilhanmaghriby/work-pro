import React from "react";
import logo from "../assets/img/logo.png";

const Footer = () => {
  return (
    <footer className="p-6 bg-[#6096B4] footer footer-center ">
      <div>
        <img src={logo} width="50" height="50" className="inline-block fill-current" />
        <p className="font-bold">Job Vacancy Website Since 2023</p>
        <p>Copyright © 2023 - All right reserved</p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.instagram.com/ilhanmaghribyy/">
            <img
              src="https://img.freepik.com/free-icon/instagram_318-566741.jpg?size=626&ext=jpg&uid=R106504538&ga=GA1.1.1583874683.1686564604&semt=sph"
              alt="instagram"
              width="24"
              height="24"
              className="fill-current"
            />
          </a>
          <a href="https://www.linkedin.com/in/m-ilhan-maghriby-431328253/">
            <img
              src="https://img.freepik.com/free-icon/linkedin_318-187585.jpg?size=626&ext=jpg&uid=R106504538&ga=GA1.2.1583874683.1686564604&semt=sph"
              alt="linkedin"
              width="24"
              height="24"
              className="fill-current"
            />
          </a>
          <a href="https://www.facebook.com/ilhan.magriby/">
            <img
              src="https://img.freepik.com/free-icon/facebook_318-157463.jpg?size=626&ext=jpg&uid=R106504538&ga=GA1.2.1583874683.1686564604&semt=sph"
              alt="facebook"
              width="24"
              height="24"
              className="fill-current"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
