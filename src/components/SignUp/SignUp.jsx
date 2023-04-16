import React from "react";
import { Link } from "react-router-dom";
import googleLogo from '../../assets/search.png'

const SignUp = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex justify-center items-center">
      <form className="border-2 flex flex-col gap-5 border-gray-300 rounded-md w-[500px] p-10">
        <h2 className="text-center text-4xl font-semibold">Sign Up</h2>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="outline-secondary border border-gray-500 px-3 py-2 rounded-md"
            placeholder="email"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            className="outline-secondary border border-gray-500 px-3 py-2 rounded-md"
            placeholder="password"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Confirm Password</label>
          <input
            type="password"
            name="confirm"
            id="confirm"
            required
            className="outline-secondary border border-gray-500 px-3 py-2 rounded-md"
            placeholder="confirm password"
          />
        </div>
        <button type="submit" className="bg-secondary py-2 rounded-md">Login</button>
        <p className="text-center">
          Already have an account?{" "}
          <Link className="text-secondary" to="/login">
            Login
          </Link>
        </p>
        <div>
          <hr className="w-3/4 h-[1px] mx-auto bg-gray-300" />
        </div>
        <button className="py-3 rounded-md border-2 flex items-center justify-center gap-3 text-black">
          <img src={googleLogo} alt="" />
          <p>Continue with Google</p>
        </button>
      </form>
    </div>
  );
};

export default SignUp;
