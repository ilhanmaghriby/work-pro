import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Vacancy = () => {
  const [data, setData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");

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

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCityFilterChange = (e) => {
    setCityFilter(e.target.value);
  };

  const handleNameFilterChange = (e) => {
    setNameFilter(e.target.value);
  };

  const filteredData = data?.filter((item) => {
    const lowerCasedCity = item.company_city?.toLowerCase() ?? "";
    const lowerCasedName = item.company_name?.toLowerCase() ?? "";
    const lowerCasedSearch = searchQuery.toLowerCase();

    return (
      lowerCasedCity.includes(cityFilter.toLowerCase()) &&
      lowerCasedName.includes(nameFilter.toLowerCase()) &&
      item.title.toLowerCase().includes(lowerCasedSearch)
    );
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#BDCDD6]">
      <Navbar />

      <main className="flex-grow">
        <section>
          <div className="pt-36 text-3xl font-bold text-center">
            <h1>Our Vacancy Job</h1>
          </div>
          <div className="mt-6 text-center">
            <input
              type="text"
              placeholder="Search Title of Job Vacancy"
              className="w-full max-w-xs border-black input"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <br />
            <input
              type="text"
              placeholder="Filter by City"
              className="w-full max-w-xs mt-4 border-black input"
              value={cityFilter}
              onChange={handleCityFilterChange}
            />
            <br />
            <input
              type="text"
              placeholder="Filter by Company Name"
              className="w-full max-w-xs mt-4 border-black input"
              value={nameFilter}
              onChange={handleNameFilterChange}
            />
          </div>
        </section>

        <section className="pt-10 pb-20 mx-10 xl:mx-40">
          <div className="job-vacancy">
            {filteredData && (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {filteredData.map((item) => (
                  <div
                    key={item.id}
                    className="max-w-sm bg-white border border-gray-200 rounded-lg shadow"
                  >
                    <figure className="flex justify-center px-10 pt-10">
                      <img
                        src={item.company_image_url}
                        alt="Company Logo"
                        className="w-auto h-24 rounded-xl"
                      />
                    </figure>
                    <div className="p-5">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight">
                        {item.title}
                      </h5>
                      <h6 className="mb-3 font-semibold">
                        {item.company_name}
                      </h6>
                      <h6 className="mb-3 font-normal">
                        {item.job_type} - {item.job_tenure}
                      </h6>
                      <h6 className="mb-3 font-normal">{item.company_city}</h6>
                      <Link to={`/vacancy/${item.id}`}>
                        <button className="btn bg-[#EEE9DA] rounded-lg">
                          Here For More
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Vacancy;
