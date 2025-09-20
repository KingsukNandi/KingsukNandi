"use client";

import { motion, useInView } from "framer-motion";
import * as React from "react";

export const ExpandingLine = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ width: 0 }}
      animate={isInView ? { width: "100%" } : {}}
      transition={{ duration: 0.7, ease: "easeInOut"}}
      className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 h-1"
    >
    </motion.div>
  );
};
