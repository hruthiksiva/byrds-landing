import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import assets from '../data/assets.json';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [secondShowPassword, setSecondShowPassword] = useState(false);
  const [passwordMismatchError, setPasswordMismatchError] = useState(false);

  const handleBack = () => {
    navigate('/login');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleConfirm = () => {
    // Reset error state
    setPasswordMismatchError(false);
    
    // Check if passwords match
    if (newPassword !== confirmPassword) {
      setPasswordMismatchError(true);
      return;
    }
  
    
    console.log('Reset Password form submitted:', { newPassword, confirmPassword });
    // Add form submission logic here
    navigate('/login');
  };

  // Password validation functions
  const isAtLeast8Chars = newPassword.length >= 8;
  const hasCapitalLetter = /[A-Z]/.test(newPassword);
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(newPassword);
  const hasNumber = /\d/.test(newPassword);

  // Check if form is valid for confirm button
  const isFormValid = 
    newPassword && 
    confirmPassword && 
    isAtLeast8Chars && 
    hasCapitalLetter && 
    hasSpecialChar && 
    hasNumber;

  return (
    <div className="bg-[#eef6f0]  relative min-h-screen w-full overflow-hidden">
      {/* Different Radial Gradient Background */}
      <div className="w-full h-full min-w-[1920px] min-h-[1080px] left-[-150px] bottom-[-250px] absolute bg-[radial-gradient(ellipse_126.21%_118.48%_at_50.00%_100.00%,_#9FECDD_0%,_#F7FFD1_50%,_#FFF7CD_75%,_#FFEBCD_100%)]" />
      
      {/* Byrds Logo */}
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
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-[540px]">
        {/* Page Title with Back Arrow */}
        <div className="relative mb-6">
          <button 
            onClick={handleBack}
            className="absolute -left-6 top-[5px] w-3 h-3 overflow-hidden hover:opacity-70 transition-opacity"
          >
            <img src={assets.icons.leftArrow} alt="Back" className="w-full h-full" />
          </button>
          <div className="text-gray-800 text-[14px] font-extrabold font-['Rethink_Sans']">Reset Password</div>
        </div>

        {/* New Password */}
        <div className="mb-[25px] ">
          <div className="text-gray-800 text-[14px] font-black font-['Rethink_Sans'] mb-[2px]">New password</div>
          <div className="w-full   py-[10px] rounded-md pl-[10.5px]  outline outline-1 outline-offset-[-1px] outline-gray-800/60 inline-flex justify-between items-start overflow-hidden">
            <input
              type={showPassword ? 'text' : 'password'}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              className="flex-1 bg-transparent justify-start text-gray-800/30 text-[11.5px] font-semibold font-['Rethink_Sans'] outline-none focus:text-gray-800 placeholder-gray-800/30"
            />
            {newPassword && (
            <div className="flex justify-center items-center mr-3 mt-[2px] gap-1.5">
              <div className="w-[0.5px] h-2.5 bg-black opacity-50" />
          
              <button
                onClick={() => setShowPassword(!showPassword)}
                className=" hover:opacity-70 transition-opacity"
              >
                {showPassword?(
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

                ):(<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4086_9466)">
<path d="M6.26074 2.96104C7.61955 2.7991 8.99401 3.08635 10.1742 3.7789C11.3545 4.47145 12.2756 5.53125 12.797 6.79645C12.8456 6.92742 12.8456 7.07149 12.797 7.20245C12.5826 7.7222 12.2993 8.21075 11.9547 8.65495" stroke="#263A33" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.21575 8.25892C7.88569 8.5777 7.44364 8.75409 6.98479 8.7501C6.52595 8.74612 6.08703 8.56207 5.76256 8.23761C5.4381 7.91314 5.25405 7.47422 5.25007 7.01538C5.24608 6.55653 5.42247 6.11448 5.74125 5.78442" stroke="#263A33" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.1962 10.2077C9.42241 10.6661 8.55907 10.9526 7.66476 11.0479C6.77045 11.1432 5.8661 11.0451 5.01308 10.7601C4.16006 10.4751 3.37833 10.0099 2.72092 9.39615C2.06352 8.7824 1.54582 8.03442 1.20297 7.20296C1.15435 7.07199 1.15435 6.92793 1.20297 6.79696C1.72017 5.54271 2.63019 4.49002 3.79647 3.79688" stroke="#263A33" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.1665 1.16675L12.8332 12.8334" stroke="#263A33" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_4086_9466">
<rect width="14" height="14" fill="white"/>
</clipPath>
</defs>
</svg>


                )}
              </button>
            </div>
            )}
          </div>

          {/* Password Validation Criteria */}
          <div className="mt-3 space-y-3.5">
            {/* Row 1 */}
            <div className="flex gap-[148px] whitespace-nowrap">
              <div className="flex ml-3 items-center gap-[5px]">
                <div className="w-2 h-2 flex items-center justify-center">
                  <img 
                    src={isAtLeast8Chars ? assets.icons.tick : assets.icons.cross} 
                    alt={isAtLeast8Chars ? 'Valid' : 'Invalid'} 
                    className="w-full h-full" 
                  />
                </div>
                <div className={`text-[9.5px] font-medium font-['Rethink_Sans'] ${isAtLeast8Chars ? 'text-[#263A334D]' : 'text-gray-800'}`}>
                  Atleast 8 characters long
                </div>
              </div>
              <div className="flex mr-[8px]  items-center gap-[5px]">
                <div className="w-2 h-2 flex items-center justify-center">
                  <img 
                    src={hasSpecialChar ? assets.icons.tick : assets.icons.cross} 
                    alt={hasSpecialChar ? 'Valid' : 'Invalid'} 
                    className="w-full h-full" 
                  />
                </div>
                <div className={`text-[9.5px]  font-medium font-['Rethink_Sans'] ${hasSpecialChar ? 'text-[#263A334D]' : 'text-gray-800'}`}>
                  Contains a Special character
                </div>
              </div>
            </div>
            {/* Row 2 */}
            <div className="flex justify-between">
              <div className="flex ml-3  items-center gap-[5px]">
                <div className="w-2 h-2 flex items-center justify-center">
                  <img 
                    src={hasCapitalLetter ? assets.icons.tick : assets.icons.cross} 
                    alt={hasCapitalLetter ? 'Valid' : 'Invalid'} 
                    className="w-full h-full" 
                  />
                </div>
                <div className={`text-[9.5px] font-medium font-['Rethink_Sans'] ${hasCapitalLetter ? 'text-[#263A334D]' : 'text-gray-800'}`}>
                  Contains a Capital letter
                </div>
              </div>
              <div className="flex items-center gap-[5px]">
                <div className="w-2 h-2 flex items-center justify-center">
                  <img 
                    src={hasNumber ? assets.icons.tick : assets.icons.cross} 
                    alt={hasNumber ? 'Valid' : 'Invalid'} 
                    className="w-full h-full" 
                  />
                </div>
                <div className={`text-[9.5px] mr-[52px] font-medium font-['Rethink_Sans'] ${hasNumber ? 'text-[#263A334D]' : 'text-gray-800'}`}>
                  Contains a Number
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="mb-7">
          <div className="text-gray-800 text-[14px] font-extrabold font-['Rethink_Sans'] mb-[2px]">Confirm password</div>
          <div className={`w-full pl-[10.5px] py-[10px] rounded-md outline outline-1 outline-offset-[-1px] inline-flex justify-start items-start gap-2.5 overflow-hidden ${
            passwordMismatchError ? 'outline-[#FF000099]' : 'outline-gray-800/60'
          }`}>
            <input
              type={secondShowPassword?'':"password"}
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                if (passwordMismatchError) {
                  setPasswordMismatchError(false);
                }
              }}
              placeholder="Type new password again"
              className="w-full bg-transparent justify-start text-gray-800/30 text-[11.5px] font-semibold font-['Rethink_Sans'] outline-none focus:text-gray-800 placeholder-gray-800/30"
            />
            
            {confirmPassword && (
             <div className="flex justify-center items-center mr-3 mt-[2px] gap-1.5">
              <div className="w-[0.5px] h-2.5 bg-black opacity-50" />
          
              <button
                onClick={() => setSecondShowPassword(!secondShowPassword)}
                className=" hover:opacity-70 transition-opacity"
              >
                {secondShowPassword?(
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

                ):(<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4086_9466)">
<path d="M6.26074 2.96104C7.61955 2.7991 8.99401 3.08635 10.1742 3.7789C11.3545 4.47145 12.2756 5.53125 12.797 6.79645C12.8456 6.92742 12.8456 7.07149 12.797 7.20245C12.5826 7.7222 12.2993 8.21075 11.9547 8.65495" stroke="#263A33" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.21575 8.25892C7.88569 8.5777 7.44364 8.75409 6.98479 8.7501C6.52595 8.74612 6.08703 8.56207 5.76256 8.23761C5.4381 7.91314 5.25405 7.47422 5.25007 7.01538C5.24608 6.55653 5.42247 6.11448 5.74125 5.78442" stroke="#263A33" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.1962 10.2077C9.42241 10.6661 8.55907 10.9526 7.66476 11.0479C6.77045 11.1432 5.8661 11.0451 5.01308 10.7601C4.16006 10.4751 3.37833 10.0099 2.72092 9.39615C2.06352 8.7824 1.54582 8.03442 1.20297 7.20296C1.15435 7.07199 1.15435 6.92793 1.20297 6.79696C1.72017 5.54271 2.63019 4.49002 3.79647 3.79688" stroke="#263A33" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.1665 1.16675L12.8332 12.8334" stroke="#263A33" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_4086_9466">
<rect width="14" height="14" fill="white"/>
</clipPath>
</defs>
</svg>


                )}
                          
              </button>
            </div>
   )}
          </div>
         
          
          {/* Password Mismatch Error */}
          {passwordMismatchError && (
            <div className="text-left text-[#FF0000] text-xs font-semibold font-['Rethink_Sans'] italic mt-1">
              Password does not match
            </div>
          )}  
        </div>
        

        {/* Confirm Button */}
        <div className="flex justify-center">
          <button
            onClick={handleConfirm}
            disabled={!isFormValid}
            className={`px-[95px] text-center py-2.5 rounded-lg outline outline-1 outline-offset-[-1px] inline-flex justify-center items-center overflow-hidden transition-all ${
              isFormValid
                ? 'opacity-100 bg-[#263A33] outline-[#263A33] text-white hover:bg-[#1e2d26] cursor-pointer'
                : 'opacity-25 cursor-not-allowed outline-gray-800'
            }`}
          >
            <div className={`text-[13.5px] font-bold font-['Rethink_Sans'] ${isFormValid ? 'text-white' : 'text-gray-800'}`}>Confirm</div>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;