import React, { useState, useEffect, useRef } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { gsap } from "gsap"
import "./_navbar.scss"

function MobileNavbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const pillRef = useRef(null)
    const location = useLocation()

    const linkColors = {
        "/": "#b54343", // Rouge
        "/about": "#3882ba", // Bleu
        "/skills": "#55a35a", // Vert
        "/portfolio": "#b39c3b", // Jaune
        "/contact": "#a858b8", // Violet
    }

    useEffect(() => {
        const links = document.querySelectorAll(".navbar-menu--item")

        const updateActivePill = () => {
            const activeLink = document.querySelector(".navbar-menu--item.active")
            if (activeLink) {
                const { offsetTop, offsetHeight } = activeLink
                const color = linkColors[location.pathname]

                gsap.to(pillRef.current, {
                    top: offsetTop,
                    height: offsetHeight,
                    backgroundColor: color,
                    duration: 0.75,
                    ease: "power3.out",
                })
            }
        }

        updateActivePill()

        links.forEach(link => {
            link.addEventListener("mouseenter", () => {
                const { offsetTop, offsetHeight } = link
                const linkPath = link.getAttribute("href")
                const color = linkColors[linkPath]

                gsap.to(pillRef.current, {
                    top: offsetTop,
                    height: offsetHeight,
                    backgroundColor: color,
                    duration: 0.75,
                    ease: "power3.out",
                })
            })
        })

        const navbarMenu = document.querySelector(".navbar-menu")
        navbarMenu.addEventListener("mouseleave", () => {
            updateActivePill()
        })

        return () => {
            links.forEach(link => {
                link.removeEventListener("mouseenter", () => {})
            })
            navbarMenu.removeEventListener("mouseleave", () => {})
        }
    }, [location.pathname])

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [menuOpen])

    return (
        <div className="navbar">
            <div className={`navbar-hamburger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
                <div className="navbar-hamburger--icon"></div>
                <div className="navbar-hamburger--icon"></div>
                <div className="navbar-hamburger--icon"></div>
            </div>
            <div className={`navbar-logo ${menuOpen ? "hidden" : ""}`}>
            <i className="icofont-love"></i> Raphaël Madeira
            </div>
            <div className={`navbar-menu mobile ${menuOpen ? "open" : ""}`}>
                <div className="navbar-menu--pill" ref={pillRef}></div>
                <NavLink className="navbar-menu--item" to="/" onClick={() => setMenuOpen(false)}>
                    Accueil
                </NavLink>
                <NavLink className="navbar-menu--item" to="/about" onClick={() => setMenuOpen(false)}>
                    À propos
                </NavLink>
                <NavLink className="navbar-menu--item" to="/skills" onClick={() => setMenuOpen(false)}>
                    Skills
                </NavLink>
                <NavLink className="navbar-menu--item" to="/portfolio" onClick={() => setMenuOpen(false)}>
                    Portfolio
                </NavLink>
                <NavLink className="navbar-menu--item" to="/contact" onClick={() => setMenuOpen(false)}>
                    Contact
                </NavLink>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                    </filter>
                </defs>
            </svg>
        </div>
    )
}

export default MobileNavbar