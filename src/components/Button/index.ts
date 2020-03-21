import styled, { css } from "src/lib/StyledComponents";

export const Buttons = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const buttonStyles = css`
  border: none;
  border-radius: 4px;
  padding: 1rem 1.5rem;
  width: 40%;
  font-weight: bold;
  font-size: 1.6rem;
  cursor: pointer;
  text-align: center;
  transition: transform 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transform: translateY(-4px);
  }
`;

export const PrimaryButton = styled.button`
  ${buttonStyles}
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};
`;

export const SecondaryButton = styled.button`
  ${buttonStyles}
  background-color: ${props => props.theme.darkDarkGray};
  color: ${props => props.theme.white};
`;
