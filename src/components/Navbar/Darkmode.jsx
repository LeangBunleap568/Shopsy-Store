import React from 'react'
import { useState } from 'react'
import light from "../../assets/website/light-mode-button.png"
import dark from "../../assets/website/dark-mode-button.png"
const Darkmode = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    )
    const element = document.documentElement;
    React.useEffect(() => {
        localStorage.setItem("theme", theme)
        if (theme === "dark") {
            element.classList.add("dark")
      
        }
        else {
            element.classList.remove("dark")
        }
    })
    return (
        <div className="relative">
            <img
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                src={light}
                alt=""
                className={`w-12 cursor-pointer absolute right-0 z-10 
                ${theme === "dark" ? "opacity-0" : "opacity-100"}
                transition-all duration-300`}
            />
            <img
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                src={dark}
                alt=""
                className={`w-12 cursor-pointer`}
            />
        </div>
    )
}

export default Darkmode