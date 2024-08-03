"use client";
import { motion } from "framer-motion";

const Main = ({ children }: { children: React.ReactNode }) => (
  <motion.main
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.5,
    }}
    className="max-w-[1318px] m-auto"
  >
    {children}
  </motion.main>
);

export default Main;
