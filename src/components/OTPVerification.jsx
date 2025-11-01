import React, { useState, useRef, useEffect } from 'react';
import assets from '../data/assets.json';

const OTPVerification = ({ onBack, onVerifySuccess }) => {
    const [otpValues, setOtpValues] = useState(['', '', '', '']);
    const [isLoading, setIsLoading] = useState(false);
    const inputRefs = useRef([]);

    // Focus first input on mount
    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);

    // Check if OTP is already started (has at least one value)
    const isOtpStarted = () => {
        return otpValues.some(value => value !== '');
    };

    // Track if we're programmatically focusing (to avoid redirecting during auto-focus)
    const isProgrammaticFocus = useRef(false);

    // Handle OTP input focus - only allow focusing first empty box if OTP is not started
    const handleOtpFocus = (index) => {
        // If we're programmatically focusing, don't redirect
        if (isProgrammaticFocus.current) {
            isProgrammaticFocus.current = false;
            return;
        }

        // If OTP is not started, only allow focusing on the first empty box (index 0)
        if (!isOtpStarted()) {
            if (index !== 0) {
                inputRefs.current[0]?.focus();
            }
        }
    };

    const handleOtpChange = (index, value) => {
        // Only allow single digit and numbers only
        if (value.length > 1) return;
        if (value !== '' && !/^\d$/.test(value)) return;

        const newOtpValues = [...otpValues];
        newOtpValues[index] = value;
        setOtpValues(newOtpValues);

        // Auto-focus next input
        if (value !== '' && index < 3) {
            setTimeout(() => {
                isProgrammaticFocus.current = true;
                inputRefs.current[index + 1]?.focus();
            }, 0);
        }
    };

    const handleKeyDown = (index, e) => {
        // Handle backspace
        if (e.key === 'Backspace') {
            if (otpValues[index] === '' && index > 0) {
                // Move to previous input if current is empty
                isProgrammaticFocus.current = true;
                inputRefs.current[index - 1]?.focus();
            } else {
                // Clear current input
                const newOtpValues = [...otpValues];
                newOtpValues[index] = '';
                setOtpValues(newOtpValues);
            }
        }
        // Handle Enter key
        else if (e.key === 'Enter') {
            handleConfirm();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 4);
        const newOtpValues = ['', '', '', ''];

        for (let i = 0; i < pastedData.length; i++) {
            newOtpValues[i] = pastedData[i];
        }

        setOtpValues(newOtpValues);

        // Focus the next empty input or last input
        const nextIndex = Math.min(pastedData.length, 3);
        inputRefs.current[nextIndex]?.focus();
    };

    const handleConfirm = () => {
        const otpCode = otpValues.join('');
        if (otpCode.length === 4) {
            setIsLoading(true);
            // Simulate API call
            setTimeout(() => {
                setIsLoading(false);
                onVerifySuccess();
            }, 1500);
        }
    };

    const handleResendOTP = () => {
        // Clear current OTP
        setOtpValues(['', '', '', '']);
        inputRefs.current[0]?.focus();
        // Simulate resending OTP
        console.log('Resending OTP...');
    };

    const isFormValid = otpValues.every(value => value !== '');

    return (
        <div className="bg-[#eef6f0] relative h-full w-full overflow-hidden">
            {/* Radial Gradient Background */}
            <div
                className="w-full h-full min-h-screen absolute inset-0"
                style={{
                    backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\\'0 0 1920 1080\\\\' xmlns=\\\\'http://www.w3.org/2000/svg\\\\' preserveAspectRatio=\\\\'none\\\\'><rect x=\\\\'0\\\\' y=\\\\'0\\\\' height=\\\\'100%\\\\' width=\\\\'100%\\\\' fill=\\\\'url(%23grad)\\\\' opacity=\\\\'1\\\\'/><defs><radialGradient id=\\\\'grad\\\\' gradientUnits=\\\\'userSpaceOnUse\\\\' cx=\\\\'0\\\\' cy=\\\\'0\\\\' r=\\\\'10\\\\' gradientTransform=\\\\'matrix(-0.0000071489 -155.96 154.7 -0.0000070914 960 1178.5)\\\\'><stop stop-color=\\\\'rgba(56,156,244,1)\\\\' offset=\\\\'0\\\\'/><stop stop-color=\\\\'rgba(84,176,247,1)\\\\' offset=\\\\'0.125\\\\'/><stop stop-color=\\\\'rgba(112,195,250,1)\\\\' offset=\\\\'0.25\\\\'/><stop stop-color=\\\\'rgba(168,235,255,1)\\\\' offset=\\\\'0.5\\\\'/><stop stop-color=\\\\'rgba(224,255,227,1)\\\\' offset=\\\\'0.75\\\\'/><stop stop-color=\\\\'rgba(238,255,205,1)\\\\' offset=\\\\'1\\\\'/></radialGradient></defs></svg>')"
                }}
            />
     <div className="relative gap-2 justify-start">
                      <button
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

      {/* OTP Form Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
                <div className="max-w-[228px] w-full flex flex-col items-start">

                    {/* Title */}
                    <div className="text-left">
                        <h1 className="text-[#263A33] text-[14px] font-black font-['Rethink_Sans']">
                            Enter OTP
                        </h1>
                    </div>

                    {/* OTP Input Boxes */}
                    <div className="flex items-center justify-start gap-[9px] w-full">
                        {otpValues.map((value, index) => (
                            <div key={index} className="flex items-center">
                                <div
                                    className="w-[50px] h-[72px] p-2 rounded-lg border border-solid flex justify-center items-center border-[rgba(38,58,51,0.32)] focus-within:border-[#263A33]"
                                >
                                    <input
                                        ref={el => inputRefs.current[index] = el}
                                        type="text"
                                        value={value}
                                        placeholder=""
                                        onFocus={() => handleOtpFocus(index)}
                                        onChange={(e) => handleOtpChange(index, e.target.value)}
                                        onKeyDown={(e) => handleKeyDown(index, e)}
                                        onPaste={index === 0 ? handlePaste : undefined}
                                        className="w-full h-full bg-transparent text-center text-[#263A33] placeholder:text-[#263A3325] text-[20px] font-bold font-rethink-sans outline-none focus:text-[#263A33]"
                                        maxLength={1}
                                        inputMode="numeric"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Confirm Button */}
                    <div className="flex justify-center w-full mt-6 mb-4">
                        <button
                            onClick={handleConfirm}
                            disabled={!isFormValid || isLoading}
                            className={`w-full py-[10px] h-[45px] rounded-[9px] border border-solid transition-all ${
                                isFormValid && !isLoading
                                    ? 'border-[#263A33] hover:bg-[#263A33] hover:text-white cursor-pointer'
                                    : 'border-[#263A33] opacity-25 cursor-not-allowed'
                            }`}
                        >
                            <span className="text-[14px] font-extrabold font-['Rethink_Sans'] text-[#263A33]">
                                {isLoading ? 'Verifying...' : 'Confirm'}
                            </span>
                        </button>
                    </div>

                    {/* Resend OTP Link */}
                    <div className="w-full flex justify-center">
                        <button
                            onClick={handleResendOTP}
                            className="text-[#263A33] text-[12px] font-medium font-['Rethink_Sans'] hover:underline transition-all"
                        >
                            Resend OTP?
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OTPVerification;