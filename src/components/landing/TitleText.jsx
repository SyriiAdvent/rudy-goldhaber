import React, { useEffect, useState } from 'react'
import styled from "styled-components";

const StyledTitle = styled.h1`
  height: 5rem;
  font-size: 1.8em;
  line-height: 2.4rem;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  margin: 3rem 0 2rem 0;
  padding: 0 2rem;

  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0, 0.35);
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);
  z-index: 2;
  padding: 20px;
  text-align: center;
  width: 45rem;

  @media (max-width: 786px) {
    width: 85%;
    height: auto;
  }


  span {
    a {
      color: #0099ff;
    }
  }
`;

const TitleText = () => {
  const [turn, setTurn] = useState(0);
  const [titles, setTitles] = useState("Software Engineer");
  const myTitles = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Software Engineer",
  ];

  const titleChanger = () => {
    if (turn < myTitles.length) {
      setTimeout(() => {
        setTitles(myTitles[turn]);
        setTurn(turn + 1);
      }, 2500);
    } else {
      setTurn(0);
    }
  };

  useEffect(() => {
    titleChanger();
  }, [turn]);

  return (
    <StyledTitle>
      <span style={{ width: '150px' }}>
        I’m Rudy Goldhaber {" "}
        <a href='https://www.linkedin.com/in/rudy-goldhaber/'>{titles}</a>
      </span>
      <br />
      living in Venice, California.
      {/* <br />
          I specialize is engineering solutions in software */}
    </StyledTitle>
  );
};

export default TitleText;
