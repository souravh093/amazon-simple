import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext(null);
const Auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(Auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(Auth, email, password);
  };

  const loginOut = () => {
    return signOut(Auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    // stop observers while unmounting
    return () => {
        return unsubscribe()
    }
  }, []);
  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    loginOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
