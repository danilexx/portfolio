import styled from "src/lib/StyledComponents";
import OffsetedLink from "../OffsetedLink";
import { darken } from "polished";

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
  display: flex;
  flex-direction: row;
  align-items: center;
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
  flex-wrap: wrap;
`;

export const MenuLink = styled(OffsetedLink)`
  margin: 0 1rem;
`;

export const Link = styled(OffsetedLink)`
  font-size: 2rem;
  color: ${props => props.theme.lightGray1};
  font-weight: bold;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  position: relative;
  &:hover {
    color: ${props => props.theme.white};
    &:after {
      transform: scaleX(1);
    }
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

  @media screen and (max-width: 480px) {
    padding: 2rem 2rem;
    /* padding-left: 4rem; */
    background-color: rgba(255, 255, 255, 0.1);
    margin: 1rem auto;
    /* display: flex !important; */
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 90%;
    border-radius: 4px;
    &:after {
      transition: 0.05s ease-in-out;
      transition-property: transform, opacity;
      content: "";
      position: absolute;
      top: 50%;
      left: 2rem;
      width: 2rem;
      height: 2rem;
      border-radius: 4px;
      background-color: ${props => props.theme.primary};
      transform: translateY(-50%) rotate(45deg);
      opacity: 0;
    }
    &:active:after,
    &:focus:after {
      opacity: 1;
      transform: translateY(-50%) rotate(45deg);
    }
  }
`;

export const FilledLogo = styled.img.attrs({
  src: "/icons/logos/filled.svg"
})``;

export const MenuWrap = styled.div`
  .bm-overlay {
    top: 0;
    left: 0;
    z-index: 55 !important;
  }
  .bm-menu-wrap {
    top: 0;
    z-index: 55 !important;
  }
  .bm-burger-button {
    /* position: fixed; */
    display: none;
    /* width: 36px;
    height: 30px;
    right: 2rem;
    top: 5vh;
    transform: translateY(-50%);
    z-index: 65; */
  }

  .bm-burger-bars {
    background: ${props => props.theme.white};
  }

  .bm-morph-shape {
    fill: #373a47;
  }

  .bm-menu {
    z-index: 60;
    background: ${props => darken(0.03, props.theme.darkDarkGray)};
    /* height: 100vh; */
    overflow: hidden;
    padding-top: 10vh;
    .bm-item-list {
      overflow: hidden;
    }
  }
`;

export const BurguerMenu = styled.img.attrs<{
  pinned?: boolean;
  isMenuOpened?: boolean;
}>(props => ({
  src: `/icons/menu/${props.isMenuOpened ? "close" : "open"}.svg`
}))<{
  pinned?: boolean;
  isMenuOpened?: boolean;
}>`
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
  /* margin-left: auto;
  margin-right: 2rem; */
  position: ${props => (props.pinned ? "fixed" : "absolute")};
  top: 5vh;
  right: 2rem;
  transform: translateY(-50%);
  z-index: ${props => (props.pinned ? "70" : "45")};
  cursor: pointer;
  transition: transform 0.05s ease-in-out;
  &:active {
    transform: translateY(-50%) scale(0.9);
  }
`;

// export const BurguerMenuButtonWrapper = styled.div`
//   height: 10vh;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
// `;
