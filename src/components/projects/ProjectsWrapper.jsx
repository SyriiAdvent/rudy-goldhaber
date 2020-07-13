import React from "react";
import styled from "styled-components";
import ImageCard from "./ImageCard";
import NotionIcon from "../SVG/NotionIcon";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, } from '@fortawesome/free-brands-svg-icons'

const ProjectsContainer = styled.div`
  max-width: 100%;
  padding: 5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  line-height: 1.5rem;

  @media (max-width: 786px) {
    padding: 3rem 0.1rem;
  }
`;

const Project = styled.div`
  width: 100%;
  margin: 4rem 0;
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 786px) {
    flex-direction: column;
  }
  
`;

const DetailsCard = styled.section`
  width: 50%;
  padding: 1rem 1rem 1rem 1rem;
  margin: 0 1rem;
  font-size: 1.0rem;
  
  border-radius: 14px;
  background: #181e2b;
  box-shadow:  -10px -10px 19px #10141c, 
                10px 10px 19px #20283a;

  p {
    font-weight: 300;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-align: center;

    li {
      padding-right: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;

      a {
        color: #fff;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
    }
  }

  @media (max-width: 786px) {
    width: 80%;
  }
`

const ProjectsWrapper = () => {
  return (
    <ProjectsContainer>

      <Project>
        <ImageCard project='garden' />
        <DetailsCard>
          <h3>Garden of Knowledge</h3>
          <p>
            Student and Staff management system for an English language school located in Bahrain.
            Currently expanding to larger regions across the far East.
          </p>
          <p>React | Redux | Router | Styled-Components | Node | PostgreSQL | AWS | Heroku </p>
          <br />
          <ul>
            <li>
              <a href='https://github.com/Labs24GOK' target="_blank">
                <FontAwesomeIcon icon={faGithubSquare} size={'2x'} />
              </a>
            </li>

            <li>
              <a href='https://www.notion.so/The-Garden-of-Knowledge-c6fe89f6e98d493fa597de84a8bd6818' target="_blank">
                <NotionIcon />
              </a>
            </li>

            <li>
              <a href='https://thegardenedu.com' target="_blank">
                <FontAwesomeIcon icon={faExternalLinkAlt} size={'2x'} />
              </a>
            </li>
          </ul>
        </DetailsCard>
      </Project>

      <Project direction='row-reverse'>
        <ImageCard direction='reverse' project='flatten'/>
        <DetailsCard style={{ 
          textAlign: 'right', 
          boxShadow: ('10px -10px 19px #10141c','-10px 10px 19px #20283a') 
          }}>
          <h3>Flatten the Curve</h3>
          <p>
          Covid-19 Information and geo-location based messaging app where people can post messages to help others relay information without any physical contact
          </p>
          <p>React | Redux | Router | MaterialUI | Firebase | Heroku </p>
          <br />

          <ul>
            <li>
              <a href='https://github.com/FlattenTheCurve19/Front-End' target="_blank">
                <FontAwesomeIcon icon={faGithubSquare} size={'2x'} />
              </a>
            </li>

            <li>
              <a href='https://flatten-the-curve19.now.sh/' target="_blank">
                <FontAwesomeIcon icon={faExternalLinkAlt} size={'2x'} />
              </a>
            </li>
          </ul>
        </DetailsCard>
      </Project>
    </ProjectsContainer>
  );
};

export default ProjectsWrapper;
