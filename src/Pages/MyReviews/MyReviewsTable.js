import React from "react";

const MyReviewsTable = ({ reviewItem }) => {
  const { serviceName, review } = reviewItem;
  return (
    <div className="card  w-96 bg-slate-900 text-neutral-content shadow-xl text-center">
      <div className="card-body">
        <h2 className="card-title mx-auto text-2xl">{serviceName}</h2>
        <hr />
        <p className="text-base">{review}</p>
        <div className="card-actions justify-around mt-10">
          <button className="btn btn-outline btn-success">Edit</button>
          <button className="btn btn-outline btn-error">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default MyReviewsTable;
