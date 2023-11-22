// import React from 'react';
// import { Box, SimpleGrid } from '@chakra-ui/react';

// const General = () => {
//   return (
//     <SimpleGrid columns={[1, null, 2]} spacing={[4, 8, 12]} minW="lg" /* gridTemplateRows="repeat(2, 1fr)" */>
//       {/* First Box */}
//       <Box bg="#E6E6F8" p="4" w={[100, 300, 300, 400, 560]}>
//         <h2>Form</h2>
//       </Box>

//       {/* Add spacing between the boxes */}
//       {/* <Box display={['none', 'none', 'none', 'none', 'block']} /> */}

//       {/* Second Box */}
//       <Box bg="#E6E6F8" p="4" w={[100, 200, 250, 250, 400]} minH="50vh" maxW="md">
//         <h2>QR Code</h2>
//       </Box>
//     </SimpleGrid>
//   );
// };

// export default General;

import React from 'react';
import { Box, SimpleGrid, Input, FormControl, FormLabel, Heading } from '@chakra-ui/react';

const General = () => {
  return (
    <SimpleGrid columns={[1, null, 2]} spacing={[4, 8, 12]} minW="lg" >
      {/* First Box */}
      <Box bg="#E6E6F8" px="20" py="10" w={[100, 300, 300, 400, 560]} maxH="50vh" overflowY="auto">
        <Heading as="h2" size="md" mb={4}>
          Create QR code
        </Heading>

        <FormControl isRequired>
          <FormLabel>URL</FormLabel>
          <Input bg="white" placeholder="Input 1" mb={4} />
        </FormControl>

        <Heading as="h2" size="md" my={6} textAlign="center">
          or
        </Heading>

        <Heading as="h2" size="md" mb={4}>
          Create QR code with UTM
        </Heading>

        <FormControl isRequired>
          <FormLabel>URL</FormLabel>
          <Input bg="white" placeholder="Input 1" mb={4} />
        </FormControl>

        <FormControl>
        <FormLabel>Campaign</FormLabel>
        <Input bg="white" placeholder="Input 2" mb={4} />
        </FormControl>

        <FormControl>
        <FormLabel>Medium</FormLabel>
        <Input bg="white" placeholder="Input 3" mb={4} />
        </FormControl>

        <FormControl>
        <FormLabel>Content</FormLabel>
        <Input bg="white" placeholder="Input 4" mb={4} />
        </FormControl>

        <FormControl>
        <FormLabel>Term</FormLabel>
        <Input bg="white" placeholder="Input 5" mb={4} />
        </FormControl>

      </Box>

      {/* Second Box */}
      <Box bg="#E6E6F8" p="10" w={[100, 200, 250, 250, 400]} minH="50vh" maxW="md">
        <Heading as="h2" size="md">
          QR Code
        </Heading>
      </Box>
    </SimpleGrid>
  );
};

export default General;


