import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import HomeServiceCard from "../HomeServiceCard/HomeServiceCard";

const HomeServicesSec = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/Homeservices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  });
  return (
    <div className="my-20">
      <h2 className="mx-auto w-24 text-orange-600  border border-orange-600 py-1 px-2 text-center font-semibold">
        SERVICES
      </h2>
      <p className="text-4xl text-center mt-3 font-bold mb-16">
        Quality wooden products
      </p>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 lg:gap-x-11 container w-3/4 mx-auto">
        {services.map((service) => (
          <HomeServiceCard
            key={service._id}
            service={service}
          ></HomeServiceCard>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/services">
          <button className="btn btn-outline btn-secondary">
            See All Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeServicesSec;
