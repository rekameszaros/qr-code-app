import React from "react";
import { Box, Image, Text, Flex, Spacer, Center } from "@chakra-ui/react";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="gray.500" py={4} px={8} textAlign="center" mt="auto" width="100vw">
      <Flex justify="center">
        <Text color="white">© GEA Group Aktiengesellschaft 2024</Text>
        <Spacer />
        <Flex align="center">
          <FaRegCopyright color="white"/>
          <Text ml={2} my="auto" color="white">Group Communications and Brand | Digital Channels</Text>
          <Text ml={2} my="auto" color="white">Privacy policy</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;