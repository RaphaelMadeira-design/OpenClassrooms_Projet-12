import PageAnimation from "../utils/PageAnimation"
import Blob from "../utils/Blob"
import Wrapper from "../components/Wrapper/Wrapper"
import Info from "../components/Info/Info"
import Footer from "../components/Footer/Footer"

function Contact() {

    const getBlobsConfig = () => {
        const width = window.innerWidth

        if (width <= 768) {
            // Configuration pour mobile
            return [
                
                { top: '0%', left: '0%', color: '#141414', radius: 0 }, // Vert
                { top: '0%', left: '0%', color: '#141414', radius: 0 }, // Noir
                
            ]
        } else if (width <= 1141) {
            // Configuration pour tablette et petits écrans
            return [
                
                { top: '0%', left: '0%', color: '#a858b8', radius: 455 }, // Vert
                { top: '0%', left: '0%', color: '#141414', radius: 435 }, // Noir
                
            ]
        } else if (width <= 1367) {
            // Configuration pour écrans moyens
            return [
                
                { top: '0%', left: '0%', color: '#a858b8', radius: 365 }, // Vert
                { top: '0%', left: '0%', color: '#141414', radius: 355 }, // Noir
                
            ]
        } else {
            // Configuration pour grands écrans
            return [
                
                { top: '0%', left: '0%', color: '#a858b8', radius: 385 }, // Vert
                { top: '0%', left: '0%', color: '#141414', radius: 375 }, // Noir
                
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
                    <Info/>
                    <Footer />
                </Wrapper>
            </div>
        </PageAnimation>
    )
}

export default Contact