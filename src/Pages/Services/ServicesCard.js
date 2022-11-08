import React from "react";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={service.img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {service.title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{service.description.slice(0, 100)}...</p>
        <div className="card-actions justify-between mt-4">
          <div className="badge badge-outline">${service.price}</div>
          <div className="badge badge-outline">{service.rating}</div>
        </div>
        <div className="text-center">
          <Link to={`/services/${service._id}`}>
            <div className="btn btn-outline-ghost">Details</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
