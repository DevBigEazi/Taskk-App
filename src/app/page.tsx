"use client";

import { SimpleGrid, Box } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <SimpleGrid columns={4} spacing={10} p="20px" minChildWidth="250px">
      <Box bg="white" h="200px" border="1px solid black">
        1
      </Box>
      <Box bg="white" h="200px" border="1px solid black">
        2
      </Box>
      <Box bg="white" h="200px" border="1px solid black">
        3
      </Box>
      <Box bg="white" h="200px" border="1px solid black">
        4
      </Box>

      <Box bg="white" h="200px" border="1px solid black">
        5
      </Box>
      <Box bg="white" h="200px" border="1px solid black">
        6
      </Box>
      <Box bg="white" h="200px" border="1px solid black">
        7
      </Box>
      <Box bg="white" h="200px" border="1px solid black">
        8
      </Box>

      <Box bg="white" h="200px" border="1px solid black">
        9
      </Box>
      <Box bg="white" h="200px" border="1px solid black">
        10
      </Box>
      <Box bg="white" h="200px" border="1px solid black">
        11
      </Box>
      <Box bg="white" h="200px" border="1px solid black">
        12
      </Box>
    </SimpleGrid>
  );
}
