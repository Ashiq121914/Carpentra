import React from "react";

import about from "../../../assets/home/addService.jpg";

const About = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h2 className="mx-auto w-24 text-orange-600  border border-orange-600 py-1 px-2 text-center font-semibold mb-5">
            ABOUT
          </h2>
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              “Wood is what we do, and we always find the best trees for our
              clients!”
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              I am a Fully trained carpenter and joiners will often move into
              related trades such as shop fitting, scaffolding, bench joinery,
              maintenance and system installation. Worked with natural wood
              which has been prepared by splitting, hewing, or sawing
            </p>
          </div>
          <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
            <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">Custom Work</h6>
                <p className="text-sm text-gray-900">
                  Premium quality products, organic wood and unique designs are
                  artfully crafted and combined in exclusive collection for our
                  customers.
                </p>
              </div>
            </div>
            <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                  Finishing Services
                </h6>
                <p className="text-sm text-gray-900">
                  Finish on time with 100% customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src={about}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
