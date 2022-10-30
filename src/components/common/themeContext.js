import React, {useState, useEffect} from 'react';


const getInitialTheme = () => {
    if(typeof window !== 'undefined' && window.localStorage){
        const storedPref = window.localStorage.getItem('current-theme')
        if(typeof storedPref === 'string'){
            return storedPref;
        }
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            return 'dark'
        }
    }
    return 'light'
}


// export const ThemeContext = React.createContext();
export const ThemeContext = React.createContext();

export const ThemeProvider = ({initialTheme, children}) => {
    const [theme, setTheme] = useState(getInitialTheme)

   const checkTheme = (existing) => {
    const root = window.document.documentElement;
    const isDark = existing === 'dark';

    root.classList.remove(isDark ? 'light' : 'dark')
    root.classList.add(existing)

    window.localStorage.setItem('current-theme', existing)
   }

   if(initialTheme){
    checkTheme(initialTheme)
   }

   useEffect(() => {
    checkTheme(theme)
   }, [theme])


   return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
    </ThemeContext.Provider>
   )
}