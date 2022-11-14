import styled from "styled-components";

export const EstimativaProximoConcursoStyle = styled.div`
  font-family: 'Tahoma';
  font-size: 20px;
  color: ${props => props.theme.colors.text};

  h2{
    color:  ${props => props.theme.colors.colorEstimativa};
  }
`;