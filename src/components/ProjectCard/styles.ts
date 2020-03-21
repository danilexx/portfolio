import styled from "src/lib/StyledComponents";

export const ProjectsGrid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  background-color: ${props => props.theme.darkGray};
  border-radius: 4px;
  margin: 1rem;
  flex: 1;
  min-width: 40%;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
`;

export const ProjectName = styled.h1`
  color: ${props => props.theme.white};
  width: 100%;
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0.5rem auto;
  text-align: center;
`;

export const ProjectDescription = styled.p`
  font-size: 1.5rem;
  color: ${props => props.theme.lightGray1};
  width: 100%;
  text-align: left;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProjectInfo = styled.div`
  padding: 1rem;
`;
