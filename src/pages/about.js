import React from "react";
import Hero from "../components/Hero";
import pic1 from "../images/pc1.jpg";
import { motion } from "framer-motion";
import { fadeAnim, transition } from "../animations/animations";

const about = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={fadeAnim}
      transition={transition}
    >
      <div>
        <Hero title="About Us" desc="WUHUUUUUUU" pic={pic1} />
      </div>
    </motion.div>
  );
};

export default about;
