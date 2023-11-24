import React, { useState } from 'react';
import { Box, Flex, SimpleGrid, Input, FormControl, FormLabel, Tooltip, IconButton, Heading, Text } from '@chakra-ui/react';
import { PrimaryButton, ProgressButton } from './Button';
import { ChevronRightIcon, ChevronLeftIcon, DownloadIcon, InfoIcon } from '@chakra-ui/icons';
import { QRCode } from 'antd';

const Design = () => {
  return (
    <SimpleGrid columns={[1, null, 2]} spacing={[4, 8, 12]} minW="lg" /* gridTemplateRows="repeat(2, 1fr)" */>
      {/* First Box */}
      <Box bg="#E6E6F8" border="1px" borderColor="#D9D9FC" px="20" py="10" w={[100, 300, 300, 400, 560]} maxH="50vh" overflowY="auto">
        <Heading as="h2" size="md" mb={4}>Style your QR Code</Heading>

        <FormControl>
          <FormLabel>Color</FormLabel>
          <Input bg="white" placeholder="Input 1" mb={4} />
        </FormControl>

        <FormControl>
          <FormLabel>Color</FormLabel>
          <Input bg="white" placeholder="Input 2" mb={4} />
        </FormControl>

        <FormControl>
          <FormLabel>Size</FormLabel>
          <Input bg="white" placeholder="Input 3" mb={4} />
        </FormControl>

        <Flex mt="8" mb="2" justifyContent="space-between">
          <PrimaryButton>
            <ChevronLeftIcon mr="2" /> Back
          </PrimaryButton>
          <PrimaryButton >
            Generate <ChevronRightIcon ml="2" />
          </PrimaryButton>
        </Flex>
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