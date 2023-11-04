import styled from "styled-components";

export const Button = styled.button`
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

export const SideBySideContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background: white;
  width: 80vw;
`;

export const NavContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background: white;
  width: 100vw;
`;

export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  max-width: 80vw;
  align-items: center;
  background-color: white;
  @media (max-width: 600px) {
    flex-direction: column;
    border-top: 2px solid teal;
  }
`;

export const Logo = styled.img`
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

export const RecipePhoto = styled.img`
  height: 20vh;
  width: 20vh;
  margin: 4vh;
  border-radius: 4px;
`;

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 75%;
  padding-left: 12.5%;
  padding-bottom: 5vh;
`;

export const StyledInput = styled.div`
  border: 2px solid black;
  padding: 5px;
`;

export const StyledLabel = styled.label`
  padding-bottom: 1vh;
  font-weight: bold;
  font-size: 2em;
`;

export const StyledTitle = styled.div`
  text-align: center;
  padding: 5vh 0;
`;

export const DayOfWeekHeader = styled.button`
  background-color: ##6794e9;
  text-align: center;
  border: 3px solid #2e1045;
  border-radius: 3px;
  min-width: 20vw;
  padding: 10px;
  margin-left: 20px;
  cursor: pointer;
  font-size: 28px;
  /* @media (max-width: 600px) {
    max-width: 5rem;
    max-height: 5rem;
    font-size: 10px;
  } */
  &:hover {
    background-color: ##9999ff;
    color: ##000099;
    transition: 0.3s;
  }
`;

export const Submit = styled.input`
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

export const SummaryWeekDiv = styled.div`
  border: 3px solid black;
  margin: 10px;
  width: 30%;
  min-width: 30%;
`;
