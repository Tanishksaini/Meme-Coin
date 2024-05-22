import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 250 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <p>© 2024 Meme Coin. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;
