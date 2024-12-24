import { useState } from "react";  // Import useState hook from React
import { motion } from "framer-motion";  // Import motion for animations
import AboutImg from "../assets/AboutImg.jpg";  // Import the image
import { ABOUT_TEXT } from "../constants";  // Import the text

const About = () => {
  // State to control if the image is enlarged
  const [isImageOpen, setIsImageOpen] = useState(false);

  // Toggle the image size when clicked
  const toggleImageSize = () => {
    setIsImageOpen((prev) => !prev);
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>

      {/* Flex container for image and text */}
      <div className="flex flex-wrap">
        {/* Image section */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-items-center">
            {/* Animated image */}
            <motion.img
              src={AboutImg}
              alt="About"
              className="rounded-2xl cursor-pointer"
              onClick={toggleImageSize}  // Toggle image size on click
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>

        {/* Text section */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            {/* Animated paragraph */}
            <motion.p
              className="my-2 max-w-xl py-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
            >
              {ABOUT_TEXT}
            </motion.p>
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
            src={AboutImg}
            alt="About"
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

export default About;
