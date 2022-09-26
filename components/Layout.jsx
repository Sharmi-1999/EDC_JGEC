import React from "react";
import { motion } from "framer-motion";
const variants = {
  hidden: { opacity: 0, x: -600, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 600, y: 0 },
};

const Layout = ({ children }) => (
  <div>
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 1, type: "spring", bounce: 0.2 }}
    >
      {children}
    </motion.main>
  </div>
);

export default Layout;
