import React, { useContext, useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const { loading } = useContext(AuthContext);

  //dynamic page
  useTitle("services");
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://service-review-server-side-eight.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  });
  if (loading) {
    return (
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    );
  }
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 lg:gap-x-11 container w-3/4 mx-auto mt-10">
      {services.map((service) => (
        <ServicesCard key={service._id} service={service}></ServicesCard>
      ))}
    </div>
  );
};

export default Services;
