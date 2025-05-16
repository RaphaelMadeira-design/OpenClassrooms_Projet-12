
import { motion } from "framer-motion"
import "./_wrapper.scss"

const Wrapper = ({ children }) => {
    const pageVariants = {
        initial: { y: "100vh", opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: "100vh", opacity: 0 },
    }

    const pageTransition = {
        type: "tween",
        ease: "easeInOut",
        duration: 0.4,
    }

    return (
        <motion.div className="wrapper" initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
            {children}
        </motion.div>
    )
}

export default Wrapper