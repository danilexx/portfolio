import styled from "src/lib/StyledComponents";
import { Form as BaseForm } from "@unform/web";
import { Buttons as BaseButtons } from "src/components/Button";

export const Buttons = styled(BaseButtons)`
  margin: 0;
  margin-top: 2rem;
  justify-content: space-between;
`;

export const Title = styled.h1`
  color: ${props => props.theme.white};
  margin: 1rem auto;
  text-align: center;
  font-size: 2.5rem;
`;

export const Form = styled(BaseForm)`
  background-color: ${props => props.theme.darkGray};
  padding: 2rem;
  border-radius: 4px;
  width: 45%;

  @media screen and (max-width: 720px) {
    width: 90%;
    margin: 1rem auto;
  }
`;
