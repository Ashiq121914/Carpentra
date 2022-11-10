import React from "react";
import bg from "../../assets/home/addService.jpg";

const AddService = () => {
  const handleAddService = (event) => {
    event.preventDefault();

    const form = event.target;

    const title = form.title.value;
    const rating = form.rating.value;
    const photoURL = form.photoURL.value;
    const price = form.price.value;
    const description = form.description.value;
    const full_description = form.full_description.value;

    const service = {
      title,
      rating,
      img: photoURL,
      price,
      description,
      full_description,
    };
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("order  placed successfully");
          form.reset();
        }
      })
      .catch((er) => console.log(er));
  };
  return (
    <div className="relative">
      <img
        src={bg}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-opacity-75 bg-slate-900">
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-center xl:flex-row">
            <div className="w-9/12	">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <form onSubmit={handleAddService}>
                  <div className="mb-1 sm:mb-2">
                    <label className="inline-block mb-1 font-medium">
                      Title
                    </label>
                    <input
                      placeholder="Please add a title"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      name="title"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label className="inline-block mb-1 font-medium">
                      Rating
                    </label>
                    <input
                      placeholder="Please add a rating"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      name="rating"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label className="inline-block mb-1 font-medium">
                      ImageLink
                    </label>
                    <input
                      placeholder="PhotoURL"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      name="photoURL"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label className="inline-block mb-1 font-medium">
                      Price
                    </label>
                    <input
                      placeholder="Price"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      name="price"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label className="inline-block mb-1 font-medium">
                      Description
                    </label>
                    <input
                      placeholder="Add a introductory description"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      name="description"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label className="inline-block mb-1 font-medium">
                      Full Description
                    </label>
                    <textarea
                      className="textarea textarea-bordered w-full	block"
                      placeholder="Add Details description"
                      name="full_description"
                    ></textarea>
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none bg-slate-900 text-white"
                    >
                      Add Service
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
