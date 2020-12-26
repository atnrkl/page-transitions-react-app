import React from "react";
import Hero from "../components/Hero";
import pc2 from "../images/pc2.jpg";
import { motion } from "framer-motion";
import { fadeAnim, transition } from "../animations/animations";

const contact = () => {
  return (
    <div>
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={fadeAnim}
        transition={transition}
      >
        <Hero
          title="Contact Us"
          desc="+90 553 322 9465 Ahmet Tanrıkulu"
          pic={pc2}
        />
      </motion.div>
    </div>
  );
};

export default contact;
