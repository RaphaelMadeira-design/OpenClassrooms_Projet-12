import PageAnimation from "../utils/PageAnimation"
import Blob from "../utils/Blob"
import Wrapper from "../components/Wrapper/Wrapper"
import Profile from "../components/Profile/Profile"
import Footer from "../components/Footer/Footer"

function About() {

    const getBlobsConfig = () => {
        const width = window.innerWidth

        if (width <= 768) {
            // Configuration pour mobile
            return [
                { top: '0%', left: '0%', color: '#141414', radius: 0 }, // Bleu
                { top: '0%', left: '0%', color: '#141414', radius: 0 }, // Noir
            ]
        } else if (width <= 1140) {
            // Configuration pour tablette et petits écrans
            return [
                { top: '0%', left: '52%', color: '#3882ba', radius: 665 }, // Bleu
                { top: '0%', left: '52%', color: '#141414', radius: 655 }, // Noir
            ]
        } else if (width <= 1366) {
            // Configuration pour écrans moyens
            return [
                { top: '0%', left: '52%', color: '#3882ba', radius: 665 }, // Bleu
                { top: '0%', left: '52%', color: '#141414', radius: 655 }, // Noir
            ]
        } else {
            // Configuration pour grands écrans
            return [
                { top: '0%', left: '52%', color: '#3882ba', radius: 865 }, // Bleu
                { top: '0%', left: '52%', color: '#141414', radius: 855 }, // Noir
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
                    <Profile />
                    <Footer />
                </Wrapper>
            </div>
        </PageAnimation>
    )
}

export default About