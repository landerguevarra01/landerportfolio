import { Heading, Image, Box, Center, VStack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Img1 from "../Images/IMG_2983.JPG";
import Img2 from "../Images/IMG_2984.JPG";
import Img3 from "../Images/IMG_2985.JPG";
import Img4 from "../Images/IMG_2986.JPG";
import Img5 from "../Images/IMG_2987.JPG";
import Img6 from "../Images/IMG_2988.JPG";
import Img7 from "../Images/IMG_2989.JPG";
import Img8 from "../Images/IMG_2990.JPG";

function Hero() {
  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8];
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 500); // Change image every 1 second (adjust as needed)

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <VStack justifyContent="center" alignItems="center" bgColor="red">
        <Box w="1440px" h="1024px" bgColor="blue">
          <Heading
            fontFamily="Black Ops One"
            bgImage={images[currentImgIndex]}
            bgSize="cover"
            bgClip="text"
            fontSize="500px"
            fontWeight="bold"
            color="transparent"
            textAlign="center" // Center the text horizontally
            mt="170px"
            sx={{
              backgroundSize: "10%", // Adjust the size as needed
              backgroundPosition: "center", // Optional: Center the mask image
            }}
          >
            X
          </Heading>
        </Box>
      </VStack>
    </>
  );
}

export default Hero;
