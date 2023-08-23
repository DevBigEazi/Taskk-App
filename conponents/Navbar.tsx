import {
  Flex,
  Heading,
  HStack,
  Text,
  Spacer,
  Box,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <Flex as="nav" py="20px" px="15px" alignItems="center">
      <Heading as="h4" color="blue.300" size="40px">
        <Link href="/"> EasyTask</Link>
      </Heading>
      <Spacer />

      <HStack spacing="20px">
        <Box bg="gray.100" p="10px">
          M
        </Box>
        <Text>example@gmail.com</Text>
        <Button colorScheme="blue" size="sm">
          Logout
        </Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
