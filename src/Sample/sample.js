import { useState, useEffect } from "react";
import { Text, Box, VStack } from "@chakra-ui/react";

function App() {
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
      <VStack>
        <Box
          w="1349px"
          h="679px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="relative"
          bgColor="#191919"
        >
          {squareElements1}
          {squareElements2}
          {squareElements3}
          {squareElements4}
        </Box>
      </VStack>
    </>
  );
}

export default App;
