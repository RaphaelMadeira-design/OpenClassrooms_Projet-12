import { useState, useEffect } from "react"
import { useLocation, Navigate, Routes, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import Main from "../components/Main/Main"
import Navbar from "../components/Navbar/Navbar"
import Home from "../pages/Home"
import About from "../pages/About"
import Skills from "../pages/Skills"
import Portfolio from "../pages/Portfolio"
import Contact from "../pages/Contact"
import Error from "../pages/Error"
import Loading from "../components/Loading/Loading"

function AnimatedApp() {
    const [loading, setLoading] = useState(true)
    const location = useLocation()
    const validPaths = ["/", "/about", "/skills", "/portfolio", "/contact", "/404"]

    useEffect(() => {
        const isKnownRoute = validPaths.includes(location.pathname)
        if (!isKnownRoute || location.pathname === "/404") {
            setLoading(false)
        } else {
            const timer = setTimeout(() => setLoading(false), 3000)
            return () => clearTimeout(timer)
        }
    }, [])

    if (loading) return <Loading />

    return (
        <Main>
            <Navbar />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/404" element={<Error />} />
                    <Route path="*" element={<Navigate to="/404" replace />} />
                </Routes>
            </AnimatePresence>
        </Main>
    )
}

export default AnimatedApp