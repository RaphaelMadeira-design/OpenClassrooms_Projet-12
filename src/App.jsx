import { BrowserRouter as Router } from "react-router-dom"
import AnimatedApp from "./utils/AnimatedApp"
import "./styles/style.scss"

function App() {
    return (
        <Router>
            <AnimatedApp />
        </Router>
    )
}

export default App