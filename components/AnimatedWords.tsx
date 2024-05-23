import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Typography from "@/ui/typography/Typography";

const AnimatedWords = ({ words }: {
  words: string[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
      setKey((prevKey) => prevKey + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="w-full text-center overflow-hidden md:min-h-[180px]">
      <motion.div
        key={key}
        style={{ opacity: 1 }}
        animate={{
          y: [100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100],
          opacity: 1,
        }}
        transition={{ duration: 4 }}
      >
        <Typography text={words[currentIndex]} type="superH1" color={'text-red'}/>
      </motion.div>
    </div>
  );
};

export default AnimatedWords;
