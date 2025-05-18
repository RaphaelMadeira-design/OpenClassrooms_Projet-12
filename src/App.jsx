import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Main from "./components/Main/Main"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import Error from "./pages/Error"
import Loading from "./components/Loading/Loading"
import "./styles/style.scss"

function App() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    return (
        <Router>
            {loading && <Loading />}
            <Main>
                <Navbar />
                <AnimatedRoutes />
            </Main>
        </Router>
    )
}

function AnimatedRoutes() {
    const location = useLocation()

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
                <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
                <Route path="/portfolio" element={<PageWrapper><Portfolio /></PageWrapper>} />
                <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
                <Route path="*" element={<PageWrapper><Error /></PageWrapper>} />
            </Routes>
        </AnimatePresence>
    )
}

function PageWrapper({ children }) {
    return children
}

export default App