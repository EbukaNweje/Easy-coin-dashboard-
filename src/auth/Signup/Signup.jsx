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
            <option value="">Select country</option>
            <option value='Afghanistan'>Afghanistan</option>
                                         <option value='Albania'>Albania</option>
                                         <option value='Algeria'>Algeria</option>
                                         <option value='American Samoa'>American Samoa</option>
                                          <option value='Andorra'>Andorra</option>
                                         <option value='Angola'>Angola</option>
                                         <option value='Anguilla'>Anguilla</option>
                                         <option value='Antarctica'>Antarctica</option>
                                         <option value='Antigua And Barbuda'>Antigua And Barbuda</option>
                                         <option value='Argentina'>Argentina</option><option value='Armenia'>Armenia</option>
                                         <option value='Aruba'>Aruba</option><option value='Australia'>Australia</option>
                                         <option value='Austria'>Austria</option><option value='Azerbaijan'>Azerbaijan</option>
                                         <option value='Bahamas The'>Bahamas The</option><option value='Bahrain'>Bahrain</option>
                                         <option value='Bangladesh'>Bangladesh</option><option value='Barbados'>Barbados</option>
                                         <option value='Belarus'>Belarus</option><option value='Belgium'>Belgium</option>
                                         <option value='Belize'>Belize</option><option value='Benin'>Benin</option>
                                         <option value='Bermuda'>Bermuda</option><option value='Bhutan'>Bhutan</option>
                                         <option value='Bolivia'>Bolivia</option><option value='Bosnia and Herzegovina'>Bosnia and Herzegovina</option>
                                         <option value='Botswana'>Botswana</option><option value='Bouvet Island'>Bouvet Island</option>
                                         <option value='Brazil'>Brazil</option><option value='British Indian Ocean Territory'>British Indian Ocean Territory</option>
                                         <option value='Brunei'>Brunei</option><option value='Bulgaria'>Bulgaria</option><option value='Burkina Faso'>Burkina Faso</option>
                                         <option value='Burundi'>Burundi</option><option value='Cambodia'>Cambodia</option><option value='Cameroon'>Cameroon</option>
                                         <option value='Canada'>Canada</option><option value='Cape Verde'>Cape Verde</option><option value='Cayman Islands'>Cayman Islands</option>
                                         <option value='Central African Republic'>Central African Republic</option><option value='Chad'>Chad</option>
                                         <option value='Chile'>Chile</option><option value='China'>China</option><option value='Christmas Island'>Christmas Island</option>
                                         <option value='Cocos (Keeling) Islands'>Cocos (Keeling) Islands</option><option value='Colombia'>Colombia</option>
                                         <option value='Comoros'>Comoros</option><option value='Congo'>Congo</option><option value='Congo The Democratic Republic Of The'>Congo The Democratic Republic Of The</option>
                                         <option value='Cook Islands'>Cook Islands</option><option value='Costa Rica'>Costa Rica</option>
                                         <option value='Cote D Ivoire (Ivory Coast)'>Cote D Ivoire (Ivory Coast)</option>
                                         <option value='Croatia (Hrvatska)'>Croatia (Hrvatska)</option><option value='Cuba'>Cuba</option>
                                         <option value='Cyprus'>Cyprus</option><option value='Czech Republic'>Czech Republic</option>
                                         <option value='Denmark'>Denmark</option><option value='Djibouti'>Djibouti</option><option value='Dominica'>Dominica</option>
                                         <option value='Dominican Republic'>Dominican Republic</option><option value='East Timor'>East Timor</option>
                                         <option value='Ecuador'>Ecuador</option><option value='Egypt'>Egypt</option><option value='El Salvador'>El Salvador</option>
                                         <option value='Equatorial Guinea'>Equatorial Guinea</option><option value='Eritrea'>Eritrea</option><option value='Estonia'>Estonia</option>
                                         <option value='Ethiopia'>Ethiopia</option><option value='External Territories of Australia'>External Territories of Australia</option>
                                         <option value='Falkland Islands'>Falkland Islands</option><option value='Faroe Islands'>Faroe Islands</option><option value='Fiji Islands'>Fiji Islands</option><option value='Finland'>Finland</option><option value='France'>France</option><option value='French Guiana'>French Guiana</option><option value='French Polynesia'>French Polynesia</option><option value='French Southern Territories'>French Southern Territories</option><option value='Gabon'>Gabon</option><option value='Gambia The'>Gambia The</option><option value='Georgia'>Georgia</option><option value='Germany'>Germany</option><option value='Ghana'>Ghana</option><option value='Gibraltar'>Gibraltar</option><option value='Greece'>Greece</option><option value='Greenland'>Greenland</option><option value='Grenada'>Grenada</option><option value='Guadeloupe'>Guadeloupe</option><option value='Guam'>Guam</option><option value='Guatemala'>Guatemala</option><option value='Guernsey and Alderney'>Guernsey and Alderney</option><option value='Guinea'>Guinea</option><option value='Guinea-Bissau'>Guinea-Bissau</option><option value='Guyana'>Guyana</option><option value='Haiti'>Haiti</option><option value='Heard and McDonald Islands'>Heard and McDonald Islands</option><option value='Honduras'>Honduras</option><option value='Hong Kong S.A.R.'>Hong Kong S.A.R.</option><option value='Hungary'>Hungary</option><option value='Iceland'>Iceland</option><option value='India'>India</option><option value='Indonesia'>Indonesia</option><option value='Iran'>Iran</option><option value='Iraq'>Iraq</option><option value='Ireland'>Ireland</option><option value='Israel'>Israel</option><option value='Italy'>Italy</option><option value='Jamaica'>Jamaica</option><option value='Japan'>Japan</option><option value='Jersey'>Jersey</option><option value='Jordan'>Jordan</option><option value='Kazakhstan'>Kazakhstan</option><option value='Kenya'>Kenya</option><option value='Kiribati'>Kiribati</option><option value='Korea North'>Korea North</option><option value='Korea South'>Korea South</option><option value='Kuwait'>Kuwait</option><option value='Kyrgyzstan'>Kyrgyzstan</option><option value='Laos'>Laos</option><option value='Latvia'>Latvia</option><option value='Lebanon'>Lebanon</option><option value='Lesotho'>Lesotho</option><option value='Liberia'>Liberia</option><option value='Libya'>Libya</option><option value='Liechtenstein'>Liechtenstein</option><option value='Lithuania'>Lithuania</option><option value='Luxembourg'>Luxembourg</option><option value='Macau S.A.R.'>Macau S.A.R.</option><option value='Macedonia'>Macedonia</option><option value='Madagascar'>Madagascar</option><option value='Malawi'>Malawi</option><option value='Malaysia'>Malaysia</option><option value='Maldives'>Maldives</option><option value='Mali'>Mali</option><option value='Malta'>Malta</option><option value='Man (Isle of)'>Man (Isle of)</option><option value='Marshall Islands'>Marshall Islands</option><option value='Martinique'>Martinique</option><option value='Mauritania'>Mauritania</option><option value='Mauritius'>Mauritius</option><option value='Mayotte'>Mayotte</option><option value='Mexico'>Mexico</option><option value='Micronesia'>Micronesia</option><option value='Moldova'>Moldova</option><option value='Monaco'>Monaco</option><option value='Mongolia'>Mongolia</option><option value='Montserrat'>Montserrat</option><option value='Morocco'>Morocco</option><option value='Mozambique'>Mozambique</option><option value='Myanmar'>Myanmar</option><option value='Namibia'>Namibia</option><option value='Nauru'>Nauru</option><option value='Nepal'>Nepal</option><option value='Netherlands Antilles'>Netherlands Antilles</option><option value='Netherlands The'>Netherlands The</option><option value='New Caledonia'>New Caledonia</option><option value='New Zealand'>New Zealand</option><option value='Nicaragua'>Nicaragua</option><option value='Niger'>Niger</option><option value='Nigeria'>Nigeria</option><option value='Niue'>Niue</option><option value='Norfolk Island'>Norfolk Island</option><option value='Northern Mariana Islands'>Northern Mariana Islands</option><option value='Norway'>Norway</option><option value='Oman'>Oman</option><option value='Pakistan'>Pakistan</option><option value='Palau'>Palau</option><option value='Palestinian Territory Occupied'>Palestinian Territory Occupied</option><option value='Panama'>Panama</option><option value='Papua new Guinea'>Papua new Guinea</option><option value='Paraguay'>Paraguay</option><option value='Peru'>Peru</option><option value='Philippines'>Philippines</option><option value='Pitcairn Island'>Pitcairn Island</option><option value='Poland'>Poland</option><option value='Portugal'>Portugal</option><option value='Puerto Rico'>Puerto Rico</option><option value='Qatar'>Qatar</option><option value='Reunion'>Reunion</option><option value='Romania'>Romania</option><option value='Russia'>Russia</option><option value='Rwanda'>Rwanda</option><option value='Saint Helena'>Saint Helena</option><option value='Saint Kitts And Nevis'>Saint Kitts And Nevis</option><option value='Saint Lucia'>Saint Lucia</option><option value='Saint Pierre and Miquelon'>Saint Pierre and Miquelon</option><option value='Saint Vincent And The Grenadines'>Saint Vincent And The Grenadines</option><option value='Samoa'>Samoa</option><option value='San Marino'>San Marino</option><option value='Sao Tome and Principe'>Sao Tome and Principe</option><option value='Saudi Arabia'>Saudi Arabia</option><option value='Senegal'>Senegal</option><option value='Serbia'>Serbia</option><option value='Seychelles'>Seychelles</option><option value='Sierra Leone'>Sierra Leone</option><option value='Singapore'>Singapore</option><option value='Slovakia'>Slovakia</option><option value='Slovenia'>Slovenia</option><option value='Smaller Territories of the UK'>Smaller Territories of the UK</option><option value='Solomon Islands'>Solomon Islands</option><option value='Somalia'>Somalia</option><option value='South Africa'>South Africa</option><option value='South Georgia'>South Georgia</option><option value='South Sudan'>South Sudan</option><option value='Spain'>Spain</option><option value='Sri Lanka'>Sri Lanka</option><option value='Sudan'>Sudan</option><option value='Suriname'>Suriname</option><option value='Svalbard And Jan Mayen Islands'>Svalbard And Jan Mayen Islands</option><option value='Swaziland'>Swaziland</option><option value='Sweden'>Sweden</option><option value='Switzerland'>Switzerland</option><option value='Syria'>Syria</option><option value='Taiwan'>Taiwan</option><option value='Tajikistan'>Tajikistan</option><option value='Tanzania'>Tanzania</option><option value='Thailand'>Thailand</option><option value='Togo'>Togo</option><option value='Tokelau'>Tokelau</option><option value='Tonga'>Tonga</option><option value='Trinidad And Tobago'>Trinidad And Tobago</option><option value='Tunisia'>Tunisia</option><option value='Turkey'>Turkey</option><option value='Turkmenistan'>Turkmenistan</option><option value='Turks And Caicos Islands'>Turks And Caicos Islands</option><option value='Tuvalu'>Tuvalu</option><option value='Uganda'>Uganda</option><option value='Ukraine'>Ukraine</option><option value='United Arab Emirates'>United Arab Emirates</option><option value='United Kingdom'>United Kingdom</option><option value='United States'>United States</option><option value='United States Minor Outlying Islands'>United States Minor Outlying Islands</option><option value='Uruguay'>Uruguay</option><option value='Uzbekistan'>Uzbekistan</option><option value='Vanuatu'>Vanuatu</option><option value='Vatican City State (Holy See)'>Vatican City State (Holy See)</option><option value='Venezuela'>Venezuela</option><option value='Vietnam'>Vietnam</option><option value='Virgin Islands (British)'>Virgin Islands (British)</option><option value='Virgin Islands (US)'>Virgin Islands (US)</option><option value='Wallis And Futuna Islands'>Wallis And Futuna Islands</option><option value='Western Sahara'>Western Sahara</option><option value='Yemen'>Yemen</option><option value='Yugoslavia'>Yugoslavia</option>
                                         <option value='Zambia'>Zambia</option> 
                                         <option value='Zimbabwe'>Zimbabwe</option>
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
