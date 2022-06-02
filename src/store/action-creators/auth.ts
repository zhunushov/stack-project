import { Dispatch } from 'redux';
import { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { auth } from '../../FIrebase/firebase';


export const signUp = async (email: string, password: string) => {
    try {
        return await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error)
    }
}

export const signIn = async (email: string, password: string) => {
    try {
        return await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
       console.log(error)        
    }
}

export const logout = async() => {
    try {
        return await signOut(auth)
    } catch (error) {
        console.log(error)
    }
}

export const useAuth = () => {
    const [currentUser, setCurrentUser] = useState<any>()
    useEffect(() => {
        const onsub = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
        })
        return onsub
    }, [])
    return currentUser 
}

const provider = new GoogleAuthProvider()
export const googleAuth = () => {
    return async (dispatch: Dispatch) => {
        try {
            await signInWithPopup(auth, provider)
        } catch (error: any) {
            console.log(error)
        }
    }
}