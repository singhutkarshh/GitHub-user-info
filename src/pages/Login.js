import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import loginImg from "../images/login-img.svg";
import About from "../components/about";
const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Wrapper>
      <div className="container">
        <img src={loginImg} alt="GitHub User Image"></img>
        <h1>GitHub User Info</h1>
        <buttton className="btn" onClick={loginWithRedirect}>
          Login/Signup
        </buttton>
      </div>
      <About flag="true" />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 3rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;
export default Login;
