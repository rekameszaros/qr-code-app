// import React from 'react';
// import { Flex, Box, Divider, HStack } from '@chakra-ui/react';

// const General = () => {
//   return (
//     <Flex direction="column" minH="50vh" minW="100vh">
//       <HStack direction={{ base: 'column', md: 'row' }}>
//         {/* First Box */}
//         <Box bg="#E6E6F8" flex="1" p="4"minH="50vh" minW="lg">
//           <h2>form</h2>
//         </Box>

//         {/* Divider */}
//         <Divider orientation="vertical" mx="4" />

//         {/* Second Box */}
//         <Box bg="#E6E6F8" flex="1" p="4" minH="50vh" minW="md">
//           <h2>qr code</h2>
//         </Box>
//       </HStack>
//     </Flex>
//   );
// };

// export default General;

import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';

const General = () => {
  return (
    <SimpleGrid columns={[1, null, 2]} spacing={[4, 8, 12]} minW="lg" gridTemplateRows="repeat(2, 1fr)">
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

export default General;



// import React from 'react';
// import { Flex, Box, Divider } from '@chakra-ui/react';

// const General = () => {
//   return (
//     // on smaller screens (base) and 'row' on larger screens (md)
//     <Flex direction={{ base: 'column', md: 'row' }} minH="50vh" minW="100%">
//       {/* First Box */}
//       <Box bg="#E6E6F8" flex="1" p="4">
//         <h2>Form</h2>
//       </Box>

//       {/* Divider */}
//       <Divider orientation={{ base: 'horizontal', md: 'vertical' }} mx="4" my={{ base: '4', md: '0' }} />

//       {/* Second Box */}
//       <Box bg="#E6E6F8" flex="1" p="4">
//         <h2>QR Code</h2>
//       </Box>
//     </Flex>
//   );
// };

// export default General;

// import React from 'react';
// import { Box, Flex, Divider } from '@chakra-ui/react';

// const General = () => {
//   return (
//     <Flex direction={{ base: 'column', md: 'row' }} minH="50vh" minW="100%">
//       {/* First Box */}
//       <Box bg="#E6E6F8" flex={{ base: '1', md: '1/2' }} p="4" aspectRatio={1}>
//         <h2>Form</h2>
//         {/* Add content for the first box here */}
//       </Box>

//       {/* Divider */}
//       <Divider orientation={{ base: 'horizontal', md: 'vertical' }} mx="4" my={{ base: '4', md: '0' }} />

//       {/* Second Box */}
//       <Box bg="#E6E6F8" flex={{ base: '1', md: '1/2' }} p="4" aspectRatio={1}>
//         <h2>QR Code</h2>
//         {/* Add content for the second box here */}
//       </Box>
//     </Flex>
//   );
// };

// export default General;

