import Footer from "../components/Footer";
import Form from "../components/Form";
import Map from "../components/Map";
import { Container } from './styles';

export default function Home(){
  return(
    <>
      <Container>
        <Form />
        {/* <Map /> */}
      </Container>
      <Footer />
    </>
  )
}