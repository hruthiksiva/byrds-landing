import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../components/Logo.jsx";
import assets from '../data/assets.json';
import citiesData from '../data/cities.json';

const ForgotCompanyIdPage = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredCities, setFilteredCities] = useState([]);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    companyName: '',
    city: '',
    stateCounty: '',
    country: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBack = () => {
    navigate('/login');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleConfirm = () => {
    console.log('Forgot Company ID form submitted:', formData);
    // Add form submission logic here
    navigate('/login');
  };

  // Check if form is valid for confirm button
  const isFormValid = Object.values(formData).every(value => value.trim() !== '');

  return (
    <div className="bg-[#eef6f0] relative h-full w-full overflow-hidden">
      {/* Radial Gradient Background */}
      <div
        className="w-full h-full min-h-screen absolute inset-0"
        style={{
          backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1920 1080\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-0.0000071489 -155.96 154.7 -0.0000070914 960 1178.5)\\'><stop stop-color=\\'rgba(56,156,244,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(84,176,247,1)\\' offset=\\'0.125\\'/><stop stop-color=\\'rgba(112,195,250,1)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(168,235,255,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(224,255,227,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(238,255,205,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')"
        }}
      />

      {/* Byrds Logo */}
      <Logo />

      {/* Form Container */}
      <div className="relative pt-[58px] z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="relative w-full max-w-[462px]">
          {/* Page Title with Back Arrow */}
          <div className="  relative mb-[25px]">
            <button
              onClick={handleBack}
              className="absolute -left-3.5 top-[6px] w-2 h-2 overflow-hidden hover:opacity-70 transition-opacity"
            >
              <img src={assets.icons.leftArrow} alt="Back" className="w-full h-full" />
            </button>
            <div onClick={handleBack} className="text-gray-800 text-[14px] font-extrabold font-['Rethink_Sans'] hover:cursor-pointer  ">Forgot Company ID</div>
          </div>

          {/* Email Address */}
          <div className="mb-[26px]">
            <div className="text-gray-800 text-[14px] mb-1 font-extrabold font-['Rethink_Sans']">Email address</div>
            <div className="w-full px-[12px] py-[10.5px] rounded-md outline outline-1 outline-offset-[-1px] outline-gray-800/60 inline-flex justify-start items-start gap-2.5 overflow-hidden">
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Enter email address"
                className="w-full bg-transparent justify-start text-[#263A33] text-[11px] font-semibold font-['Rethink_Sans'] outline-none focus:text-gray-800 placeholder-gray-800/30"
              />
            </div>
          </div>

          {/* Company Name */}
          <div className="mb-[26px]">
            <div className="text-gray-800 text-[14px] font-extrabold font-['Rethink_Sans'] mb-[2px]">Company name</div>
            <div className="w-full px-[12px] py-[10px] rounded-md outline outline-1 outline-offset-[-1px] outline-gray-800/60 inline-flex justify-start items-start gap-2.5 overflow-hidden">
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => handleInputChange('companyName', e.target.value)}
                placeholder="Enter here"
                className="w-full bg-transparent justify-start text-[#263A33] text-[11.5px] font-semibold font-['Rethink_Sans'] outline-none focus:text-gray-800 placeholder-gray-800/30"
              />
            </div>
          </div>

          {/* Headquarter Location */}
          <div className="mb-[26px]">
            <div className="flex items-baseline justify-between mb-[2px]">
              <div className="text-gray-800 text-[14px] font-extrabold font-['Rethink_Sans']">Headquarter location</div>
              <div className="text-gray-800 text-[9.5px] font-medium font-['Rethink_Sans'] italic">(as added in Byrds)</div>
            </div>

            {/* City and State/County Fields */}
            <div className="flex gap-[4px] mb-[6px]">
              <div className="relative flex-1">
                <div className="px-[12px] py-[9px] rounded-md outline outline-1 outline-offset-[-1px] outline-gray-800/60 inline-flex justify-start items-start gap-2.5 overflow-hidden w-full">
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => {
                      const value = e.target.value;
                      handleInputChange('city', value);

                      // If user clears input → hide dropdown
                      if (value.trim() === '') {
                        setFilteredCities([]);
                        setShowDropdown(false);
                        return;
                      }

                      // Filter cities by matching text
                      const matches = citiesData.filter(c =>
                        c.city.toLowerCase().includes(value.toLowerCase())
                      );
                      setFilteredCities(matches);
                      setShowDropdown(true);
                    }}

                    onFocus={() => {
                      // When clicked (even before typing) → show all cities
                      setFilteredCities(citiesData);
                      setShowDropdown(true);
                    }}

                    onBlur={() => {
                      setTimeout(() => setShowDropdown(false), 150);
                    }}
                    placeholder="City"
                    className="w-full bg-transparent justify-start text-[#263A33] text-[11.5px] font-semibold font-['Rethink_Sans'] outline-none focus:text-gray-800 placeholder-gray-800/30"
                  />

                  {formData.city && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                      <div className="w-[0.5px] h-2.5 bg-black opacity-50" />

                      <button
                        onClick={() => {
                          setFormData(prev => ({
                            ...prev,
                            city: '',
                            stateCounty: '',
                            country: ''
                          }));
                          setFilteredCities([]);
                          setShowDropdown(false);
                        }}
                        className=" text-[#263A33] hover:text-black text-[14px] font-bold"
                      >
                        ×
                      </button>

                    </div>
                  )}
                </div>

                {showDropdown && filteredCities.length > 0 && (
                  <ul className="absolute z-10 top-[42px] left-0 w-full bg-transparent backdrop-blur-md border border-gray-800 rounded-lg shadow-md max-h-40 overflow-y-auto">
                    {filteredCities.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          setFormData({
                            ...formData,
                            city: item.city,
                            stateCounty: item.state,
                            country: item.country
                          });
                          setShowDropdown(false);
                        }}
                        className={`px-3 py-2 cursor-pointer text-[11.5px] border-b border-gray-800/20 font-['Rethink_Sans'] flex items-start gap-[4px] hover:bg-[#263A33]/5 transition rounded-md`}
                      >
                        {/*  Tick mark only when the typed city matches this one */}
                        <span
                          className={`transform translate-y-[-1.5px] mt-[5px] mr-1 transition-opacity duration-150 ${item.city.toLowerCase().startsWith(formData.city.toLowerCase()) && formData.city.trim() !== ''
                            ? 'opacity-100'
                            : 'opacity-0'
                            }`}
                        >
                          <svg
                            width="6"
                            height="6"
                            viewBox="0 0 8 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.75 3.5625L3 5.8125L6.375 0.75"
                              stroke="#263A33"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>

                        {/* City info */}
                        <div className="flex flex-col leading-tight">
                          <div className="font-semibold translate-y-[-1px]">{item.city}</div>
                          <div className="text-[10px] opacity-70">{item.state}, {item.country}</div>
                        </div>
                      </li>


                    ))}
                  </ul>
                )}

              </div>

              <div className="flex-1 px-[12px]   py-[10px] rounded-md  bg-[#263A33]/5 bg-opacity-15 inline-flex justify-start items-start gap-2.5 overflow-hidden">
                <input
                  type="text"
                  value={formData.stateCounty}
                  onChange={(e) => handleInputChange('stateCounty', e.target.value)}
                  placeholder="State"
                  className="w-full bg-transparent justify-start text-[#263A33] text-[11px] font-semibold font-['Rethink_Sans'] outline-none focus:text-gray-800 placeholder-gray-800/30"
                />
              </div>
            </div>

            {/* Country Field */}
            <div className="w-full px-[12px]  py-[9px] rounded-md bg-[#263A33]/5 bg-opacity-15 inline-flex justify-start items-start gap-2.5 overflow-hidden">
              <input
                type="text"
                value={formData.country}
                onChange={(e) => handleInputChange('country', e.target.value)}
                placeholder="Country"
                className="w-full bg-transparent justify-start text-[#263A33] text-[11px] font-semibold font-['Rethink_Sans'] outline-none focus:text-gray-800 placeholder-gray-800/30"
              />
            </div>
          </div>

          {/* Confirm Button */}
          <div className="flex  justify-center">
            <button
              onClick={handleConfirm}
              disabled={!isFormValid}
              className={` px-[96px] py-[9px]   rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 inline-flex justify-center items-center overflow-hidden transition-all ${isFormValid
                ? 'hover:bg-[#263A33]/10 hover:text-white cursor-pointer'
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

export default ForgotCompanyIdPage;