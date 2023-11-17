import React from 'react';
import { Flex, Stack, Image, Text, IconButton } from '@chakra-ui/react';
import { FaHome, FaUser, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';

const Header = ({ isAuthenticated }) => {
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
        <Image src="/icons/burger.svg" alt="Burger Icon" boxSize="40px" />
        <Image src="/images/GEA_Logo_wo_Claim_sRGB_Solid_neg.svg" alt="GEA Logo" boxSize="40px" />
      </Stack>

      {/* Right side - User Info */}
      <Stack direction="row" align="center">
        <FaUser size="20px" />
        <Text fontWeight="bold">John Doe</Text>

        {/* Conditional rendering based on authentication status */}
        {isAuthenticated ? (
          // Logout icon when the user is authenticated
          <IconButton
            aria-label="Logout"
            icon={<FaSignOutAlt size="20px" />}
            variant="ghost"
            color="white"
          />
        ) : (
          // Login icon when the user is not authenticated
          <IconButton
            aria-label="Login"
            icon={<FaSignInAlt size="20px" />}
            variant="ghost"
            color="white"
          />
        )}
      </Stack>
    </Flex>
  );
};

export default Header;
