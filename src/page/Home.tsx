import Footer from "../components/Footer";
import Form from "../components/Form";
import Map from "../components/Map";
import { Container, Image } from './styles';
import yellowImage from '../assets/yellowImageFooter.svg';

export default function Home(){
  return(
    <>
      <Container>
        <Image src={yellowImage} />
        <Form />
        {/* <Map /> */}
      </Container>
      <Footer />
    </>
  )
}