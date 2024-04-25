import axios from 'axios'
import React, { createContext, useContext, useState } from 'react'

const authContext = createContext()
export const useAuth = () => useContext(authContext)

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: {
            name: "imran",
            role: "author",
            email: "imran@gmail.com",
        },
        token: "",
    })

    axios.defaults.baseURL = 'http://localhost:8000/api';
    return (

        <authContext.Provider value={[auth, setAuth]}>{children}</authContext.Provider>

    )
}

export default AuthProvider