import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-up.styles.scss";
import { useState } from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

const SignUp = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== passwordConfirmation) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
      resetFields();
    } catch (error) {
      console.error(error);
    }
  };

  const resetFields = () => {
    setDisplayName("");
    setEmail("");
    setPassword("");
    setPasswordConfirmation("");
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign Up with you email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={e => setDisplayName(e.target.value)}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          label="E-mail"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="passwordConfirmation"
          value={passwordConfirmation}
          onChange={e => setPasswordConfirmation(e.target.value)}
          label="Password Confirmation"
          required
        />
        <CustomButton tyoe="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
