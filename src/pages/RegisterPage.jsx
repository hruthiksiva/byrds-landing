import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import assets from '../data/assets.json';
import Step1CompanyDetails from '../components/Step1CompanyDetails';
import Step2ReachOutDetails from '../components/Step2ReachOutDetails';

const RegisterPage = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1 - Company Details
        companyName: '',
        countryOfOperations: '',
        sector: '',
        firmType: '',
        companySize: '1 - 50',

        // Step 2 - Reach out Details
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        countryCode: '',
        engagementStyle: '',
        jobTitle: '',
        department: ''
    });

    const handleLogoClick = () => {
        console.log('Logo clicked - navigating to home');
        navigate('/');
    };

    const handleNext = () => {
        if (currentStep < 2) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleFormDataChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = () => {
        // Save form data to localStorage for persistence
        localStorage.setItem('registerFormData', JSON.stringify(formData));

        // Here you would typically send data to your backend
        console.log('Registration data:', formData);

        // Navigate to success page or login
        navigate('/login');
    };

    return (
        <div className="bg-[#eef6f0] min-h-screen w-full overflow-hidden 3xl:h-screen 3xl:overflow-y-hidden">
            {/* Radial Gradient Background */}
            <div
                className="w-full h-full min-h-screen absolute inset-0"
                style={{
                    backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1920 1080\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-0.0000071489 -155.96 154.7 -0.0000070914 960 1178.5)\\'><stop stop-color=\\'rgba(210,255,175,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(206,255,188,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(237,249,210,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(181,223,233,1)\\' offset=\\'0.875\\'/><stop stop-color=\\'rgba(125,196,255,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')"
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
            <div className="relative flex flex-col items-center justify-center min-h-screen px-6 sm:px-4 3xl:scale-125 3xl:origin-center">
                <div className="max-w-[433px] w-full flex flex-col">
                    {/* Progress Indicator */}
                    <div className="mb-[70px]">
                        <div className="flex items-center justify-center  ">
                            <div className="flex items-center ">
                                {/* Step 1 Indicator */}
                                <div className="flex items-center gap-2 ">
                                    <div className={`text-[9.6px] pr-[2px]  font-bold  font-rethink-sans ${currentStep <= 1 ? 'text-[#263A33] ' : 'text-[rgba(38,58,51,0.5)] opacity-70   '
                                        }`}>
                                        Company Details
                                    </div>
                                    <div className="relative w-[16px] h-[16px] items-center">
                                        {/* Outer circle */}
                                        <div className={`absolute inset-0 rounded-full border-2 ${currentStep >= 1 ? 'border-[#263A33] ' : 'border-[rgba(38,58,51,0.3)] '
                                            }`}></div>
                                        {/* Inner circle */}
                                        <div className={`absolute w-[9.5px] h-[9.5px] transform -translate-x-1/2 translate-y-1/2 bottom-[8px] left-[8px]  rounded-full ${currentStep >= 1 ? 'bg-[#263A33]' : 'bg-transparent'
                                            }`}></div>
                                        {/* Checkmark for completed step */}
                                        {currentStep > 1 && (
                                            <div className="absolute bg-black rounded-full inset-0  flex items-center justify-center">
                                                <img src="/assets/landing-page/completed.svg" alt="completed" width="16" height="16" />
                                            </div>

                                        )}
                                    </div>
                                </div>

                                {/* Progress Line */}
                                <div className="w-[96px] h-[2px] bg-[#263A33] "></div>

                                {/* Step 2 Indicator */}

                                {/* Step 2 Indicator */}
                                <div className="flex items-center gap-2">
                                    <div className="relative w-[16px] h-[16px] items-center">
                                        {/* Outer circle */}
                                        <div className="absolute inset-0 rounded-full border-2 border-[#263A33]"></div>
                                        {/* Inner circle */}
                                        <div className={`absolute w-[9.5px] h-[9.5px] transform -translate-x-1/2 translate-y-1/2 bottom-[8px] left-[8px]  rounded-full ${currentStep >= 2 ? 'bg-[#263A33]' : '  bg-transparent'
                                            }`}></div>
                                    </div>
                                    <div className={`text-[9.6px] pl-[2px] font-bold  font-rethink-sans ${currentStep >= 2 ? 'text-[#263A33]' : 'text-[#263A3380]'
                                        }`}>
                                        Reach out Details
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        {currentStep === 1 && (
                            <Step1CompanyDetails
                                formData={formData}
                                onFormDataChange={handleFormDataChange}
                                onNext={handleNext}
                            />
                        )}
                    </div>

                    {currentStep === 2 && (
                        <Step2ReachOutDetails
                            formData={formData}
                            onFormDataChange={handleFormDataChange}
                            onBack={handleBack}
                            onSubmit={handleSubmit}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
