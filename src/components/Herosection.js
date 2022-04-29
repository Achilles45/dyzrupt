import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import "../styles/herosection.scss"
import hero__img from "../images/hero-img.svg"

const Herosection = () => {
    const { lightTheme } = useContext(ThemeContext)
  return (
    <div className={ lightTheme ? "light__theme" : "dark__theme" }>
        <div className="herosection">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-12 col-xs-12">
                        <h1>Liberating Africans.</h1>
                        <h1>Changing Lives.</h1>
                        <div className="col-md-9 col-sm-12 col-xs-12">
                        <p>Dyzrupt LTD is formed by a diverse team of dedicated enterpreneurs, academics, and other professionals who understand Africa's unique challenges</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-xs-12 img__holder">
                        <img src={ hero__img } className="hero__img img-fluid" alt="Changing Lives" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Herosection