import PageAnimation from "../utils/PageAnimation"
import Blob from "../utils/Blob"
import Wrapper from "../components/Wrapper/Wrapper"
import Card from "../components/Card/Card"
import Footer from "../components/Footer/Footer"
import projects from "../data/projects"

function Portfolio() {
    const getBlobsConfig = () => {
        const width = window.innerWidth

        if (width <= 768) {
            // Configuration pour mobile
            return [
                { top: '0%', left: '0%', color: '#141414', radius: 0 },
            ]
        } else if (width <= 1141) {
            // Configuration pour tablette et petits écrans
            return [
                { top: '0%', left: '0%', color: '#b39c3b', radius: 255 }, // Jaune
                { top: '0%', left: '0%', color: '#141414', radius: 235 }, // Noir
            ]
        } else if (width <= 1367) {
            // Configuration pour écrans moyens
            return [
                { top: '0%', left: '0%', color: '#b39c3b', radius: 365 }, // Jaune
                { top: '0%', left: '0%', color: '#141414', radius: 355 }, // Noir
            ]
        } else {
            // Configuration pour grands écrans
            return [
                { top: '0%', left: '0%', color: '#b39c3b', radius: 525 }, // Jaune
                { top: '0%', left: '0%', color: '#141414', radius: 515 }, // Noir
            ]
        }
    }

    const blobs = getBlobsConfig()
    return (
        <PageAnimation>
            <div className="blobs">
                {blobs.map((blob, index) => (
                    <Blob key={index} top={blob.top} left={blob.left} color={blob.color} radius={blob.radius}/>
                ))}
                <Wrapper>
                    <div className="card-container">
                        {projects.map((project, index) => (
                            <Card key={index} title={project.title} description={project.description} github={project.github} link={project.link} image={project.image} tags={project.tags}/>
                        ))}
                    </div>
                    <Footer />
                </Wrapper>
            </div>
        </PageAnimation>
    )
}

export default Portfolio