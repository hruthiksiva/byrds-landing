import React from 'react';

const LandingFooter = ({ backgroundImage = '/assets/landing-page/FOOTER-BG.svg' }) => {
  return (
    <footer className="relative w-full h-[350px]" style={{
      backgroundImage: `url('${backgroundImage}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'bottom',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="relative h-full w-full z-10 flex flex-col justify-end">

        {/* Bottom Left - A Product by THREADALITY TECHNOLOGIES - Hidden on mobile */}
        <div
          className="absolute bottom-0 hidden lg:block cursor-pointer hover:opacity-80 transition-opacity duration-200"
          onClick={() => window.open('https://www.threadality.com', '_blank')}
        >
          <img
            src="/assets/landing-page/threadalityTechnologies.svg"
            alt="A Product by THREADALITY TECHNOLOGIES"
            className="h-auto"
          />
        </div>

        {/* Bottom Center - fly@byrds.one - Hidden on mobile */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 hidden lg:block cursor-pointer hover:opacity-80 transition-opacity duration-200"
          onClick={() => window.open('https://www.morphline.studio', '_blank')}>
          <img
            src="/assets/landing-page/fly@byrds.one.svg"
            alt="fly@byrds.one"
            className="h-auto"
          />
        </div>

        {/* Bottom Right - ©2025 and BYRDS - Hidden on mobile */}
        <div className="absolute bottom-0 right-0 text-right hidden lg:block">
          <img
            src="/assets/landing-page/2025byrds.svg"
            alt="©2025 BYRDS"
            className="h-auto"
          />
        </div>


      </div>
    </footer>
  );
};

export default LandingFooter;