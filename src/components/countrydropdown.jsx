import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const CountryDropdown = ({
  value = "",
  onChange,
  onPhoneChange,
  phoneValue = "",
  hasError = false,
  countryCodeError = false,
  phoneError = false,
  onValidationChange
}) => {
  const [phone, setPhone] = useState(phoneValue ? `+${phoneValue}` : "+");
  const [validationError, setValidationError] = useState("");

  const validatePhoneLength = (phoneNumber) => {
    const cleanNumber = phoneNumber.replace(/\D/g, '');
    const numberLength = cleanNumber.length;

    if (numberLength > 0 && numberLength < 9) {
      return "Phone number too short. Minimum 9 digits required.";
    }
    return true;
  };

  const handleChange = (val, data) => {
    // Ensure the value always starts with +
    if (!val.startsWith('+')) {
      val = '+' + val;
    }

    setPhone(val);

    // Extract country code and phone number
    const countryCode = `+${data.dialCode}`;
    const phoneNumber = val.replace(`+${data.dialCode}`, '');

    // Validate phone number length
    const validation = validatePhoneLength(phoneNumber);
    if (validation === true) {
      setValidationError("");
    } else {
      setValidationError(validation);
    }

    // Call the parent callbacks
    if (onChange) {
      onChange(countryCode);
    }
    if (onPhoneChange) {
      onPhoneChange(phoneNumber);
    }
    if (onValidationChange) {
      onValidationChange(validation === true ? "" : validation);
    }
  };

  // Initialize with + if empty
  useEffect(() => {
    if (!phone || phone === "") {
      setPhone("+");
    }
  }, []);

  // Update phone value when phoneValue prop changes
  useEffect(() => {
    if (phoneValue && !phone.includes(phoneValue)) {
      setPhone(phoneValue.startsWith('+') ? phoneValue : `+${phoneValue}`);
    }
  }, [phoneValue]);

  return (
    <div className="w-full">
      <div className="relative">
        {/* PhoneInput component only for flag display */}
        <PhoneInput
          country={"us"}
          value={phone}
          onChange={handleChange}
          disableDropdown={true}
          enableSearch={false}
          disableCountryCode={true}
          countryCodeEditable={false}
          autoFormat={false}
          inputProps={{
            name: "hidden-phone",
            readOnly: true,
            tabIndex: -1,
            style: { display: 'none' } // Hide the actual input
          }}
          
          buttonStyle={{
            backgroundColor: "#263A330A",
            border: "none",
            borderRadius: "9px",
            width: "40px",
            height: "35px",
            position: "absolute",
            left: "0px",
            top: "0px",
            zIndex: 1,
            cursor: "default",
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0",
            margin: "0"
          }}
          containerStyle={{
            borderRadius: "12px",
            width: "100%",
            position: "relative",
          }}
        />

        {/* Input container with + symbol and phone number input */}
        <div
          className="ml-[48px] h-[35px] rounded-[9px] border-1 flex items-center px-[10px] gap-2"
          style={{
            border: hasError || validationError ? "1px solid rgba(255,0,0,0.6)" : "1px solid #263A3366"
          }}
        >
          {/* Plus symbol */}
          <span className="text-[#263A33] text-[14px] font-semibold font-['Rethink_Sans'] pointer-events-none">
            +
          </span>

          {/* Actual phone number input */}
          <input
            type="tel"
            value={phoneValue}
            onChange={(e) => {
              const value = e.target.value.replace(/[^0-9]/g, '');

              // Simple validation - minimum 9 digits
              const validation = validatePhoneLength(value);
              if (validation === true) {
                setValidationError("");
              } else {
                setValidationError(validation);
              }

              if (onPhoneChange) {
                onPhoneChange(value);
              }
              if (onValidationChange) {
                onValidationChange(validation === true ? "" : validation);
              }
            }}
            placeholder="Enter number with Dialling Code"
            className="flex-1 bg-transparent text-[#263A33] text-[11px] font-semibold font-['Rethink_Sans'] outline-none placeholder-gray-800/30 border-none"
          />
        </div>
      </div>

      {validationError && (
        <div className="text-[#FF0000] text-[11px] font-medium font-rethink-sans italic mt-1">
          {validationError}
        </div>
      )}
    </div>
  );
};

export default CountryDropdown;