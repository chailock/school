import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebaseConfig";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { useContext } from 'react';
import { MyContext } from '../App';

interface LoginFormProps {}

const Login: React.FC<LoginFormProps> = () => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth()
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const { id, setId, name, setName, email, setEmail } = useContext(MyContext);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then(async (cred) => {
        console.log(cred)
        setId(cred.user.uid)
        setEmail(cred.user.email)

        // try {
        //     const userDoc = await getDoc(doc(db, 'users', cred.user.uid))
        //     if(userDoc.exists()){
        //         setName(userDoc.data().name)
        //     } else {
        //         console.log('User document not found in Firestore');
        //     }
        // } catch (error) {
        //     setError(error.message)
        // }
        navigate("/home")
      })
      .catch((error) => setError(error))
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;