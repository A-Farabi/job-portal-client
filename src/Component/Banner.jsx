import React from "react";
import { motion } from "motion/react";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content lg:flex-row"> {/* Added flex-col for mobile */}
    <div className="text-center lg:text-left flex-1"> {/* Center text on mobile */}
    
      <motion.h1 className="text-5xl font-bold" animate={{rotate:180}}>Latest Job News!</motion.h1>
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
      <motion.img
      animate={{y:[50, 70, 50]}}
      transition={{duration: 5, repeat: Infinity}}
      
        src="https://i.ibb.co/xSb6VZ6L/1.jpg"
        className="max-w-sm rounded-lg shadow-2xl w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-blue-600 border-b-4"
      />
      <motion.img
      animate={{x:[-30, -80, -30]}}
      transition={{duration: 5, repeat: Infinity}}
      
        src="https://i.ibb.co/chH91Mmx/2.jpg"
        className="max-w-sm rounded-lg shadow-2xl w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-blue-600 border-b-4"
      />
    </div>
  </div>
</div>
    </div>
  );
};

export default Banner;
