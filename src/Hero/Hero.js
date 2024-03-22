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
import { MdPushPin } from "react-icons/md";

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

  // for design appearing
  const [currentLayer1, setCurrentLayer1] = useState(0);
  const [currentLayer2, setCurrentLayer2] = useState(0);
  const [currentLayer3, setCurrentLayer3] = useState(0);
  const [currentLayer4, setCurrentLayer4] = useState(0);

  useEffect(() => {
    const totalLayers = 5;
    const delays1 = Array.from(
      { length: totalLayers },
      () => Math.random() * 2000 + 800
    );
    const delays2 = Array.from(
      { length: totalLayers },
      () => Math.random() * 2000 + 500
    );
    const delays3 = Array.from(
      { length: totalLayers },
      () => Math.random() * 2000 + 900
    );
    const delays4 = Array.from(
      { length: totalLayers },
      () => Math.random() * 2000 + 600
    );

    const intervals1 = delays1.map((delay, index) => {
      return setInterval(() => {
        setCurrentLayer1(index);
      }, delay);
    });

    const intervals2 = delays2.map((delay, index) => {
      return setInterval(() => {
        setCurrentLayer2(index);
      }, delay);
    });

    const intervals3 = delays3.map((delay, index) => {
      return setInterval(() => {
        setCurrentLayer3(index);
      }, delay);
    });

    const intervals4 = delays4.map((delay, index) => {
      return setInterval(() => {
        setCurrentLayer4(index);
      }, delay);
    });

    return () => {
      intervals1.forEach((interval) => clearInterval(interval));
      intervals2.forEach((interval) => clearInterval(interval));
      intervals3.forEach((interval) => clearInterval(interval));
      intervals4.forEach((interval) => clearInterval(interval));
    };
  }, []);

  const calculatePosition1 = (layerIndex) => {
    const top = `${50 + layerIndex * 50}px`;
    const left = `${395 + layerIndex * 50}px`;
    return { top, left };
  };

  const calculatePosition2 = (layerIndex) => {
    const top = `${150 + layerIndex * 50}px`;
    const left = `${395 + layerIndex * 50}px`;
    return { top, left };
  };

  const calculatePosition3 = (layerIndex) => {
    const top = `${250 + layerIndex * 50}px`;
    const left = `${395 + layerIndex * 50}px`;
    return { top, left };
  };

  const calculatePosition4 = (layerIndex) => {
    const top = `${50 + layerIndex * 50}px`;
    const left = `${495 + layerIndex * 50}px`;
    return { top, left };
  };

  const squareElements1 = [1, 2, 3, 4, 5].map((layerIndex) => {
    const { top, left } = calculatePosition1(layerIndex);
    return (
      <Box
        key={layerIndex}
        w="10px"
        h="10px"
        position="absolute"
        top={top}
        left={left}
        opacity={currentLayer1 === layerIndex - 1 ? 1 : 0}
        transition="opacity 1s ease-in-out"
        backgroundColor={
          layerIndex === 1
            ? "#212529"
            : layerIndex === 2
            ? "#dee2e6"
            : layerIndex === 3
            ? "#f8f9fa"
            : layerIndex === 4
            ? "#adb5bd"
            : "#343a40"
        }
      />
    );
  });

  const squareElements2 = [1, 2, 3].map((layerIndex) => {
    const { top, left } = calculatePosition2(layerIndex);
    return (
      <Box
        key={layerIndex}
        w="10px"
        h="10px"
        position="absolute"
        top={top}
        left={left}
        opacity={currentLayer2 === layerIndex - 1 ? 1 : 0}
        transition="opacity 1s ease-in-out"
        backgroundColor={
          layerIndex === 1
            ? "#6c757d"
            : layerIndex === 2
            ? "#dee2e6"
            : "#6c757d"
        }
      />
    );
  });

  const squareElements3 = [1].map((layerIndex) => {
    const { top, left } = calculatePosition3(layerIndex);
    return (
      <Box
        key={layerIndex}
        w="10px"
        h="10px"
        position="absolute"
        top={top}
        left={left}
        opacity={currentLayer3 === layerIndex - 1 ? 1 : 0}
        transition="opacity 1s ease-in-out"
        backgroundColor={layerIndex === 1 ? "#212529" : "#e9ecef"}
      />
    );
  });

  const squareElements4 = [1, 2, 3].map((layerIndex) => {
    const { top, left } = calculatePosition4(layerIndex);
    return (
      <Box
        key={layerIndex}
        w="10px"
        h="10px"
        position="absolute"
        top={top}
        left={left}
        opacity={currentLayer4 === layerIndex - 1 ? 1 : 0}
        transition="opacity 1s ease-in-out"
        backgroundColor={
          layerIndex === 1
            ? "#6c757d"
            : layerIndex === 2
            ? "#dee2e6"
            : "#6c757d"
        }
      />
    );
  });

  return (
    <>
      <VStack justifyContent="center" alignItems="center">
        <Box
          w="1349px"
          h="679px"
          bgColor="#191919"
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="relative"
        >
          <Center>
            <Heading
              style={{
                cursor: hovered ? "arrow" : "default",
                backgroundSize: hovered ? "100% 100%" : "49%",
                backgroundPosition: hovered ? "center" : "center",
                position: "relative",
                zIndex: 1,
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
                  LNDR
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
          {hovered ? null : squareElements1}
          {hovered ? null : squareElements2}
          {hovered ? null : squareElements3}
          {hovered ? null : squareElements4}
          {hovered ? null : (
            <>
              <Box mt="150px">
                <MdPushPin
                  color="white"
                  fontSize="80px"
                  style={{ transform: "rotate(45deg)" }}
                />
              </Box>
            </>
          )}
        </Box>
      </VStack>
    </>
  );
}

export default Hero;
