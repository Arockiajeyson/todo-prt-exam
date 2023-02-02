import React, { useState } from 'react'
import { createContext } from 'react'
const Auth = createContext()
export function Authoto({ children }) {
    const [state1,setState] =useState()
    const name =(e)=>{
        setState(e)
    }
    return (
        <div>
            <Auth.Provider value={{name,state1}}>
                {children}
            </Auth.Provider>
        </div>
    )
}
export default Auth
