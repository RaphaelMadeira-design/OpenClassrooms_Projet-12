import "./_footer.scss"

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer-text">
                © {new Date().getFullYear()} Raphaël Madeira. Tous droits réservés.
            </p>
        </footer>
    )
}

export default Footer