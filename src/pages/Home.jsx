import PageAnimation from "../utils/PageAnimation"
import Wrapper from "../components/Wrapper/Wrapper"
import Hero from "../components/Hero/Hero"
import Blob from "../utils/Blob"

const Home = () => {

    const getBlobsConfig = () => {
        const width = window.innerWidth

        if (width <= 768) {
            // Configuration pour mobile
            return [
                { top: '0%', left: '0%', color: '#b39c3b', radius: 550 }, // Jaune
                { top: '0%', left: '0%', color: '#55a35a', radius: 545 }, // Vert
                { top: '0%', left: '0%', color: '#3882ba', radius: 540 }, // Bleu
                { top: '0%', left: '0%', color: '#a858b8', radius: 535 }, // Violet
                { top: '0%', left: '0%', color: '#b54343', radius: 530 }, // Rouge
                { top: '0%', left: '0%', color: '#121212', radius: 525, image: '', imageScale: 0, outsideImage: '', imageOffset: { x: 0, y: 0 },}, // Noir
            ]
        } else if (width <= 1140) {
            // Configuration pour tablette et petits écrans
            return [
                { top: '40%', left: '-70%', color: '#b39c3b', radius: 450 }, // Jaune
                { top: '40%', left: '-70%', color: '#55a35a', radius: 425 }, // Vert
                { top: '0%', left: '0%', color: '#b54343', radius: 350 }, // Rouge
                { top: '0%', left: '0%', color: '#141414', radius: 350, image: '', imageScale: 0, outsideImage: '', imageOffset: { x: 0, y: 0 },}, // Noir
                { top: '-70%', left: '35%', color: '#a858b8', radius: 345 }, // Violet
                { top: '-70%', left: '35%', color: '#3882ba', radius: 335 }, // Bleu
            ]
        } else if (width <= 1366) {
            // Configuration pour écrans moyens
            return [
                { top: '50%', left: '-60%', color: '#b39c3b', radius: 425 }, // Jaune
                { top: '50%', left: '-60%', color: '#55a35a', radius: 405 }, // Vert
                { top: '0%', left: '22%', color: '#b54343', radius: 250 }, // Rouge
                { top: '-75%', left: '33%', color: '#a858b8', radius: 355 }, // Violet
                { top: '-75%', left: '33%', color: '#3882ba', radius: 345 }, // Bleu
                { top: '0%', left: '22%', color: '#141414', radius: 250, image: '/illus/hero.svg', imageScale: 3.25, outsideImage: '/illus/hero-outer.svg', imageOffset: { x: 0, y: 0 },} // Noir
            ]
        } else {
            // Configuration pour grands écrans
            return [
                { top: '50%', left: '-60%', color: '#b39c3b', radius: 450 }, // Jaune
                { top: '50%', left: '-60%', color: '#55a35a', radius: 425 }, // Vert
                { top: '0%', left: '20%', color: '#b54343', radius: 350 }, // Rouge
                { top: '-78%', left: '37%', color: '#a858b8', radius: 390 }, // Violet
                { top: '-78%', left: '37%', color: '#3882ba', radius: 380 }, // Bleu
                { top: '0%', left: '20%', color: '#141414', radius: 350, image: '/illus/hero.svg', imageScale: 5, outsideImage: '/illus/hero-outer.svg', imageOffset: { x: 0, y: 0 },} // Noir
            ]
        }
    }

    const blobs = getBlobsConfig()

    return (
        <PageAnimation>
            <div className="blobs">
                {blobs.map((blob, index) => (
                    <Blob
                        key={index}
                        top={blob.top}
                        left={blob.left}
                        color={blob.color}
                        radius={blob.radius}
                        image={blob.image}
                        imageScale={blob.imageScale}
                        outsideImage={blob.outsideImage}
                        imageOffset={blob.imageOffset}
                    />
                ))}
                <Wrapper>
                    <Hero />
                </Wrapper>
            </div>
        </PageAnimation>
    )
}

export default Home