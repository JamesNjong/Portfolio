import { motion } from "framer-motion";

function AnimationEffect({ children, delay }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        ease: [0.17, 0.67, 0.83, 0.91],
        delay: delay,
      }}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: 50, opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

export default AnimationEffect;
