import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content lg:flex-row"> {/* Added flex-col for mobile */}
    <div className="text-center lg:text-left flex-1"> {/* Center text on mobile */}
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6 max-w-md mx-auto lg:mx-0"> {/* Center paragraph on mobile */}
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae
        et a id nisi.
      </p>
      <div className="flex justify-center lg:justify-start"> {/* Center button on mobile */}
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
    <div className="flex-1 flex justify-center"> {/* Center image always */}
      <img
        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
        className="max-w-sm rounded-lg shadow-2xl"
      />
    </div>
  </div>
</div>
    </div>
  );
};

export default Banner;
