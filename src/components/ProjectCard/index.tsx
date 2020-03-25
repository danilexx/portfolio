/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext } from "react";
import {
  Container,
  ProjectImage,
  ProjectInfo,
  ProjectName,
  ProjectDescription,
  ProjectsGrid as ProjectsGridContainer
} from "./styles";
import { Buttons, PrimaryButton, SecondaryButton } from "src/components/Button";
import { useToggle, useLockBodyScroll } from "react-use";
import ProjectPopup from "../ProjectPopup";

export interface Project {
  name: string;
  imgUrl: string;
  description: string;
  demo?: string;
  code?: string;
  tecnologies?: [];
}

const firstProject = {
  name: "Wittoeft",
  description:
    "Um eCommerce de roupas, fazia parte do trabalho de conclusão de curso da ETEC, utiliza SSR (NextJs) no frontend e NodeJs no back.",
  imgUrl: "/images/witthoeft.png",
  demo: "https://witthoeft.now.sh",
  code: "https://github.com/danilexx/witthoeft"
};

export const ProjectsContext = createContext<any>({
  toggle: () => {},
  setImageUrl: () => {},
  currentProject: null
});

interface ProjectsGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ children }) => {
  const [isImagePopupShowingUp, toggle] = useToggle(false);
  const [currentProject, setCurrentProject] = React.useState<Project>(
    firstProject
  );
  useLockBodyScroll(isImagePopupShowingUp);
  return (
    <ProjectsContext.Provider
      value={{ toggle, currentProject, setCurrentProject }}
    >
      <ProjectsGridContainer>{children}</ProjectsGridContainer>
      <ProjectPopup project={currentProject} isOn={isImagePopupShowingUp} />
    </ProjectsContext.Provider>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const { imgUrl, name, description, code, demo } = project;
  const { setCurrentProject, toggle } = React.useContext(ProjectsContext);
  const handleImageClick = () => {
    setCurrentProject(project);
    toggle(true);
  };
  return (
    <Container>
      <ProjectImage onClick={handleImageClick} src={imgUrl} />
      <ProjectInfo>
        <ProjectName>{name}</ProjectName>
        <ProjectDescription>{description}</ProjectDescription>
        <Buttons>
          <SecondaryButton as="a" href={code || "#"} target="_blank">
            Codigo
          </SecondaryButton>
          <PrimaryButton as="a" href={demo || "#"} target="_blank">
            Demo
          </PrimaryButton>
        </Buttons>
      </ProjectInfo>
    </Container>
  );
};

export default ProjectCard;
