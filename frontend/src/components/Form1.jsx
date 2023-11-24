// import React from 'react';
// import { Box, Heading, Text, Input, Button, Flex } from '@chakra-ui/react';
// import { ChevronRightIcon } from '@chakra-ui/icons';

// const Form1 = () => {
//   return (
//     <Box maxW="575px" m="100px auto" p="60px" bg="white" borderRadius="8px" boxShadow="md">
//       <Heading as="h2" color="gray.800" mb="4">
//         Dynamic QR Codes
//       </Heading>
//       <Text color="gray.600" mb="6">
//         With Dynamic QR Codes, you can create a customized landing page for your QR Code that can be changed and updated whenever you want, no matter if the QR Code is created or even if it went public.
//       </Text>

//       {/* Input fields */}
//       <Input placeholder="Dynamic QR Codes" mb="6" />
//       <Input placeholder="Customized Colors & Shapes for QR Codes" mb="6" />
//       <Input placeholder="QR Code Statistics" mb="8" />

//       {/* Flex container for form content */}
//       <Flex justify="space-between">
//         {/* Continue Button on the right */}
//         <Button borderRadius="50px" bg="#0303B8" color="white" ml="auto" paddingX="10">
//           Create <ChevronRightIcon ml="2" />
//         </Button>
//       </Flex>
//     </Box>
//   );
// };

// export default Form1;

import React from 'react';
import { Box, Heading, Text, Input, Flex } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { PrimaryButton } from './Button'; 

const Form1 = () => {
  return (
    <Box maxW="575px" m="100px auto" p="60px" bg="white" borderRadius="8px" boxShadow="md">
      <Heading as="h2" color="gray.800" mb="4">
        Dynamic QR Codes
      </Heading>
      <Text color="gray.600" mb="6">
        With Dynamic QR Codes, you can create a customized landing page for your QR Code that can be changed and updated whenever you want, no matter if the QR Code is created or even if it went public.
      </Text>

      {/* Input fields */}
      <Input placeholder="Dynamic QR Codes" mb="6" />
      <Input placeholder="Customized Colors & Shapes for QR Codes" mb="6" />
      <Input placeholder="QR Code Statistics" mb="8" />

      {/* Flex container for form content */}
      <Flex justify="space-between">
        {/* Continue Button on the right */}
        <PrimaryButton click={() => window.location.replace('/generator')}>
          Generate <ChevronRightIcon ml="2" />
        </PrimaryButton>
      </Flex>
    </Box>
  );
};

export default Form1;