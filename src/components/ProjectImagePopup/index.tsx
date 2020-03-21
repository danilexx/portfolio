import React from "react";
import { Container, Close, Image } from "./styles";
import { useClickAway } from "react-use";
import { ProjectsContext } from "../ProjectCard";

interface Props {
  isOn: boolean;
  img: string;
}

const ProjectImagePopup: React.FC<Props> = ({ isOn, img }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { toggle } = React.useContext(ProjectsContext);
  const close = () => {
    toggle(false);
  };
  useClickAway(ref, close);
  return (
    <Container ref={ref} isOn={isOn}>
      <Close onClick={close} />
      <Image src={img} />
    </Container>
  );
};

export default ProjectImagePopup;
