import { GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import UseAxiosPublic from "../Hook/UseAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loaidng, setLoading] = useState(true);
    const axiosPublic = UseAxiosPublic();

    // social login
    const googleProvider = new GoogleAuthProvider();
    const twitterProvider = new TwitterAuthProvider();

    // sing up user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sing in user 
    const singInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //google login
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // update profile 
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const logOut = () => {
        setUser(null)
        signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if(currentUser){
                // get token and store
                const userInfo = {email: currentUser?.email}
                axiosPublic.post('/jwt', userInfo)
                .then(res => {
                    if(res?.data?.token){
                        localStorage.setItem('access-token', res?.data?.token)
                    }
                    setLoading(false)
                })
            }else{
                // TODO: remove token from brownser cookie
                localStorage.removeItem("access-token")
            }
        })
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        singInUser,
        googleLogin,
        updateUserProfile,
        loaidng,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;