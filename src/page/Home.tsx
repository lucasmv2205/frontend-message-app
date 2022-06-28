import Footer from "../components/Footer";
import Form from "../components/Form";
import MapComponent from "../components/Map";
import { Container, ImageTopYellow, ImageYellow, ImagePink } from './styles';
import yellowImage from '../assets/yellowImageFooter.svg';
import bigYellowImage from '../assets/bigYellowImage.svg';
import pinkImage from '../assets/pinkCircleFooter.svg';

export default function Home(){
  return(
    <>
      <Container>
        <ImageTopYellow src={yellowImage} />
        <Form />
        <ImagePink src={pinkImage} />
        <ImageYellow src={bigYellowImage} />
        <MapComponent />
      </Container>
      <Footer />
    </>
  )
}