import styled, { css, keyframes } from "src/lib/StyledComponents";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: ${props => props.theme.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const WhiteLogo = styled.img.attrs({
  src: "/icons/logos/white.svg"
})`
  width: 20rem;
  height: 10rem;
  margin: 3rem;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Main = styled.div`
  margin: 0 auto;
`;
export const Title = styled.h1`
  font-size: 5rem;
  color: white;
  font-weight: bold;
`;
export const Cube = styled.div`
  background-color: ${props => props.theme.primary};
  width: 2rem;
  height: 2rem;
  transform: rotate(45deg);
  border-radius: 4px;
  margin-right: 1.5rem;
`;

const rotation = keyframes`
  0% {
    transform: rotate(45deg) scale(1);
  }
  50% {
    transform: rotate(360deg) scale(0.75);
  }
  100%{
    transform: rotate(45deg) scale(1);
  }
`;

export const SectionButton = styled.button`
  display: flex;
  flex-direction: row;
  padding: 1.5rem 2rem;
  margin: 1rem auto;
  background-color: ${props => props.theme.background};
  border-radius: 4px;
  border: none;
  font-size: 2rem;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;
  &:hover {
    transform: translateY(-4px);
    & ${Cube} {
      animation: ${rotation} 2s ease-in-out infinite forwards;
    }
  }
`;

const StrokeStyles = css`
  width: 100rem;
  height: 4rem;
  position: absolute;
  bottom: 0;
  right: -2rem;
  transform: rotate(-45deg);
  transform-origin: right;
`;

export const PrimaryStroke = styled.div`
  ${StrokeStyles}
  background-color: ${props => props.theme.background};
  bottom: 18rem;
`;

export const SecondaryStroke = styled.div`
  ${StrokeStyles}
  background-color: white;
  bottom: 10rem;
`;
