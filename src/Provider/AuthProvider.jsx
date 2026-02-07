import React, { createContext, useEffect, useState } from 'react'
import auth from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, updateCurrentUser } from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [loading,setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const registerWithEmailPassword = (email,pass) => {
        return createUserWithEmailAndPassword(auth,email,pass)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }

    },[])

    const authData = {
        registerWithEmailPassword,
        setUser,
        user,
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
}

export default AuthProvider;