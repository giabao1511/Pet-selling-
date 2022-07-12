import "./home.css";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <motion.header initial={{ y: -1000 }} animate={{ y: 0 }} transition={{duration: 1, type: 'spring',stiffness: 300, damping: 15}}>
        🐶 Welcome to my petshop 🐶
      </motion.header>
    </>
  );
};

export default Home;
