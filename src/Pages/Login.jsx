import React from "react";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form className="bg-white p-6 rounded-lg shadow-md w-96 space-y-4">
          <h2 className="text-2xl font-bold text-center">Login</h2>

          {/* Email Field */}

          <input
            type="email"
            placeholder="Email"
            className="w-full input input-bordered"
          />

          {/* Password Field */}

          <input
            type="password"
            placeholder="Password"
            className="w-full input input-bordered"
          />

          {/* Login Button */}

          <button type="submit" className="btn btn-primary w-full bg-blue-600">
            Login
          </button>

          {/* Extra Links */}

          <div className="text-center space-y-2">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>

            <p className="text-sm">
              Don’t have an account?{" "}
              <Link className="text-blue-600 hover:underline" to="/register">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
