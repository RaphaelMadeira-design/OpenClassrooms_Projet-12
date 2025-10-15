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
        </div>
    )
}

export default Loading