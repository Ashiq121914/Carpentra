import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const ReviewUpdate = () => {
  const review = useLoaderData();
  const { service } = review;

  const navigate = useNavigate();
  const [reviews, setReviews] = useState(review);
  const handleUpdate = (event) => {
    event.preventDefault();
    const UpdateReview = event.target.review.value;
    reviews.review = UpdateReview;
    fetch(
      `https://service-review-server-side-eight.vercel.app/reviewUpdate/${service}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(reviews),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/myReviews");
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="my-10 text-center">
      <h2 className="text-2xl">{review.serviceName}</h2>
      <form onSubmit={handleUpdate}>
        <textarea
          name="review"
          className="textarea textarea-bordered w-3/5 text-xl "
          placeholder="Bio"
          defaultValue={review.review}
        ></textarea>
        <button className="btn  btn-success block mx-auto my-5" type="submit">
          Update review
        </button>
      </form>
    </div>
  );
};

export default ReviewUpdate;
