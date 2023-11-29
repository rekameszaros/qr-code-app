// import React, { useState } from 'react';
// import { Flex, Stack, Image, Text, IconButton } from '@chakra-ui/react';
// import { FaHome, FaUser, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';

// const Header = ({isAuthenticated}) => {
//   return (
//     <Flex
//       align="center"
//       justify="space-between"
//       padding={4}
//       backgroundColor="#000F41"
//       color="white"
//     >
//       {/* Left side - Logos */}
//       <Stack direction="row" spacing={4}>
//         <Image src="/icons/burger.svg" alt="Burger Icon" boxSize="40px" />
//         <Image src="/images/GEA_Logo_wo_Claim_sRGB_Solid_neg.svg" alt="GEA Logo" boxSize="40px" />
//       </Stack>

//       {/* Right side - User Info */}
//       <Stack direction="row" align="center">
//         <FaUser size="20px" />
//         <Text fontWeight="bold">John Doe</Text>

//         {/* Conditional rendering based on authentication status */}
//         {isAuthenticated ? (
//           // Logout icon when the user is authenticated
//           <IconButton
//             aria-label="Logout"
//             icon={<FaSignOutAlt size="20px" />}
//             variant="ghost"
//             color="white"
//           />
//         ) : (
//           // Login icon when the user is not authenticated
//           <IconButton
//             aria-label="Login"
//             icon={<FaSignInAlt size="20px" />}
//             variant="ghost"
//             color="white"
//           />
//         )}
//       </Stack>
//     </Flex>
//   );
// };

// export default Header;

// Header.jsx
import React from "react";
import { Flex, Stack, Image, Text, IconButton } from "@chakra-ui/react";
import { FaUser, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

const Header = ({ isAuthenticated, onLogin, onLogout }) => {
  return (
    <Flex
      align="center"
      justify="space-between"
      paddingLeft={20}
      paddingRight={20}
      paddingTop={4}
      paddingBottom={4}
      backgroundColor="#000F41"
      color="white"
    >
      {/* Left side - Logos */}
      <Stack direction="row" spacing={4}>
        <Image src="/icons/burger.svg" alt="Burger Icon" boxSize="30px" />
        <Image
          src="/images/GEA-Logo-white.svg"
          alt="GEA Logo" /*  boxSize="80px" */
        />
      </Stack>

      {/* Right side - User Info */}
      <Stack direction="row" align="center">
        <FaUser size="20px" />
        {/* <Text fontWeight="bold">John Doe</Text> */}
        <Text fontWeight="bold">{sessionStorage.getItem("username")}</Text>

        {/* Conditional rendering based on authentication status */}
        {isAuthenticated ? (
          // Logout icon when the user is authenticated
          <IconButton
            aria-label="Logout"
            icon={<FaSignOutAlt size="20px" />}
            variant="ghost"
            color="white"
            onClick={onLogout}
          />
        ) : (
          // Login icon when the user is not authenticated
          <IconButton
            aria-label="Login"
            icon={<FaSignInAlt size="20px" />}
            variant="ghost"
            color="white"
            onClick={onLogin}
          />
        )}
      </Stack>
    </Flex>
  );
};

export default Header;
