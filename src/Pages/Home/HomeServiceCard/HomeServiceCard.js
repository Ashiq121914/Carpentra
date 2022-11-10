import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const HomeServiceCard = ({ service }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <PhotoProvider>
          <PhotoView src={service.img}>
            <img className="cursor-pointer	" src={service.img} primary />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {service.title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{service.description.slice(0, 100)}...</p>
        <div className="card-actions justify-between mt-4">
          <div className="badge badge-outline">${service.price}</div>
          <div className="badge badge-outline">
            <span>
              <FaStar className="text-orange-400 mr-1"></FaStar>
            </span>
            {service.rating}
          </div>
        </div>
        <div className="text-center">
          <Link to={`/services/${service._id}`}>
            <div className="btn btn-slate-900">Details</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeServiceCard;
