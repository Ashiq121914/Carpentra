import React, { useContext, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import bgimg from "../../assets/home/login.jpg";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";

const SignUp = () => {
  useTitle("signup");
  const { createUser, updateUserProfile, loading } = useContext(AuthContext);
  const [error, setError] = useState("");

  // to redirect in the right page
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = { email: user.email };

        fetch("https://service-review-server-side-eight.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("Carpentra-token", data.token);
            navigate(from, { replace: true });
          });
        form.reset();
        handleUpdateUserProfile(name, photoURL);
      })
      .catch((err) => setError(err.message));
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => setError(error.message));
  };

  if (!error) {
    if (loading) {
      return (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      );
    }
  }
  return (
    <div className="relative">
      <img
        src={bgimg}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-75">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-center xl:flex-row">
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-3xl sm:text-center sm:mb-6 font-bold">
                  Please Sign Up
                </h3>
                <form onSubmit={handleSignUp}>
                  <div className="mb-1 sm:mb-2">
                    <label className="inline-block mb-1 font-medium">
                      Full Name
                    </label>
                    <input
                      placeholder="Please enter full name"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      name="name"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label className="inline-block mb-1 font-medium">
                      PhotoURL
                    </label>
                    <input
                      placeholder="Please enter PhotoURL"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      name="photoURL"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label className="inline-block mb-1 font-medium">
                      Email
                    </label>
                    <input
                      placeholder="Please enter email"
                      required
                      type="email"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="firstName"
                      name="email"
                    />
                  </div>

                  <div className="mb-1 sm:mb-2">
                    <label className="inline-block mb-1 font-medium">
                      Password
                    </label>
                    <input
                      placeholder="please enter password"
                      required
                      type="password"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      name="password"
                    />
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium duration-200 rounded shadow-md bg-slate-900 text-white "
                    >
                      Sign Up
                    </button>
                  </div>
                  <p className="text-2xl  sm:text-sm font-semibold">
                    Already have an acount?{" "}
                    <Link to="/login" className="underline">
                      Login
                    </Link>
                  </p>

                  <p className="my-5 text-orange-800">{error}</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
