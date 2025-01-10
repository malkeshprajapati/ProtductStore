import React, { useEffect, useState } from "react";
import { LoginFormStyle, LoginStyleContainer } from "../styles/loginStyle";
import Input from "../components/Input";
import Button from "../components/Button";
import useApiRequest from "../htttpClient";
import { useNavigate } from "react-router-dom";
import { ErrorContainer, ErrorMessage } from "../styles/errorstyles";

const LoginPage = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const apiRequest = useApiRequest();
  const onLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const response = await apiRequest("/login", "POST", {
      ...data,
    });
    if (response) {
      if (!response.error) {
        localStorage.setItem(
          "user",
          JSON.stringify({ name: response.firstName })
        );
        localStorage.setItem("token", response.accessToken);
        navigate("/");
      } else {
        setError(true);
      }
    }
  };

  const tokenLocalStorage = localStorage.getItem("token");

  useEffect(() => {
    if (tokenLocalStorage && tokenLocalStorage?.length) {
      navigate("/");
    }

    setTimeout(() => {
      setError(false);
    }, 3000);
  }, [tokenLocalStorage, error]);

  return (
    <LoginStyleContainer>
      <LoginFormStyle onSubmit={onLogin}>
        <h1>Welcome, Login</h1>
        <Input name={"username"} label={"Username"} placeholder={"username"} />
        <Input name={"password"} label={"Password"} placeholder={"password"} />
        <Button label={"Login"} />
      </LoginFormStyle>
      {error && (
        <ErrorContainer>
          <ErrorMessage>Invalid Credentials</ErrorMessage>
        </ErrorContainer>
      )}
    </LoginStyleContainer>
  );
};

export default LoginPage;
