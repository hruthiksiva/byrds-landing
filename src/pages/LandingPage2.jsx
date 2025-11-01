import React, { useState, useEffect, useRef } from "react";
import LandingHeader from "../components/LandingHeader";
import LandingFooter from "../components/LandingFooter";

const LandingPage2 = () => {
  const [sectionProgress, setSectionProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Calculate progress based on how much of the section is visible
            const rect = entry.boundingClientRect;
            const windowHeight = window.innerHeight;
            const sectionHeight = rect.height;
            const visibleHeight =
              Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
            // Adjust calculation for mobile vs desktop
            const isMobile = windowHeight < 640;
            const divisor = isMobile ? sectionHeight * 2 : windowHeight * 1.2;
            const progress = Math.min(visibleHeight / divisor, 1);
            setSectionProgress(progress);
          } else {
            setSectionProgress(0);
          }
        });
      },
      {
        threshold: Array.from({ length: 21 }, (_, i) => i * 0.05), // 0 to 1 in 0.05 increments
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
    font;
  }, []);

  return (
    <div className="bg-transparent min-h-screen w-full relative">
      {/* Header */}
      <LandingHeader />

      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 py-4 px-0 sm:px-[22.3px] relative z-[400] mt-[45px] sm:mt-[70px] md:mt-[350px] lg:mt-[70px] w-full pb-10">
        <div
          className="bg-[#f9ffd4] box-border sm:w-[195px] md:w-[360px] lg:w-[210px] flex gap-1 md:gap-5 lg:gap-1 items-center justify-center px-2 py-1.5 rounded-[100px] cursor-pointer hover:bg-[#f0f8c4] transition-colors duration-200"
          onClick={() => window.open('https://www.riftfirst.com', '_blank')}
        >
          <div
            className="font-dm-sans font-normal text-[#172726] text-[11px] sm:text-[11px] md:text-[20px] lg:text-[11px]"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            Propelled by{" "}
            <span className="font-dm-sans font-bold">Rift First Capital</span>
          </div>
          <div className="size-3.5 sm:size-3.5 md:size-7 lg:size-3.5">
            <img
              alt=""
              className="block max-w-none size-full"
              src="/assets/landing-page/top-banner-icon.svg"
            />
          </div>
        </div>
      </div>

      {/* Architect Section */}
      <section
        className="relative mt-[10px] sm:mt-[20px] md:mt-[0px] lg:mt-[-50px] px-5 sm:px-5 md:px-[180px] lg:px-[270px]"
        style={{ zIndex: 1200, position: "relative" }} // Architect section above header background, below header elements
      >
        <div
          className="relative font-dm-sans font-normal text-[#172726] text-center text-[88px] sm:text-[120px] md:text-[337px] lg:text-[260px] xl:text-[300.832px]"
          style={{
            fontVariationSettings: "'opsz' 14",
            zIndex: 1300, // text above header background, below header elements
            position: "relative",
          }}
        >
          <h1 className="leading-[normal] ">Architect</h1>
        </div>

        {/* Sustainable Future & Eco-friendly Business */}
        <div
          className="flex justify-between items-center mt-[5px] sm:mt-[-8px] md:mt-[-10px] lg:mt-[-60px] relative"
        // slogans above torus
        >
          <div
            className=" leading-[normal] text-[#172726] text-left text-[14px] sm:text-[18px] md:text-[68px] lg:text-[35px] xl:text-[50px]"
            style={{
              fontVariationSettings: "'opsz' 14",
              fontWeight: 100,
            }}
          >
            <p className="font-dm-sans font-extralight">Sustainable</p>
            <p className="font-dm-sans font-extralight">Future</p>
          </div>

          <div
            className="absolute left-1/2 top-1 sm:top-2 md:top-4"
            style={{ zIndex: 1300 }}
          >
            <img
              src="/assets/landing-page/and.svg"
              alt="&"
              className="w-[11px] h-[11px] sm:w-3 sm:h-3 md:w-12 md:h-12 lg:w-6 lg:h-6 xl:w-11 xl:h-11 object-contain"
            />
          </div>

          <div
            className="font-dm-sans leading-[normal] text-[#172726] text-right text-[14px] sm:text-[18px] md:text-[68px] lg:text-[35px] xl:text-[50px]"
            style={{
              fontVariationSettings: "'opsz' 14",
              fontWeight: 100,
            }}
          >
            <p className="font-dm-sans font-extralight">Eco-friendly</p>
            <p className="font-dm-sans font-extralight">Business</p>
          </div>
        </div>
      </section>

      {/* Main Torus Background Section */}
      <section
        className="relative mt-[-20px] sm:mt-[-50px] h-[500px] sm:h-[400px] md:h-[1200px] lg:h-[1100px]"
        style={{ zIndex: 1000, position: "relative" }} // torus above header background, below header elements and architect
      >
        {/* Large 3D Torus Background */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/assets/landing-page/torus-background.svg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
      </section>

      {/* Carbon Reduction and Green Innovation */}
      <section className="relative mt-[-20px] sm:mt-[30px] md:mt-[35px] lg:mt-[-60px] z-[500] px-5 sm:px-5 md:px-[180px] lg:px-[270px]">
        <div className="flex justify-between items-center relative">
          <div
            className="font-dm-sans font-extralight leading-[normal] text-[#172726] text-left text-[14px] sm:text-[16px] md:text-[68px] lg:text-[30px] xl:text-[50px]"
            style={{
              fontVariationSettings: "'opsz' 14",
              fontWeight: 100,
            }}
          >
            <p className="font-dm-sans font-extralight ">Carbon</p>
            <p className="font-dm-sans font-extralight ">Reduction</p>
          </div>

          <div
            className="font-dm-sans font-extralight leading-[normal] text-[#172726] text-right text-[14px] sm:text-[16px] md:text-[68px] lg:text-[30px] xl:text-[50px]"
            style={{
              fontVariationSettings: "'opsz' 14",
              fontWeight: 100,
            }}
          >
            <p className="font-dm-sans font-extralight ">Green</p>
            <p className="font-dm-sans font-extralight ">Innovation</p>
          </div>
        </div>
      </section>

      {/* Company Logos Section */}
      <section className="bg-transparent h-[50px] md:h-[80px] lg:h-[50px] sm:py-16 mt-[30px] sm:mt-[40px] md:mt-[50px] lg:mt-[30px] relative z-[500] px-5 sm:px-5 lg:px-[270px]">
        <div className="max-w-8xl mx-auto relative flex-wrap overflow-hidden">
          <div
            className="absolute left-0 top-0 bottom-0 w-1/3 z-[600] pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, #EEF6F0 0%, rgba(238, 246, 240, 0) 100%)",
            }}
          ></div>
          <div
            className="absolute right-0 top-0 bottom-0 w-1/3 z-[600] pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgba(238, 246, 240, 0) 0%, #EEF6F0 100%)",
            }}
          ></div>

          <div className="flex animate-marquee-slow whitespace-nowrap">
            <div className="flex items-center gap-8">
              {Array.from({ length: 20 }, (_, i) => (
                <React.Fragment key={i}>
                  <div className="box-border flex gap-2.5 items-center justify-center pl-[15px] pr-[18px] py-2.5">
                    <div className="lg:size-4 md:size-7 size-4">
                      <img
                        alt="Google"
                        className="block max-w-none size-full"
                        src="/assets/landing-page/Strontonne.svg"
                      />
                    </div>
                    <div
                      className="font-dm-sans font-extralight leading-[0] text-[#172726] md:text-[23px] lg:text-[16px] text-[12px] text-nowrap"
                      style={{ fontVariationSettings: "'opsz' 14" }}
                    >
                      Strontonne
                    </div>
                  </div>
                  <div className="box-border flex gap-2.5 items-center justify-center pl-[15px] pr-[18px] py-2.5">
                    <div className="lg:size-4 md:size-7 size-4">
                      <img
                        alt="X (Twitter)"
                        className="block max-w-none size-full"
                        src="/assets/landing-page/Belfenmore.svg"
                      />
                    </div>
                    <div
                      className="font-dm-sans font-extralight leading-[0] text-[#172726] md:text-[23px] lg:text-[16px] text-[12px] text-nowrap"
                      style={{ fontVariationSettings: "'opsz' 14" }}
                    >
                      Belfenmore
                    </div>
                  </div>
                  <div className="box-border flex gap-2.5 items-center justify-center pl-[15px] pr-[18px] py-2.5">
                    <div className="lg:size-4 md:size-7 size-4">
                      <img
                        alt="Microsoft"
                        className="block max-w-none size-full"
                        src="/assets/landing-page/Benny-bland.svg"
                      />
                    </div>
                    <div
                      className="font-dm-sans font-extralight leading-[0] text-[#172726] md:text-[23px] lg:text-[16px] text-[12px] text-nowrap"
                      style={{ fontVariationSettings: "'opsz' 14" }}
                    >
                      Benny Bland
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Background Section with GREENER/EASIER/FASTER */}
      <section className="relative h-[270px] sm:min-h-[600px] md:min-h-[900px] lg:min-h-[1050px] mt-[20px] sm:mt-[30px] md:mt-[150px] lg:mt-0 px-[34px] sm:px-[34px] md:px-[180px] lg:px-[270px] bg-[#EEF6F0]">
        {/* Background image with proper coverage */}
        <div
          className="absolute inset-0 sm:left-[270px] bg-center bg-cover bg-no-repeat mix-blend-exclusion opacity-80 w-full h-full sm:w-[1380px] sm:h-[776px]"
          style={{
            backgroundImage: "url('/assets/landing-page/video-background.gif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Content container with proper boundaries */}
        <div className="relative z-10 w-full h-full">
          {/* GREENER positioned at top left */}
          <div className="absolute top-2 sm:top-6 md:top-8 lg:top-12 font-dm-sans font-extralight tracking-normal text-[40px] sm:text-[80px] md:text-[190px] lg:text-[190px] leading-[50px] sm:leading-[100px] md:leading-[130px] lg:leading-[260px] text-justify text-[#172726]">
            GREENER.
          </div>

          {/* (G) element positioned below GREENER */}
          <div className="absolute top-[60px] sm:top-[120px] md:top-[220px] lg:top-[300px] flex items-start gap-[20px] sm:gap-[30px] md:gap-[35px] lg:gap-[50px] max-w-[530px]">
            <div
              className="font-dm-sans font-extralight text-[20px] sm:text-[40px] md:text-[70px] lg:text-[100px] leading-[25px] sm:leading-[50px] md:leading-[65px] lg:leading-[130px] text-justify flex-shrink-0 md:top-1/2 md:translate-y-1/2 lg:top-0 lg:translate-y-0"
              style={{ color: "rgba(23, 39, 38, 0.5)" }}
            >
              (G)
            </div>
            <p className="hidden sm:block text-[#1B2B2A] text-[10px] sm:text-[12px] md:text-[17px] lg:text-[14px] text-right leading-4 sm:leading-5 md:leading-7 flex-1 w-[200px] sm:w-[250px] md:w-[320px] lg:w-[280px]">
              Architect growth with sustainable strategies, renewable solutions,
              and eco-focused products—create impact, ensure compliance, and
              build a resilient future for our planet and your firm.
            </p>
          </div>

          {/* EASIER positioned at top right */}
          <div className="absolute right-0 top-[90px] sm:top-[150px] md:top-[300px] lg:top-[290px] font-dm-sans font-extralight text-[40px] sm:text-[90px] md:text-[190px] lg:text-[180px] leading-[50px] sm:leading-[120px] md:leading-[150px] lg:leading-[260px] text-justify text-[#172726]">
            EASIER.
          </div>

          {/* (E) element positioned below EASIER */}
          <div className="absolute right-0 top-[150px] sm:top-[250px] md:top-[480px] lg:top-[530px] flex items-start gap-[20px] sm:gap-[30px] md:gap-[35px] lg:gap-[60px] max-w-[570px]">
            <div
              className="font-dm-sans font-extralight text-[20px] sm:text-[40px] md:text-[70px] lg:text-[100px] leading-[25px] sm:leading-[50px] md:leading-[65px] lg:leading-[130px] text-justify flex-shrink-0 md:top-1/2 md:translate-y-1/2 lg:top-0 lg:translate-y-0"
              style={{ color: "rgba(23, 39, 38, 0.5)" }}
            >
              (E)
            </div>
            <p className="hidden sm:block text-[#1B2B2A] text-[10px] sm:text-[12px] md:text-[17px] lg:text-[14px] text-right leading-4 sm:leading-5 md:leading-7 flex-1 w-[200px] sm:w-[250px] md:w-[270px] lg:w-[260px]">
              Byrds simplifies sustainability with seamless integration,
              intuitive dashboards, and effortless reporting—We ensure your
              business is greener, easier, and future-ready, while you focus on
              growth.
            </p>
          </div>

          {/* FASTER positioned at bottom left */}
          <div className="absolute left-4 sm:left-[40px] md:left-[0px] lg:left-[72px] top-[180px] sm:top-[300px] md:top-[540px] lg:top-[520px] font-dm-sans font-extralight text-[40px] sm:text-[90px] md:text-[190px] lg:text-[200px] leading-[50px] sm:leading-[120px] md:leading-[150px] lg:leading-[260px] text-justify text-[#172726]">
            FASTER.
          </div>

          {/* (F) element positioned below FASTER */}
          <div className="absolute left-[130px] sm:left-[150px] md:left-[0px] lg:left-[315px] top-[240px] sm:top-[350px] md:top-[720px] lg:top-[770px] flex items-start gap-[20px] sm:gap-[30px] md:gap-[28 0px] lg:gap-[60px] md:justify-between md:max-w-[730px] lg:max-w-[530px]">
            <p className="hidden sm:block text-[#1B2B2A] text-[10px] sm:text-[12px] md:text-[17px] lg:text-[14px] text-left leading-3 sm:leading-4 md:leading-7 flex-1 w-[200px] sm:w-[250px] md:w-[320px] lg:w-[260px] font-extralight">
              Greener in no time!
              <br /> From compliance to carbon reduction, our product enables
              faster integration, measurable results, and impactful progress
              toward a greener future.
            </p>
            <div
              className="font-dm-sans font-extralight text-[20px] sm:text-[40px] md:text-[70px] lg:text-[100px] leading-[25px] sm:leading-[50px] md:leading-[65px] lg:leading-[110px] text-justify flex-shrink-0 md:top-1/2 md:translate-y-1/2 lg:top-0 lg:translate-y-0"
              style={{ color: "rgba(23, 39, 38, 0.5)" }}
            >
              (F)
            </div>
          </div>
        </div>
      </section>

      {/* PAINT THE WORLD Marquee Section */}
      <section className="py-10 md:py-[150px] lg:py-0">
        <div className="relative overflow-hidden bg-[#e3ece5] transform rotate-[2deg] origin-center">
          <div className="flex animate-marquee whitespace-nowrap">
            <div className="flex items-center h-[42px] sm:h-[43px] md:h-[65px] lg:h-[50px] gap-5 text-[#172726] font-light text-[12px] sm:text-[13px] md:text-[18px] lg:text-base">
              {Array.from({ length: 20 }, (_, i) => (
                <React.Fragment key={i}>
                  <div className="sm:size-1.5 md:size-2 lg:size-2 size-1">
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src="/assets/landing-page/paint-world-dot-1.svg"
                    />
                  </div>
                  <span
                    className="font-dm-sans font-light"
                    style={{ fontVariationSettings: "'opsz' 14" }}
                  >
                    PAINT THE WORLD
                  </span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Greener Cleaner Section */}
      <section
        ref={sectionRef}
        className="relative h-[160px] sm:min-h-[300px] md:min-h-[600px] lg:min-h-[550px] px-[34px] sm:px-[34px] md:px-[130px] lg:px-[270px]"
      >
        <div className="relative z-10 w-full h-full">
          <div
            className="absolute inset-0 font-rethink-sans font-bold text-[53px] sm:text-[80px] md:text-[260px] lg:text-[200px] leading-[67px] sm:leading-[100px] md:leading-[273px] lg:leading-[273px] text-justify"
            style={{ fontWeight: 700 }}
          >
            {/* Desktop - Default versions (hidden on mobile) */}
            <div
              className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 top-0 sm:top-auto text-[53px] sm:text-[80px] md:text-[260px] lg:text-[200px] transition-all duration-[1200ms] ease-in-out"
              style={{
                color: "#E3E7E2",
                opacity: Math.max(0, 1 - sectionProgress * 1.5),
                letterSpacing: "0%",
              }}
            >
              Greener
            </div>
            <div
              className="hidden sm:block absolute left-0 top-[45px] sm:top-[80px] md:top-[200px] lg:top-[210px] text-[53px] sm:text-[80px] md:text-[260px] lg:text-[200px] transition-all duration-[1200ms] ease-in-out"
              style={{
                color: "#E3E7E2",
                opacity: Math.max(0, 1 - sectionProgress * 1.5),
                letterSpacing: "0%",
              }}
            >
              Cleaner
            </div>
            <div
              className="hidden sm:block absolute text-[53px] sm:text-[90px] md:text-[260px] lg:text-[220px] right-0 top-[92px] sm:top-[160px] md:top-[430px] lg:top-[410px] transition-all duration-[1200ms] ease-in-out"
              style={{
                color: "#E3E7E2",
                opacity: Math.max(0, 1 - sectionProgress * 1.5),
                letterSpacing: "0%",
              }}
            >
              Brighter
            </div>

            {/* Gradient versions */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 top-0 sm:top-auto text-[53px] sm:text-[80px] md:text-[260px] lg:text-[200px] sm:transition-all sm:duration-[1200ms] sm:ease-in-out"
              style={{
                background:
                  "radial-gradient(ellipse at center top, #B3FF68 75%, #F1F586 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
                opacity: window.innerWidth >= 640 ? Math.min(1, sectionProgress * 1.5) : 1,
                letterSpacing: "0%",
              }}
            >
              Greener
            </div>
            <div
              className="absolute left-0 top-[45px] sm:top-[80px] md:top-[200px] lg:top-[210px] text-[53px] sm:text-[80px] md:text-[260px] lg:text-[200px] sm:transition-all sm:duration-[1200ms] sm:ease-in-out"
              style={{
                background:
                  "radial-gradient(ellipse at 60% 0%, #B3FF68 10%, #F1F586 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
                opacity: window.innerWidth >= 640 ? Math.min(1, sectionProgress * 1.5) : 1,
                letterSpacing: "0%",
              }}
            >
              Cleaner
            </div>
            <div
              className="absolute right-0 top-[92px] sm:top-[160px] md:top-[430px] lg:top-[410px] text-[53px] sm:text-[90px] md:text-[260px] lg:text-[220px] sm:transition-all sm:duration-[1200ms] sm:ease-in-out"
              style={{
                background:
                  "radial-gradient(ellipse at 10% 0%, #c6ff1a 0%, #F1F586 30%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
                opacity: window.innerWidth >= 640 ? Math.min(1, sectionProgress * 1.5) : 1,
                letterSpacing: "0%",
              }}
            >
              Brighter
            </div>
          </div>
        </div>
      </section>

      {/*Complex image with Detailed Text Section */}
      <section className="relative flex justify-center items-center min-h-[350px] px-[34px] sm:px-5 md:px-[180px] lg:px-[270px]">
        <div className="relative w-full h-full">
          {/* Image container - hidden on mobile */}
          {/* Image container - hidden on mobile */}
          <div className="absolute -left-[50px] top-[-150px] w-[550px] h-[280px] hidden sm:block">
            <img
              className="w-full h-auto object-contain"
              src="/assets/sustainable-synergy/pink-element-dividing-text.svg"
              alt="Sustainable Synergy"
            />
          </div>

          {/* Text content */}
          <div
            className="font-dm-sans absolute 
     left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 
     w-full  sm:w-[290px] md:w-[360px] lg:w-[330px] sm:h-auto 
     sm:right-0 top-[-120px] sm:-top-[30px] 
     font-extralight text-left 
     text-[16px] sm:text-[15px] md:text-[20px] lg:text-[17px] 
     leading-[28px] sm:leading-[25px] md:leading-[33px] lg:leading-[35px] 
     text-[rgba(27,43,42,0.8)]"
          >
            <p>
              With our innovative <span className="font-bold">ECO-FOCUSED</span> solutions, your company accelerates carbon reduction and cleaner operations.
              <span className="font-bold">INTEGRATED SEAMLESSLY</span> into your business ecosystem, our tailored strategies simplify implementation, reduce complexity, and deliver lasting impact—driving <span className="font-bold">LASTING VALUE</span> for both your firm and the environment.
            </p>
          </div>
        </div>
      </section>

      {/* pink chicken nugget */}
      <div className="w-[200px] sm:w-[520px] md:w-[700px] lg:w-[520px] left-[220px] sm:left-[1120px] md:right-[0px] lg:left-[1100px] h-auto relative -top-[90px] md:top-[50px] lg:-top-[-60px]">
        <img className="absolute w-full h-auto z-[13]" src="/assets/landing-page/pink-element.svg" alt="" />
      </div>

      {/* Marquee Sections */}

      <div
        className="relative mt-[-20px] sm:mt-[200px] md:mt-[270px] lg:mt-[200px] sm:py-5 overflow-hidden"
        style={{ zIndex: 10 }}
      >
        <div className="flex animate-marquee whitespace-nowrap">
          <div
            className="w-full h-[23px] sm:w-[400px] md:w-[500px] lg:w-[696px] sm:h-[50px] md:h-[100px] lg:h-[78px] 
             font-extralight font-dm-sans 
             text-[18px] sm:text-[30px] md:text-[70px] lg:text-[60px] 
             leading-[23px] sm:leading-[40px] md:leading-[50px] lg:leading-[78px] 
             text-justify text-[#F56EFF]"
          >
            {Array.from({ length: 20 }, (_, i) => (
              <React.Fragment key={i}>
                <span className="text-[18px] sm:text-[18px] md:text-[40px] lg:text-[30px] align-top">•</span>
                <span className="text-[18px] sm:text-[30px] md:text-[70px] lg:text-[60px] "> BYRDS WORKS WITH YOU </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden" style={{ zIndex: 300 }}>
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          <div
            className="w-full h-[22px] sm:w-[150px] md:w-[180px] lg:w-[233px] sm:h-[40px] md:h-[100px] lg:h-[65px] 
             font-dm-sans font-extralight   
             text-[14px] sm:text-[30px] md:text-[70px] lg:text-[60px] 
             leading-[38px] sm:leading-[40px] md:leading-[100px] lg:leading-[65px] 
             text-justify text-[#1B2B2A]"
          >
            {Array.from({ length: 20 }, (_, i) => (
              <React.Fragment key={i}>
                <span className="text-[14px] sm:text-[18px] md:text-[40px] lg:text-[30px] align-top">•</span>
                <span className="text-[14px] sm:text-[30px] md:text-[70px] lg:text-[60px] "> CREATE </span>
                <span className="text-[14px] sm:text-[18px] md:text-[40px] lg:text-[30px] align-top">•</span>
                <span className="text-[14px] sm:text-[30px] md:text-[70px] lg:text-[60px]"> ANALYZE </span>
                <span className="text-[14px] sm:text-[18px] md:text-[40px] lg:text-[30px] align-top">•</span>
                <span className="text-[14px] sm:text-[30px] md:text-[70px] lg:text-[60px] "> BOOTSTRAP </span>
                <span className="text-[14px] sm:text-[18px] md:text-[40px] lg:text-[30px] align-top">•</span>
                <span className="text-[14px] sm:text-[30px] md:text-[70px] lg:text-[60px] "> CONNECT </span>
                <span className="text-[14px] sm:text-[18px] md:text-[40px] lg:text-[30px] align-top">•</span>
                <span className="text-[14px] sm:text-[30px] md:text-[70px] lg:text-[60px] "> BROADCAST </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Circular Sustainability Section */}
      <section className="sm:py-32 my-[90px] flex justify-center relative z-[700] px-[34px] sm:px-[34px] md:px-[135px] lg:px-[270px]">
        <div className="relative w-[85px] h-[85px] sm:w-[175px] sm:h-[175px] z-[800]">
          {/* Static center logo */}
          <img
            src="/assets/landing-page/sustainability-center.svg"
            alt="Sustainability Center"
            className="absolute w-[25px] sm:w-[50px] h-[40px] sm:h-[70px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          />
          {/* Rotating text */}
          <img
            src="/assets/landing-page/sustainability-text.svg"
            alt="Sustainability Text"
            className="absolute inset-0 w-full h-full z-20"
            style={{
              animation: "spin 30s linear infinite",
            }}
          />
        </div>
      </section>

      {/* LEVERS Section */}
      <section
        className="relative mt-[50px] px-[34px] sm:px-[34px] md:px-[180px] lg:px-[270px]
          left-1/2 -translate-x-1/2
             sm:w-auto sm:h-auto sm:left-0 sm:translate-x-0"
      >
        {/* Heading */}
        <h2 className="font-semibold font-dm-sans text-[22px] sm:text-[24px] md:text-[40px] lg:text-[32px] text-justify text-[#1727261F]">
          LEVERS
        </h2>

        {/* Main text */}
        <div className="font-thin text-[22px] sm:text-[28px] md:text-[72px] lg:text-[55px] font-dm-sans leading-[38px] sm:leading-[45px] md:leading-[120px] lg:leading-[95px] uppercase text-[#172726] my-[7px] tracking-[0.5px]">
          build trust, attract talent, fuel growth, drive smart capital,
          strengthen brands, and power{" "}
          <span className="font-dm-sans font-light">
            future-ready operations.
          </span>{" "}
        </div>

        {/* Grid container */}
        <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-[80px] md:gap-[120px] md:gap-y-[70px] lg:gap-[150px] mb-16 mt-[30px]">
          <div className="flex-1 text-left">
            <h3 className="font-extralight font-dm-sans text-[16px] sm:text-[23px] md:text-[35px] lg:text-[23px] leading-[24px] sm:leading-[52px] md:leading-[60px] lg:leading-[52px] text-[#0CCF3D]">
              Fortify Base
            </h3>
            <p className="font-extralight font-dm-sans text-[16px] sm:text-[14px] md:text-[18px] lg:text-[14px] w-full sm:w-[320px] md:w-[400px] lg:w-[320px] leading-[24px] sm:leading-[20px] md:leading-[28px] lg:leading-[20px] text-[#172726] mb-2">
              Enhance enterprise value with compliance, resilient suppliers, and
              stability.
            </p>
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-extralight font-dm-sans text-[16px] sm:text-[23px] md:text-[35px] lg:text-[23px] leading-[24px] sm:leading-[52px] md:leading-[60px] lg:leading-[52px] text-[#0CCF3D]">
              Enable Growth
            </h3>
            <p className="font-extralight font-dm-sans text-[16px] sm:text-[14px] md:text-[18px] lg:text-[14px] w-full sm:w-[320px] md:w-[400px] lg:w-[320px] leading-[24px] sm:leading-[20px] md:leading-[28px] lg:leading-[20px] text-[#172726] mb-2">
              Unlock efficiency, accelerate cycles, and optimise capital through
              global vendor networks.
            </p>
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-extralight font-dm-sans text-[16px] sm:text-[23px] md:text-[35px] lg:text-[23px] leading-[24px] sm:leading-[52px] md:leading-[60px] lg:leading-[52px] text-[#0CCF3D]">
              Amplify Value
            </h3>
            <p className="font-extralight font-dm-sans text-[16px] sm:text-[14px] md:text-[18px] lg:text-[14px] w-full sm:w-[320px] md:w-[400px] lg:w-[320px] leading-[24px] sm:leading-[20px] md:leading-[28px] lg:leading-[20px] text-[#172726] mb-2">
              Scale impact with strategic partnerships, market expansion, and
              brand-driven growth.
            </p>
          </div>

          {/* Vertical bars (hidden on mobile) */}
          <div className="hidden sm:block absolute md:left-[450px] lg:left-[400px] top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <img src="/assets/landing-page/vertical-bar.svg" alt="" />
          </div>
          <div className="hidden sm:block absolute md:left-[990px] lg:left-[880px] top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <img src="/assets/landing-page/vertical-bar.svg" alt="" />
          </div>
        </div>
      </section>

      {/* Complex text layout with image */}
      <div className="relative  my-[90px] sm:mt-[150px] left-[75px] sm:left-[600px]">
        <img
          className="w-[319.89px] h-[129px] sm:w-[700px] sm:h-auto object-contain"
          src="/assets/sustainable-synergy/green-element-dividing-text.svg"
          alt="Green Element Dividing Text"
        />
      </div>

      {/* signal Section */}
      <section
        className="relative sm:mt-[150px] px-[34px] sm:px-[34px] md:px-[180px] lg:px-[270px]
                   left-1/2 -translate-x-1/2
                   sm:w-auto sm:h-auto sm:left-0 sm:translate-x-0"
      >
        <h2 className="font-semibold font-dm-sans text-[23px] sm:text-[32px] md:text-[40px] lg:text-[32px] text-justify text-[#1727261F]">
          SIGNAL
        </h2>
        <div className="font-thin text-[22px] sm:text-[55px] md:text-[72px] lg:text-[55px] font-dm-sans leading-[38px] sm:leading-[95px] md:leading-[120px] lg:leading-[95px] uppercase text-[#172726] my-[5px] tracking-[0.5px]">
          <span className="font-dm-sans font-light">
            translate strategic intent
          </span>
          {`  into aligned action across the organization, to strengthen stakeholder trust.`}
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-[150px] md:gap-[130px]  lg:gap-[150px] mb-16 mt-[30px]">
          <div className="flex-1 text-left">
            <h3 className="font-light font-dm-sans text-[16px] sm:text-[24px] md:text-[35px] lg:text-[24px] leading-[24px] sm:leading-[52px] md:leading-[60px] lg:leading-[52px] text-[#0FBCE7]">
              Unveil Clarity
            </h3>
            <p className="font-extralight font-dm-sans text-[16px] sm:text-[14px] md:text-[18px] lg:text-[14px] w-full sm:w-[320px] md:w-[400px] lg:w-[320px] leading-[24px] sm:leading-[20px] md:leading-[28px] lg:leading-[20px] text-[#172726] mb-2">
              Project integrity through clear, timely, and accurate disclosure
              across operations and performance.
            </p>
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-light font-dm-sans text-[16px] sm:text-[24px] md:text-[35px] lg:text-[24px] leading-[24px] sm:leading-[52px] md:leading-[60px] lg:leading-[52px] text-[#0FBCE7]">
              Pursue Smartly
            </h3>
            <p className="font-extralight font-dm-sans text-[16px] sm:text-[14px] md:text-[18px] lg:text-[14px] w-full sm:w-[320px] md:w-[400px] lg:w-[320px] leading-[24px] sm:leading-[20px] md:leading-[28px] lg:leading-[20px] text-[#172726] mb-2">
              Proactively communicate with stakeholders to build trust and
              lasting relationships.
            </p>
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-light font-dm-sans text-[16px] sm:text-[24px] md:text-[35px] lg:text-[24px] leading-[24px] sm:leading-[52px] md:leading-[60px] lg:leading-[52px] text-[#0FBCE7]">
              Drive Intent
            </h3>
            <p className="font-extralight font-dm-sans text-[16px] sm:text-[14px] md:text-[18px] lg:text-[14px] w-full sm:w-[320px] md:w-[400px] lg:w-[320px] leading-[24px] sm:leading-[20px] md:leading-[28px] lg:leading-[20px] text-[#172726] mb-2">
              Enable robust decisions and accountability that strengthen trust
              and elevate enterprise value.
            </p>
          </div>
          {/* Vertical bars (hidden on mobile) */}
          <div className="hidden sm:block absolute md:left-[470px] lg:left-[400px] top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <img src="/assets/landing-page/vertical-bar.svg" alt="" />
          </div>
          <div className="hidden sm:block absolute md:left-[990px] lg:left-[880px] top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <img src="/assets/landing-page/vertical-bar.svg" alt="" />
          </div>
        </div>
      </section>

      {/* Assimilate Image Section */}
      <div className="w-full h-auto mx-auto sm:w-full sm:h-auto px-[34px] sm:px-[0px] sm:mt-[150px]">
        <img
          className="w-4/5 h-auto my-[90px] object-contain border-[10px] border-[#eef6f0] block sm:hidden mx-auto"
          src="/assets/landing-page/assimilate-mobile.svg"
          alt="Assimilate Mobile"
        />
        <img
          className="w-full h-full object-cover border-[10px] border-[#eef6f0] hidden sm:block"
          src="/assets/sustainable-synergy/ASSIMILATE.SVG"
          alt="Assimilate"
        />
      </div>

      {/* IMPACT SECTION */}
      <section
        className="relative sm:mt-[150px] px-[34px] sm:px-[34px] md:px-[180px] lg:px-[270px]
                   left-1/2 -translate-x-1/2
                   sm:w-auto sm:h-auto sm:left-0 sm:translate-x-0"
      >
        <h2 className="font-semibold font-dm-sans text-[20px] sm:text-[32px] md:text-[40px] lg:text-[32px] text-justify text-[#1727261F]">
          IMPACT
        </h2>
        <div className="font-thin text-[22px] sm:text-[55px] md:text-[72px] lg:text-[55px] font-dm-sans leading-[38px] sm:leading-[95px] md:leading-[120px] lg:leading-[95px] uppercase text-[#172726] my-[5px] tracking-[0.5px]">
          <span className="font-dm-sans font-light">INITIATE</span>
          {`  initiatives, deliver financial returns, `}
          <span className="font-dm-sans font-light">ROBUST</span>
          {`  operational performance, and market `}
          <span className="font-dm-sans font-light">EXPANSION</span>
          {`   with resilience.`}
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-[150px] md:gap-[110px] lg:gap-[150px] mb-16 mt-[30px]">
          <div className="flex-1 text-left">
            <h3 className="font-light font-dm-sans text-[16px] sm:text-[22px] md:text-[35px] lg:text-[22px] leading-[24px] sm:leading-[52px] md:leading-[60px] lg:leading-[52px] text-[#11D1CA]">
              Emphasize
            </h3>
            <p className="font-extralight font-dm-sans text-[16px] sm:text-[14px] md:text-[18px] lg:text-[14px] w-full sm:w-[320px] md:w-[400px] lg:w-[320px] leading-[24px] sm:leading-[20px] md:leading-[28px] lg:leading-[20px] text-[#172726] mb-2">
              Deliver measurable financial outcomes and strengthen long-term
              shareholder confidence
            </p>
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-light font-dm-sans text-[16px] sm:text-[22px] md:text-[35px] lg:text-[22px] leading-[24px] sm:leading-[52px] md:leading-[60px] lg:leading-[52px] text-[#11D1CA]">
              Enhance
            </h3>
            <p className="font-extralight font-dm-sans text-[16px] sm:text-[14px] md:text-[18px] lg:text-[14px] w-full sm:w-[320px] md:w-[400px] lg:w-[320px] leading-[24px] sm:leading-[20px] md:leading-[28px] lg:leading-[20px] text-[#172726] mb-2">
              Reduce operational risk, build adaptive capacity, and ensure
              sustainable business continuity.
            </p>
          </div>

          <div className="flex-1 text-left">
            <h3 className="font-light font-dm-sans text-[16px] sm:text-[22px] md:text-[35px] lg:text-[22px] leading-[24px] sm:leading-[52px] md:leading-[60px] lg:leading-[52px] text-[#11D1CA]">
              Enable
            </h3>
            <p className="font-extralight font-dm-sans text-[16px] sm:text-[14px] md:text-[18px] lg:text-[14px] w-full sm:w-[320px] md:w-[400px] lg:w-[320px] leading-[24px] sm:leading-[20px] md:leading-[28px] lg:leading-[20px] text-[#172726] mb-2">
              Increase revenue, capture new markets, and build a resilient,
              future-ready competitiveness globally.
            </p>
          </div>
          {/* Vertical bars (hidden on mobile) */}
          <div className="hidden sm:block absolute md:left-[440px] lg:left-[370px] top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <img src="/assets/landing-page/vertical-bar.svg" alt="" />
          </div>
          <div className="hidden sm:block absolute md:left-[990px] lg:left-[880px] top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <img src="/assets/landing-page/vertical-bar.svg" alt="" />
          </div>
        </div>
      </section>

      {/* Main Gradient Background Image - Desktop Only */}
      <section className="relative h-[890px] hidden sm:block">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-no-repeat bg-bottom"
          style={{
            backgroundImage: "url('/assets/landing-page/main-gradient-bg.png')",
          }}
        />
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(238, 246, 240, 0) 0%, #EEF6F0 100%)",
          }}
        />
      </section>

      {/* SUSTAINABILITY ASSISTANT Section - Mobile Optimized */}
      <section className="relative mt-[50px] sm:-mt-[330px] px-[34px] sm:px-[34px] md:px-[180px] lg:px-[270px]">
        {/* Bottom background image - Desktop Only */}

        <div className="relative w-full max-w-full sm:max-w-[1660px] sm:w-full">
          {/* Video Container - Mobile: 219px height, Desktop: fixed height */}
          <div className="z-10 w-screen h-[219px] sm:h-[746px] sm:w-full sm:aspect-auto relative overflow-hidden -mx-[34px] sm:mx-0">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="/assets/landing-page/clouds-bg.mp4"
                type="video/mp4"
              />
            </video>
            {/* B(AI)RDS Logo - Visible on both mobile and desktop */}
            <div className="absolute top-[10px] left-[10px] sm:top-[20px] sm:left-[20px] z-10">
              <img src="/assets/landing-page/B(AI)RDS.svg" alt="" className="w-[60px] md:w-[180px] lg:w-auto sm:w-auto" />
            </div>
            <div className="absolute font-rethink-sans w-[235px] md:w-[340px] lg:w-[240px] bottom-[20px] right-[20px] z-10 font-normal text-[10px] md:text-[15px] lg:text-[10px] leading-[14px] text-[#DEF0E3] text-right hidden sm:block">
              Connect smarter with the Byrds product line - streamline tasks,
              simplifies decisions, and gain instant insights. Enhance clarity,
              reduce effort, and empower smarter decisions through intelligent
              automation and continuous learning.
            </div>
            <div className="hidden sm:block absolute z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center mix-blend-multiply">
              <div className="font-dm-sans font-bold leading-none text-6xl-custom md:text-[90px] lg:text-[60px] relative text-[#A8E0E2]">
                SUSTAINABILITY
              </div>
              <div className="font-dm-sans font-bold leading-none text-6xl-custom md:text-[90px] lg:text-[60px] relative text-[#A8E0E2]">
                ASSISTANT
              </div>
            </div>
          </div>
          {/* Marquee Section - Visible on both mobile and desktop */}
          <div className="mt-4 md:mt-7 lg:mt-4 relative overflow-hidden w-full sm:w-full mx-auto sm:mx-0">
            {/* Fade gradients */}
            <div
              className="absolute left-0 top-0 bottom-0 w-1/2 z-[600] pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, #EEF6F0 0%, rgba(238, 246, 240, 0) 100%)",
              }}
            ></div>
            <div
              className="absolute right-0 top-0 bottom-0 w-1/2 z-[600] pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, rgba(238, 246, 240, 0) 0%, #EEF6F0 100%)",
              }}
            ></div>

            <div className="flex animate-marquee-slow whitespace-nowrap">
              <div className="flex items-center gap-6 md:gap-8 lg:gap-6 text-[#172726] font-extralight">
                {Array.from({ length: 20 }, (_, i) => (
                  <React.Fragment key={i}>
                    <span className="sm:w-[5px] w-[3px] sm:h-[5px] md:w-[7px] md:h-[7px] lg:w-[5px] lg:h-[5px] h-[3px] bg-[#172726] rounded-full"></span>
                    <span className="sm:text-[15px] md:text-[20px] lg:text-[15px] text-[10px]">QUICK</span>
                    <span className="sm:w-[5px] w-[3px] sm:h-[5px] md:w-[7px] md:h-[7px] lg:w-[5px] lg:h-[5px] h-[3px] bg-[#172726] rounded-fulll"></span>
                    <span className="sm:text-[15px] md:text-[20px] lg:text-[15px] text-[10px]">SMART</span>
                    <span className="sm:w-[5px] w-[3px] sm:h-[5px] md:w-[7px] md:h-[7px] lg:w-[5px] lg:h-[5px] h-[3px] bg-[#172726] rounded-full"></span>
                    <span className="sm:text-[15px] md:text-[20px] lg:text-[15px] text-[10px]">CLEAR</span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: SUSTAINABILITY ASSISTANT Heading with smarter-sustainability images */}
          <div className="block sm:hidden mt-7 w-full mx-auto relative">
            <div className="flex items-center justify-between">
              <h2 className="font-dm-sans font-bold text-[26px] text-[#70DE17] text-left">
                SUSTAINABILITY ASSISTANT
              </h2>

              {/* Smarter Sustainability Images - Mobile */}
              <div className="relative">
                {/* Background rotating image */}
                <div
                  className="animate-spin"
                  style={{
                    animation: "spin 10s linear infinite",
                  }}
                >
                  <img
                    className="w-[150px]"
                    src="/assets/landing-page/smarter-sustainability-text.svg"
                    alt=""
                  />
                </div>
                {/* Centered foreground image */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[77px]">
                  <img
                    className=" w-full h-auto"
                    src="/assets/landing-page/smarter-sustainability.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Mobile: Single Column Grid */}
          <div className="block sm:hidden my-[30px] w-full mx-auto">
            {/* Query Section */}
            <div className="w-full text-left mb-[30px]">
              <h3 className="font-dm-sans font-bold text-[24px] leading-[52px] text-justify text-[#172726] mb-4">
                Query
              </h3>
              <p className="font-dm-sans font-thin text-[14px] leading-[24px] text-[#172726] mb-6">
                (a) Instantly interpret, analyze and understand the most
                impactful data for your firm.
              </p>
              <p className="font-dm-sans font-thin text-[14px] leading-[24px] text-[#172726]">
                (b) Make interactions and eco-decisions more intuitive, purpose
                driven and automated.
              </p>
            </div>

            {/* Grey Bar 1 */}
            <div className="flex justify-center mt-[20px]">
              <div className="w-[100px] h-0.5 bg-[rgba(23,39,38,0.2)]"></div>
            </div>

            {/* Optimize Section */}
            <div className="w-full text-left my-[30px]">
              <h3 className="font-dm-sans font-bold text-[24px] leading-[52px] text-justify text-[#172726] mb-4">
                Optimize
              </h3>
              <p className="font-dm-sans font-thin text-[14px] leading-[24px] text-[#172726] mb-6">
                (a) On demand and automated suggestions tailored to the firm's
                ongoing activities.
              </p>
              <p className="font-dm-sans font-thin text-[14px] leading-[24px] text-[#172726]">
                (b) Streamline various processes to align seamlessly with your
                firm's sustainability goals
              </p>
            </div>

            {/* Grey Bar 2 */}
            <div className="flex justify-center mt-[20px]">
              <div className="w-[100px] h-0.5 bg-[rgba(23,39,38,0.2)]"></div>
            </div>

            {/* Summary Section */}
            <div className="w-full text-left my-[20px]">
              <h3 className="font-dm-sans font-bold text-[24px] leading-[52px] text-justify text-[#172726] mb-4">
                Summary
              </h3>
              <p className="font-dm-sans font-thin text-[14px] leading-[24px] text-[#172726] mb-6">
                (a) Simplifies complex sustainability reports into clear,
                actionable insights.
              </p>
              <p className="font-dm-sans font-thin text-[14px] leading-[24px] text-[#172726]">
                (b) Highlights key impacts to support smarter, sustainable
                decisions
              </p>
            </div>
          </div>

          {/* Desktop: Original Grid Layout */}
          <div className="hidden sm:grid grid-cols-[310px_310px_310px] grid-rows-3 gap-2 gap-y-[70px] md:grid-cols-[280px_280px_280px] md:gap-x-1 md:gap-y-[90px] lg:grid-cols-[310px_310px_310px] lg:gap-2 lg:gap-y-2 mt-[130px] lg:mb-[150px] pt-[30px]">
            {/* Empty cells for row 1, columns 1-2 */}
            <div className="w-[310px] md:w-[200px] lg:w-[310px]"></div>
            <div className="w-[310px] md:w-[200px] lg:w-[310px]"></div>
            <div className="w-[310px] md:w-[350px] lg:w-[310px]">
              <h3 className="font-dm-sans font-normal text-[37px] leading-[52px] text-justify text-[#172726] mb-4">
                Query
              </h3>
              <div className="w-full h-0.5 bg-[rgba(23,39,38,0.2)] mb-6"></div>
              <p className="font-dm-sans font-thin text-[16px] leading-[23px] text-[#172726] mb-6">
                (a) Instantly interpret, analyze and understand the most
                impactful data for your firm.
              </p>
              <p className="font-dm-sans font-thin text-[16px] leading-[23px] text-[#172726]">
                (b) Make interactions and eco-decisions more intuitive, purpose
                driven and automated.
              </p>
            </div>

            {/* Row 2 */}
            <div></div>
            <div className="w-[310px] md:w-[350px] lg:w-[310px]">
              <h3 className="font-dm-sans font-normal text-[37px] leading-[52px] text-justify text-[#172726] mb-4">
                Optimize
              </h3>
              <div className="w-full h-0.5 bg-[rgba(23,39,38,0.2)] mb-6"></div>
              <p className="font-dm-sans font-thin text-[16px] leading-[23px] text-[#172726] mb-6">
                (a) On demand and automated suggestions tailored to the firm's
                ongoing activities.
              </p>
              <p className="font-dm-sans font-thin text-[16px] leading-[23px] text-[#172726]">
                (b) Streamline various processes to align seamlessly with your
                firm's sustainability goals
              </p>
            </div>
            <div></div>

            {/* Row 3 */}
            <div className="w-[310px] md:w-[350px] lg:w-[310px]">
              <h3 className="font-dm-sans font-normal text-[40px] leading-[52px] text-justify text-[#172726] mb-4">
                Summary
              </h3>
              <div className="w-full h-0.5 bg-[rgba(23,39,38,0.2)] mb-6"></div>
              <p className="font-dm-sans font-thin text-[16px] leading-[23px] text-[#172726] mb-6">
                (a) Simplifies complex sustainability reports into clear,
                actionable insights.
              </p>
              <p className="font-dm-sans font-thin text-[16px] leading-[23px] text-[#172726]">
                (b) Highlights key impacts to support smarter, sustainable
                decisions
              </p>
            </div>
          </div>
          {/* Desktop: Smarter Sustainability Images */}
          <div className="hidden sm:block">
            <div className="absolute bottom-[719px] lg:bottom-[468px] -right-2">
              <img
                className="w-[120px]"
                src="/assets/landing-page/smarter-sustainability.svg"
                alt=""
              />
            </div>
            <div
              className="absolute bottom-[700px] lg:bottom-[449px] -right-[25px]"
              style={{
                animation: "spin 10s linear infinite",
              }}
            >
              <img
                className="w-[155px]"
                src="/assets/landing-page/smarter-sustainability-text.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Bottom Section Background - Desktop Only */}
        <div className="absolute left-11 md:left-[-40px] lg:left-11 top-[510px] md:top-[650px] lg:top-[510px] hidden sm:block">
          <img
            className="w-[764px] md:w-[720px] lg:w-[764px] rotate-[70deg] md:rotate-[40deg] lg:rotate-[70deg] scale-x-[-1]"
            src="/assets/landing-page/bottom-section-bg.png"
            alt=""
          />
        </div>
      </section>

      {/* Main Gradient Background Image - Mobile Only */}
      <section className="relative h-[175px] w-[full] left-1/2 transform -translate-x-1/2 block sm:hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-no-repeat bg-bottom border-[1px] border-[#EEF6F0]"
          style={{
            backgroundImage: "url('/assets/landing-page/main-gradient-bg.png')",
          }}
        />
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: "linear-gradient(180deg, rgba(238, 246, 240, 0) 0%, #EEF6F0 100%)"
          }}
        />
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

export default LandingPage2;
