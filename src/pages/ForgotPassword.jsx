import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import assets from '../data/assets.json';
import OTPVerification from '../components/OTPVerification';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [showOTP, setShowOTP] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleBack = () => {
    navigate('/login');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Clear error when user starts typing
    if (emailError) {
      setEmailError('');
    }
  };

  const handleConfirm = () => {
    // Validate email before proceeding
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    console.log('Forgot Password form submitted:', { email });
    // Show OTP verification after email submission
    setShowOTP(true);
  };

  // Handle OTP verification success
  const handleOTPSuccess = () => {
    // Navigate to login after successful OTP verification
    navigate('/login');
  };

  // Handle back from OTP to email form
  const handleOTPBack = () => {
    setShowOTP(false);
  };

  // Check if form is valid for confirm button
  const isFormValid = email.trim() !== '' && validateEmail(email);

  // Show OTP verification if email was submitted
  if (showOTP) {
    return (
      <OTPVerification
        onBack={handleOTPBack}
        onVerifySuccess={handleOTPSuccess}
      />
    );
  }

  return (
    <div className="bg-[#eef6f0] relative h-full w-full overflow-hidden min-h-screen 3xl:h-screen 3xl:overflow-y-hidden">
      {/* Radial Gradient Background */}
      <div
        className="w-full h-full min-h-screen absolute inset-0"
        style={{
          backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1920 1080\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-0.0000071489 -155.96 154.7 -0.0000070914 960 1178.5)\\'><stop stop-color=\\'rgba(56,156,244,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(84,176,247,1)\\' offset=\\'0.125\\'/><stop stop-color=\\'rgba(112,195,250,1)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(168,235,255,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(224,255,227,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(238,255,205,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')"
        }}
      />      
     <div className="relative gap-2 justify-start">
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
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 sm:px-4 3xl:scale-125 3xl:origin-center">
        <div className="w-full max-w-[432px]">
        {/* Page Title with Back Arrow */}
        <div className="relative mb-6">
          <button 
            onClick={handleBack}
            className="absolute -left-[13px] top-[6px] w-2 h-2 overflow-hidden hover:opacity-70 transition-opacity"
          >
            <img src={assets.icons.leftArrow} alt="Back" className="w-full h-full" />
          </button>
          <div onClick={handleBack} className="text-[#263A33] text-[14px] font-extrabold font-['Rethink_Sans'] hover:cursor-pointer">Forgot Password</div>
        </div>

        {/* Email Address */}
        <div className="mb-[26px] space-y-0.5 max-w-[432px]">
          <div className="text-[#263A33] text-[14px] font-extrabold font-['Rethink_Sans']">Email address</div>
          <div className={`w-full py-[10.5px] px-[12px] rounded-lg outline outline-1 outline-offset-[-1px] ${emailError ? 'outline-red-500' : 'outline-gray-800/60'} inline-flex justify-start items-start gap-2.5 overflow-hidden`}>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter email address"
              className="w-full bg-transparent justify-start text-gray-800/30 text-[11px] font-semibold font-['Rethink_Sans'] outline-none focus:text-gray-800 placeholder-gray-800/30"
            />
          </div>
          {emailError && (
            <div className="text-red-500 text-[10px] font-medium font-['Rethink_Sans'] mt-1">
              {emailError}
            </div>
          )}
        </div>

        {/* Confirm Button */}
        <div className="flex justify-center">
          <button
            onClick={handleConfirm}
            disabled={!isFormValid}
            className={` px-[96px] py-[10px] rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 inline-flex justify-center items-center overflow-hidden transition-all ${
              isFormValid
                ? 'hover:bg-[#263A33]/10  hover:text-white cursor-pointer'
                : 'opacity-50 cursor-not-allowed'
            }`}
          >
            <div className="text-gray-800 text-[13.5px] font-bold font-['Rethink_Sans']">Confirm</div>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;