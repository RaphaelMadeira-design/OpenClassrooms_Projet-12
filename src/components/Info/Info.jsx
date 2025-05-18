import React from "react"
import GooeyButton from "../GooeyButton/GooeyButton"
import "./_info.scss"

const Info = () => {
    const email = "raphael.m21@gmail.com"

    return (
        <div className="info">
            <h2 className="info-title">Travaillons ensemble</h2>
            <p className="info-description">
                Un projet, une idée ou juste envie d'échanger ?
                <br/>N'hésitez pas à me contacter par email ou via mes réseaux sociaux !
            </p>
            <div className="info-button">
                <GooeyButton text="Envoyer un mail" color="#a858b8" href={`mailto:${email}`}/>
            </div>
            <ul className="info-details">
                <li>Email : {email}</li>
                <li>Téléphone : +33 7 86 42 42 02</li>
            </ul>
            <div className="info-socials">
                <a href="https://github.com/RaphaelMadeira-design" target="_blank" rel="noopener noreferrer" className="info-socials--link">
                    <img src="/illus/github.svg" alt="GitHub" className="info-socials--icon"/>
                </a>
                <a href="https://fr.linkedin.com/in/raphaelmadeira" target="_blank" rel="noopener noreferrer" className="info-socials--link">
                    <img src="/illus/linkedin.svg" alt="LinkedIn" className="info-socials--icon"/>
                </a>
                <a href="https://www.behance.net/raphaelmadeira" target="_blank" rel="noopener noreferrer" className="info-socials--link">
                    <img src="/illus/behance.svg" alt="Behance" className="info-socials--icon"/>
                </a>
            </div>
        </div>
    )
}

export default Info