import React from 'react'
import styled from 'styled-components'


const StyledTitle = styled.h1`
  font-size: 1.8em;
  line-height: 2.3rem;
  text-align: ${props => "left" || props.align};
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  color: #000;
  margin: 3rem 0 2rem 0;
  padding: 0 2rem;

  span {
    a {
      color: #0099ff;
    }
  }
`;

const LandingPage = () => {
  return (
    <div>
        <StyledTitle>
          I’m Rudy Goldhaber, aspiring{" "}
          <span>
            <a href='https://www.linkedin.com/in/rudy-goldhaber/'>
              Software Engineer
            </a>
          </span>
          <br />
          living in Venice, California.
        </StyledTitle>
    </div>
  )
}

export default LandingPage
