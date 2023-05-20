import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.confige";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create a new user function with email and password
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign in with Email and passWord
    const loginWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email,password);
    }


    // Set an authentication state observer

    

    const authInfo = {
        user,
        loading,
        createNewUser,
        loginWithEmailAndPassword,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;