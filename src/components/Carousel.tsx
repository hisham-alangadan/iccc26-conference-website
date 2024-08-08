import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../assets/CSEDept.jpg';
import ExampleCarouselImage2 from '../assets/ECEDept.jpg';
import ExampleCarouselImage3 from '../assets/EEEDept.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/imagecarousel.css';

export default function ImageCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item interval={1500}>
        <img src={ExampleCarouselImage} alt="" />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img src={ExampleCarouselImage2} alt="" />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img src={ExampleCarouselImage3} alt="" />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}