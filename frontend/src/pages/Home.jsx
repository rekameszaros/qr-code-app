// import React from 'react';
// import Header from '../components/header';
// import Footer from '../components/Footer';
// import { Box } from '@chakra-ui/react';
// import SimpleSidebar from '../components/Sidebar';


// const HomePage = () => {
//   return (
//     <div>
//       <Header />
//       <SimpleSidebar />
//       <Box>

//       </Box>
//       <Footer />
//     </div>
//   );
// };

// export default HomePage;

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
      <Flex>
        <SimpleSidebar />
        <Flex flex="1">
          <Box flex="1/2">
            <img src="/public/images/developer.svg" alt="developer-image" />
          </Box>
          <Box flex="1/2" p="4">
            <Form1 />
          </Box>
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );
};

export default HomePage;
