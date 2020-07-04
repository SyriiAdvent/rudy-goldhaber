import React from "react";
import styled from "styled-components";
import ImageCard from "./ImageCard";
import GithubIcon from "../SVG/GithubIcon";
import NotionIcon from "../SVG/NotionIcon";
import WebLinkIcon from "../SVG/WebLinkIcon";

const ProjectsContainer = styled.div`
  padding: 5rem 2rem;
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Project = styled.div`
  width: 100%;
  height: 40vh;
  /* background: red; */
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  /* border: 1px solid black; */
`;

const DetailsCard = styled.section`
  width: 50%;
  font-size: 1.0rem;

  p {
    font-weight: 300;
  }

  ul {
    padding: 0;
    margin: 0;
    width: 8rem;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
  }
`

const ProjectsWrapper = () => {
  return (
    <ProjectsContainer>

      <Project>
        <ImageCard />
        <DetailsCard>
          <h3>Garden of Knowledge</h3>
          <p>
            Student and Staff management system for an English language school located in Bahrain.
            Currently expanding to larger regions across the far East.
          </p>
          <p>React | Redux | Router | Styled-Components | Node | PostgreSQL | AWS | Heroku </p>
          <br />
          <ul>
            <li><a href='https://github.com/Labs24GOK'><GithubIcon /></a></li>
            <li><a href='https://www.notion.so/The-Garden-of-Knowledge-c6fe89f6e98d493fa597de84a8bd6818'><NotionIcon /></a></li>
            <li><a href='https://thegardenedu.com'><WebLinkIcon /></a></li>
          </ul>
        </DetailsCard>
      </Project>

      {/* <Project>
        <ImageCard />
        <div>
          <h3>Garden of Knowledge</h3>
        </div>
      </Project>

      <Project>
        <ImageCard />
        <div>
          <h3>Garden of Knowledge</h3>
        </div>
      </Project> */}

    </ProjectsContainer>
  );
};

export default ProjectsWrapper;
