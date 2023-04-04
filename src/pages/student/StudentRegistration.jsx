import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Error from "../../components/ui/Error";
import { useRegisterMutation } from "../../features/auth/authApi";
import learningportal from "../../image/learningportal.svg";
const StudentReg = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const [register, { data, isLoading, error: responseError }] =
    useRegisterMutation();
  const navigate = useNavigate();
  useEffect(() => {
    if (responseError?.data) {
      setError(responseError?.data);
    }
    if (data?.accessToken && data.user) {
      navigate("/video/1");
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Password didn't match");
    } else {
      register({ email, password, name, role: "student" });
    }
  };
  if (isLoading) {
    return (
      <section className="py-6 bg-primary h-screen grid place-items-center">
        <h1>Loading....</h1>
      </section>
    );
  }
  return (
    <section className="py-6 bg-primary h-screen grid place-items-center">
      <div className="mx-auto max-w-md px-5 lg:px-0">
        <div>
          <img className="h-12 mx-auto" src={learningportal} alt="Msa" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-100">
            Create Your New Account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label className="sr-only">Name</label>
              <input
                name="name"
                type="name"
                required
                className="login-input rounded-t-md"
                placeholder="Student Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="sr-only">Email address</label>
              <input
                name="email"
                type="email"
                required
                className="login-input "
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="sr-only">Password</label>
              <input
                name="password"
                type="password"
                required
                className="login-input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label className="sr-only">Confirm Password</label>
              <input
                name="confirm-password"
                type="password"
                required
                className="login-input rounded-b-md"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
            >
              Create Account
            </button>
          </div>
          {error !== "" && <Error message={error} />}
        </form>
      </div>
    </section>
  );
};

export default StudentReg;
