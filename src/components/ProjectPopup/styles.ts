import styled from "src/lib/StyledComponents";
import { css } from "styled-components";

export const Overlay = styled.div<{ isOn: boolean }>`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;
  overflow: auto;
  border-radius: 4px;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
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
        `} /* padding: 4rem 0; */

  @media screen and (max-width: 550px) {
    background-color: rgba(0, 0, 0, 0.98);
    padding: 0;
  }
`;

export const Container = styled.div`
  background-color: ${props => props.theme.darkGray};
  border-radius: 4px;
  padding: 1rem;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  max-width: 800px;
  margin: auto;
  z-index: 110;
  /* @media screen and (max-width: 650px) {
    width: 100%;
    max-width: initial;
    border-radius: 0;
    height: 100%;
    margin: 0;
    justify-content: center;
    padding: 0;
  } */
  @media screen and (min-aspect-ratio: 9/6) {
    min-height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: transparent;
    padding: 2rem 0;
  }
  @media screen and (max-width: 550px) {
    background-color: transparent;
  }
`;

export const Image = styled.img`
  width: 100%;
  margin: 0 auto;
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
  z-index: 120;
  &:hover {
    opacity: 0.8;
  }
`;
