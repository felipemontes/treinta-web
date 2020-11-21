import './App.css';
import fire from './fire';
import React, {useState, useEffect } from 'react';

const App = () => {

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () =>{
    setEmail('');
    setPassword('');
  }

  const clearErrors = () =>{
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () =>{
    clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .cath(err =>{
      switch(err.code){
        case "auth/invalid-email":
          break;
        case "auth/user-disabled":
          break;
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
        default:
          break;
      }
    })
  }

  const handleSingup = () =>{
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .cath(err =>{
      switch(err.code){
        case "auth/email-already-in-use":
          break;
        case "auth/ivalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;
        default:
          break;
      }
    })
  }

  const handleLogout = () =>{
    fire.auth().signOut();
  };

  const authListener = () =>{
    fire.auth().onAuthStateChanged(user => {
      if(user){
        clearInputs();
        setUser(user);
      } else {
        setUser('')
      }
    })
  }

  useEffect(() =>{
    authListener()
  }, [])

  return (
    <h1>Hello world!</h1>
  );
}

export default App;