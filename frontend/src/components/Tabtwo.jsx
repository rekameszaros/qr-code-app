// import React, { useState } from 'react';
// import { Box, Flex, SimpleGrid, Input, FormControl, FormLabel, Tooltip, IconButton, Heading, Text } from '@chakra-ui/react';
// import { PrimaryButton, ProgressButton } from './Button';
// import { ChevronRightIcon, ChevronLeftIcon, DownloadIcon, InfoIcon } from '@chakra-ui/icons';
// import { QRCode } from 'antd';

// const Design = () => {
//   return (
//     <SimpleGrid columns={[1, null, 2]} spacing={[4, 8, 12]} minW="lg" /* gridTemplateRows="repeat(2, 1fr)" */>
//       {/* First Box */}
//       <Box bg="#E6E6F8" border="1px" borderColor="#D9D9FC" px="20" py="10" w={[100, 300, 300, 400, 560]} maxH="50vh" overflowY="auto">
//         <Heading as="h2" size="md" mb={4}>Style your QR Code</Heading>

//         <FormControl>
//           <FormLabel>Color</FormLabel>
//           <Input bg="white" placeholder="Input 1" mb={4} />
//         </FormControl>

//         <FormControl>
//           <FormLabel>Color</FormLabel>
//           <Input bg="white" placeholder="Input 2" mb={4} />
//         </FormControl>

//         <FormControl>
//           <FormLabel>Size</FormLabel>
//           <Input bg="white" placeholder="Input 3" mb={4} />
//         </FormControl>

//         <Flex mt="8" mb="2" justifyContent="space-between">
//           <PrimaryButton>
//             <ChevronLeftIcon mr="2" /> Back
//           </PrimaryButton>
//           <PrimaryButton >
//             Generate <ChevronRightIcon ml="2" />
//           </PrimaryButton>
//         </Flex>
//       </Box>

//       {/* Add spacing between the boxes */}
//       {/* <Box display={['none', 'none', 'none', 'none', 'block']} /> */}

//       {/* Second Box */}
//       <Box bg="#E6E6F8" p="4" w={[100, 200, 250, 250, 400]} minH="50vh" maxW="md">
//       <Flex mt="4" direction="column" align="center">
//             <Flex mt="40">  
//               <ProgressButton mx="2" leftIcon={<DownloadIcon />}> SVG</ProgressButton>
//               <ProgressButton mx="2" leftIcon={<DownloadIcon />}> PNG</ProgressButton>
//             </Flex>
//           </Flex>
//       </Box>
//     </SimpleGrid>
//   );
// };

// export default Design;

// import React, { useState, useEffect } from 'react';
// import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
// import { ProgressButton, ChevronRightIcon, DownloadIcon } from '@chakra-ui/icons';
// import { QRCode } from 'antd';

// const Design = () => {
//   const [qrUrl, setQrUrl] = useState('');

//   useEffect(() => {
//     // Retrieve the stored QR code URL from sessionStorage
//     const storedQrUrl = sessionStorage.getItem('qrUrl');
//     setQrUrl(storedQrUrl || ''); // Set the QR code URL or an empty string if not found
//   }, []);

//   return (
//     <SimpleGrid columns={[1, null, 2]} spacing={[4, 8, 12]} minW="lg">
//       {/* First Box */}
//       <Box bg="#E6E6F8" border="1px" borderColor="#D9D9FC" px="20" py="10" w={[100, 300, 300, 400, 560]} maxH="50vh" overflowY="auto">
//         {/* Display the stored QR code URL */}
//         <Text mt="4" color="gray.600" fontSize="sm">
//           {qrUrl}
//         </Text>

//         <Flex mt="8" mb="2" justifyContent="space-between">
//           <ProgressButton>
//             <ChevronRightIcon ml="2" /> Next
//           </ProgressButton>
//         </Flex>
//       </Box>

//       {/* Add spacing between the boxes */}
//       {/* <Box display={['none', 'none', 'none', 'none', 'block']} /> */}

//       {/* Second Box */}
//       <Box bg="#E6E6F8" p="4" w={[100, 200, 250, 250, 400]} minH="50vh" maxW="md">
//         <Flex mt="4" direction="column" align="center">
//           {/* Render the QR code using the retrieved URL */}
//           <QRCode value={qrUrl || '-'} />

//           <Flex mt="40">
//             <ProgressButton mx="2" leftIcon={<DownloadIcon />}>
//               SVG
//             </ProgressButton>
//             <ProgressButton mx="2" leftIcon={<DownloadIcon />}>
//               PNG
//             </ProgressButton>
//           </Flex>
//         </Flex>
//       </Box>
//     </SimpleGrid>
//   );
// };

// export default Design;

import React, { useState, useEffect } from 'react';
import { Box, Flex, SimpleGrid, Input, FormControl, FormLabel, Tooltip, IconButton, Heading, Text } from '@chakra-ui/react';
import { PrimaryButton, ProgressButton } from './Button';
import { ChevronRightIcon, ChevronLeftIcon, DownloadIcon, InfoIcon } from '@chakra-ui/icons';
import { QRCode } from 'antd';

const Design = () => {
  const [displayQR, setDisplayQR] = useState(false);
  const [qrurl, setQrurl] = useState('');

  useEffect(() => {
    // Check if there's a QR code URL in sessionStorage
    const storedQRUrl = sessionStorage.getItem('qrUrl');
    if (storedQRUrl) {
      setQrurl(storedQRUrl);
      setDisplayQR(true); // Set the state to display the QR code
    }
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <SimpleGrid columns={[1, null, 2]} spacing={[4, 8, 12]} minW="lg">
      {/* First Box */}
      <Box bg="#E6E6F8" border="1px" borderColor="#D9D9FC" px="20" py="10" w={[100, 300, 300, 400, 560]} maxH="50vh" overflowY="auto">
        <Heading as="h2" size="md" mb={4}>
          Style your QR Code
        </Heading>

        {/* Add your styling controls here */}

        <Flex mt="8" mb="2" justifyContent="space-between">
          <PrimaryButton>
            <ChevronLeftIcon mr="2" /> Back
          </PrimaryButton>
          <PrimaryButton>
            Generate <ChevronRightIcon ml="2" />
          </PrimaryButton>
        </Flex>
      </Box>

      {/* Second Box */}
      <Box bg="#E6E6F8" border="1px" borderColor="#D9D9FC" p="10" w={[100, 200, 250, 250, 400]} minH="50vh" maxW="md">
        {/* Display the QR code if the state is set to true */}
        {displayQR && (
          <>
            {/* Generated full URL */}
            {qrurl && (
              <Text mt="4" color="gray.600" fontSize="sm">
                {qrurl}
              </Text>
            )}
            <Flex mt="4" direction="column" align="center">
              <QRCode value={qrurl || '-'} />
              <Flex mt="40">
                <ProgressButton mx="2" leftIcon={<DownloadIcon />}>
                  SVG
                </ProgressButton>
                <ProgressButton mx="2" leftIcon={<DownloadIcon />}>
                  PNG
                </ProgressButton>
              </Flex>
            </Flex>
          </>
        )}
      </Box>
    </SimpleGrid>
  );
};

export default Design;
