import styled from "src/lib/StyledComponents";
import { css } from "styled-components";

export const Container = styled.div<{ isOn: boolean }>`
  width: 90%;
  max-width: 800px;
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 4px;
  transform: translate(-50%, -50%);
  background-color: ${props => props.theme.darkDarkGray};
  padding: 1rem;
  transition: opacity 0.2s ease-in-out;
  ${props =>
    props.isOn
      ? css`
          opacity: 1;
        `
      : css`
          pointer-events: none;
          opacity: 0;
        `}
`;

export const Image = styled.img`
  width: 100%;
`;

export const Close = styled.img.attrs({
  src: "/icons/menu/close.svg"
})`
  height: 5rem;
  width: 5rem;
  position: absolute;
  top: 0%;
  right: 0%;
  margin: 1rem;
  cursor: pointer;
  transition: opacity 0.05 ease-in-out;
  opacity: 1;
  &:hover {
    opacity: 0.8;
  }
`;
