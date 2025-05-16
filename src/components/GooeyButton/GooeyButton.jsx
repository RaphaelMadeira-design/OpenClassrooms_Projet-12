import { useEffect, useRef } from "react"
import "./_gooeybutton.scss"

const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255
    return `${r}, ${g}, ${b}`
}

const GooeyButton = ({ text = "", color = "", href }) => {
    const buttonRef = useRef(null)

    useEffect(() => {
        const button = buttonRef.current
        if (!button) return

        const rgbColor = hexToRgb(color)
        button.style.setProperty("--button", color)
        button.style.setProperty("--button-rgb", rgbColor)

        const moveBg = (e) => {
            const rect = button.getBoundingClientRect()
            button.style.setProperty("--x", ((e.clientX - rect.left) / rect.width) * 100)
            button.style.setProperty("--y", ((e.clientY - rect.top) / rect.height) * 100)
        }

        button.addEventListener("pointermove", moveBg)

        return () => {
            button.removeEventListener("pointermove", moveBg)
        }
    }, [])

    const buttonContent = (
        <button ref={buttonRef} type="button" className="gooey">
            {text}
        </button>
    )

    return href ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
            {buttonContent}
        </a>
    ) : (
        buttonContent
    )
}

export default GooeyButton