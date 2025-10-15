import { useEffect, useRef } from "react"
import "./_gooeybutton.scss"

const hexToRgb = (hex) => {
  const bigint = parseInt(hex.slice(1), 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return `${r}, ${g}, ${b}`
}

const GooeyButton = ({ text = "", color = "#00ffff", href }) => {
  const buttonRef = useRef(null)

  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

    const rgbColor = hexToRgb(color)
    button.style.setProperty("--button", color)
    button.style.setProperty("--button-rgb", rgbColor)

    const moveBg = (e) => {
      const rect = button.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      button.style.setProperty("--x", x)
      button.style.setProperty("--y", y)
    }

    button.addEventListener("pointermove", moveBg)
    return () => button.removeEventListener("pointermove", moveBg)
  }, [color])

  const buttonContent = (
    <button ref={buttonRef} type="button" className="gooey">
      {text}
      <svg width="0" height="0">
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 18 -7"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </svg>
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