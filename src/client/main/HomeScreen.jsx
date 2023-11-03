import React, { useState } from "react";
import companyLogo from "../WhatsForDinnerLogo.png";
import styled from "styled-components";

const Logo = styled.img`
  height: 50vh;
  width: 50vh;
  padding-top: 18vh;
  margin-bottom: 4vh;
  @-webkit-keyframes swinging {
    15% {
      -webkit-transform: rotate(10deg);
    }
    50% {
      -webkit-transform: rotate(-5deg);
    }
    85% {
      -webkit-transform: rotate(10deg);
    }
  }

  @keyframes swinging {
    15% {
      transform: rotate(10deg);
    }
    50% {
      transform: rotate(-5deg);
    }
    85% {
      transform: rotate(10deg);
    }
  }

  &:hover {
    -webkit-transform-origin: 50% 0;
    transform-origin: 50% 0;
    -webkit-animation: swinging 3.5s ease-in-out forwards infinite;
    animation: swinging 3.5s ease-in-out forwards infinite;
  }
`;

const Button = styled.button`
  background-color: #9999ff;
  border-radius: 3px;
  border: 2px solid #000099;
  color: #00004d;
  font-size: 2em;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  /* @media (max-width: 600px) {
    max-width: 5rem;
    max-height: 5rem;
    font-size: 10px;
  } */
  &:hover {
    background-color: #00004d;
    color: #9999ff;
    transition: 0.3s;
  }
`;

const HomeScreen = (
  {
    /*setStart, setExplore*/
  }
) => {
  let clicking = () => {
    // setStart(false);
    // setExplore(true);
    console.log("I AM CLICKING ON GET STARTED");
  };
  return (
    <div>
      <Logo src={companyLogo} alt="Dinner Plate logo" />
      <i style={{ maxWidth: "50%", textAlign: "center" }}>
        The struggle is real. But the struggle is also over! Click the button
        below and a meal plan will be generated for you! Bon appetit!
      </i>
      <Button onClick={clicking}>Make Me A Plan!</Button>
    </div>
  );
};

export default HomeScreen;
