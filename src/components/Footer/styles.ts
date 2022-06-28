import styled from 'styled-components';

export const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: var(--footer-background);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
`;

export const IconContainer = styled.div`
  margin-left: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
`;

export const ImagePink = styled.img`
  width: 14rem;
`

export const ImageGreen = styled.img`
  position: absolute;
  top: 0;
  left: 70%;
`

export const ImageYellow = styled.img`
  position: absolute;
  right: -2%;
`