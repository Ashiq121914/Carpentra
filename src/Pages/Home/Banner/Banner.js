import React from "react";
import { Link } from "react-router-dom";
import homeImg from "../../../assets/home/home.jpg";

const Banner = () => {
  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 w-11/12 mx-auto shadow-lg shadow-gray-300">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full  text-white transform -translate-x-1/2 lg:block w-8/12 "
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-fit h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src={homeImg}
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl ">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5 ">
          <p className="inline-block px-3 py-px mb-4 text-sm font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Wood Art
          </p>
          <h2 className="mb-5 font-sans text-5xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">
            Professional Carpentry Services
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            We all know a fresh coat of paint can do wonders for updating a
            space. Still, nothing adds elegance and warmth like custom woodwork
            and trim. Imagine transforming your living room or den with crown
            molding, custom storage, and a fireplace makeover. Now move to the
            kitchen and imagine how much better it would look with new,
            custom-built countertops and cabinets. Carpentry services from
            Carpentra can make that happen.
          </p>
          <div className="flex items-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-slate-900 text-white"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
