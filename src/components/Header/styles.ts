import styled from "src/lib/StyledComponents";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin: 1rem 0;
`;

export const Title = styled.h3`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${props => props.theme.white};
  margin: 0;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    left: -2rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1.5rem;
    height: 0.4rem;
    background-color: ${props => props.theme.primary};
  }
  margin-left: 2rem;
`;

export const SubTitle = styled.p`
  font-size: 1.5rem;
  color: ${props => props.theme.lightGray1};
  margin: 0;
`;

export const Separator = styled.div`
  margin: 0.5rem 1rem;
  width: 0.2rem;
  height: 2rem;
  background-color: ${props => props.theme.darkGray};
`;
