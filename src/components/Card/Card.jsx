import { useEffect, useRef } from "react"
import "./_card.scss"

const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255
    return `${r}, ${g}, ${b}`
}

function Card({ title, image, link, description, color = "#242424", tags  = [] }) {
    const containerRef = useRef(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const rgbColor = hexToRgb(color)
        container.style.setProperty("--container", color)
        container.style.setProperty("--container-rgb", rgbColor)

        const moveBg = (e) => {
            const rect = container.getBoundingClientRect()
            container.style.setProperty("--x", ((e.clientX - rect.left) / rect.width) * 100)
            container.style.setProperty("--y", ((e.clientY - rect.top) / rect.height) * 100)
        }

        container.addEventListener("pointermove", moveBg)
        return () => {
            container.removeEventListener("pointermove", moveBg)
        }
    }, [color])

    return (
        <div ref={containerRef} className="gooey-container">
            <div className="card">
                <div className="card-gradient"></div>
                <div className="card-content">
                    <div className="card-content--top">
                        <div className="card-content--top__text">
                            <h1 className="card-content--top__text-title">{title}</h1>
                            <p className="card-content--top__text-description">{description}</p>
                        </div>
                        <div className="card-content--top__thumbnail" style={{ backgroundImage: `url(${image})` }}></div>
                    </div>
                    <div className="card-content--bottom">
                        <a href={link} target="_blank" rel="noopener noreferrer" className="card-content--bottom__button">
                            Lien GitHub
                        </a>
                        <div className="card-content--bottom__tags">
                            {tags.map((tag, index) => (
                                <div key={index} className="card-content--bottom__tags-tag" style={{ backgroundColor: tag.color }}>
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