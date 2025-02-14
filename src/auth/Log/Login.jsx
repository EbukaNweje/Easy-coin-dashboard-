import React, { useState } from "react";
import "./Login.css";
import { CiMail } from "react-icons/ci";
import { LuKey, LuEye, LuEyeOff } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../../Layout/ScrollToTop";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../Global/Slice";


const Login = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const loginSchema = z.object({
    email: z.string().email({ message: "Enter a valid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    console.log("Submitting login data:", data);

    try {
      const response = await axios.post("https://toptiertrade-back-end-new.vercel.app/api/login", data);
      console.log("Login successful:", response.data);
        dispatch(loginSuccess(response?.data?._id))
      Swal.fire({
        title: "Success!",
        text: "Login successful!",
        icon: "success",
        confirmButtonText: "Go to Dashboard",
      }).then(() => {
        navigate("/dashboard");
      });
    } catch (error) {
      console.error("Login error:", error);
      Swal.fire({
        title: "Error!",
        text: error.response?.data?.message || "Invalid email or password",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Login">
      <ScrollToTop />
      <div className="logo">
        <img
          src="https://www.easycoinsignal.com/storage/app/public/photos/9tAyJ7Screenshot_2024-03-08_115753-removebg-preview.png1709895570"
          alt="logo"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>User Login</h3>
        <section>
          <label>Your Email *</label>
          <div className="inputDiv">
            <CiMail color="#2980b9" />
            <input type="email" placeholder="name@gmail.com" {...register("email")} />
          </div>
          {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}
        </section>
        <section>
          <label>Password *</label>
          <div className="inputDiv">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Enter password" 
              {...register("password")} 
            />
            {showPassword ? (
              <LuEyeOff color="#2980b9" size={20} onClick={togglePasswordVisibility} style={{ cursor: "pointer" }} />
            ) : (
              <LuEye color="#2980b9" size={20} onClick={togglePasswordVisibility} style={{ cursor: "pointer" }} />
            )}
          </div>
          {errors.password && <span style={{ color: "red" }}>{errors.password.message}</span>}
        </section>
        <div className="rF">
          <div className="rememberMe">
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
          <span style={{ lineHeight: "20.8px", fontSize: "13px" }}>Forgot password?</span>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Sign in"}
        </button>
        <div className="redirect">
          <span>Don't have an account?</span> <h4 onClick={() => navigate("/register")}> Sign Up</h4>
        </div>
        <div className="authFooter">
          © Copyright <span>{currentYear}</span> <p> Toptiertrade </p> All Rights Reserved.
        </div>
      </form>
    </div>
  );
};

export default Login;
