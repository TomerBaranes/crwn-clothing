import React, { useState } from "react";
import { connect } from "react-redux";

import "./sign-in.styles.scss";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

import FormInput from "../form-input/form-input.component.jsx";
import CustomButton from "../../components/custom-button/custom-button.component.jsx";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and passowrd</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          handleChange={handleChange}
          name="email"
          type="email"
          value={email}
          required
        />
        <FormInput
          label="password"
          handleChange={handleChange}
          name="password"
          type="password"
          value={password}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
