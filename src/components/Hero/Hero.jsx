import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./_hero.scss"

const greetings = ["Salut!", "Hello!", "Hola!", "Ciao!"]
const colors = ["#b54343", "#3882ba", "#55a35a", "#b39c3b", "#a858b8"]

const Hero = () => {
    const [currentGreeting, setCurrentGreeting] = useState(0)
    const [isFadingOut, setIsFadingOut] = useState(false)
    const [textColor, setTextColor] = useState(colors[0])

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFadingOut(true)
            setTimeout(() => {
                setCurrentGreeting((prev) => (prev + 1) % greetings.length)
                setIsFadingOut(false)
            }, 500)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const colorInterval = setInterval(() => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)]
            setTextColor(randomColor)
        }, 3000)
        return () => clearInterval(colorInterval)
    }, [])

    return (
        <>
            <div className="hero">
                <div className="hero-greeting">
                    <h1 className={isFadingOut ? "fade-out" : "fade-in"}>{greetings[currentGreeting]}</h1>
                    <h2>
                        Je m'appelle Raphaël Madeira,
                        <br />
                        et je suis 
                        <div className="animated-text" style={{ color: textColor }}> 
                            développeur web
                        </div>
                    </h2>
                </div>
            </div>
            <div className="hero-scroll">
                <Link to="/about">
                    <i className="icofont-rounded-down"></i>
                </Link>
            </div>
        </>
    )
}

export default Hero