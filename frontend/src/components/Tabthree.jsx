import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';

const Design = () => {
  return (
    <SimpleGrid columns={[1, null, 2]} spacing={[4, 8, 12]} minW="lg" /* gridTemplateRows="repeat(2, 1fr)" */>
      {/* First Box */}
      <Box bg="#E6E6F8" p="4" w={[100, 300, 300, 400, 560]}>
        <h2>Form</h2>
      </Box>

      {/* Add spacing between the boxes */}
      {/* <Box display={['none', 'none', 'none', 'none', 'block']} /> */}

      {/* Second Box */}
      <Box bg="#E6E6F8" p="4" w={[100, 200, 250, 250, 400]} minH="50vh" maxW="md">
        <h2>QR Code</h2>
      </Box>
    </SimpleGrid>
  );
};

export default Design;