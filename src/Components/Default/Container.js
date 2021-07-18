import { motion } from 'framer-motion';

const Container = (props) => {
  return(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container"
    >
      {props.children}
    </motion.div>
  )
};

export default Container;
