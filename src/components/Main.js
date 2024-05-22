import React from 'react';
import { motion } from 'framer-motion';
import BuyButton from './BuyButton';
import SocialButtons from './SocialButtons';
import DexChart from './DexChart';

const Main = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <p>Welcome to the Meme Coin on Solana. This is where the fun begins!</p>
      <BuyButton />
      <SocialButtons />
      <DexChart />
    </motion.main>
  );
};

export default Main;
