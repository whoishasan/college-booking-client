import React from "react";

import { Link, NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form className="bg-white p-6 rounded-lg shadow-md w-96 space-y-4">
          <h2 className="text-2xl font-bold text-center">Register</h2>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full input input-bordered"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full input input-bordered"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full input input-bordered"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full input input-bordered"
          />

          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>

          <p className="text-center text-sm">
            Already Have an Account?{" "}
            <Link to="/login" className="hover:underline text-blue-600">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
