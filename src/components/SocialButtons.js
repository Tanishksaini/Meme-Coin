import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaTelegramPlane } from 'react-icons/fa';

const SocialButtons = () => {
  return (
    <div className="social-buttons">
      <motion.a
        href="https://twitter.com/yourmemeaccount"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <FaTwitter size={40} />
      </motion.a>
      <motion.a
        href="https://t.me/yourmemeaccount"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <FaTelegramPlane size={40} />
      </motion.a>
    </div>
  );
};

export default SocialButtons;
