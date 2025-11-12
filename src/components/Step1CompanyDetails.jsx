import React, { useState, useRef, useEffect } from 'react';
import countriesData from '../data/countries.json';
import sectorsData from '../data/sectors.json';
import firmTypesData from '../data/firmTypes.json';

const Step1CompanyDetails = ({ formData, onFormDataChange, onNext }) => {
    const [errors, setErrors] = useState({});
    const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
    const [filteredCountries, setFilteredCountries] = useState(countriesData);
    const [countrySearchTerm, setCountrySearchTerm] = useState('');
    const countryDropdownRef = useRef(null);
    const countryInputRef = useRef(null);

    // Sector dropdown state
    const [isSectorDropdownOpen, setIsSectorDropdownOpen] = useState(false);
    const [filteredSectors, setFilteredSectors] = useState(sectorsData);
    const [sectorSearchTerm, setSectorSearchTerm] = useState('');
    const [customSectorValue, setCustomSectorValue] = useState('');
    const [isOtherSectorSelected, setIsOtherSectorSelected] = useState(false);
    const sectorDropdownRef = useRef(null);
    const sectorInputRef = useRef(null);
    const customSectorInputRef = useRef(null);

    // Firm Type dropdown state
    const [isFirmTypeDropdownOpen, setIsFirmTypeDropdownOpen] = useState(false);
    const [filteredFirmTypes, setFilteredFirmTypes] = useState(firmTypesData);
    const [firmTypeSearchTerm, setFirmTypeSearchTerm] = useState('');
    const firmTypeDropdownRef = useRef(null);
    const firmTypeInputRef = useRef(null);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.companyName.trim()) {
            newErrors.companyName = 'Company name is required';
        }
        if (!formData.countryOfOperations.trim()) {
            newErrors.countryOfOperations = 'Country of operations is required';
        }
        if (!formData.sector.trim()) {
            newErrors.sector = 'Sector is required';
        }
        if (formData.sector === 'Others' && !formData.customSector?.trim()) {
            newErrors.customSector = 'Please specify the sector';
        }
        if (!formData.firmType.trim()) {
            newErrors.firmType = 'Firm type is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateForm()) {
            onNext();
        }
    };

    // Country search and dropdown functionality
    const handleCountrySearch = (searchTerm) => {
        setCountrySearchTerm(searchTerm);
        const filtered = countriesData.filter(country =>
            country.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCountries(filtered);

    };


    const handleCountrySelect = (country) => {
        onFormDataChange('countryOfOperations', country.name);
        setCountrySearchTerm(country.name);
        setIsCountryDropdownOpen(false);
    };

    const handleCountryInputFocus = () => {
        setIsCountryDropdownOpen(true);
        setCountrySearchTerm(formData.countryOfOperations || '');
        handleCountrySearch(formData.countryOfOperations || '');
    };

    const handleCountryInputBlur = () => {
        // Delay closing to allow for click on dropdown items
        setTimeout(() => {
            setIsCountryDropdownOpen(false);
            setCountrySearchTerm(formData.countryOfOperations || '');
        }, 200);
    };

    // Sector search and dropdown functionality
    const handleSectorSearch = (searchTerm) => {
        setSectorSearchTerm(searchTerm);
        const filtered = sectorsData.filter(sector =>
            sector.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredSectors(filtered);
    };

    const handleSectorSelect = (sector) => {
        if (sector.isOther) {
            setIsOtherSectorSelected(true);
            onFormDataChange('sector', 'Others');
            // Focus on custom sector input after a short delay
            setTimeout(() => {
                if (customSectorInputRef.current) {
                    customSectorInputRef.current.focus();
                }
            }, 100);
        } else {
            setIsOtherSectorSelected(false);
            onFormDataChange('sector', sector.name);
            setCustomSectorValue('');
        }
        setIsSectorDropdownOpen(false);
    };

    const handleSectorInputFocus = () => {
        setIsSectorDropdownOpen(true);
        // Reset to show all sectors without filtering
        setFilteredSectors(sectorsData);
    };

    const handleSectorInputBlur = () => {
        // Delay closing to allow for click on dropdown items
        setTimeout(() => {
            setIsSectorDropdownOpen(false);
        }, 200);
    };

    const handleCustomSectorChange = (value) => {
        setCustomSectorValue(value);
        onFormDataChange('customSector', value);
    };

    // Firm Type search and dropdown functionality
    const handleFirmTypeSearch = (searchTerm) => {
        setFirmTypeSearchTerm(searchTerm);
        const filtered = firmTypesData.filter(firmType =>
            firmType.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredFirmTypes(filtered);
    };

    const handleFirmTypeSelect = (firmType) => {
        onFormDataChange('firmType', firmType.name);
        setIsFirmTypeDropdownOpen(false);
    };

    const handleFirmTypeInputFocus = () => {
        setIsFirmTypeDropdownOpen(true);
        // Reset to show all firm types without filtering
        setFilteredFirmTypes(firmTypesData);
    };

    const handleFirmTypeInputBlur = () => {
        // Delay closing to allow for click on dropdown items
        setTimeout(() => {
            setIsFirmTypeDropdownOpen(false);
        }, 200);
    };

    // Sync countrySearchTerm with formData.countryOfOperations when dropdown is closed
    useEffect(() => {
        if (!isCountryDropdownOpen && formData.countryOfOperations) {
            setCountrySearchTerm(formData.countryOfOperations);
        }
    }, [formData.countryOfOperations, isCountryDropdownOpen]);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target)) {
                setIsCountryDropdownOpen(false);
            }
            if (sectorDropdownRef.current && !sectorDropdownRef.current.contains(event.target)) {
                setIsSectorDropdownOpen(false);
            }
            if (firmTypeDropdownRef.current && !firmTypeDropdownRef.current.contains(event.target)) {
                setIsFirmTypeDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Company Size state
    const [selectedCompanySizeIndex, setSelectedCompanySizeIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const sliderRef = useRef(null);

    const companySizeOptions = [
        '1 - 50',
        '51 - 200',
        '201 - 1,000',
        '1,001 - 5,000',
        '5,001 - 20,000',
        '20,000+'
    ];

    const tickPositions = ['0%', '14.6%', '31.2%', '51.8%', '71.4%', '92%'];

    const handleSliderMouseDown = (e) => {
        setIsDragging(true);
        handleSliderMove(e);
    };

    const handleSliderMove = (e) => {
        if (!sliderRef.current) return;

        const rect = sliderRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));

        // Calculate which option is closest
        const optionIndex = Math.round((percentage / 100) * (companySizeOptions.length - 1));
        const clampedIndex = Math.max(0, Math.min(companySizeOptions.length - 1, optionIndex));

        setSelectedCompanySizeIndex(clampedIndex);
        onFormDataChange('companySize', companySizeOptions[clampedIndex]);
    };

    const handleSliderMouseUp = () => {
        setIsDragging(false);
    };

    const handleSliderClick = (index) => {
        setSelectedCompanySizeIndex(index);
        onFormDataChange('companySize', companySizeOptions[index]);
    };

    // Add mouse move and mouse up listeners when dragging
    useEffect(() => {
        if (isDragging) {
            const handleMouseMove = (e) => handleSliderMove(e);
            const handleMouseUp = () => handleSliderMouseUp();

            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);

            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
            };
        }
    }, [isDragging]);

    return (
        <div className="space-y-6 ">
            {/* Company Name */}
            <div className="space-y-[3px]">
                <div className="text-[#263A33] text-[14px]  font-extrabold  leading-normal">Company name</div>

                {errors.companyName && (
                    <div className="text-[#FF0000] text-xs font-medium font-rethink-sans italic">
                        {errors.companyName}
                    </div>
                )}

                <div className={`w-full p-[9px] rounded-lg border border-solid flex items-start  ${errors.companyName
                    ? 'border-[rgba(255,0,0,0.6)]'
                    : 'border-[rgba(38,58,51,0.32)] focus-within:border-[#263A33]'
                    }`}>
                    <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => onFormDataChange('companyName', e.target.value)}
                        placeholder="Enter company name"
                        className="w-full py-[1px] px-[2px] bg-transparent text-[#263A33] text-[11px] font-semibold font-rethink-sans outline-none focus:text-gray-800 placeholder-gray-800/30"
                    />
                </div>
            </div>

            {/* Country of Operations */}
            <div className="space-y-[3px] relative" ref={countryDropdownRef}>
                <div className="text-[#263A33] text-[14px] font-extrabold font-rethink-sans font-['Rethink_Sans'] leading-normal">Country of Operations</div>

                {errors.countryOfOperations && (
                    <div className="text-[#FF0000] text-[11px] font-medium font-rethink-sans italic">
                        {errors.countryOfOperations}
                    </div>
                )}

                <div className={`w-full p-[10px] rounded-lg border border-solid flex items-start  relative ${errors.countryOfOperations
                    ? 'border-[rgba(255,0,0,0.6)]'
                    : 'border-[rgba(38,58,51,0.32)] focus-within:border-[#263A33]'
                    }`}>
                    <input
                        ref={countryInputRef}
                        type="text"
                        value={isCountryDropdownOpen ? countrySearchTerm : (formData.countryOfOperations || '')}
                        onChange={(e) => handleCountrySearch(e.target.value)}
                        onFocus={handleCountryInputFocus}
                        onBlur={handleCountryInputBlur}
                        placeholder="Search for country"
                        className="w-full  bg-transparent text-[#263A33] text-[11px] font-semibold font-rethink-sans outline-none focus:text-gray-800 placeholder-gray-800/30"
                    />
                    <div className="flex justify-center items-center mr-6 mt-[4px] gap-8">
                        {(countrySearchTerm || (!isCountryDropdownOpen && formData.countryOfOperations)) && (
                            <div className="w-[0.5px] h-2.5 bg-[#263A3338] " />)}
                        {(countrySearchTerm || (!isCountryDropdownOpen && formData.countryOfOperations)) &&
                            <button onClick={() => {
                                setCountrySearchTerm('');
                                handleCountrySearch('');
                                onFormDataChange('countryOfOperations', '');
                            }}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#263A33] hover:text-black text-[16px] font-bold"
                            >
                                ×
                            </button>
                        }
                    </div>
                </div>


                {/* Country Dropdown */}
                {isCountryDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-[#cfffba] border border-[rgba(38,58,51,0.14)] border-solid rounded-lg shadow-lg max-h-60 overflow-y-auto">
                        {filteredCountries.length > 0 ? (
                            filteredCountries.map((country, index) => (
                                <div key={country.iso} className="relative">
                                    <button
                                        type="button"
                                        onClick={() => handleCountrySelect(country)}
                                        className="w-full px-4 py-3 text-left hover:bg-[rgba(38,58,51,0.1)] transition-colors flex items-center justify-between font-['Rethink_Sans'] text-[11px] font-medium text-[#263A33]"
                                    >
                                        <span>{country.name}</span>
                                    </button>
                                    {index < filteredCountries.length - 1 && (
                                        <div className="h-px bg-[rgba(38,58,51,0.08)] mx-4"></div>
                                    )}
                                </div>
                            ))
                        ) : (
                            <div className="px-4 py-3 text-center text-[rgba(38,58,51,0.6)] text-sm font-medium font-rethink-sans">
                                No countries found
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Sector */}
            <div className="space-y-[3px] relative" ref={sectorDropdownRef}>
                <div className="text-[#263A33] text-[14px] font-extrabold font-rethink-sans font-['Rethink_Sans'] leading-normal">Sector</div>

                {errors.sector && (
                    <div className="text-[#FF0000] text-[11px] font-medium font-rethink-sans italic">
                        {errors.sector}
                    </div>
                )}

                <div className="flex gap-2">
                    {/* Main Sector Input */}
                    <div
                        className={`${isOtherSectorSelected ? 'w-24' : 'w-full'} p-[10px] rounded-lg border border-solid flex justify-between items-center relative cursor-pointer ${errors.sector
                            ? 'border-[rgba(255,0,0,0.6)]'
                            : 'border-[rgba(38,58,51,0.32)] hover:border-[#263A33]'
                            }`}
                        onClick={() => setIsSectorDropdownOpen(!isSectorDropdownOpen)}
                    >
                        <input
                            ref={sectorInputRef}
                            type="text"
                            value={formData.sector || ''}
                            readOnly
                            onFocus={handleSectorInputFocus}
                            onBlur={handleSectorInputBlur}
                            placeholder="Choose firm's primary sector"
                            className="w-full bg-transparent text-[#263A33] text-[11px] font-semibold font-rethink-sans outline-none cursor-pointer placeholder-gray-800/30"
                        />
                        <div className={`transition-transform duration-200 ${isSectorDropdownOpen ? 'rotate-180' : ''}`}>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 4.5L6 7.5L9 4.5" stroke="#263A33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>

                    {/* Custom Sector Input - Only shown when "Others" is selected */}
                    {isOtherSectorSelected && (
                        <div className={`flex-1 p-[10px] rounded-lg border border-solid flex items-start relative ${errors.customSector
                            ? 'border-[rgba(255,0,0,0.6)]'
                            : 'border-[rgba(38,58,51,0.32)] focus-within:border-[#263A33]'
                            }`}>
                            <input
                                ref={customSectorInputRef}
                                type="text"
                                value={customSectorValue}
                                onChange={(e) => handleCustomSectorChange(e.target.value)}
                                placeholder="Specify sector"
                                className="w-full bg-transparent text-[#263A33] text-[11px] font-semibold font-rethink-sans outline-none focus:text-gray-800 placeholder-gray-800/30"
                            />
                        </div>
                    )}
                </div>

                {/* Custom Sector Error */}
                {errors.customSector && (
                    <div className="text-[#FF0000] text-[11px] font-medium font-rethink-sans italic">
                        {errors.customSector}
                    </div>
                )}

                {/* Sector Dropdown */}
                {isSectorDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-[#cfffba] border border-[rgba(38,58,51,0.14)] border-solid rounded-lg shadow-lg max-h-80 overflow-y-auto">
                        {filteredSectors.length > 0 ? (
                            <div className="p-4">
                                {/* Popular Sectors Grid */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {filteredSectors.filter(sector => !sector.isOther).map((sector, index) => (
                                        <button
                                            key={sector.id}
                                            type="button"
                                            onClick={() => handleSectorSelect(sector)}
                                            className={`px-3 py-1.5 rounded-full text-[10px] font-medium font-rethink-sans transition-colors font-['Rethink_Sans'] whitespace-nowrap ${formData.sector === sector.name
                                                ? 'bg-[#263A33] text-white'
                                                : 'border border-[rgba(38,58,51,0.1)] text-[#263A33] hover:bg-[rgba(38,58,51,0.1)]'
                                                }`}
                                        >
                                            {sector.name}
                                        </button>
                                    ))}
                                </div>

                                {/* Separator */}
                                <div className="h-px bg-[rgba(38,58,51,0.12)] mb-4"></div>

                                {/* Other Sectors Option */}
                                {filteredSectors.find(sector => sector.isOther) && (
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 border border-[rgba(38,58,51,0.3)] rounded-full flex items-center justify-center">
                                            {formData.sector === filteredSectors.find(sector => sector.isOther)?.name && (
                                                <div className="w-2 h-2 bg-[#263A33] rounded-full"></div>
                                            )}
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => handleSectorSelect(filteredSectors.find(sector => sector.isOther))}
                                            className="text-[10px] font-normal italic text-[#263A33] font-rethink-sans hover:text-[rgba(38,58,51,0.8)] font-['Rethink_Sans']"
                                        >
                                            Other sectors not part of the above list
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="px-4 py-3 text-center text-[rgba(38,58,51,0.6)] text-sm font-medium font-rethink-sans">
                                No sectors found
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Firm Type */}
            <div className="space-y-[3px] relative" ref={firmTypeDropdownRef}>
                <div className="text-[#263A33] text-[14px] font-extrabold font-rethink-sans font-['Rethink_Sans'] leading-normal">Firm Type</div>

                {errors.firmType && (
                    <div className="text-[#FF0000] text-[11px] font-medium font-rethink-sans italic">
                        {errors.firmType}
                    </div>
                )}

                <div
                    className={`w-full p-[10px] rounded-lg border border-solid flex justify-between items-center relative cursor-pointer ${errors.firmType
                        ? 'border-[rgba(255,0,0,0.6)]'
                        : 'border-[rgba(38,58,51,0.32)] hover:border-[#263A33]'
                        }`}
                    onClick={() => setIsFirmTypeDropdownOpen(!isFirmTypeDropdownOpen)}
                >
                    <input
                        ref={firmTypeInputRef}
                        type="text"
                        value={formData.firmType || ''}
                        readOnly
                        onFocus={handleFirmTypeInputFocus}
                        onBlur={handleFirmTypeInputBlur}
                        placeholder="Choose Firm type"
                        className="w-full bg-transparent text-[#263A33] text-[11.2px] font-semibold font-rethink-sans outline-none cursor-pointer placeholder-gray-800/30"
                    />
                    <div className={`transition-transform duration-200 ${isFirmTypeDropdownOpen ? 'rotate-180' : ''}`}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 4.5L6 7.5L9 4.5" stroke="#263A33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

                {/* Firm Type Dropdown */}
                {isFirmTypeDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-[#cfffba] border border-[rgba(38,58,51,0.14)] border-solid rounded-lg shadow-lg max-h-60 overflow-y-auto">
                        {filteredFirmTypes.length > 0 ? (
                            <div className="p-4">
                                {/* Firm Types Grid */}
                                <div className="flex flex-wrap gap-2">
                                    {filteredFirmTypes.map((firmType, index) => (
                                        <button
                                            key={firmType.id}
                                            type="button"
                                            onClick={() => handleFirmTypeSelect(firmType)}
                                            className={`px-3 py-2 rounded-full text-[10px] font-medium font-rethink-sans transition-colors font-['Rethink_Sans'] ${formData.firmType === firmType.name
                                                ? 'bg-[#263A33] text-white'
                                                : 'border border-[rgba(38,58,51,0.1)] text-[#263A33] hover:bg-[rgba(38,58,51,0.1)]'
                                                }`}
                                        >
                                            {firmType.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="px-4 py-3 text-center text-[rgba(38,58,51,0.6)] text-sm font-medium font-rethink-sans">
                                No firm types found
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Company Size */}
            <div className="space-y-[25px] ">
                <div className="text-[#263A33] text-[14px] font-extrabold font-rethink-sans font-['Rethink_Sans'] leading-normal">Company size</div>

                <div className="space-y-3 ">
                    {/* Slider Track */}
                    <div className="relative  " ref={sliderRef}>
                        {/* Base Line */}
                        <div className="h-[1px] ml-4 max-w-[395px]  bg-[#263A3340] w-full"></div>

                        {/* Tick Marks */}
                        <div className="absolute top-[-1.5px] ml-3 w-1 h-1 bg-[#A5CE97] rounded-full" style={{ left: '0%' }}></div>
                        <div className="absolute top-[-1.5px] ml-3 w-1 h-1 bg-[#A5CE97] rounded-full" style={{ left: '14.6%' }}></div>
                        <div className="absolute top-[-1.5px] ml-3 w-1 h-1 bg-[#A5CE97] rounded-full" style={{ left: '31.2%' }}></div>
                        <div className="absolute top-[-1.5px] ml-3 w-1 h-1 bg-[#A5CE97] rounded-full" style={{ left: '51.8%' }}></div>
                        <div className="absolute top-[-1.5px] ml-3 w-1 h-1 bg-[#A5CE97] rounded-full" style={{ left: '71.4%' }}></div>
                        <div className="absolute top-[-1.5px] ml-3 w-1 h-1 bg-[#A5CE97] rounded-full" style={{ left: '92%' }}></div>

                        {/* Draggable Handle - Concentric Circles */}
                        <div
                            className="absolute ml-2  top-1/2 transform -translate-y-1/2 cursor-pointer select-none"
                            style={{ left: tickPositions[selectedCompanySizeIndex] }}
                            onMouseDown={handleSliderMouseDown}
                        >
                            <div className="relative w-[13px] h-[13px]">
                                <div className="w-full h-full inset-0 border border-black rounded-full flex items-center justify-center">
                                    <div className="p-[7px] pl-[1px] pt-[1px] rounded-full bg-black">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Size Options */}
                    <div className="flex justify-between w-full mt-2">
                        <button
                            className={`rounded transition-colors text-[9px] font-medium font-rethink-sans whitespace-nowrap ${selectedCompanySizeIndex === 0 ? "text-black" : "text-[#263A336B]"
                                }`}

                        >
                            1 - 50
                        </button>

                        <button
                            className={`rounded transition-colors text-[9px] font-medium font-rethink-sans whitespace-nowrap ${selectedCompanySizeIndex === 1 ? "text-black" : "text-[#263A336B]"
                                }`}
                        >
                            51 - 200
                        </button>

                        <button
                            className={`rounded transition-colors text-[9px] font-medium font-rethink-sans whitespace-nowrap ${selectedCompanySizeIndex === 2 ? "text-black" : "text-[#263A336B]"
                                }`}
                        >
                            201 - 1,000
                        </button>

                        <button
                            className={`rounded transition-colors text-[9px] font-medium font-rethink-sans whitespace-nowrap ${selectedCompanySizeIndex === 3 ? "text-black" : "text-[#263A336B]"
                                }`}
                        >
                            1,001 - 5,000
                        </button>

                        <button
                            className={`rounded transition-colors text-[9px] font-medium font-rethink-sans whitespace-nowrap ${selectedCompanySizeIndex === 4 ? "text-black" : "text-[#263A336B]"
                                }`}
                        >
                            5,001 - 20,000
                        </button>

                        <button
                            className={`rounded transition-colors text-[9px] font-medium font-rethink-sans whitespace-nowrap ${selectedCompanySizeIndex === 5 ? "text-black" : "text-[#263A336B]"
                                }`}
                        >
                            20,000+
                        </button>
                    </div>

                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center pt-[40px] gap-[11px]">
                <button
                    onClick={() => window.history.back()}
                    className="h-10 w-10 p-2 rounded-[9px] border border-solid border-[#263A33] flex items-center justify-center hover:bg-[rgba(38,58,51,0.1)] transition-colors"
                >
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 5L5 15M5 5L15 15" stroke="#263A33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <button
                    onClick={handleNext}
                    disabled={!formData.companyName || !formData.countryOfOperations || !formData.sector || !formData.firmType}
                    className={`h-10 flex-1 p-2 rounded-[7px] border border-solid flex items-center justify-center gap-2.5 transition-all ${!formData.companyName || !formData.countryOfOperations || !formData.sector || !formData.firmType
                        ? 'border-[#263A33] opacity-25 cursor-not-allowed'
                        : 'border-[#263A33] hover:bg-[rgba(38,58,51,0.1)]  hover:text-white'
                        }`}
                >
                    <span className="text-[14px] font-extrabold font-rethink-sans text-[#263A33]">Next</span>
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.375 7.25586L17.5 10.3809M17.5 10.3809L14.375 13.5059M17.5 10.3809H2.5" stroke="#263A33" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>


                </button>
            </div>
        </div>
    );
};

export default Step1CompanyDetails;
