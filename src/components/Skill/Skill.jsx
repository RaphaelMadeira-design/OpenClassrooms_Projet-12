import "./_skill.scss"
import skillsData from "../../data/skills.json"

const Skill = () => {
    return (
        <div className="skill">
            <div className="skill-grid">
                {Object.entries(skillsData).map(([category, skills]) => (
                    <div key={category} className="skill-category">
                        <h2 className="skill-category--title">
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </h2>
                        <div className="skill-list">
                            {skills.map((skill, index) => (
                                <div key={index} className="skill-item">
                                    <img src={skill.icon} alt={skill.name} className="skill-item--icon"/>
                                    <span className="skill-item--name">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skill