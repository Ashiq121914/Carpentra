import React, { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import ServicesCard from "./ServicesCard";

const Services = () => {
  //dynamic page
  useTitle("services");
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  });
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 lg:gap-x-11 container w-3/4 mx-auto mt-10">
      {services.map((service) => (
        <ServicesCard key={service._id} service={service}></ServicesCard>
      ))}
    </div>
  );
};

export default Services;
