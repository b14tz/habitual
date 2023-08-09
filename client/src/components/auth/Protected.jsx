import React from 'react'
import { Navigate } from 'react-router-dom'
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Protected({ children }) {
  const [user, loading, error] = useAuthState(auth);

  if(!user){
    return <Navigate to="/login" />
  }
  return children
}
