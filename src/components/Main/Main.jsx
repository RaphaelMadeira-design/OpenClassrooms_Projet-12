import React from "react"
import "./_main.scss"

const Main = ({ children }) => {
    return (
        <div className="main">
            {children}
        </div>
    )
}

export default Main