import { FooterContainer, Container } from "./styles";
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa'

export default function Footer(){
  return(
    <FooterContainer>
      <Container>
        <FaLinkedinIn color="gray" />
        <FaTwitter color="gray" />
        <FaFacebookF color="gray" />
        <FaPinterestP color="gray" />
      </Container>
    </FooterContainer>
  )
}