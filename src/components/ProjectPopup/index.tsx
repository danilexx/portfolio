import React from "react";
import { Container, Close, Image, Overlay } from "./styles";
import { useClickAway, useKey } from "react-use";
import { ProjectsContext, Project } from "../ProjectCard";
import {
  ProjectInfo,
  ProjectName,
  ProjectDescription
} from "../ProjectCard/styles";
import { Buttons, SecondaryButton, PrimaryButton } from "../Button";

interface Props {
  isOn: boolean;
  project: Project;
}

const ProjectPopup: React.FC<Props> = ({ isOn, project }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { imgUrl, name, description, code, demo } = project;
  const { toggle } = React.useContext(ProjectsContext);
  const close = () => {
    toggle(false);
  };
  useKey("Escape", close);
  useClickAway(ref, close);
  return (
    <Overlay isOn={isOn}>
      <Close onClick={close} />
      <Container ref={ref}>
        <Image src={imgUrl} />
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
    </Overlay>
  );
};

export default ProjectPopup;
