import React, {useContext} from 'react'
import { Navigate } from 'react-router-dom'
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { SetupContext } from '../../contexts/SetupContext';

export default function Protected({ children }) {
  const [ user ] = useAuthState(auth);
  const setup = useContext(SetupContext);

  // if the user isn't logged in, redirect them to the login page
  if(!user){
    return <Navigate to="/login" />
  }
  // if the user hasn't fully set up their account, redirect them to the set up page
  if(setup){
    return <Navigate to="/setup" />
  }
  return children
}
