import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Corousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item interval={1000}>
        <img
          className="d-block h-96 w-7/12 mx-auto rounded-lg object-fill"
          src="https://www.shutterstock.com/image-vector/big-five-personality-traits-infographic-600nw-2199443099.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block h-96 w-7/12 mx-auto rounded-lg object-fill"
          src="https://www.shutterstock.com/image-vector/ocean-big-five-personality-traits-260nw-2372515605.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block h-96  w-7/12 mx-auto rounded-lg object-fill"
          src="https://t4.ftcdn.net/jpg/06/05/59/29/360_F_605592903_0zfjMUQYOzBvOPCxx0CqQDBE0pd3KFzZ.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Corousel;
