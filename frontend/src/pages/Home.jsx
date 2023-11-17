import React from 'react';
import Header from '../components/header';
import Footer from '../components/Footer';
import { Box } from '@chakra-ui/react';
import SimpleSidebar from '../components/Sidebar';


const HomePage = () => {
  return (
    <div>
      <Header />
      <SimpleSidebar />
      <Box>

      </Box>
      <Footer />
    </div>
  );
};

export default HomePage;
