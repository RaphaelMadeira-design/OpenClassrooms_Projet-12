import PageAnimation from "../utils/PageAnimation"
import Blob from "../utils/Blob"
import Wrapper from "../components/Wrapper/Wrapper"
import NotFound from "../components/NotFound/NotFound"
import Footer from "../components/Footer/Footer"

function Error() {

    const getBlobsConfig = () => {
        const width = window.innerWidth

        if (width <= 768) {
            // Configuration pour mobile
            return [
                { top: '0%', left: '0%', color: '#b39c3b', radius: 475 }, // Jaune
                { top: '0%', left: '0%', color: '#55a35a', radius: 470 }, // Vert
                { top: '0%', left: '0%', color: '#3882ba', radius: 465 }, // Bleu
                { top: '0%', left: '0%', color: '#a858b8', radius: 460 }, // Violet
                { top: '0%', left: '0%', color: '#b54343', radius: 455 }, // Rouge
                { top: '0%', left: '0%', color: '#121212', radius: 450 }, // Noir
            ]
        } else {
            // Configuration pour grands écrans
            return [
                { top: '0%', left: '0%', color: '#b39c3b', radius: 350 }, // Jaune
                { top: '0%', left: '0%', color: '#55a35a', radius: 345 }, // Vert
                { top: '0%', left: '0%', color: '#3882ba', radius: 340 }, // Bleu
                { top: '0%', left: '0%', color: '#a858b8', radius: 335 }, // Violet
                { top: '0%', left: '0%', color: '#b54343', radius: 330 }, // Rouge
                { top: '0%', left: '0%', color: '#121212', radius: 325 }, // Noir
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
                    <NotFound/>
                    <Footer />
                </Wrapper>
            </div>
        </PageAnimation>
    )
}

export default Error