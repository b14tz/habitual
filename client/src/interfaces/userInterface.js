import { db } from "../lib/firebase";
import {
    doc,
    setDoc,
  } from "firebase/firestore";

  export const createUser = async (uid, name, email) => {
    if(uid === "" || name === "" || email === ""){
        await setDoc(doc(db, "User", uid)), {
            name: 'name',
            email: email,
            accountBirthday: new Date(),
        }
    }
  }
