import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import "../styles/products.scss"
import coin from "../images/coin.png"

const Products = () => {
    const { lightTheme } = useContext(ThemeContext)
  return (
    <div className={ lightTheme ? "light__theme" : "dark__theme" }>
        <div className="products">
           <div className="container">
               <div className="row">
                   <div className="col-md-8">
                   <div className="heading">
                        <h1>Our Products</h1>
                        <p>Dyzrupt LTD is an International Business Company established in Seychelles and founded with the objective to use Blockchain-driven innovations to foster wealth creation for Africans and beyond, with a special emphasis on women.</p>
                    </div>
                   </div>
               </div>
               <div className="product__grid">
                   <div className="product__item">
                       <div className="label">
                           <h1>1</h1>
                       </div>
                       <img src={ coin } className="coin" alt="Animated Coin" />
                       <h4>Product Name</h4>
                       <p>Product description: Dyzrupt offers anyone an opportunity to stake DYZ token and get rewarded.</p>
                       <a href="/" className="link">Learn More</a>
                   </div>
                   <div className="product__item">
                       <div className="label">
                           <h1>2</h1>
                       </div>
                       <img src={ coin } className="coin" alt="Animated Coin" />
                       <h4>Product Name</h4>
                       <p>Product description: Dyzrupt offers anyone an opportunity to stake DYZ token and get rewarded.</p>
                       <a href="/" className="link">Learn More</a>
                   </div>
                   <div className="product__item">
                       <div className="label">
                           <h1>3</h1>
                       </div>
                       <img src={ coin } className="coin" alt="Animated Coin" />
                       <h4>Product Name</h4>
                       <p>Product description: Dyzrupt offers anyone an opportunity to stake DYZ token and get rewarded.</p>
                       <a href="/" className="link">Learn More</a>
                   </div>
                   <div className="product__item">
                       <div className="label">
                           <h1>4</h1>
                       </div>
                       <img src={ coin } className="coin" alt="Animated Coin" />
                       <h4>Product Name</h4>
                       <p>Product description: Dyzrupt offers anyone an opportunity to stake DYZ token and get rewarded.</p>
                       <a href="/" className="link">Learn More</a>
                   </div>
               </div>

               <div className="row">
                   <div className="col-md-2"></div>
                   <div className="col-md-8 vision text-center">
                       <h1>The Vision</h1>
                       <p>Dyzrupt LTD is an International Business Company established in Seychelles and founded with the objective to use Blockchain-driven innovations to foster wealth creation for Africans and beyond, with a special emphasis on women.</p>
                   </div>
                   <div className="col-md-2"></div>
               </div>
           </div>
        </div>
    </div>
  )
}

export default Products