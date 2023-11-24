// import React, { useState } from 'react';
// import { Box, Flex, SimpleGrid, Input, FormControl, FormLabel, Tooltip, IconButton, Heading, Text } from '@chakra-ui/react';
// import { PrimaryButton, ProgressButton } from './Button';
// import { ChevronRightIcon, ChevronLeftIcon, DownloadIcon, InfoIcon } from '@chakra-ui/icons';
// import { QRCode } from 'antd';

// const Logo = () => {
//   return (    <SimpleGrid columns={[1, null, 2]} spacing={[4, 8, 12]} minW="lg" /* gridTemplateRows="repeat(2, 1fr)" */>
//   {/* First Box */}
//   <Box bg="#E6E6F8" border="1px" borderColor="#D9D9FC" px="20" py="10" w={[100, 300, 300, 400, 560]} maxH="50vh" overflowY="auto">
//     <Heading as="h2" size="md" mb={4}>Choose Logo</Heading>

//     <FormControl>
//       <FormLabel>Industry Icons</FormLabel>
//       <Input bg="white" placeholder="Input 1" mb={4} />
//     </FormControl>

//     <FormControl>
//       <FormLabel>'Scan me' Icons</FormLabel>
//       <Input bg="white" placeholder="Input 2" mb={4} />
//     </FormControl>

//     <FormControl>
//       <FormLabel>GEA Logos</FormLabel>
//       <Input bg="white" placeholder="Input 3" mb={4} />
//     </FormControl>

//     <Flex mt="8" mb="2" justifyContent="space-between">
//       <PrimaryButton>
//         <ChevronLeftIcon mr="2" /> Back
//       </PrimaryButton>
//       <PrimaryButton >
//         Generate <ChevronRightIcon ml="2" />
//       </PrimaryButton>
//     </Flex>
//   </Box>

//   {/* Add spacing between the boxes */}
//   {/* <Box display={['none', 'none', 'none', 'none', 'block']} /> */}

//   {/* Second Box */}
//   <Box bg="#E6E6F8" p="4" w={[100, 200, 250, 250, 400]} minH="50vh" maxW="md">
//   <Flex mt="4" direction="column" align="center">
//         <Flex mt="40">  
//           <ProgressButton mx="2" leftIcon={<DownloadIcon />}> SVG</ProgressButton>
//           <ProgressButton mx="2" leftIcon={<DownloadIcon />}> PNG</ProgressButton>
//         </Flex>
//       </Flex>
//   </Box>
// </SimpleGrid>
//   );
// };

// export default Logo;

import React, { useState } from 'react';
import { Box, Flex, SimpleGrid, Input, FormControl, FormLabel, Tooltip, IconButton, Heading } from '@chakra-ui/react';
import { PrimaryButton, ProgressButton } from './Button';
import { ChevronRightIcon, ChevronLeftIcon, DownloadIcon } from '@chakra-ui/icons';
import { QRCode } from 'antd';

const Logo = () => {
  const [industryIcons, setIndustryIcons] = useState('');
  const [scanMeIcons, setScanMeIcons] = useState('');
  const [geaLogos, setGeaLogos] = useState('');

  const handleGenerate = () => {
    // Add logic to generate QR code with selected logo
    // You can use the values of industryIcons, scanMeIcons, and geaLogos to customize the QR code logo
  };

  return (
    <SimpleGrid columns={[1, null, 2]} spacing={[4, 8, 12]} minW="lg">
      {/* First Box */}
      <Box bg="#E6E6F8" border="1px" borderColor="#D9D9FC" px="20" py="10" w={[100, 300, 300, 400, 560]} maxH="50vh" overflowY="auto">
        <Heading as="h2" size="md" mb={4}>Choose Logo</Heading>

        <FormControl>
          <FormLabel>Industry Icons</FormLabel>
          <Input bg="white" placeholder="Input 1" mb={4} onChange={(e) => setIndustryIcons(e.target.value)} />
        </FormControl>

        <FormControl>
          <FormLabel>'Scan me' Icons</FormLabel>
          <Input bg="white" placeholder="Input 2" mb={4} onChange={(e) => setScanMeIcons(e.target.value)} />
        </FormControl>

        <FormControl>
          <FormLabel>GEA Logos</FormLabel>
          <Input bg="white" placeholder="Input 3" mb={4} onChange={(e) => setGeaLogos(e.target.value)} />
        </FormControl>

        <Flex mt="8" mb="2" justifyContent="space-between">
          <PrimaryButton>
            <ChevronLeftIcon mr="2" /> Back
          </PrimaryButton>
          <PrimaryButton onClick={handleGenerate}>
            Generate <ChevronRightIcon ml="2" />
          </PrimaryButton>
        </Flex>
      </Box>

      {/* Add spacing between the boxes */}
      {/* <Box display={['none', 'none', 'none', 'none', 'block']} /> */}

      {/* Second Box */}
      <Box bg="#E6E6F8" p="4" w={[100, 200, 250, 250, 400]} minH="50vh" maxW="md">
        <Flex mt="4" direction="column" align="center">
          {/* Add logic to display the selected logo or QR code with logo */}
          <Flex mt="40">
            <ProgressButton mx="2" leftIcon={<DownloadIcon />}> SVG</ProgressButton>
            <ProgressButton mx="2" leftIcon={<DownloadIcon />}> PNG</ProgressButton>
          </Flex>
        </Flex>
      </Box>
    </SimpleGrid>
  );
};

export default Logo;
