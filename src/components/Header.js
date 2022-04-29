import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import "../styles/header.scss";
import { MdDarkMode } from "react-icons/md"
import { HiOutlineSun } from "react-icons/hi"

const Header = () => {
  const { lightTheme, changeTheme } = useContext(ThemeContext)
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
                  { lightTheme ? <MdDarkMode size="2rem" /> : <HiOutlineSun size="2rem" />}
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Header