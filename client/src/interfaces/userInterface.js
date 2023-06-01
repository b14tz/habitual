import { db } from "../lib/firebase";
import { doc, setDoc } from "firebase/firestore";

  export const createUser = async (uid, name, email) => {
    if(uid === "" || name === "" || email === "") {
      console.error("uid, name, or email is not set")
      return
    }

    try {
        await setDoc(doc(db, "User", uid), {
            name: name,
            email: email,
            date: new Date(),
        })
    }
    catch (e) {
        console.log(e)
        setError("Failed to register")
    }
  }
