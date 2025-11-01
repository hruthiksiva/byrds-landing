import React, { useState, useRef, useEffect } from 'react';
import countriesData from '../data/countries.json';
import CountryDropdown from './CountryDropdown';

const Step2ReachOutDetails = ({ formData, onFormDataChange, onBack, onSubmit }) => {
    const [errors, setErrors] = useState({});
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);


    // Engagement style state
    const [selectedEngagementStyle, setSelectedEngagementStyle] = useState('');

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d+$/.test(formData.phone.trim())) {
            newErrors.phone = 'Phone number must contain only numbers';
        }
        if (!formData.countryCode.trim()) {
            newErrors.countryCode = 'Country code is required';
        }
        if (!formData.engagementStyle.trim()) {
            newErrors.engagementStyle = 'Engagement style is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        console.log('handleSubmit called');
        console.log('formData:', formData);
        console.log('Validation result:', validateForm());

        if (validateForm()) {
            console.log('Form is valid, showing popup');
            // Show success popup instead of calling onSubmit
            setShowSuccessPopup(true);
        } else {
            console.log('Form validation failed');
        }
    };

    // Handlers for the CountryDropdown component
    const handleCountryCodeChange = (countryCode) => {
        onFormDataChange('countryCode', countryCode);
    };

    const handlePhoneNumberChange = (phoneNumber) => {
        onFormDataChange('phone', phoneNumber);
    };

    const handleValidationChange = (validationError) => {
        setErrors(prev => ({
            ...prev,
            phoneValidation: validationError
        }));
    };

    // Engagement style handler
    const handleEngagementStyleChange = (style) => {
        setSelectedEngagementStyle(style);
        onFormDataChange('engagementStyle', style);
    };

    // Sync selectedEngagementStyle with formData on mount
    useEffect(() => {
        if (formData.engagementStyle) {
            setSelectedEngagementStyle(formData.engagementStyle);
        }
    }, [formData.engagementStyle]);


    return (
        <div className="space-y-7 pt-[14px] ">
            {/* First Name */}
            <div className="space-y-1 ">
                <div className="text-[#263A33] text-[14px] font-extrabold font-rethink-sans font-['Rethink_Sans'] leading-normal">Representative name</div>

                {errors.firstName && (
                    <div className="text-[#FF0000] text-[11px] font-medium font-rethink-sans italic">
                        {errors.firstName}
                    </div>
                )}

                <div className={`w-full p-2 rounded-[9px] border border-solid flex items-start  ${errors.firstName
                    ? 'border-[rgba(255,0,0,0.6)]'
                    : 'border-[rgba(38,58,51,0.32)] focus-within:border-[#263A33]'
                    }`}>
                    <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => onFormDataChange('firstName', e.target.value)}
                        placeholder="Enter name here"
                        className="w-full bg-transparent px-1 text-[#263A33] text-[11px] font-semibold font-rethink-sans outline-none focus:text-gray-800 placeholder-gray-800/30"
                    />
                </div>
            </div>



            {/* Email */}
            <div className="space-y-1">
                <div className="text-[#263A33] text-[14px] font-extrabold font-rethink-sans font-['Rethink_Sans'] leading-normal">Email ID</div>

                {errors.email && (
                    <div className="text-[#FF0000] text-[11px] font-medium font-rethink-sans italic">
                        {errors.email}
                    </div>
                )}

                <div className={`w-full p-2 rounded-[9px] border  border-solid flex items-center ${errors.email
                    ? 'border-[rgba(255,0,0,0.6)]'
                    : 'border-[rgba(38,58,51,0.32)] focus-within:border-[#263A33]'
                    }`}>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => onFormDataChange('email', e.target.value)}
                        placeholder="Enter official email id"
                        className="w-full bg-transparent px-1 text-[#263A33] text-[11px] font-semibold font-rethink-sans outline-none focus:text-gray-800 placeholder-gray-800/30"
                    />
                </div>
            </div>

            {/* Mobile Number */}
            <div className="space-y-1">
                <div className="text-[#263A33] text-[14px] font-extrabold font-rethink-sans font-['Rethink_Sans'] leading-normal">Mobile number</div>

                <CountryDropdown
                    value={formData.countryCode}
                    phoneValue={formData.phone}
                    onChange={handleCountryCodeChange}
                    onPhoneChange={handlePhoneNumberChange}
                    onValidationChange={handleValidationChange}
                    hasError={!!errors.phone || !!errors.phoneValidation}
                    countryCodeError={!!errors.countryCode}
                    phoneError={!!errors.phone}
                />
            </div>

            {/* Divider Line */}

            <div className="h-[1px] bg-[rgba(38,58,51,0.12)] w-full"></div>

            {/* Interested Engagement Style */}
            <div className="space-y-[22px] pt-1">
                <div className="text-[#263A33] text-[14px] font-extrabold font-rethink-sans font-['Rethink_Sans'] leading-normal">Interested engagement style</div>

                {errors.engagementStyle && (
                    <div className="text-[#FF0000] text-[11px] font-medium font-rethink-sans italic">
                        {errors.engagementStyle}
                    </div>
                )}

                {/* Radio Buttons */}
                <div className="flex justify-between gap-3 items-center">
                    {[
                        { value: 'request-only', label: 'Request only' },
                        { value: 'plantation-only', label: 'Plantation only' },
                        { value: 'closed-loop', label: 'Closed Loop' },
                        { value: 'open-loop', label: 'Open Loop' }
                    ].map((option) => (
                        <div key={option.value} className="flex  items-center gap-1.5">
                            <div className="relative">
                                <input
                                    type="radio"
                                    id={option.value}
                                    name="engagementStyle"
                                    value={option.value}
                                    checked={selectedEngagementStyle === option.value}
                                    onChange={(e) => handleEngagementStyleChange(e.target.value)}
                                    className="sr-only"
                                />
                                <label
                                    htmlFor={option.value}
                                    className="flex items-center gap-1  whitespace-nowrap cursor-pointer"
                                >
                                    <div className={`w-[14px] h-[14px] rounded-full border-2 flex items-center justify-center ${selectedEngagementStyle === option.value
                                        ? 'border-none'
                                        : 'border-[#263A33] bg-transparent'
                                        }`}>
                                        {selectedEngagementStyle === option.value && (
                                            <div className="w-3 h-3 bg-transparent rounded-full"></div>
                                        )}
                                        {selectedEngagementStyle === option.value && (
                                            <img src="/assets/landing-page/completed.svg" alt="completed" className="w-[20px] h-[20px]" />
                                        )}
                                    </div>
                                    <span className="text-[#263A33]  font-semibold font-rethink-sans" style={{
                                        fontFamily: '"Rethink Sans"',
                                        fontSize: '10.5px',
                                        fontWeight: '600'
                                    }}>
                                        {option.label}
                                    </span>
                                </label>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Italic Text */}
                <div className="text-center">
                    <p className="text-[rgba(38,58,51,0.7)] font-normal italic font-rethink-sans leading-5" style={{
                        fontFamily: '"Rethink Sans"',
                        fontSize: '9.6px',
                        fontStyle: 'italic',
                        lineHeight: '16px'
                    }}>
                        {selectedEngagementStyle === 'request-only' && (
                            <>Your firm can only requests for plantations<br />
                                Plantation are handled by Byrds and its parterners.</>
                        )}
                        {selectedEngagementStyle === 'plantation-only' && (
                            <>Your firm focuses on plantation requrested by other firms<br />
                                Byrds allocates plantation specifications based on requested firm</>
                        )}
                        {selectedEngagementStyle === 'closed-loop' && (
                            <>Higher preferences (or only) to land owned by your firm.<br />
                                Byrds will not assign plantations from other firms to these locations</>
                        )}
                        {selectedEngagementStyle === 'open-loop' && (
                            <>Plantations requested by you and other firms can be assigned to your locations.<br />
                                You will be awarded carbon credits for plantations initiated by other firms.</>
                        )}
                    </p>
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center pt-[30px] gap-[11px]">
                <button
                    onClick={onBack}
                    className="w-10 h-10 rounded-[9px] border border-solid border-[#263A33] flex items-center justify-center hover:bg-[rgba(38,58,51,0.1)] transition-colors"
                >
                    <svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.625 7.20508L1.5 4.08008M1.5 4.08008L4.625 0.955078M1.5 4.08008H16.5" stroke="#263A33" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </button>

                <button
                    onClick={handleSubmit}
                    disabled={!formData.firstName || !formData.email || !formData.phone || !formData.countryCode || !formData.engagementStyle}
                    className={`h-10 flex-1 p-2 rounded-[9px] border text-[14px] font-extrabold font-rethink-san border-solid flex items-center justify-center gap-2.5 transition-all text-[#263A33] ${!formData.firstName || !formData.email || !formData.phone || !formData.countryCode || !formData.engagementStyle
                        ? 'border-[#263A33] opacity-25 cursor-not-allowed'
                        : 'border-[#263A33] hover:bg-[#263A33] hover:text-[#FFFFFF]'
                        }`}
                >
                    
                        Express Interest
                    
                </button>
            </div>

            {/* Success Popup Overlay */}
            {showSuccessPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* Background Image */}
                    <div
                        className="fixed inset-0 w-screen h-screen"
                        style={{
                            backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1920 1080\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-0.0000071489 -155.96 154.7 -0.0000070914 960 1178.5)\\'><stop stop-color=\\'rgba(210,255,175,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(206,255,188,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(237,249,210,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(181,223,233,1)\\' offset=\\'0.875\\'/><stop stop-color=\\'rgba(125,196,255,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    />

                    {/* Byrds Logo */}
                    <div className="absolute top-[0px] left-[26px] z-10">
                        <img
                            src="/assets/icons/logo.svg"
                            alt="Logo"
                            className="w-[60.106px] h-[30px]"
                        />
                    </div>

                    {/* Success Message */}
                    <div className="relative text-center z-10">
                        {/* Checkmark Icon */}
                        <div className="mb-1 flex justify-center">
                            <img src="/assets/login-register/done.svg" alt="Done" className="w-[42px] h-[42px]" />
                        </div>

                        {/* Main Text */}
                        <h1 className="text-[#263A33] text-lg font-bold font-rethink-sans mb-4">
                            Thanks for expressing interest!
                        </h1>

                        {/* Sub Text */}
                        <p className="text-[#263A33] text-sm font-normal font-rethink-sans mb-8">
                            We will reach out to you shortly.
                        </p>


                    </div>
                </div>
            )}
        </div>
    );
};

export default Step2ReachOutDetails;
