
import { motion } from "framer-motion"
import "./_wrapper.scss"

const Wrapper = ({ children }) => {
    const pageVariants = {
        initial: { x: "100vw", opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: "-100vw", opacity: 0 },
    }

    const pageTransition = {
        type: "tween",
        ease: "easeInOut",
        duration: 0.3,
    }

    return (
        <motion.div className="wrapper" initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
            {children}
        </motion.div>
    )
}

export default Wrapper