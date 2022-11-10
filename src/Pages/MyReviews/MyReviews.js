import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import MyReviewsTable from "./MyReviewsTable";

const MyReviews = () => {
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
  }, [logOut, user?.email]);

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
            alert("deleted success");
            const remaining = reviews.filter((rvw) => rvw._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  // handle update
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-20 my-20 w-3/4 mx-auto">
      {reviews.map((reviewItem) => (
        // review table
        <MyReviewsTable
          key={reviewItem._id}
          reviewItem={reviewItem}
          handleDelete={handleDelete}
        ></MyReviewsTable>
      ))}
    </div>
  );
};

export default MyReviews;
