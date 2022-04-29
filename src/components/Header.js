import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import "../styles/header.scss";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md"

const Header = () => {
  const { lightTheme, changeTheme } = useContext(ThemeContext)

  // const changeTheme = () => {
  //   setTheme(!lightTheme)
  // }
  return (
    <div className={ lightTheme ? "light__theme" : "dark__theme" }>
      <div className="header">
        <div className="container">
          <div className="header__content d-flex justify-content-between">
            <div className="logo">
              <h3>Dyzrupt</h3>
            </div>
            <div className="theme__holder">
              <div onClick={ changeTheme } className="box">
                  { lightTheme ? <MdDarkMode size="2rem" /> : <MdOutlineDarkMode size="2rem" />}
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Header