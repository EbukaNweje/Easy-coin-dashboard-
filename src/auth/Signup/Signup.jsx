import React, { useState } from 'react';
import { CiMail } from "react-icons/ci";
import ScrollToTop from '../../Layout/ScrollToTop';
import { LuKey } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import { BsPerson, BsPersonCheck } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import Swal from 'sweetalert2';
import { LuEye, LuEyeOff } from "react-icons/lu";


const Signup = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const countries = ["United States", "United Kingdom", "Canada", "Australia", "Germany", "France", "India", "Nigeria", "South Africa", "Brazil"];

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const registerSchema = z.object({
    fullName: z.string().min(1, { message: 'Full name is required' }),
    username: z.string().min(3, { message: 'Username must be at least 3 characters' }),
    email: z.string().email({ message: 'Enter a valid email address' }),
    password: z.string()
      .min(8, { message: 'Password must be at least 8 characters long' })
      .regex(/[!@#$%^&*(),.?":{}|<>]/, { message: 'Password must include a special character' }),
    phone: z.string()
      .min(10, { message: 'Enter a valid phone number' })
      .regex(/^[0-9]+$/, { message: 'Phone number should contain only digits' }),
    country: z.string().min(1, { message: 'Country is required' }),
  })
  

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    console.log('working');
    
    setLoading(true);
    const userData = {
        userName: data.username,
        fullName: data.fullName,
      email: data.email,
      password: data.password,
      phoneNumber: data.phone,
      country: data.country,
    };
    console.log('Form submitted', data);
    

    try {
      const response = await axios.post('https://toptiertrade-back-end-new.vercel.app/api/register', userData);
      console.log(response);
      setLoading(false);
      Swal.fire({
        title: 'Success!',
        text: 'Registration successful!',
        icon: 'success',
        confirmButtonText: 'Login',
      }).then(() => {
        navigate('/');
      });
    } catch (error) {
      setLoading(false);
      Swal.fire({
        title: 'Error!',
        text: error.response?.data?.message || 'Registration failed',
        icon: 'error',
        confirmButtonText: 'Try Again',
      });
    }
  };

  return (
    <div className='Signup'>
      <ScrollToTop />
      <div className="logo">
        <img src="https://www.easycoinsignal.com/storage/app/public/photos/9tAyJ7Screenshot_2024-03-08_115753-removebg-preview.png1709895570" alt="logo" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>

        <h3>Create an Account</h3>
        <section>
          <label>Username *</label>
          <div className="inputDiv">
            <BsPerson color='#2980b9' size={18} />
            <input type="text" placeholder='Enter Unique Username' {...register('username')} />
          </div>
          {errors.username && <span style={{color: 'red'}}>{errors.username.message}</span>}
        </section>
        <section>
          <label>Full Name *</label>
          <div className="inputDiv">
            <BsPersonCheck color='#2980b9' size={18} />
            <input type="text" placeholder='Enter Full Name' {...register('fullName')} />
          </div>
          {errors.fullName && <span style={{color: 'red'}}>{errors.fullName.message}</span>}
        </section>
        <section>
          <label>Email *</label>
          <div className="inputDiv">
            <CiMail color='#2980b9' size={18} />
            <input type="email" placeholder='name@gmail.com' {...register('email')} />
          </div>
          {errors.email && <span style={{color: 'red'}}>{errors.email.message}</span>}
        </section>
        <section>
          <label>Phone Number *</label>
          <div className="inputDiv">
            <IoCallOutline color='#2980b9' size={18} />
            <input type="text" placeholder='Enter Phone Number' {...register('phone')} />
          </div>
          {errors.phone && <span style={{color: 'red'}}>{errors.phone.message}</span>}
        </section>
        <section>
          <label>Password *</label>
          <div className="inputDiv">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder='Enter your password' 
              {...register('password')} 
            />
            {showPassword ? 
              <LuEyeOff color='#2980b9' size={20} onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }} /> : 
              <LuEye color='#2980b9' size={20} onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }} />
            }
          </div>
          {errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}
        </section>
        <section>
          <label>Country *</label>
          <div className="inputDiv">
            <CiLocationOn color='#2980b9' size={18} />
            <select {...register('country')}>
              <option value="">Select your country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>{country}</option>
              ))}
            </select>
          </div>
          {errors.country && <span style={{color: 'red'}}>{errors.country.message}</span>}
        </section>
        <button type="submit" disabled={loading}>{loading ? 'Registering...' : 'Register'}</button>
        <div className="redirect">
          <span>Already have an account?</span> <h4 onClick={() => navigate('/')}>Login</h4>
        </div>
        <div className="authFooter">
          © Copyright <span>{currentYear}</span> <p> Toptiertradel </p> All Rights Reserved.
        </div>
      </form>
    </div>
  );
}

export default Signup;
