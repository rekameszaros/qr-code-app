import React from 'react';
import { Flex, Stack, Image, Text } from '@chakra-ui/react';
import { FaHome, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      padding={4}
      backgroundColor="gray.800"
      color="white"
    >
      {/* Left side - Logos */}
      <Stack direction="row" spacing={4}>
        <Image src="/path/to/logo1.png" alt="Logo 1" boxSize="40px" />
        <Image src="/path/to/logo2.png" alt="Logo 2" boxSize="40px" />
      </Stack>

      {/* Right side - User Info */}
      <Stack direction="row" align="center">
        <FaHome size="20px" />
        <Text fontWeight="bold">John Doe</Text>
        <FaUser size="20px" />
      </Stack>
    </Flex>
  );
};

export default Header;
