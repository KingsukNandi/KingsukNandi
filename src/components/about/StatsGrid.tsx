"use client";

import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const stats = [
  { value: 17, suffix: "K+", text: "users impacted" },
  { value: 6, suffix: "+", text: "live projects shipped" },
  { value: 2, suffix: "x", text: "hackathon recognitions" },
  { value: 25, suffix: "+", text: "technologies in the stack" },
];

const StatCard = ({
  value,
  suffix,
  text,
}: {
  value: number;
  suffix: string;
  text: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  // Count-up effect
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 1500; // 1.5s
      const stepTime = 20;
      const steps = duration / stepTime;
      const increment = end / steps;

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(counter);
          setCount(end);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);

      return () => clearInterval(counter);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center justify-center p-4 rounded-xl"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
        {count}
        {suffix}
      </span>
      <motion.span
        className=" text-gray-300 mt-1 "
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {text}
      </motion.span>
    </motion.div>
  );
};

export const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 mt-10">
      {stats.map((stat, i) => (
        <StatCard
          key={i}
          value={stat.value}
          suffix={stat.suffix}
          text={stat.text}
        />
      ))}
    </div>
  );
};
