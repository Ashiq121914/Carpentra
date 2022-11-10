import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import MyReviewsTable from "./MyReviewsTable";

const MyReviews = () => {
  useTitle("myReviews");
  const { user, logOut } = useContext(AuthContext);

  const [reviews, setReviews] = useState([]);

  // to get the reviews
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("Carpentra-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        setReviews(data);
      });
  }, [user?.email]);

  //handle delete
  const handleDelete = (id) => {
    const proceed = window.confirm("are you sure you want to delete");

    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Successfully deleted!");
            const remaining = reviews.filter((rvw) => rvw._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  // handle update
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-20 my-60 w-3/4 mx-auto">
      {reviews.length > 0 ? (
        <>
          {reviews.map((reviewItem) => (
            // review table
            <MyReviewsTable
              key={reviewItem._id}
              reviewItem={reviewItem}
              handleDelete={handleDelete}
            ></MyReviewsTable>
          ))}
        </>
      ) : (
        <h2 className="text-5xl text-center">No reviews were added</h2>
      )}
    </div>
  );
};

export default MyReviews;
