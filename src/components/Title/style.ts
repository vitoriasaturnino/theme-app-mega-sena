import styled from 'styled-components';

export const TitleStyle = styled.div`
  font-family: 'Tahoma';
  font-size: 35px;
  color:  ${props => props.theme.colors.backgroundCirculo};
  font-weight: bold;

  h2{
    color:  ${props => props.theme.colors.bold};
  }
`;