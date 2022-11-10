import React from "react";

const ReviewShow = ({ reviewDetails }) => {
  const { customerName, photoURL, review } = reviewDetails;
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Review</th>

            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={photoURL} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{customerName}</div>
                </div>
              </div>
            </td>
            <td>{review}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ReviewShow;
