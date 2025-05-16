import { motion } from "framer-motion"

const PageAnimation = ({ children }) => {
    const fadeVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    }

    const fadeTransition = {
        duration: 0.8,
        ease: "easeInOut",
    }

    return (
        <motion.div initial="initial" animate="animate" exit="exit" variants={fadeVariants} transition={fadeTransition}>
            {children}
        </motion.div>
    )
}

export default PageAnimation