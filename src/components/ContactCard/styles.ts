import styled from "src/lib/StyledComponents";

export const ContactCardList = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  align-items: center;

  @media screen and (max-width: 720px) {
    width: 90%;
    margin: 1rem auto;
  }
`;

export const Container = styled.a`
  background-color: ${props => props.theme.darkGray};
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  width: 100%;
  transition: transform 0.2s ease-in-out;
  margin: 0.5rem 0;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    transform: translateY(-4px);
  }
`;

export const IconWrapper = styled.div<{ color: string }>`
  background-color: ${props => props.color};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const Icon = styled.img`
  width: 6rem;
  height: 6rem;
`;

export const ContactName = styled.div`
  padding: 1rem 1rem;
  color: ${props => props.theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: 0.12rem;
  flex: 1;
  text-align: center;
`;
