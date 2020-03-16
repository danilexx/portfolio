import styled from "src/lib/StyledComponents";

export const TechnologiesGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media screen and (max-width: 470px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  min-width: 31%;
  flex: 1;
  background-color: ${props => props.theme.darkGray};
  padding: 2rem;
  border-radius: 4px;
  margin: 1rem;
`;

export const TechnologyImage = styled.img`
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 1rem;
  display: block;
  width: 8rem;
  height: 8rem;
`;

export const TechnologyName = styled.h1`
  font-size: 2rem;
  color: ${props => props.theme.white};
  margin: 1rem auto;
  display: block;
  text-align: center;
`;

export const TechnologyDescription = styled.p`
  font-size: 1.25rem;
  color: ${props => props.theme.lightGray1};
  margin: 0;
  text-align: center;
`;
