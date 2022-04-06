import styled from 'styled-components';

export const Paragraph = styled.p`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  margin: ${(props) => props.margin};
  font-family: ${(props) => props.family};
`;
