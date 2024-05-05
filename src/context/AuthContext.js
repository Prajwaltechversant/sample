import { createContext, useState } from "react";



export const LoginContextAPI = createContext()


 function ContextShare({children}){

    const [tokenStatus,setTokenStatus] = useState()
    console.log(tokenStatus,"tokenContext")


    return(
        <LoginContextAPI.Provider value={{tokenStatus,setTokenStatus}}>
            {children}
        </LoginContextAPI.Provider>
    )
}

export default ContextShare