import { Box, Heading, VStack } from "@chakra-ui/react";
import { motion, useSpring } from "framer-motion";
import React from "react";

function Sample() {
  const { transform } = useSpring({
    transform: "rotateY(0deg)", // Initial rotation
  });

  return (
    <Box mt="100px" position="relative" w="fit-content" h="fit-content">
      <motion.div
        style={{
          perspective: "1000px", // Add perspective to the container
          rotateY: transform, // Apply rotation dynamically
        }}
        whileHover={{ rotateY: -90 }} // Rotate 90 degrees to the left on hover
      >
        <VStack>
          <Heading fontSize="100px">X</Heading>
        </VStack>
      </motion.div>
    </Box>
  );
}

export default Sample;
