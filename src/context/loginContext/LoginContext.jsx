import React from 'react'
import { createContext } from 'react';
import { useReducer } from 'react'



export const LoginRouteContext = createContext();

const initialData = {
    user: null
}

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
export const LoginContext = ({ children }) => {
    const [state, dispatch] = useReducer(LoginReducer, initialData);

    return (
        <LoginRouteContext.Provider value={{ state, dispatch }}>
            {children}
        </LoginRouteContext.Provider>
    )
};