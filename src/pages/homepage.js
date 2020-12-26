import React from "react";
import Hero from "../components/Hero";
import pc3 from "../images/pc3.jpg";
import { motion } from "framer-motion";
import { fadeAnim, transition } from "../animations/animations";

const homepage = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={fadeAnim}
      transition={transition}
    >
      <div>
        <Hero
          title="Homepage"
          pic={pc3}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis accusamus dolorem ea?"
        />
      </div>
    </motion.div>
  );
};

export default homepage;
