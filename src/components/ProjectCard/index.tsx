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
import { useToggle } from "react-use";
import ProjectImagePopup from "../ProjectImagePopup";

interface Project {
  name: string;
  imgUrl: string;
  description: string;
  demo?: string;
  code?: string;
  tecnologies?: [];
}

export const ProjectsContext = createContext<any>({
  toggle: () => {},
  setImageUrl: () => {},
  imageUrl: ""
});

interface ProjectsGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ children }) => {
  const [isImagePopupShowingUp, toggle] = useToggle(false);
  const [imageUrl, setImageUrl] = React.useState<string>("");
  return (
    <ProjectsContext.Provider value={{ toggle, imageUrl, setImageUrl }}>
      <ProjectsGridContainer>{children}</ProjectsGridContainer>
      <ProjectImagePopup img={imageUrl} isOn={isImagePopupShowingUp} />
    </ProjectsContext.Provider>
  );
};

const ProjectCard = ({
  project: { imgUrl, name, description, code, demo }
}: {
  project: Project;
}) => {
  const { setImageUrl, toggle } = React.useContext(ProjectsContext);
  const handleImageClick = () => {
    setImageUrl(imgUrl);
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
