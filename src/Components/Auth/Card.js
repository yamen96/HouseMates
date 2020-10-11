import styled from "styled-components";
import React from "react";
import { useHistory } from "react-router-dom";

export const Card = styled.div`
  background: #74f3cd;
  border-radius: 5px;
  width: 425px;
  margin: 2% auto;
  box-shadow: 5px 10px 25px rgba(0, 0, 0, 0.25);
`;

export const CardHeading = styled.div`
  background: #18a379;
  border-radius: 5px 5px 0px 0px;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 40px;
    color: #ffffff;
  }
  img {
    width: 80px;
    height: 100%;
  }
`;

export const CardSubHeading = styled.div`
  margin: 0px;
  background: #20bd8e;
  display: flex;
  justify-content: space-evenly;
  button,
  h1 {
    font-size: 28px;
    color: #076b4d;
    padding: 10px;
    border: none;
    background: transparent;
    :hover {
      cursor: pointer;
    }
  }
  .Selected {
    border-bottom: solid 4px;
  }
`;

export const Form = styled.form`
  margin-top: 0px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  width: 275px;
  font-size: 24px;
  margin-top: 40px;
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid rgba(7, 107, 77, 0.25);
  ::placeholder {
    color: #076b4d;
  }
  :focus {
    border-bottom: 2px solid rgba(7, 107, 77, 0.75);
    font-weight: 800;
  }
  .Error {
    border-bottom: 2px solid rgba(255, 0, 0, 0.75);
    ::placeholder {
      color: #ff0000;
    }
  }
`;

export const ErrorMessage = styled.div`
  width: 275px;
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: -25px;
  background: #c4c4c4;
  display: flex;
  justify-content: center;
  color: #ff0000;
  border-radius: 7px;
`;

export const Submit = styled(Input)`
  margin-bottom: 40px;
  background: #18a379;
  color: #ffffff;
  padding: 5px 0 5px 0;
  width: 200px;
  border-radius: 5px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12);
  :focus {
    border: none;
    font-weight: 400;
  }
  :hover {
    cursor: pointer;
  }
`;

function SignInOrUpCard({ children, variant }) {
  const history = useHistory();

  const handleClick = () => {
    if (variant === "SignIn") history.push("/signup");
    if (variant === "SignUp") history.push("/signin");
  };

  return (
    <Card>
      <CardHeading>
        <h1> HouseMates </h1>
      </CardHeading>
      {variant === "SignIn" && (
        <CardSubHeading>
          <h1 className="Selected"> Sign In </h1>
          <button onClick={handleClick}> Sign Up </button>
        </CardSubHeading>
      )}
      {variant === "SignUp" && (
        <CardSubHeading>
          <button onClick={handleClick}> Sign In </button>
          <h1 className="Selected"> Sign Up </h1>
        </CardSubHeading>
      )}
      {children}
    </Card>
  );
}

export default SignInOrUpCard;
