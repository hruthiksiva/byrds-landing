import React, { useState } from "react";
import LandingHeader from "../components/LandingHeader";
import LandingFooter from "../components/LandingFooter";

const SustainableSynergy = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  return (
    <div className="bg-transparent min-h-screen w-full relative">
      {/* Header */}
      <LandingHeader activeNavItem="sustainable-synergy" />

      {/* Hero Video Section */}
      <section className="relative h-[855px] lg:h-[1150px] md:h-[1910px] w-full flex items-center justify-center overflow-hidden -mt-[54px] sm:-mt-[70px] md:-mt-[100px] lg:-mt-[80px]" style={{ zIndex: 1000, position: 'relative' }}>
        {/* Hero Video Background - Desktop (Large screens only) */}
        <video
          className="hidden lg:block absolute "
          style={{
            width: '1222px',
            objectFit: 'cover',
            zIndex: 1100,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotate(-90deg)'
          }}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/landing-page/purple-cloud.mp4" type="video/mp4" />
        </video>

        {/* Hero Video Background - Mobile and Medium screens */}
        <video
          className="block lg:hidden absolute mt-[-10px]"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1100,
            top: '0',
            left: '0'
          }}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/landing-page/purple-cloud.mp4" type="video/mp4" />
        </video>

        {/* Hero Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col mix-blend-overlay px-5 sm:px-5 md:px-5" style={{ zIndex: 1300 }}>
          <div
            className="font-dm-sans text-[67px] lg:text-[251px] md:text-[200px] text-nowrap relative text-[#172726]"
          >
            Sustainable
          </div>
          <div
            className="font-dm-sans mt-[-20px] sm:mt-[-170px] text-[89px] md:text-[260px] lg:text-[341px] text-nowrap relative text-[#172726]"
          >
            Together
          </div>
        </div>

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 pointer-events-none mt-[-10px]"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0) 50%, #EEF6F0 100%)",
            zIndex: 1200
          }}
        ></div>



      </section>

      {/* First Marquee Section */}
      <section className="py-2 bg-transparent relative overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex items-center gap-5 md:gap-7 lg:gap-5 text-[#172726] font-light text-base">
            {Array.from({ length: 20 }, (_, i) => (
              <React.Fragment key={i}>

                <div className="size-1.5">
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src="/assets/landing-page/ellipse-dot-2.svg"
                  />
                </div>
                <span
                  className="font-dm-sans font-light sm:text-[18px] md:text-[24px] text-[12px]"
                  style={{ fontVariationSettings: "'opsz' 14" }}
                >
                  ECO FIRST CONSULTING
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Three Sections with Rotated Images */}
      <section className="relative my-[60px] py-24 px-[34px] sm:px-[34px] md:px-[34px] lg:px-[270px]">
        {/* Rotated Background Images */}
        <div className="absolute  left-[-17px] top-[-30px] sm:top-[-150px] w-[171px] sm:w-[610px] h-[301px] sm:h-[1076px] rotate-[32deg] z-0">
          <img
            alt=""
            className="w-full h-full object-cover"
            src="/assets/landing-page/rotated-image-2.png"
          />
        </div>

        <div className="absolute right-[-67px] top-[230px] sm:top-[10px] sm:w-[610px] h-[301px] sm:h-[1076px] rotate-[148deg] scale-y-[-100%] z-0">
          <img
            alt=""
            className="w-full h-full object-cover"
            src="/assets/landing-page/rotated-image-2.png"
          />
        </div>

        <div className="absolute right-[0px]  sm:left-[720px] -bottom-[210px] sm:bottom-[0px] md:top-[900px] lg:top-[700px] sm:top-[560px] md:w-[1000px] lg:w-[530px] w-[300px] md:h-[1200px] lg:h-[1106px] h-[416px] rotate-[55deg] z-0">
          <img
            alt=""
            className="w-full h-full object-cover"
            src="/assets/landing-page/rotated-image-1.png"
          />
        </div>

        {/* Content Sections */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Mobile: Vertical Stack Layout */}
          <div className="block sm:hidden flex flex-col items-center space-y-14 mt-8 px-4">
            {/* Discover Section - Mobile */}
            <div className="w-[200px] text-left ">
              <div
                className="font-dm-sans font-light leading-[0] text-[#172726] text-[40px] text-nowrap"
                style={{ fontVariationSettings: "'opsz' 14" }}
              >
                Discover
              </div>
              <div className="font-dm-sans font-normal text-[10px] text-[rgba(27,43,42,0.8)] w-[200px] mt-[30px]">
                <p className="leading-[18px]">
                  Our expert consulting team dedicated to guiding your company
                  toward sustainability. With deep industry knowledge, innovative
                  solutions, and hands-on support, we help you navigate
                  challenges, reduce impact, and achieve lasting eco-driven
                  success.
                </p>
              </div>
            </div>

            {/* Strategize Section - Mobile */}
            <div className="w-[200px] text-right ">
              <div
                className="font-dm-sans font-light leading-[0] text-[#172726] text-[40px] text-nowrap"
                style={{ fontVariationSettings: "'opsz' 14" }}
              >
                Strategize
              </div>
              <div className="font-dm-sans font-normal text-[10px] text-[rgba(27,43,42,0.8)] w-[200px] mt-[30px]">
                <p className="leading-[18px]">
                  We craft tailored roadmaps, align business goals with
                  environmental priorities, and deliver actionable insights that
                  reduce risk, optimize resources, and accelerate your journey
                  toward eco-driven success. Empowering your company to achieve
                  eco-conscious success.
                </p>
              </div>
            </div>

            {/* Partner Section - Mobile */}
            <div className="w-[200px] text-left ">
              <div
                className="font-dm-sans font-light leading-[0] text-[#172726] text-[40px] text-nowrap"
                style={{ fontVariationSettings: "'opsz' 14" }}
              >
                Partner
              </div>
              <div className="font-dm-sans font-normal text-[10px] text-[rgba(27,43,42,0.8)] w-[200px] mt-[30px]">
                <p className="leading-[18px]">
                  Collaborate to create greener. Our experts work side by side
                  with your team, co-creating solutions, building strategies, and
                  ensuring shared accountability. Together, we create robust and
                  lasting solutions that evolve with your company's journey
                </p>
              </div>
            </div>
          </div>

          {/* Desktop: Original Layout */}
          <div className="hidden sm:block">
            {/* Discover Section */}
            <div
              className="mb-22 md:mb-[100px] ml-[167px] md:ml-[200px] mt-[180px] md:mt-[200px]"
              style={{ maxWidth: "556px" }}
            >
              <div
                className="font-dm-sans font-light leading-[0] text-[#172726] text-[75px] md:text-[90px] lg:text-[80px] text-nowrap "
                style={{ fontVariationSettings: "'opsz' 14" }}
              >
                Discover
              </div>
              <div className="font-dm-sans font-normal text-[13px] md:text-[16px] lg:text-[13px] text-[rgba(27,43,42,0.8)] w-[270px] md:w-[380px] lg:w-[290px] mt-[60px] md:mt-[80px]">
                <p className="leading-[22px] md:leading-[28px]">
                  Our expert consulting team dedicated to guiding your company
                  toward sustainability. With deep industry knowledge, innovative
                  solutions, and hands-on support, we help you navigate
                  challenges, reduce impact, and achieve lasting eco-driven
                  success.
                </p>
              </div>
            </div>

            {/* Strategize Section */}
            <div
              className="mb-32 md:mb-[100px] text-right ml-[610px] md:ml-[690px]"
              style={{ maxWidth: "556px" }}
            >
              <div
                className="font-dm-sans font-light leading-[0] text-[#172726] text-[75px] md:text-[90px] lg:text-[80px] text-nowrap"
                style={{ fontVariationSettings: "'opsz' 14" }}
              >
                Strategize
              </div>
              <div className="font-dm-sans font-normal leading-[0] text-[12px] md:text-[16px] lg:text-[13px] text-[rgba(27,43,42,0.8)] w-[260px] md:w-[360px] lg:w-[290px] mt-[60px] md:mt-[80px] lg:mt-[37px] ml-auto text-right">
                <p className="leading-[24px] md:leading-[28px]">
                  We craft tailored roadmaps, align business goals with
                  environmental priorities, and deliver actionable insights that
                  reduce risk, optimize resources, and accelerate your journey
                  toward eco-driven success. Empowering your company to achieve
                  eco-conscious success.
                </p>
              </div>
            </div>

            {/* Partner Section */}
            <div className="mb-32 md:mb-[100px] ml-[377px] md:ml-[400px] mb:mt-[100px] lg:mt-0">
              <div
                className="font-dm-sans font-light leading-[0] text-[#172726] text-[75px] md:text-[90px] lg:text-[80px] text-nowrap"
                style={{ fontVariationSettings: "'opsz' 14" }}
              >
                Partner
              </div>
              <div className="font-dm-sans font-normal leading-[0] text-[12px] md:text-[16px] lg:text-[13px] text-[rgba(27,43,42,0.8)] w-[260px] md:w-[410px] lg:w-[290px] mt-[60px] md:mt-[80px] lg:mt-[37px]">
                <p className="leading-[24px] md:leading-[28px]">
                  Collaborate to create greener. Our experts work side by side
                  with your team, co-creating solutions, building strategies, and
                  ensuring shared accountability. Together, we create robust and
                  lasting solutions that evolve with your company's journey
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Background Section with Large Text */}
      <section className="relative mb-[22px] sm:mt-[-50px] md:mt-[200px] lg:mt-[-50px] px-5 sm:px-5 md:px-[180px] lg:px-[270px]">
        {/* Text Container with Video Mask */}
        <div className="relative z-10 w-full sm:max-w-[1660px] ">
          {/* Video Element for Text Masking - Desktop */}
          <video
            className="hidden sm:block absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            style={{
              WebkitMask: "url(#text-mask)",
              mask: "url(#text-mask)",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
            }}
          >
            <source
              src="/assets/Sustainable-Synergy/hero-video.mp4"
              type="video/mp4"
            />
          </video>

          {/* Video Element for Text Masking - Mobile */}
          <video
            className="block sm:hidden absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            style={{
              WebkitMask: "url(#text-mask-mobile)",
              mask: "url(#text-mask-mobile)",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "left top",
              maskPosition: "left top",
            }}
          >
            <source
              src="/assets/Sustainable-Synergy/hero-video.mp4"
              type="video/mp4"
            />
          </video>

          {/* SVG Mask Definition - Desktop */}
          <svg width="100%" height="1200" className="hidden sm:block md:hidden lg:block" style={{ position: "absolute" }} viewBox="0 0 1200 1200">
            <defs>
              <mask id="text-mask">
                <rect width="100%" height="100%" fill="black" />
                <text
                  x="0"
                  y="150"
                  textAnchor="start"
                  fill="white"
                  fontSize="192"
                  fontFamily="Rethink Sans"
                  fontWeight="normal"
                >
                  We
                </text>
                <text
                  x="0"
                  y="359"
                  textAnchor="start"
                  fill="white"
                  fontSize="178"
                  fontFamily="Rethink Sans"
                  fontWeight="normal"
                >
                  Understand the
                </text>
                <text
                  x="0"
                  y="726"
                  textAnchor="start"
                  fill="white"
                  fontSize="341"
                  fontFamily="Rethink Sans"
                  fontWeight="bold"
                >
                  NATURE
                </text>
                <text
                  x="0"
                  y="932"
                  textAnchor="start"
                  fill="white"
                  fontSize="192"
                  fontFamily="Rethink Sans"
                  fontWeight="normal"
                >
                  of Your
                </text>
                <text
                  x="0"
                  y="1199"
                  textAnchor="start"
                  fill="white"
                  fontSize="280"
                  fontFamily="Rethink Sans"
                  fontWeight="bold"
                >
                  BUSINESS
                </text>
              </mask>
            </defs>
          </svg>

          {/* SVG Mask Definition - Medium Screens */}
          <svg width="100%" height="1400" className="hidden md:block lg:hidden" style={{ position: "absolute" }} viewBox="0 0 1400 1400">
            <defs>
              <mask id="text-mask-md">
                <rect width="100%" height="100%" fill="black" />
                <text
                  x="0"
                  y="180"
                  textAnchor="start"
                  fill="white"
                  fontSize="320"
                  fontFamily="Rethink Sans"
                  fontWeight="normal"
                >
                  We
                </text>
                <text
                  x="0"
                  y="420"
                  textAnchor="start"
                  fill="white"
                  fontSize="320"
                  fontFamily="Rethink Sans"
                  fontWeight="normal"
                >
                  Understand the
                </text>
                <text
                  x="0"
                  y="850"
                  textAnchor="start"
                  fill="white"
                  fontSize="600"
                  fontFamily="Rethink Sans"
                  fontWeight="bold"
                >
                  NATURE
                </text>
                <text
                  x="0"
                  y="1090"
                  textAnchor="start"
                  fill="white"
                  fontSize="320"
                  fontFamily="Rethink Sans"
                  fontWeight="normal"
                >
                  of Your
                </text>
                <text
                  x="0"
                  y="1400"
                  textAnchor="start"
                  fill="white"
                  fontSize="500"
                  fontFamily="Rethink Sans"
                  fontWeight="bold"
                >
                  BUSINESS
                </text>
              </mask>
            </defs>
          </svg>

          {/* SVG Mask Definition - Mobile */}
          <svg width="100%" height="500" className="block sm:hidden" style={{ position: "absolute" }} viewBox="0 0 320 500">
            <defs>
              <mask id="text-mask-mobile">
                <rect width="100%" height="100%" fill="black" />
                <text
                  x="0"
                  y="50"
                  textAnchor="start"
                  fill="white"
                  fontSize="48.44"
                  fontFamily="Rethink Sans"
                  fontWeight="400"
                  dy="0"
                >
                  We
                </text>
                <text
                  x="0"
                  y="105"
                  textAnchor="start"
                  fill="white"
                  fontSize="51.4"
                  fontFamily="Rethink Sans"
                  fontWeight="400"
                  dy="0"
                >
                  Understand the
                </text>
                <text
                  x="0"
                  y="206"
                  textAnchor="start"
                  fill="white"
                  fontSize="98.65"
                  fontFamily="Rethink Sans"
                  fontWeight="800"
                  dy="0"
                >
                  NATURE
                </text>
                <text
                  x="0"
                  y="267"
                  textAnchor="start"
                  fill="white"
                  fontSize="52.44"
                  fontFamily="Rethink Sans"
                  fontWeight="400"
                  dy="0"
                >
                  of Your
                </text>
                <text
                  x="0"
                  y="350"
                  textAnchor="start"
                  fill="white"
                  fontSize="81"
                  fontFamily="Rethink Sans"
                  fontWeight="800"
                  dy="0"
                >
                  BUSINESS
                </text>
              </mask>
            </defs>
          </svg>

          {/* Text Elements with Stroke Only - Desktop */}
          <div className="hidden sm:block md:hidden lg:block text-left">
            <div
              className="font-rethink font-normal text-transparent text-[192px] md:text-[280px] lg:text-[192px] leading-[173px]"
              style={{
                WebkitTextStroke: "2px rgba(227, 231, 224, 0.0)",
              }}
            >
              We
            </div>
            <div
              className="font-rethink font-normal text-transparent text-[232px] md:text-[280px] lg:text-[232px] leading-[273px] text-nowrap"
              style={{
                WebkitTextStroke: "2px rgba(227, 231, 224, 0.0)",
              }}
            >
              Understand the
            </div>
            <div
              className="font-rethink font-extrabold text-transparent text-[445px] md:text-[500px] lg:text-[445px] leading-[378px]"
              style={{
                WebkitTextStroke: "3px rgba(227, 231, 224, 0.0)",
              }}
            >
              NATURE
            </div>
            <div
              className="font-rethink font-normal text-transparent text-[242px] md:text-[280px] lg:text-[242px]"
              style={{
                WebkitTextStroke: "2px rgba(227, 231, 224, 0.0)",
              }}
            >
              of Your
            </div>
            <div
              className="font-rethink font-extrabold text-transparent text-[365px] md:text-[430px] lg:text-[365px] leading-[278px]"
              style={{
                WebkitTextStroke: "3px rgba(227, 231, 224, 0.0)",
              }}
            >
              BUSINESS
            </div>
          </div>

          {/* Text Elements with Stroke Only - Medium Screens */}
          <div className="hidden md:block lg:hidden text-left">
            <div
              className="font-rethink font-normal text-transparent text-[280px] leading-[250px]"
              style={{
                WebkitTextStroke: "2px rgba(227, 231, 224, 0.0)",
                mask: "url(#text-mask-md)",
                WebkitMask: "url(#text-mask-md)"
              }}
            >
              We
            </div>
            <div
              className="font-rethink font-normal text-transparent text-[260px] leading-[300px] text-nowrap"
              style={{
                WebkitTextStroke: "2px rgba(227, 231, 224, 0.0)",
                mask: "url(#text-mask-md)",
                WebkitMask: "url(#text-mask-md)"
              }}
            >
              Understand the
            </div>
            <div
              className="font-rethink font-extrabold text-transparent text-[500px] leading-[400px]"
              style={{
                WebkitTextStroke: "3px rgba(227, 231, 224, 0.0)",
                mask: "url(#text-mask-md)",
                WebkitMask: "url(#text-mask-md)"
              }}
            >
              NATURE
            </div>
            <div
              className="font-rethink font-normal text-transparent text-[280px]"
              style={{
                WebkitTextStroke: "2px rgba(227, 231, 224, 0.0)",
                mask: "url(#text-mask-md)",
                WebkitMask: "url(#text-mask-md)"
              }}
            >
              of Your
            </div>
            <div
              className="font-rethink font-extrabold text-transparent text-[430px] leading-[350px]"
              style={{
                WebkitTextStroke: "3px rgba(227, 231, 224, 0.0)",
                mask: "url(#text-mask-md)",
                WebkitMask: "url(#text-mask-md)"
              }}
            >
              BUSINESS
            </div>
          </div>

          {/* Text Elements with Stroke Only - Mobile */}
          <div className="block sm:hidden px-2 max-w-[320px] mx-auto text-left">
            <div
              className="font-rethink font-normal text-transparent text-[48.44px] leading-[55px] mb-[-10px]"
              style={{
                WebkitTextStroke: "1px rgba(227, 231, 224, 0.0)",
              }}
            >
              We
            </div>
            <div
              className="font-rethink font-normal text-transparent text-[48.44px] leading-[48.44px] mb-[-5px]"
              style={{
                WebkitTextStroke: "1px rgba(227, 231, 224, 0.0)",
              }}
            >
              Understand the
            </div>
            <div
              className="font-rethink font-extrabold text-transparent text-[93.65px] leading-[99px] mb-[-15px]"
              style={{
                WebkitTextStroke: "2px rgba(227, 231, 224, 0.0)",
              }}
            >
              NATURE
            </div>
            <div
              className="font-rethink font-normal text-transparent text-[48.44px] leading-[50px] mb-[-10px]"
              style={{
                WebkitTextStroke: "1px rgba(227, 231, 224, 0.0)",
              }}
            >
              of Your
            </div>
            <div
              className="font-rethink font-extrabold text-transparent text-[77.07px] leading-[90px]"
              style={{
                WebkitTextStroke: "2px rgba(227, 231, 224, 0.0)",
              }}
            >
              BUSINESS
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Text Section */}
      <section className="sm:mb-[180px] sm:mt-[-200px] px-5 sm:px-5 md:px-[180px] lg:px-[270px]">
        <div className="max-w-[1570px]">
          <div
            className="font-dm-sans sm:mx-0
     font-extralight text-left
     text-[16px] sm:text-[30px] md:text-[40px] lg:text-[30px]
     leading-[28px] sm:leading-[45px] md:leading-[70px] lg:leading-[45px]
     text-[rgba(27,43,42,0.8)]"
          >
            OUR ECO CONSULTING IS <span className="font-bold">TAILORED</span> TO YOUR BUSINESS, DELIVERING CURATED STRATEGIES THAT BALANCE PERFORMANCE WITH <span className="font-bold">RESPONSIBILITY</span>. WE CRAFT ACTIONABLE PLANS FOR CARBON REDUCTION, OPTIMIZE OPERATIONS, AND CREATE <span className="font-bold">MEASURABLE RESULTS</span>—ENSURING YOUR PATH TOWARD A GREENER FUTURE IS EFFECTIVE, PERSONALIZED, AND <span className="font-bold">FUTURE-READY</span>.
          </div>
        </div>
      </section>

      <section className="sm:mt-[300px] mt-[110px] bg-[#e3ece5] transform rotate-[359deg] relative">
        {/* Purple Butterfly */}
        <div
          className="absolute left-[100px] sm:ml-[686px] mt-[-82px] sm:mt-[-105px] z-10"
        >
          <img
            alt=""
            className="w-[116.8px] h-[125px] sm:w-[174px] sm:h-[180px] "
            src="/assets/Sustainable-Synergy/purple-butterfly.png"
          />
        </div>

        <div className="flex whitespace-nowrap animate-marquee ">
          <div className="flex items-center gap-5 h-[32px] sm:h-[50px] md:h-[70px] lg:h-[50px] text-[#172726] font-light text-base">
            {Array.from({ length: 50 }, (_, i) => (
              <React.Fragment key={i}>
                <div className="size-1 sm:size-1 md:size-2 lg:size-1">
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src="/assets/landing-page/ellipse-dot-1.svg"
                  />
                </div>
                <span
                  className="font-dm-sans font-light text-[12px] sm:text-[16px] md:text-[20px] lg:text-[16px]"
                  style={{ fontVariationSettings: "'opsz' 14" }}
                >
                  REACH OUT
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="sm:pt-[128px] md:pt-[90px] pt-[50px] relative  md:h-[650px] lg:h-[850px] h-[400px] px-[20px] sm:px-5 md:px-[180px] lg:px-[270px]">
        {/* Plant Images */}
        <div className="absolute sm:left-[170px] left-[0px] sm:bottom-[420px] bottom-[136px] md:bottom-[89px] lg:bottom-[300px] z-[100]">
          <img
            alt=""
            className="sm:w-[185px] w-[68px] sm:h-[190px] h-[75px] object-cover"
            src="/assets/Sustainable-Synergy/purple-butterfly.png"
          />
        </div>

        <div className="absolute sm:right-[465px] right-[65px] sm:bottom-[445px] bottom-[142px] md:bottom-[100px] lg:bottom-[310px] rotate-[177deg] scale-y-[-100%]">
          <img
            alt=""
            className="sm:w-[98px] lg: w-[45px] sm:h-[131px] h-[70px] object-cover"
            src="/assets/Sustainable-Synergy/purple-butterfly.png"
          />
        </div>

        <div className="absolute sm:top-[100px] top-[15px] right-[20px] md:right-[240px] lg:right-[240px]">
          <img
            alt=""
            className="w-[284px] h-[136px] sm:w-auto sm:h-auto"
            src="/assets/Sustainable-Synergy/first-sustainable-step.svg"
          />
        </div>

        <div className="text-right pl-[20px] absolute sm:bottom-[360px] md:bottom-[10px] lg:bottom-[230px] bottom-[130px] sm:left-[265px] md:left-[250px] left-[25px]">
          <div
            onClick={() => {
              navigator.clipboard.writeText("synergize@byrds.one");
              setCopySuccess(true);
              setTimeout(() => setCopySuccess(false), 2000);
            }}
            className="font-rethink-sans font-bold text-[#172726] text-[36px] sm:text-[134px] cursor-pointer hover:text-[#39da1f] transition-colors"
          >
            synergize@byrds.one
          </div>
          {copySuccess && (
            <div className="absolute top-[-60px] md:top-[-160px] left-1/2 transform -translate-x-1/2 bg-[#39da1f] text-white px-4 py-2 rounded-lg text-[8px] sm:text-sm md:text-[16px] font-medium animate-fade-in-out">
              Email copied to clipboard!
            </div>
          )}
        </div>
        <div
          className="absolute font-dm-sans font-normal italic sm:bottom-[365px] lg:bottom-[237px] md:bottom-[0px] sm:right-[260px] bottom-[100px] right-[20px] text-[12px] md:text-[20px] lg:text-[12px] text-[rgba(23,39,38,0.3)] mb-4"
          style={{ fontVariationSettings: "'opsz' 14" }}
        >
          (Click to copy email ID)
        </div>
      </section>

     {/* Horizontal Bar - Mobile Only */}
     <div className="block sm:hidden">
        <div className="absolute left-[20px] right-[20px] h-[1px] bottom-[310px]" style={{ background: "#17272680" }} />
      </div>

      {/* Footer Section - Medium Screens Only */}
      <div className="hidden md:block lg:hidden mx-[180px] relative min-h-[600px] md:mt-[200px] ">
        {/* Horizontal Bar */}
        <div className="absolute left-0 right-0 top-[-100px] h-[2px] bg-[#17272680]" />

        {/* Footer Elements Container */}
        <div className="relative w-full md:mt-[300px]">
          {/* A Product by */}
          <div
            className="absolute font-dm-sans font-normal text-[#172726] text-[30px] leading-[50%]"
            style={{
              top: "0px",
              left: "0px",
              fontVariationSettings: "'opsz' 14"
            }}
          >
            A Product by  
          </div>

          {/* THREADALITY TECHNOLOGIES */}
          <div
            className="absolute font-dm-sans font-bold text-[#172726] text-[50px] leading-[60px] tracking-[-2px] cursor-pointer hover:opacity-80 transition-opacity duration-200 mt-[10px]"
            onClick={() => window.open('https://www.threadality.com', '_blank')}
            style={{
              top: "18px",
              left: "0px",
              fontVariationSettings: "'opsz' 14"
            }}
          >
            <div>THREADALITY</div>
            <div>TECHNOLOGIES</div>
          </div>

          {/* ©2025 */}
          <div
            className="absolute font-rethink-sans font-bold text-[#172726] text-[60px] leading-[100%] tracking-[-1px] text-right mt-[6px]"
            style={{
              top: "0px",
              right: "0px"
            }}
          >
            ©2025
          </div>

          {/* BYRDS */}
          <div
            className="absolute font-rethink-sans font-bold text-[#172726] text-[100px] leading-[100%] tracking-[-4px] text-right mt-[30px]"
            style={{
              top: "18px",
              right: "0px"
            }}
          >
            BYRDS
          </div>

          {/* fly@byrds.one */}
          <div
            className="absolute font-rethink-sans font-bold text-[#172726] text-[88px] leading-[100%] text-center left-1/2 transform -translate-x-1/2 mt-[250px]"
            
          >
            fly@byrds.one
          </div>

          {/* A Morphline Studios Creation */}
          <div
            className="absolute mt-[500px] font-dm-sans font-extralight text-[#172726] text-[30px] leading-[100%] text-center left-1/2 transform -translate-x-1/2 cursor-pointer hover:opacity-80 transition-opacity duration-200"
            onClick={() => window.open('https://www.morphline.studio', '_blank')}
            
          >
            A Morphline Studios Creation
          </div>
        </div>
      </div>

      {/* Mobile Footer Elements - Visible on mobile only */}
      <div className="block sm:hidden w-[340px] mx-auto relative mt-[30px] -mb-[70px] md:mb-[200px]">
        {/* A Product by */}
        <div
          className="absolute font-dm-sans font-normal text-[#172726] text-[8px] leading-[100%]"
          style={{
            top: "0px",
            left: "0px",
            width: "49px",
            height: "6px",
            fontVariationSettings: "'opsz' 14"
          }}
        >
          A Product by
        </div>

        {/* THREADALITY TECHNOLOGIES */}
        <div
          className="absolute font-dm-sans font-bold text-[#172726] text-[13px] leading-[14px] tracking-[-1px] cursor-pointer hover:opacity-80 transition-opacity duration-200"
          onClick={() => window.open('https://www.threadality.com', '_blank')}
          style={{
            top: "11px",
            left: "0px",
            width: "89px",
            height: "23px",
            fontVariationSettings: "'opsz' 14"
          }}
        >
          <div>THREADALITY</div>
          <div>TECHNOLOGIES</div>
        </div>

        {/* ©2025 */}
        <div
          className="absolute font-rethink-sans font-bold text-[#172726] text-[15.32px] leading-[100%] tracking-[-1px] text-right"
          style={{
            top: "0px",
            left: "340px",
            width: "42px",
            height: "11px",
            transform: "translateX(-100%)"
          }}
        >
          ©2025
        </div>

        {/* BYRDS */}
        <div
          className="absolute font-rethink-sans font-bold text-[#172726] text-[31.15px] leading-[100%] tracking-[-2px] text-right"
          style={{
            top: "12.5px",
            left: "340px",
            width: "85px",
            height: "22px",
            transform: "translateX(-100%)"
          }}
        >
          BYRDS
        </div>

        {/* fly@byrds.one */}
        <div
          className="absolute font-rethink-sans font-bold text-[#172726] text-[36px] leading-[100%] text-center left-1/2 transform -translate-x-1/2"
          style={{
            top: "69.9px",
            width: "194px",
            height: "39px"
          }}
        >
          fly@byrds.one
        </div>

        {/* A Morphline Studios Creation */}
        <div
          className="absolute font-dm-sans font-extralight text-[#172726] text-[13px] leading-[100%] text-center left-1/2 transform -translate-x-1/2 text-wrap-nowrap cursor-pointer hover:opacity-80 transition-opacity duration-200"
          onClick={() => window.open('https://www.morphline.studio', '_blank')}
          style={{
            top: "131.11px",
            width: "auto",
            height: "13px"
          }}
        >
          A Morphline Studios Creation
        </div>
      </div>
      {/* Footer */}
      <LandingFooter backgroundImage="/assets/landing-page/footer-background.png" />

    </div>
  );
};

export default SustainableSynergy;
