import styled from "src/lib/StyledComponents";
import { Link as BaseLink } from "react-scroll";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  width: 1000px;
  padding: 1rem 2rem;
  height: 100%;
  @media (max-width: 1020px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${props => props.theme.darkDarkGray};
  z-index: 25;
  height: 10vh;
`;

export const Links = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin-left: auto;
`;

export const Link = styled(BaseLink)`
  font-size: 2rem;
  color: ${props => props.theme.lightGray1};
  font-weight: bold;
  text-decoration: none;
  margin: 0 1rem;
  cursor: pointer;
  position: relative;
  &:hover {
    color: ${props => props.theme.white};
  }
  &:after {
    transition: transform 0.5s ease-in-out;
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 0.2rem;
    border-radius: 0.1rem;
    background-color: ${props => props.theme.primary};
    transform: scaleX(0);
  }
  &.active:after {
    transform: scaleX(1);
  }
`;

export const FilledLogo = styled.img.attrs({
  src: "/icons/logos/filled.svg"
})``;
