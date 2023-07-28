import { createContext, useContext, useEffect, useState } from "react";

const MobileContext = createContext()

export const useMobile = () => useContext(MobileContext)

export const MobileProvider = ({children}) => {
    const [isMobile, setIsMobile] = useState(window.screen.width <= 480)

    useEffect(() =>{
        window.addEventListener('resize', () =>{
            setIsMobile(window.screen.width <= 480)
        })
        
    }, [])

    return(
        <MobileContext.Provider value={{isMobile}}>
            {children}
        </MobileContext.Provider>
    )
}