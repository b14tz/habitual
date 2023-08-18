import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from "../../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { getUserData } from '../../interfaces/userInterface'; 

export default function SetupWrapper({ children }) {
    const [user] = useAuthState(auth);
    const [isSetup, setIsSetup] = useState(null); 

    useEffect(() => {
        if (user) {
            async function fetchData() {
                const data = await getUserData(user.uid);
                setIsSetup(data.isSetup);
            }
            fetchData();
        }
    }, [user]);

    if (isSetup === null) {
        // Loading state, add a spinner here in the future
        return null;
    } else if (!isSetup) {
        return <Navigate to="/setup" />;
    }
  
    return children;
}
