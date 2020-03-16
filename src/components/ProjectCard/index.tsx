import React from "react";
import {
  Container,
  ProjectImage,
  ProjectInfo,
  ProjectName,
  ProjectDescription
} from "./styles";
import { Buttons, PrimaryButton, SecondaryButton } from "src/components/Button";

export { ProjectsGrid } from "./styles";

interface Project {
  name: string;
  imgUrl: string;
  description: string;
  demoLink?: string;
  codeLink?: string;
  tecnologies?: [];
}

const ProjectCard = ({
  project: { imgUrl, name, description }
}: {
  project: Project;
}) => {
  return (
    <Container>
      <ProjectImage src={imgUrl} />
      <ProjectInfo>
        <ProjectName>{name}</ProjectName>
        <ProjectDescription>{description}</ProjectDescription>
        <Buttons>
          <SecondaryButton>Codigo</SecondaryButton>
          <PrimaryButton>Demo</PrimaryButton>
        </Buttons>
      </ProjectInfo>
    </Container>
  );
};

export default ProjectCard;
