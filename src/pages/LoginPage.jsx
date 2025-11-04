import React, { useState, useRef } from 'react';
import assets from '../data/assets.json';

import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [selectedPortal, setSelectedPortal] = useState('Request Portal');
  const [companyId, setCompanyId] = useState(['', '', '', '', '', '', '', '', '', '', '']);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [companyIdError, setCompanyIdError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // Refs for company ID inputs to handle focus management
  const companyIdRefs = useRef([]);

  // Validate Company ID
  const validateCompanyId = (id) => {
    const expectedId = ['1', '2', '3', '4', '5', '6', '7', '8', 'a', 'b', 'c', 'd'];
    return JSON.stringify(id) === JSON.stringify(expectedId);
  };

  // Validate Email
  const validateEmail = (email) => {
    return email === 'hruthik.s@gmail.com';
  };

  // Validate Password
  const validatePassword = (pwd) => {
    return pwd === 'Csa@98427';
  };

  // Handle logo click
  const handleLogoClick = () => {
    navigate('/');
  };


  // Handle login submission
  const handleLogin = () => {
    let hasErrors = false;

    // Reset all errors
    setCompanyIdError(false);
    setEmailError(false);
    setPasswordError(false);

    // Validate Company ID
    if (!validateCompanyId(companyId)) {
      setCompanyIdError(true);
      hasErrors = true;
    }

    // Validate Email
    if (!validateEmail(emailAddress)) {
      setEmailError(true);
      hasErrors = true;
    }

    // Validate Password
    if (!validatePassword(password)) {
      setPasswordError(true);
      hasErrors = true;
    }

    // If no errors, proceed with login
    if (!hasErrors) {
      // TODO: Add actual login logic here
      navigate('/dashboard');
    }
  };

  // Check if company ID is already started (has at least one value)
  const isCompanyIdStarted = () => {
    return companyId.some(char => char !== '');
  };

  // Find the first empty index
  const getFirstEmptyIndex = () => {
    return companyId.findIndex(char => char === '');
  };

  // Track if we're programmatically focusing (to avoid redirecting during auto-focus)
  const isProgrammaticFocus = useRef(false);

  // Handle company ID input focus - only allow focusing first empty box if ID is not started
  const handleCompanyIdFocus = (index) => {
    // If we're programmatically focusing, don't redirect
    if (isProgrammaticFocus.current) {
      isProgrammaticFocus.current = false;
      return;
    }

    // If company ID is not started, only allow focusing on the first empty box (index 0)
    if (!isCompanyIdStarted()) {
      if (index !== 0) {
        companyIdRefs.current[0]?.focus();
      }
    }
  };

  // Handle company ID input change and auto-focus to next field
  const handleCompanyIdChange = (index, value) => {
    if (value.length <= 1 && /^[a-zA-Z0-9]*$/.test(value)) {
      const newCompanyId = [...companyId];
      newCompanyId[index] = value.toLowerCase();
      setCompanyId(newCompanyId);

      // Clear error when user starts typing
      if (companyIdError) {
        setCompanyIdError(false);
      }

      // Auto-focus to next input if value is entered
      // Use setTimeout to ensure state has updated and focus works correctly
      if (value && index < 10) {
        setTimeout(() => {
          isProgrammaticFocus.current = true;
          companyIdRefs.current[index + 1]?.focus();
        }, 0);
      }
    }
  };

  // Handle backspace to previous field
  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !companyId[index] && index > 0) {
      isProgrammaticFocus.current = true;
      companyIdRefs.current[index - 1]?.focus();
    }
  };

  // Check if form is valid for login button state
  const isFormValid = companyId.every(char => char !== '') && emailAddress && password;


  return (
    <div className="bg-[#eef6f0] min-h-screen w-full overflow-hidden 3xl:h-screen 3xl:overflow-y-hidden">
      {/* Radial Gradient Background */}
      <div
        className="w-full h-full min-h-screen absolute  inset-0"
        style={{
          backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1920 1080\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-0.0000071489 -155.96 154.7 -0.0000070914 960 1178.5)\\'><stop stop-color=\\'rgba(56,156,244,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(84,176,247,1)\\' offset=\\'0.125\\'/><stop stop-color=\\'rgba(112,195,250,1)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(168,235,255,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(224,255,227,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(238,255,205,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')"
        }}
      />

      {/* Byrds Logo */}
      <div className="relative  gap-2 justify-start">
        <button
          onClick={handleLogoClick}
          className="absolute top-[17px] left-[42px] hover:opacity-70 transition-opacity cursor-pointer z-50"
          type="button"
        >
          <img
            src={assets.icons.logo}
            alt="Logo"
            className="w-[67px] h-[37px] pointer-events-none"
          />
        </button>
      </div>

      {/* Form Container */}
      <div className="relative pt-[58px] z-10 flex flex-col items-center justify-center min-h-screen px-6 sm:px-4 3xl:scale-125 3xl:origin-center">
        <div className="w-full max-w-[435px]">
          {/* Login to */}
          <div className="text-[#263A33] text-[14px] font-extrabold font-rethink-sans">Login to</div>

          <div className="flex items-center gap-[15px] mt-[4px]">
            {/* Request Portal Button */}
            <button
              onClick={() => setSelectedPortal('Request Portal')}
              className={`px-[16px] py-[6px] text-[13px] font-bold font-rethink-sans rounded-[6px] flex justify-center items-center border border-solid border-[rgba(38,58,51,0.3)] transition-colors duration-200
          ${selectedPortal === 'Request Portal' ? 'bg-[#263A33] text-white' : 'bg-transparent text-[#263A33]'}
        `}
            >
              Request Portal
            </button>

            {/* Slash Separator */}
            <svg
              width="10"
              height="20"
              viewBox="0 0 10 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 22L6.19369 0H9.29054L3.07207 22H0Z" fill="#263A33" />
            </svg>

            {/* Plantation Portal Button */}
            <button
              onClick={() => setSelectedPortal('Plantation Portal')}
              className={`px-[16px] py-[6px] text-[13px] font-bold font-rethink-sans rounded-[6px] flex justify-center items-center border border-solid border-[rgba(38,58,51,0.3)] transition-colors duration-200
          ${selectedPortal === 'Plantation Portal' ? 'bg-[#263A33] text-white' : 'bg-transparent text-[#263A33]'}
        `}
            >
              Plantation Portal
            </button>

          </div>
          {/* Company ID */}
          <div className="space-y-0.5 mt-[25px] ">
            <div className="text-gray-800 text-[14px] font-extrabold font-rethink-sans">Company ID</div>

            {/* Company ID Error Message */}
            {companyIdError && (
              <div className="text-[#FF0000] text-xs font-medium font-rethink-sans italic">
                ID does not exist... make sure the correct portal type is selected
              </div>
            )}

            {/* Company ID Input Boxes */}
            <div className="flex items-center justify-between gap-[4px] sm:gap-[5px] sm:justify-center w-full max-w-full overflow-hidden">
              {companyId.map((char, index) => (
                <div key={index} className="flex items-center flex-shrink-0">
                  <div
                    className={`w-[28px] sm:w-[32px] h-[50px] p-2 rounded-lg border border-solid flex justify-center items-center ${companyIdError
                      ? 'border-[rgba(255,0,0,0.6)]'
                      : 'border-[rgba(38,58,51,0.32)] focus-within:border-[#263A33]'
                      }`}
                  >
                    <input
                      ref={el => companyIdRefs.current[index] = el}
                      type="text"
                      value={char}
                      placeholder={index < 7 ? 'a' : '1'}

                      onFocus={() => handleCompanyIdFocus(index)}
                      onChange={e => {
                        const value = e.target.value;
                        if (index < 7 && !/^[a-z]?$/.test(value)) return; // first 7 -> only lowercase letters
                        if (index >= 7 && !/^[0-9]?$/.test(value)) return; // last 4 -> only numbers
                        handleCompanyIdChange(index, e.target.value)
                      }
                      }
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="w-full h-full bg-transparent text-center text-[#263A33] placeholder:text-[#263A3325] text-[20px] font-bold font-rethink-sans outline-none focus:text-[#263A33]"
                      maxLength={1}
                    />
                  </div>
                  {/* Add separators after 4th and 8th characters */}
                  {(index === 3 || index === 6) && (
                    <div className="w-2 sm:w-3 h-0.5 bg-gray-800 ml-[2px] sm:ml-[4px]" />
                  )}
                </div>
              ))}
            </div>

            {/* Forgot ID Link */}
            <div className="flex justify-end mt-[6px]">
              <button
                onClick={() => navigate('/forgot-company-id')}
                className="text-gray-800 text-[10px] font-semibold font-rethink-sans hover:opacity-70 transition-opacity cursor-pointer"
              >
                forgot id?
              </button>
            </div>
          </div>

          {/* Email Address */}
          <div className="space-y-1 mt-[22px]">
            <div className="text-[#263A33] text-[14px] font-extrabold font-rethink-sans">Email address</div>

            {/* Email Error Message */}
            {emailError && (
              <div className="text-[#FF0000] text-xs font-semibold font-rethink-sans italic">
                Incorrect email id
              </div>
            )}

            <div className={`w-full p-[10px] rounded-lg border border-solid flex justify-start items-start gap-2.5 ${emailError
              ? 'border-[rgba(255,0,0,0.6)]'
              : 'border-[rgba(38,58,51,0.32)] focus-within:border-[#263A33]'
              }`}>
              <input
                type="email"
                value={emailAddress}
                onChange={(e) => {
                  setEmailAddress(e.target.value);
                  if (emailError) {
                    setEmailError(false);
                  }
                }}
                placeholder="Enter email address"
                className="w-full bg-transparent text-[#263A33] text-xs font-semibold font-rethink-sans outline-none focus:text-gray-800 placeholder-gray-800/30"
              />
            </div>
          </div>

          {/* Password */}
          <div className="sapce-y-2 mt-[28px]">
            <div className="text-gray-800 mb-[2px] text-[14px] font-extrabold font-rethink-sans">Password</div>

            {/* Password Error Message */}
            {passwordError && (
              <div className="text-[#FF0000] text-xs font-medium font-rethink-sans italic">
                Incorrect password
              </div>
            )}

            <div className={`w-full p-[10px] rounded-lg border border-solid flex justify-start items-center gap-2.5 ${passwordError
              ? 'border-[rgba(255,0,0,0.6)]'
              : 'border-[rgba(38,58,51,0.32)] focus-within:border-[#263A33]'
              }`}>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (passwordError) {
                    setPasswordError(false);
                  }
                }}
                placeholder="Enter password"
                className="w-full bg-transparent text-gray-800/30 text-xs font-semibold font-rethink-sans outline-none focus:text-gray-800 placeholder-gray-800/30"
                style={{
                  letterSpacing: showPassword ? 'normal' : (password ? '0.2em' : 'normal'),
                  color: '#263A33'
                }}
              />
              {password && (
                <div className="flex items-center gap-1">
                  <div className="w-px h-2 bg-gray-800/50"></div>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="flex-shrink-0 text-gray-800/60 hover:text-gray-800 transition-colors"
                  >
                    {showPassword ? (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.18791 7.18783C1.14765 7.06684 1.14765 6.93607 1.18791 6.81508C1.99699 4.38083 4.29357 2.625 7.00024 2.625C9.70574 2.625 12.0012 4.37908 12.812 6.81217C12.8528 6.93292 12.8528 7.06358 12.812 7.18492C12.0035 9.61917 9.70691 11.375 7.00024 11.375C4.29474 11.375 1.99874 9.62092 1.18791 7.18783Z"
                          stroke="#263A33"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.75 7C8.75 7.46413 8.56563 7.90925 8.23744 8.23744C7.90925 8.56563 7.46413 8.75 7 8.75C6.53587 8.75 6.09075 8.56563 5.76256 8.23744C5.43437 7.90925 5.25 7.46413 5.25 7C5.25 6.53587 5.43437 6.09075 5.76256 5.76256C6.09075 5.43437 6.53587 5.25 7 5.25C7.46413 5.25 7.90925 5.43437 8.23744 5.76256C8.56563 6.09075 8.75 6.53587 8.75 7Z"
                          fill="#263A33"
                          stroke="#263A33"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                    ) : (<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_4086_9466)">
                        <path d="M6.26074 2.96104C7.61955 2.7991 8.99401 3.08635 10.1742 3.7789C11.3545 4.47145 12.2756 5.53125 12.797 6.79645C12.8456 6.92742 12.8456 7.07149 12.797 7.20245C12.5826 7.7222 12.2993 8.21075 11.9547 8.65495" stroke="#263A33" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.21575 8.25892C7.88569 8.5777 7.44364 8.75409 6.98479 8.7501C6.52595 8.74612 6.08703 8.56207 5.76256 8.23761C5.4381 7.91314 5.25405 7.47422 5.25007 7.01538C5.24608 6.55653 5.42247 6.11448 5.74125 5.78442" stroke="#263A33" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.1962 10.2077C9.42241 10.6661 8.55907 10.9526 7.66476 11.0479C6.77045 11.1432 5.8661 11.0451 5.01308 10.7601C4.16006 10.4751 3.37833 10.0099 2.72092 9.39615C2.06352 8.7824 1.54582 8.03442 1.20297 7.20296C1.15435 7.07199 1.15435 6.92793 1.20297 6.79696C1.72017 5.54271 2.63019 4.49002 3.79647 3.79688" stroke="#263A33" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1.1665 1.16675L12.8332 12.8334" stroke="#263A33" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_4086_9466">
                          <rect width="14" height="14" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>


                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Forgot Password Link */}
            <div className="flex justify-end mt-[3px]">
              <button
                onClick={() => navigate('/forgot-password')}
                className="text-gray-800 text-[10px] font-semibold font-rethink-sans hover:opacity-70 transition-opacity cursor-pointer"
              >
                forgot password?
              </button>
            </div>
          </div>

          {/* Login Button */}
          <div className="flex justify-center pt-[25px]">
            <button
              disabled={!isFormValid}
              onClick={handleLogin}
              className={`w-60 py-[10px] rounded-xl outline outline-1 outline-offset-[-1px] flex justify-center items-center transition-all ${isFormValid
                ? 'opacity-100 bg-[#263A33] outline-[#263A33] text-white hover:bg-[#1e2d26] cursor-pointer'
                : 'opacity-25 cursor-not-allowed outline-gray-800'
                }`}
            >
              <div className={`text-sm font-bold font-rethink-sans ${isFormValid ? 'text-white' : 'text-gray-800'}`}>Login</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;