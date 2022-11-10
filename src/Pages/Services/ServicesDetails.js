import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import ReviewShow from "./ReviewShow";

const ServicesDetails = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { _id, title, img, description, full_description } = service;

  // reviews
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const review = form.review.value;

    const reviewObj = {
      service: _id,
      serviceName: title,
      customerName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      review,
    };

    fetch("https://service-review-server-side-eight.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewObj),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("review added!");
          form.reset();
        }
      })
      .catch((err) => console.log(err));
  };

  // to get the reviews

  useEffect(() => {
    fetch(`https://service-review-server-side-eight.vercel.app/reviews/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [reviews]);

  return (
    <div className="w-4/5 mx-auto my-20">
      <div className="serviceDetails grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
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
      <hr className="my-10" />
      <div className="Review">
        {/* add review here */}
        <div>
          {reviews.map((review) => (
            <ReviewShow key={review._id} reviewDetails={review}></ReviewShow>
          ))}
        </div>
        <div>
          {user?.email ? (
            <>
              <div className="mt-10">
                <h2 className="text-2xl font-bold">Add your Review here</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-control">
                    <label className="label"></label>
                    <textarea
                      className="textarea textarea-bordered h-24"
                      placeholder="write your review here"
                      name="review"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-slate-900 mt-5">
                    Submit
                  </button>
                </form>
              </div>
            </>
          ) : (
            <p className="text-2xl my-5">
              Please{" "}
              <Link to="/login" className="underline underline-offset-1">
                Login to add a review
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
