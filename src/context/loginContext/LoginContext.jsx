import React, { createContext, useEffect, useReducer } from 'react'
import {reducer} from './LoginReducer'





const getLoginData = () => {
    let loginData = localStorage.getItem('login')
    if (loginData == "undefined") {
        return undefined
    }

    else {
        return JSON.parse(loginData)
    }

}

const initialData = {
    user: getLoginData()
}

export const LoginRouteContext = React.createContext("Initial Value")

export default function LoginContext({ children }) {
    const [state, dispatch] = useReducer(reducer, initialData)

    useEffect(() => {
        localStorage.setItem('login', JSON.stringify(state.user))
    }, [state.user])

    return (
        <>

            <LoginRouteContext.Provider value={{ state, dispatch }}>
                {children}
            </LoginRouteContext.Provider>
        </>

    )
}




// export const LoginRouteContext=createContext();

// const initialData = {
//     user: null
// }

const LoginReducer = (state, action) => {
    switch (action.type) {
        case 'Login':
            return { user: action.payload };
        case 'LogOut':
            return { user: null };
        default:
            state;
    }
}
// export const LoginContext = ({ children }) => {
//     const [state, dispatch] = useReducer(LoginReducer, initialData);
    

//     return (
//         <LoginRouteContext.Provider value={{ state, dispatch }}>
//             {children}
//         </LoginRouteContext.Provider>
//     )
// };