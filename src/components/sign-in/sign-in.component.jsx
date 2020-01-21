import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-in.styles.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setEmail("");
    setPassword("");
  }

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={e => setEmail(e.target.value)}
          label="email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={e => setPassword(e.target.value)}
          label="password"
          required
        />

        <CustomButton type="submit">Sign In</CustomButton>
      </form>
    </div>
  );
};
export default SignIn;
