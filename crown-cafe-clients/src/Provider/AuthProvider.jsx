import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loaidng, setLoading] = useState(true);


    // sing up user with email and password
    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password);
        setLoading(true);
    }

    const authInfo = {
        user,
        createUser,
        loaidng
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;