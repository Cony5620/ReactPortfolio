import { useState } from "react";  // Import useState hook from React
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profilepic.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  // State to control if the image is enlarged
  const [isImageOpen, setIsImageOpen] = useState(false);

  // Toggle the image size when clicked
  const toggleImageSize = () => {
    setIsImageOpen((prev) => !prev);
  };

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            {/* Animated heading */}
            <motion.h1
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Khaing Zin Htet
            </motion.h1>

            {/* Animated subtitle */}
            <motion.span
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
            >
              Full Stack Developer
            </motion.span>

            {/* Animated paragraph */}
            <motion.p
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            {/* Wrap the image with motion for animations */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* Image click handler to toggle size */}
              <motion.img
                src={profilePic}
                alt="Profile"
                className={`cursor-pointer transition-all duration-300 ${isImageOpen ? 'scale-150' : ''}`}  // Scale image on click
                onClick={toggleImageSize}  // Toggle the state when clicked
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Modal-like image pop-up */}
      {isImageOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={toggleImageSize}  // Close the image when clicked outside
        >
          <motion.img
            src={profilePic}
            alt="Profile"
            className="max-w-full max-h-full p-4 rounded-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default Hero;
