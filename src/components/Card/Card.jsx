import { useEffect, useRef } from "react"
import "./_card.scss"

const hexToRgb = (hex) => {
  const bigint = parseInt(hex.slice(1), 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return `${r}, ${g}, ${b}`
}

function Card({ title, image, github, link, description, color = "#242424", tags = [] }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const rgbColor = hexToRgb(color)
    container.style.setProperty("--container", color)
    container.style.setProperty("--container-rgb", rgbColor)

    const moveBg = (e) => {
      const rect = container.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      container.style.setProperty("--x", x)
      container.style.setProperty("--y", y)
    }

    container.addEventListener("pointermove", moveBg)
    return () => container.removeEventListener("pointermove", moveBg)
  }, [color])

  return (
    <div ref={containerRef} className="gooey-container">
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

      <div className="card">
        <div className="card-content">
          <div className="card-content--top">
            <div className="card-content--top__text">
              <h1 className="card-content--top__text-title">{title}</h1>
              <p className="card-content--top__text-description">{description}</p>
            </div>
            <div
              className="card-content--top__thumbnail"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </div>

          <div className="card-content--bottom">
            <div className="card-content--bottom__links">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="card-content--bottom__links-button"
              >
                <i className="fa-brands fa-github"></i>GitHub
              </a>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-content--bottom__links-button"
              >
                <i className="fa-solid fa-globe"></i>Website
              </a>
            </div>

            <div className="card-content--bottom__tags">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="card-content--bottom__tags-tag"
                  style={{ backgroundColor: tag.color }}
                >
                  {tag.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card