import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { auth } from "../../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { getUserData } from '../../interfaces/userInterface';

export default function SetupWrapper({ children }) {
    const [ user ] = useAuthState(auth);
    const [isSetup, setIsSetup] = useState(false)

    useEffect(() => {
        if(user){
            getUserData(user.uid).then(data => {
                setIsSetup(data.isSetup)
            })
        }
    }, [])

    if(!isSetup){
      return <Navigate to="/setup" />
    }
  
    return children
  }
  