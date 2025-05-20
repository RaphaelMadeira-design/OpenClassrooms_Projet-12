import "./_loading.scss"

function Loading() {
    return (
        <div className="loader">
            <div className="loader-goo">
                <div className="loader-goo--ball"></div>
                <div className="loader-goo--ball"></div>
                <div className="loader-goo--ball"></div>
                <div className="loader-goo--ball"></div>
                <div className="loader-goo--ball"></div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                    </filter>
                </defs>
            </svg>
        </div>
    )
}

export default Loading