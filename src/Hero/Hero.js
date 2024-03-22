import { Heading, Box, Center, VStack, Text } from "@chakra-ui/react";
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
  const [hovered, setHovered] = useState(false);

  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 500);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleHover = () => {
    setHovered(!hovered);
  };

  return (
    <>
      <VStack justifyContent="center" alignItems="center">
        <Box
          w="100%"
          h="679px"
          bgColor="#191919"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Center>
            <Heading
              style={{
                cursor: hovered ? "arrow" : "default",
                backgroundSize: hovered ? "100% 100%" : "45%",
                backgroundPosition: hovered ? "center" : "center",
              }}
              fontFamily={hovered ? "Black Ops One" : "Black Ops One"}
              bgImage={hovered ? "" : images[currentImgIndex]}
              bgSize={hovered ? "auto" : "cover"}
              bgClip="text"
              fontSize={hovered ? "150px" : "380px"}
              fontWeight="semi-bold"
              color={hovered ? "#fcfcfc" : "transparent"}
              textAlign="center"
              transition="background-size 1s, color 3s"
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            >
              {hovered ? (
                <>
                  LANDER
                  <Text
                    textAlign="justify"
                    fontSize={hovered ? "18px" : "18px"}
                    px="100px"
                    fontFamily="Bebas Neue, sans-serif"
                    style={{
                      textAlign: "center",
                      wordSpacing: "5px",
                      lineHeight: "26px",
                    }}
                    letterSpacing="4px"
                  >
                    Welcome to my digital playground! 🚀 Where bytes meet
                    brilliance, I'm a code-slinging Computer Science student at
                    Laguna University, deep-diving into my fourth year of
                    college. With a heart that beats in code and a mind wired
                    for innovation, I'm here to share my passion for
                    programming. Join me in unlocking the magic of code as we
                    journey through the ever-evolving landscape of technology.
                    Let's turn lines of code into works of art together! 💻✨
                  </Text>
                </>
              ) : (
                "X"
              )}
            </Heading>
          </Center>
        </Box>
        {[1, 2, 3].map((index) => (
          <Text
            key={index}
            fontSize="24px"
            position="absolute"
            top={`${index * 10}px`}
            left={`${index * 10}px`}
            color={index === 1 ? "red" : index === 2 ? "blue" : "green"}
          >
            Hello
          </Text>
        ))}
      </VStack>
    </>
  );
}

export default Hero;
