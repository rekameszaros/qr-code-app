// Home.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box, Flex } from '@chakra-ui/react';
import SimpleSidebar from '../components/Sidebar';
import Form1 from '../components/Form1';

const HomePage = () => {
  return (
    <Box minH="100vh" display="flex" flexDir="column">
      <Header />
      <Flex flex="1">
        <SimpleSidebar />

        <Flex
          flex="1"
          flexDir={{ base: 'column', md: 'row' }} // Set flex direction based on screen size
        >
          <Box flex={{ base: '1', md: '1/2' }} p="4">
            <img src="/public/images/developer.svg" alt="developer-image" style={{maxWidth: 575+"px", margin: 100 + "px " + "auto"}}/>
          </Box>
          <Box
            flex={{ base: '1', md: '1/2' }} // Adjust flex based on screen size
            order={{ base: '1', md: '2' }} // Change order for mobile view
            mb={{ base: '4', md: '0' }} // Add margin-bottom for mobile spacing
          >
            <Form1 />
          </Box>
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );
};

export default HomePage;
