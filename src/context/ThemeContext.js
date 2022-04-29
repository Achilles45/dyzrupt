import { createContext, useState } from "react";

const ThemeContext = createContext()

export const ThemesProvider = ({ children }) => {
    let [lightTheme, setTheme] = useState(true)

    //Method to change theme
    const changeTheme = () => {
        setTheme((prev) => ! prev)      
    }

    return <ThemeContext.Provider value={{
        lightTheme,
        changeTheme
    }}>

        { children }
    </ThemeContext.Provider>
}

export default ThemeContext