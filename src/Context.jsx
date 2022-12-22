import { useState } from "react"
import { createContext } from "react"

export const AppContext=createContext()

function AppContextProvider({children}){
    const [username,setusername]=useState("")

    function getname(value){
        setusername(value)
    }

    // console.log(username)




return (
    <AppContext.Provider value={{username,getname}}>
        {children}
    </AppContext.Provider>
)

}


export default AppContextProvider


