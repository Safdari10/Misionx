import { useState } from "react";
import styles from "../LoginSignup.module.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState("")
 
  const handleSubmit = async (e) => {
    e.preventDefault();

   if (password !== confirmPassword) {
    set
   }

    // api call

    if (Response.ok) {
      alert(
        `successfully signed up, you can login with your email and password`
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full Name"
        required/>
      <input
        className={styles.input}
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        required/>
      <input
        className={styles.input}
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required/>
      <input
        className={styles.input}
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm Password"
        required/>
        <button type="submit" className={styles.submit}>SIGN UP</button>
    </form>
  );
};

export default Signup;
