import styled from "src/lib/StyledComponents";

export const HistorySection = styled.div<{ reverse?: boolean }>`
  display: flex;
  flex-direction: ${props => (props.reverse ? "row-reverse" : "row")};
  align-items: center;
  flex-wrap: wrap;
  margin: 1.5rem 0;
`;

export const HistoryText = styled.p`
  color: ${props => props.theme.lightGray1};
  font-size: 2rem;
  flex: 1;
  margin: 0 1rem;
  @media screen and (max-width: 460px) {
    width: 90%;
    margin: 1rem auto;
    flex: none;
  }
`;

export const HistoryImage = styled.img`
  border-radius: 4px;
  max-width: 35%;
  margin: 1rem 2rem;
  @media screen and (max-width: 600px) {
    width: 90%;
    margin: 1rem auto;
    max-width: 100%;
  }
`;

export const Separator = styled.div`
  height: 0.2rem;
  width: 90%;
  margin: 1rem auto;
  background-color: ${props => props.theme.darkGray};
`;
