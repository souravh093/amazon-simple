import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import googleLogo from "../../assets/search.png";
import { AuthContext } from "../provider/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false)
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm.value;
    
    setError("");
    setSuccess("")
    if (password !== confirmPassword) {
      setError("Your password did not match");
      return;
    } else if (password.length < 6) {
      setError("Your password must be at least 6 characters");
      return;
    }

    if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
        password
      )
    ) {
      setError("Weak password Enter strong password");
      return;
    }

    createUser(email, password)
        .then(result => {
            const loggedUser = result.user
            console.log(loggedUser)
            form.reset()
            setSuccess("Successfully Sign Up")
        }).catch(err => {
            setError(err.message)
        })
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex justify-center items-center">
      <form
        onSubmit={handleSignUp}
        className="border-2 flex flex-col gap-5 border-gray-300 rounded-md w-[500px] p-10"
      >
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
        <div className="flex flex-col gap-1 relative">
          <label htmlFor="">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            required
            className="outline-secondary border border-gray-500 px-3 py-2 rounded-md"
            placeholder="password"
          />
          <span onClick={() => setShowPassword(!showPassword)}>
          {
             showPassword ?
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 absolute right-3 cursor-pointer bottom-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
              :
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 absolute right-3 cursor-pointer bottom-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
          }
          </span>
        </div>
        <div className="flex flex-col gap-1 relative">
          <label htmlFor="">Confirm Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="confirm"
            id="confirm"
            required
            className="outline-secondary border border-gray-500 px-3 py-2 rounded-md"
            placeholder="confirm password"
          />
          <span onClick={() => setShowPassword(!showPassword)}>
          {
             showPassword ?
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 absolute right-3 cursor-pointer bottom-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
              :
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 absolute right-3 cursor-pointer bottom-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
          }
          </span>
        </div>
        <button type="submit" className="bg-secondary py-2 rounded-md">
          Sign Up
        </button>
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
        <p className="text-secondary">{success}</p>
        <p className="text-error">{error}</p>
      </form>
    </div>
  );
};

export default SignUp;
