import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "./../Firebase/firebase.init";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [ user, setUser]  = useState(null);
  const [ loading, setLoading]  = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signOutUser = () =>{
    return signOut(auth)
    .then(()=>{
      console.log('Log Out Successfull');
    })
    .catch((error)=>{
      console.log(error.message);
    })
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser)
      console.log('state captured', currentUser?.email);

      if (currentUser?.email) {
        const user = {email: currentUser.email}

        axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
        .then(res => console.log(res.data))
      }

      // if user not found delete cookies 

      else{
        axios.post('http://localhost:5000/logout', {}, {
          withCredentials:true
        })
        .then(res => console.log(res.data))
      }

      setLoading(false)
    })

    return () =>{
      unsubscribe();
    }

  }, [])

  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    signOutUser
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
