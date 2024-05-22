import React from 'react';
import { motion } from 'framer-motion';

const BuyButton = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="buy-button"
    >
      Buy Meme Coin
    </motion.button>
  );
};

export default BuyButton;
