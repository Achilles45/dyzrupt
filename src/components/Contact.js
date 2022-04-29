import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import "../styles/contact.scss";

const Contact = () => {

    const { lightTheme } = useContext(ThemeContext)

  return (
    <div className={ lightTheme ? "light__theme" : "dark__theme" }>
        <div className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 col-sm-10 col-xs-12 middle">
                        <div className="d-none d-lg-block text">
                            <h1><span className="lets">Let's</span><br /><span className="work">Work</span><br /><span className="together">Together</span></h1>
                        </div>
                        <div className="heading text-center">
                        <h1>Get in touch</h1>
                        <p>Send us a message, let's work together. We'll respond as soon as possible.</p>
                        </div>
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your name"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Email address"/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Subject"/>
                            </div>
                            <div className="form-group">
                                <textarea name="" id="" cols="20" placeholder="Your message" rows="10" className="form-control">
                                    Your message
                                </textarea>
                            </div>
                            <div className="button__holder">
                                <button type="submit" className="button">Send message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact