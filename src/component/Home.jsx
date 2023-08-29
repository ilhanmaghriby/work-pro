import React from "react";
import web from "../assets/img/web-developer.png";
import ContentWriter from "../assets/img/content-writer.png";
import DigitalMarketer from "../assets/img/digital-marketer.png";
import eCommerce from "../assets/img/e-commerce-specialist.png";
import GraphicDesign from "../assets/img/graphic-designer.png";
import VirtualAssist from "../assets/img/virtual-assistant.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cookies from "js-cookie";

const Home = () => {
  AOS.init();
  return (
    <div className="home bg-[#BDCDD6]">
      <Navbar />
      <section className="xl:mb-32 mb-10 bg-center bg-cover bg-no-repeat bg-[url('https://img.freepik.com/free-photo/person-office-analyzing-checking-finance-graphs_23-2150377194.jpg?size=626&ext=jpg&uid=R106504538&ga=GA1.1.1583874683.1686564604&semt=sph')] bg-gray-700 bg-blend-multiply">
        <div className="max-w-screen-xl px-4 py-24 mx-auto text-center lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
            Transform Your Career with Amazing Opportunities!
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Welcome to WorkPro, where career opportunities and dreams converge! We are a company
            dedicated to connecting top talents with exciting job opportunities across various
            industries. With our sharp focus on job vacancies, we aim to be a trusted partner for
            both companies and job seekers in creating mutually beneficial relationships.
          </p>
          {!Cookies.get("token") && (
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Link
                to={"/vacancy"}
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-gray-500 rounded-lg hover:bg-white hover:text-black focus:ring-4 focus:ring-blue-300"
              >
                Our Vacancy
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          )}
          {Cookies.get("token") && (
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Link
                to={"/vacancy"}
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-gray-500 rounded-lg hover:bg-white hover:text-black focus:ring-4 focus:ring-blue-300 "
              >
                Our Vacancy
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
              <Link
                to={"/dashboard"}
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-white rounded-lg hover:text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
              >
                Dashboard
              </Link>
            </div>
          )}
        </div>
      </section>
      <section className="pb-10 text-center xl:pb-32" data-aos="fade-up">
        <div>
          <h1 className="pt-10 pb-2 text-xl font-bold">Job Category</h1>
          <hr className="w-20 mx-auto border-1 border-sky-500" />
          <h1 className="pt-2 text-3xl font-bold ">Find Your Dream Job Today!</h1>
        </div>
        <div className="grid gap-4 mx-16 my-10 xl:gap-8 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xl:mx-80 job-category">
          <div>
            <img src={web} alt="web developer" className="float-left w-auto h-10" />
            <h1 className="text-lg font-semibold">Web Developer</h1>
            <p>100 Open Hiring</p>
          </div>
          <div>
            <img src={ContentWriter} alt="web developer" className="float-left w-auto h-10" />
            <h1 className="text-lg font-semibold">Content Writer</h1>
            <p>50 Open Hiring</p>
          </div>
          <div>
            <img src={DigitalMarketer} alt="web developer" className="float-left w-auto h-10" />
            <h1 className="text-lg font-semibold">Digital Marketer</h1>
            <p>30 Open Hiring</p>
          </div>
          <div>
            <img src={eCommerce} alt="web developer" className="float-left w-auto h-10" />
            <h1 className="text-lg font-semibold">E-Commerce Specialist</h1>
            <p>80 Open Hiring</p>
          </div>
          <div>
            <img src={GraphicDesign} alt="web developer" className="float-left w-auto h-10" />
            <h1 className="text-lg font-semibold">Graphic Designer</h1>
            <p>50 Open Hiring</p>
          </div>
          <div>
            <img src={VirtualAssist} alt="web developer" className="float-left w-auto h-10" />
            <h1 className="text-lg font-semibold">Virtual Assistant</h1>
            <p>60 Open Hiring</p>
          </div>
        </div>
      </section>
      <section className="pb-20 text-center" data-aos="fade-up">
        <div>
          <h1 className="pt-10 pb-2 text-xl font-bold">Our Partner</h1>
          <hr className="w-20 mx-auto border-1 border-sky-500" />
          <h1 className="pt-2 text-3xl font-bold ">
            Our Trusted Partners in Connecting Talent and Opportunity
          </h1>
        </div>
        <div className="pt-10 ">
          <div className="w-48 carousel">
            <div id="item1" className="w-full carousel-item">
              <img
                src="https://logodownload.org/wp-content/uploads/2021/03/shopee-logo-0.png"
                className="w-full"
              />
            </div>
            <div id="item2" className="w-full carousel-item">
              <img
                src="https://1.bp.blogspot.com/-mi2Pv-FokC8/XrJD1O7SstI/AAAAAAAAC2g/KfzawHFKqloL3hQw_0vD743SHlgud5IMgCLcBGAsYHQ/s1600/logo-bukalapak-terbaru-2020-png.png"
                className="w-full"
              />
            </div>
            <div id="item3" className="w-full carousel-item">
              <img
                src="https://download.logo.wine/logo/Amazon_(company)/Amazon_(company)-Logo.wine.png"
                className="w-full"
              />
            </div>
            <div id="item4" className="w-full carousel-item">
              <img
                src="https://seeklogo.com/images/T/tokopedia-logo-40654CCDD6-seeklogo.com.png"
                className="w-full"
              />
            </div>
          </div>
          <div className="flex justify-center w-full gap-2 py-2">
            <a href="#item1" className="btn btn-xs bg-[#EEE9DA]">
              1
            </a>
            <a href="#item2" className="btn btn-xs bg-[#EEE9DA]">
              2
            </a>
            <a href="#item3" className="btn btn-xs bg-[#EEE9DA]">
              3
            </a>
            <a href="#item4" className="btn btn-xs bg-[#EEE9DA]">
              4
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
