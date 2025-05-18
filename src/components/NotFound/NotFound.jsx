import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import GooeyButton from "../GooeyButton/GooeyButton"
import "./_notfound.scss"

const colors = ["#b54343", "#3882ba", "#55a35a", "#b39c3b", "#a858b8"]

function NotFound() {

    const [textColor, setTextColor] = useState(colors[0])

    useEffect(() => {
        let index = 0
        const colorInterval = setInterval(() => {
            index = (index + 1) % colors.length
            setTextColor(colors[index])
        }, 1500)
        return () => clearInterval(colorInterval)
    }, [])

    return (
        <div className="notfound">
            <h1 className="notfound-title" style={{ color: textColor }}>404</h1>
            <h2 className="notfound-message">Oups ! La page que vous cherchez n'existe pas.</h2>
            <Link to="/">
                <GooeyButton text="Retourner à l'accueil" color="#b54343"/>
            </Link>
        </div>
    )
}

export default NotFound