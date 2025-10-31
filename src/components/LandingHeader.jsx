import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingHeader = ({ activeNavItem = "" }) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="bg-transparent h-[55px] sm:h-[80px] flex items-center justify-between px-5 sm:px-5 md:px-5 lg:px-16 sticky top-0 left-0 right-0 z-[8500]">
      {/* Logo */}
      <div
        className="w-[50px] h-[24px] sm:w-20 sm:h-10 cursor-pointer flex items-center"
        style={{ zIndex: 10000 }}
        onClick={() => navigate("/")}
      >
        <img
          alt="BYRDS Logo"
          className="w-full h-full object-contain"
          src="/assets/landing-page/logo.svg"
        />
      </div>

      {/* Unified Navigation */}
<nav 
  className="flex items-center gap-[30px] justify-start" 
  style={{ zIndex: 8800 }}
>

  {/* Sustainable Synergy / Hamburger Menu Toggle */}
  <div
    className={`cursor-pointer transition-colors flex items-center font-rethink-sans font-bold text-[11px] sm:text-[13px] md:text-[20px] lg:text-[13px] text-center text-nowrap sm:px-[15px] rounded-[100px] ${
      activeNavItem === "sustainable-synergy"
        ? "text-[#172726]"
        : "text-[rgba(23,39,38,0.5)] hover:text-[#39da1f]"
    }`}
    style={
      activeNavItem !== "sustainable-synergy" && (activeNavItem === "" || activeNavItem === "home")
        ? {
            background: "transparent",
            backgroundImage: "linear-gradient(to right, #11A1EA, #D214FD)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            zIndex: 10100,
          }
        : { zIndex: 10100 }
    }
    onClick={() => navigate("/sustainable-synergy")}
  >
    Sustainable Synergy
  </div>

  {/* Divider (hidden on mobile) */}
  <div 
    className="w-px h-4 bg-neutral-800/50 hidden lg:block" 
    style={{ zIndex: 10100 }} 
  />

  {/* Product coming soon (hidden on mobile) */}
  <div
    className={`hidden lg:block font-['Rethink_Sans:Bold',_sans-serif] font-bold italic leading-[0] text-[12px] text-center text-nowrap cursor-pointer transition-colors ${
      activeNavItem === "register-firm"
        ? "text-[#172726]"
        : "text-[rgba(23,39,38,0.5)] hover:text-[#39da1f]"
    }`}
    style={{ zIndex: 10100 }}
  >
    Product coming soon
  </div>
</nav>

    </header>
  );
};

export default LandingHeader;
