import styled from "styled-components";
import React from "react";
import { useHistory } from "react-router-dom";

export const Card = styled.div`
  background: #74f3cd;
  border-radius: 5px;
  width: 425px;
  margin: 2% auto;
  box-shadow: 5px 10px 25px rgba(0, 0, 0, 0.25);
  padding-bottom: 40px;
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
  h2 {
    font-size: 28px;
    color: #076b4d;
    padding: 10px;
    border: none;
    background: transparent;
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

const Message = styled.div`
  width: 275px;
  font-size: 15px;
  margin-bottom: -25px;
  display: flex;
  justify-content: center;
  border-radius: 7px;
`;

export const ErrorMessage = styled(Message)`
  margin-top: 10px;
  color: #ff0000;
  background: #c4c4c4;
`;

export const SuccessMessage = styled(Message)`
  font-size: 17px;
  margin-top: 15px;
  padding: 10px;
  background: #21d9a2;
`;

export const InfoMessage = styled(Message)`
  font-size: 17px;
  margin-top: 15px;
  padding: 10px;
`;

export const Button = styled.button`
  font-size: 24px;
  margin: 30px 0px;
  border: 0;
  outline: 0;
  background: ${(props) => (props.primary ? "#18a379" : "#e66f65")};
  color: #ffffff;
  padding: 5px 0 5px 0;
  width: 275px;
  border-radius: 5px;
  transition: 0.2s;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12);
  :hover {
    cursor: pointer;
    background: ${(props) => (props.primary ? "#138764" : "#b3564f")};
  }
  div {
    color: #ffffff;
  }
`;

function MainCard({ children, variant, title }) {
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
      {variant === "other" && (
        <CardSubHeading>
          <h2> {title} </h2>
        </CardSubHeading>
      )}
      {children}
    </Card>
  );
}

export default MainCard;
