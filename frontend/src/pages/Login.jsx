import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/axios";

import { motion } from "framer-motion";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.post(
        "/auth/login",
        form
      );

      localStorage.setItem(
        "token",
        data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(data)
      );

      navigate("/");
    } catch (error) {
      alert(
        error.response?.data?.message
      );
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-950 px-4">
      <motion.form
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="w-full max-w-md bg-slate-900 border border-slate-700 p-8 rounded-3xl shadow-2xl"
        onSubmit={submitHandler}
      >
        <h1 className="text-4xl font-bold text-center mb-2">
          TaskFlow
        </h1>

        <p className="text-center text-slate-400 mb-8">
          Welcome Back 👋
        </p>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-xl bg-slate-800 mb-4"
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-xl bg-slate-800 mb-6"
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
        />

        <button className="w-full bg-indigo-600 hover:bg-indigo-700 transition p-3 rounded-xl">
          Login
        </button>

        <p className="text-center mt-4">
          No account?{" "}
          <Link
            className="text-indigo-400"
            to="/register"
          >
            Register
          </Link>
        </p>
      </motion.form>
    </div>
  );
}