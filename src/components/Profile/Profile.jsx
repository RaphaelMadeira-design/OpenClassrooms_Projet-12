import React from "react"
import "./_profile.scss"
import GooeyButton from "../GooeyButton/GooeyButton"

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile-left">
                <h1 className="profile-title">Hey !</h1>
                <p className="profile-paragraph">
                    Issu d'un parcours universitaire en psychologie de l'ergonomie et captivé par le design web depuis l'adolescence, j'ai décidé de combiner mes connaissances ainsi que ma passion afin de devenir UX Designer.
                </p>
                <p className="profile-paragraph">
                    En parallèle, j'ai suivi une formation dans le développement web afin de donner vie à mes créations et proposer un services complet.
                </p>
                <p className="profile-paragraph">
                    C'est donc tout naturellement que mes projets sont centrés sur l'utilisateur et j'ai à cœur de rendre le web plus inclusif afin que tout le monde puisse y naviguer le plus confortablement possible.
                </p>
                <div className="profile-button">
                    <GooeyButton text="Voir mon CV" color="#3882ba" href="/RaphaelMadeira_CV.pdf"/>
                </div>
            </div>
            <div className="profile-right">
                <img src="/illus/profile.svg" alt="Illustration représentant Raphaël Madeira, pointant le texte de présentation" className="profile-image"/>
            </div>
        </div>
    )
}

export default Profile