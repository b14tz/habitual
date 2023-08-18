import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../../lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getUserData } from '../../interfaces/userInterface';

export default function AuthAndSetupWrapper({ children }) {
  const [user, loading] = useAuthState(auth);
  const [isSetup, setIsSetup] = useState(null);

  useEffect(() => {
    if (loading) {
      return; // Don't perform setup check while loading
    }

    if (user) {
      async function fetchData() {
        const data = await getUserData(user.uid);
        setIsSetup(data.isSetup);
      }
      fetchData();
    }
  }, [user, loading]);

  if (loading) {
    // Loading state, add a spinner here if needed
    return null;
  }

  if (!user) {
    return <Navigate to="/login" />; // Redirect to login if not logged in
  }

  if (isSetup === null) {
    // Loading state, add a spinner here in the future
    return null;
  }

  if (!isSetup) {
    return <Navigate to="/setup" />; // Redirect to setup if not set up
  }

  return children;
}
