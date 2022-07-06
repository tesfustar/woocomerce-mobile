import React,{useContext,createContext,useState} from 'react'

const ThemeContext=createContext()

export const ThemeProvider=({children})=>{
    const [darkMode,SetDarkMode]=useState(false)

    const handleChange=()=>{
        SetDarkMode(prevDarkMode=>!prevDarkMode)
    }
    return(
        <ThemeContext.Provider value={{darkMode,handleChange}}>
            {children}
        </ThemeContext.Provider>
    )
}


export const useTheme=()=>useContext(ThemeContext)

export default ThemeProvider