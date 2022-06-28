import { FooterContainer, Container, ImagePink, ImageGreen, ImageYellow, IconContainer } from "./styles";
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa'
import pinkImage from '../../assets/pinkCircleFooter.svg';
import greenImage from '../../assets/greenImageFooter.svg';
import yellowImage from '../../assets/yellowImageFooter.svg';

export default function Footer(){
  return(
    <FooterContainer>
      <Container>
        <ImagePink src={pinkImage} />
        <IconContainer>
          <FaLinkedinIn color="gray" />
          <FaTwitter color="gray" />
          <FaFacebookF color="gray" />
          <FaPinterestP color="gray" />
        </IconContainer>
        <ImageGreen src={greenImage} />
        <ImageYellow src={yellowImage} />
      </Container>
    </FooterContainer>
  )
}