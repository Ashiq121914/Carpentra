import React from "react";
import { useLoaderData } from "react-router-dom";

const ServicesDetails = () => {
  const service = useLoaderData();
  const { title, img, description, full_description } = service;

  return (
    <div className="w-4/5 mx-auto my-20">
      <div className="serviceDetails grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="Details">
          <h2 className="mx-auto w-24 text-orange-600  border border-orange-600 py-1 px-2 text-center font-semibold">
            Creative
          </h2>
          <h2 className="text-4xl text-center my-4 font-bold">{title}</h2>
          <p>{description}</p>
          <p>{full_description}</p>
        </div>
        <div className="image self-end">
          <img className="rounded-lg" src={img} alt="" />
        </div>
      </div>
      <div className="Review"></div>
    </div>
  );
};

export default ServicesDetails;
