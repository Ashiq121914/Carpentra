import React from "react";

const FAQs = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <h2 className="mx-auto w-24 text-orange-600  border border-orange-600 py-1 px-2 text-center font-semibold mb-5">
              FAQs
            </h2>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="70326c9b-4a0f-429b-9c76-792941e326d5"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Some</span>
            </span>{" "}
            Common question
          </h2>
        </div>
      </div>
      <div className="max-w-screen-xl sm:mx-auto">
        <div className="w-3/5 mx-auto">
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">
                How do i order custom service?
              </p>
              <p className="text-gray-700">
                Please provide an email at Carpentra@gmail.com and i will
                contact with you as soon as possible.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                Where do you provide your services?
              </p>
              <p className="text-gray-700">
                I usually do my work at my house shaft, i also has a factory to
                do the big custom jobs.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                What payment methods do you provide?
              </p>
              <p className="text-gray-700">
                Bkash, Nogod, Paypal, Bank payment also.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
