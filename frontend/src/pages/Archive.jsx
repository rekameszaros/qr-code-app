import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const ArchivePage = () => {
  return (
    <Flex direction="column" minH="100vh">
      <Header />

      <Flex flex="1">
        <Sidebar />
        {/* Add your archive content here */}
        <Box p="4">
          <h1>Archive Content Goes Here</h1>
        </Box>
      </Flex>

      <Footer />
    </Flex>
  );
};

export default ArchivePage;
