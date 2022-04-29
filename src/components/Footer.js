import "../styles/footer.scss"

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="footer__content">
                <div className="footer__left">
                    <h1>Dyzrupt</h1>
                    <p>Unit 112 Orion Mall,<br />Palm Street,<br />Victoria Mahe,<br />Seychelles.</p>
                    <div className="contact__details">
                        <p>contact@dyzrupt.ltd <br />2022 Dyzrupt LTD</p>
                    </div>
                </div>
                <div className="footer__right">
                    <div className="section">
                        <h5>Products</h5>
                            <li><a href="/">Product 1</a></li>
                            <li><a href="/">Product 2</a></li>
                            <li><a href="/">Product 3</a></li>
                            <li><a href="/">Product 4</a></li>         
                    </div>
                    <div className="section">
                        <h5>Company</h5>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">Get in touch</a></li>         
                    </div>
                    <div className="section">
                        <h5>Connect</h5>
                            <li><a href="/">Telegram</a></li>
                            <li><a href="/">Facebook</a></li>
                            <li><a href="/">Instagram</a></li>
                            <li><a href="/">Twitter</a></li>         
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer