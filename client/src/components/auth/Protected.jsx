import React from 'react'
import { Navigate } from 'react-router-dom'
import { auth } from "../../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Protected({ children }) {
  const [ user ] = useAuthState(auth);

  // if the user isn't logged in, redirect them to the login page
  if(!user){
    return <Navigate to="/login" />
  }

  return children
}
