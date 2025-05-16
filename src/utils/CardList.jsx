import Card from "../components/Card/Card"
import projects from "../data/projects.json"

function CardList() {
    return (
        <div className="card-container">
            {projects.map((project, index) => (
                <Card
                    key={index}
                    title={project.title}
                    image={project.image}
                    color="#3882ba"
                    href={project.href || null}
                />
            ))}
        </div>
    )
}

export default CardList