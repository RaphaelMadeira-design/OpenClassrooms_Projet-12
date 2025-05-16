import { NavLink, useLocation } from "react-router-dom"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import "./_navbar.scss"

function DesktopNavbar() {
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
                const { offsetLeft, offsetWidth } = activeLink
                const color = linkColors[location.pathname]

                gsap.to(pillRef.current, {
                    left: offsetLeft,
                    width: offsetWidth,
                    backgroundColor: color,
                    duration: 0.75,
                    ease: "power3.out",
                })
            }
        }

        updateActivePill()

        links.forEach(link => {
            link.addEventListener("mouseenter", () => {
                const { offsetLeft, offsetWidth } = link
                const linkPath = link.getAttribute("href")
                const color = linkColors[linkPath]

                gsap.to(pillRef.current, {
                    left: offsetLeft,
                    width: offsetWidth,
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

    return (
        <div className="navbar">
            <div className="navbar-menu">
                <div className="navbar-menu--pill" ref={pillRef}></div>
                <NavLink className="navbar-menu--item" to="/">
                    Accueil
                </NavLink>
                <NavLink className="navbar-menu--item" to="/about">
                    À propos
                </NavLink>
                <NavLink className="navbar-menu--item" to="/skills">
                    Skills
                </NavLink>
                <NavLink className="navbar-menu--item" to="/portfolio">
                    Portfolio
                </NavLink>
                <NavLink className="navbar-menu--item" to="/contact">
                    Contact
                </NavLink>
            </div>
            <div className="navbar-logo"><i className="icofont-love"></i> Raphaël Madeira</div>
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

export default DesktopNavbar