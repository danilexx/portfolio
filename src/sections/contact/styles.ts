import styled from "src/lib/StyledComponents";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  flex-wrap: wrap;
`;

export const Or = styled.h1`
  font-size: 4rem;
  font-weight: bolder;
  margin: 1rem 5%;
  color: ${props => props.theme.darkDarkGray};
  @media screen and (max-width: 720px) {
    /* margin: 1rem auto; */
    width: 100%;
    text-align: center;
  }
`;
