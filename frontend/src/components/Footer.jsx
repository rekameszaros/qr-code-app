import React from "react";
import { Box, Text, Flex, Spacer } from "@chakra-ui/react";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      bg="#FFFFFF"  // Set the background color to #FFFFFF
      border="1px solid #E7E3E3"  // Set the border color and style
      py={4}
      px={8}
      textAlign="center"
      mt="auto"
      width="100vw"
    >
      <Flex justify="center">
        <Text color="gray.800">© GEA Group Aktiengesellschaft 2024</Text>
        <Spacer />
        <Flex align="center">
          <FaRegCopyright color="gray.800" />
          <Text ml={2} my="auto" color="gray.800">
            Group Communications and Brand | Digital Channels
          </Text>
          <Text ml={2} my="auto" color="gray.800">
            Privacy policy
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
