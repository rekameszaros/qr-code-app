// // Home.jsx 1
// import React from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import { Box, Flex } from '@chakra-ui/react';
// import SimpleSidebar from '../components/Sidebar';
// import Form1 from '../components/Form1';

// const HomePage = () => {
//   return (
//     <Box minH="100vh" display="flex" flexDir="column">
//       {/* <Header isAuthenticated={true}/> */}
//       <Header />
//       <Flex flex="1">
//         <SimpleSidebar />

//         <Flex
//           flex="1"
//           flexDir={{ base: 'column', md: 'row' }} // Set flex direction based on screen size
//         >
//           <Box flex={{ base: '1', md: '1/2' }} p="4">
//             <img src="/public/images/developer.svg" alt="developer-image" style={{maxWidth: 575+"px", margin: 100 + "px " + "auto"}}/>
//           </Box>
//           <Box
//             flex={{ base: '1', md: '1/2' }} // Adjust flex based on screen size
//             order={{ base: '1', md: '2' }} // Change order for mobile view
//             mb={{ base: '4', md: '0' }} // Add margin-bottom for mobile spacing
//           >
//             <Form1 />
//           </Box>
//         </Flex>
//       </Flex>
//       <Footer />
//     </Box>
//   );
// };

// export default HomePage;

// // Home.jsx 2
// import React, { useState } from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import { Box, Flex } from '@chakra-ui/react';
// import SimpleSidebar from '../components/Sidebar';
// import Form1 from '../components/Form1';

// const HomePage = () => {
//   let [isAuthenticated, setIsAuthenticated] = useState(true);

//   return (
//     <Box minH="100vh" display="flex" flexDir="column">
//       <Header isAuthenticated={isAuthenticated}/>
//       <Flex flex="1">
//         <SimpleSidebar />

//         <Flex
//           flex="1"
//           flexDir={{ base: 'column', md: 'row' }}
//         >
//           {/* Conditionally render content based on authentication status */}
//           {isAuthenticated ? (
//             <>
//               <Box flex={{ base: '1', md: '1/2' }} p="4">
//                 <img src="/public/images/developer.svg" alt="developer-image" style={{ maxWidth: '575px', margin: '100px auto' }} />
//               </Box>
//               <Box
//                 flex={{ base: '1', md: '1/2' }}
//                 order={{ base: '1', md: '2' }}
//                 mb={{ base: '4', md: '0' }}
//               >
//                 <Form1 />
//               </Box>
//             </>
//           ) : (
//             // If not authenticated, render a message or redirect to the login page
//             <Box flex="1" p="4">
//               <p>You are not authenticated. Please log in.</p>
//             </Box>
//           )}
//         </Flex>
//       </Flex>
//       <Footer />
//     </Box>
//   );
// };

// export default HomePage;

// // HomePage.jsx 3
// import React, { useState } from 'react';
// import { Box, Flex, useToast } from '@chakra-ui/react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import SimpleSidebar from '../components/Sidebar';
// import Form1 from '../components/Form1';

// const HomePage = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const toast = useToast();

//   const handleLogin = () => {
//     setIsAuthenticated(true);
//     toast({
//       title: 'Login Successful',
//       description: 'You have been successfully logged in.',
//       status: 'success',
//       duration: 3000,
//       isClosable: true,
//     });
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     toast({
//       title: 'Logout Successful',
//       description: 'You have been successfully logged out.',
//       status: 'success',
//       duration: 3000,
//       isClosable: true,
//     });
//   };

//   return (
//     <Box minH="100vh" display="flex" flexDir="column">
//       <Header isAuthenticated={isAuthenticated} onLogin={handleLogin} onLogout={handleLogout} />
//       <Flex flex="1">
//         <SimpleSidebar />
//         <Flex flex="1" flexDir={{ base: 'column', md: 'row' }}>
//           {isAuthenticated ? (
//             <>
//               <Box flex={{ base: '1', md: '1/2' }} p="4">
//                 <img src="/public/images/developer.svg" alt="developer-image" style={{ maxWidth: '575px', margin: '100px auto' }} />
//               </Box>
//               <Box
//                 flex={{ base: '1', md: '1/2' }}
//                 order={{ base: '1', md: '2' }}
//                 mb={{ base: '4', md: '0' }}
//               >
//                 <Form1 />
//               </Box>
//             </>
//           ) : (
//             <Box flex="1" p="4">
//               <p>You are not authenticated. Please log in.</p>
//             </Box>
//           )}
//         </Flex>
//       </Flex>
//       <Footer />
//     </Box>
//   );
// };

// export default HomePage;

// HomePage.jsx 4
// import React, { useState } from 'react';
// import { Box, Flex, useToast } from '@chakra-ui/react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import SimpleSidebar from '../components/Sidebar';
// import Form1 from '../components/Form1';
// import QRCodeGeneratorPage from "./Qrcodegenerator";

// const HomePage = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const toast = useToast();

//   const handleLogin = () => {
//     setIsAuthenticated(true);
//     toast({
//       title: 'Login Successful',
//       description: 'You have been successfully logged in.',
//       status: 'success',
//       duration: 3000,
//       isClosable: true,
//     });
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     toast({
//       title: 'Logout Successful',
//       description: 'You have been successfully logged out.',
//       status: 'success',
//       duration: 3000,
//       isClosable: true,
//     });
//   };

//   // Redirect to the QR Code Generator Page if authenticated
//   if (isAuthenticated) {
//     return <QRCodeGeneratorPage />;
//   }

//   // Render the home page content if not authenticated
//   return (
//     <Box minH="100vh" display="flex" flexDir="column">
//       <Header isAuthenticated={isAuthenticated} onLogin={handleLogin} onLogout={handleLogout} />
//       <Flex flex="1">
//         <SimpleSidebar />
//         <Flex flex="1" flexDir={{ base: 'column', md: 'row' }}>
//           <Box flex={{ base: '1', md: '1/2' }} p="4">
//             <img src="/public/images/developer.svg" alt="developer-image" style={{ maxWidth: '575px', margin: '100px auto' }} />
//           </Box>
//           <Box
//             flex={{ base: '1', md: '1/2' }}
//             order={{ base: '1', md: '2' }}
//             mb={{ base: '4', md: '0' }}
//           >
//             <Form1 />
//           </Box>
//         </Flex>
//       </Flex>
//       <Footer />
//     </Box>
//   );
// };

// export default HomePage;

// Home.jsx
import React, { useState } from 'react';
import { Box, Flex, useToast, VStack } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SimpleSidebar from '../components/Sidebar';
import Form1 from '../components/Form1';
import QRCodeGeneratorPage from './Qrcodegenerator';
import LoginForm from '../components/LoginForm';

const HomePage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem('id')!= null);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const toast = useToast();

  const handleLogin = () => {
    setShowLoginForm(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('email')
    sessionStorage.removeItem('id')
    toast({
      title: 'Logout Successful',
      description: 'You have been successfully logged out.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  // Redirect to the QR Code Generator Page if authenticated
  // if (isAuthenticated) {
  //   return <QRCodeGeneratorPage />;
  // }
  // if (isAuthenticated) {
  //  window.location.replace("/generator")
  // }

  return (
    <Box minH="100vh" display="flex" flexDir="column" position="relative">
      <Header isAuthenticated={isAuthenticated} onLogin={handleLogin} onLogout={handleLogout} />
      <Flex flex="1">
        <SimpleSidebar />
        <Flex flex="1" flexDir={{ base: 'column', md: 'row' }}>
          <Box flex={{ base: '1', md: '1/2' }} p="4">
            <img src="/public/images/developer.svg" alt="developer-image" style={{ maxWidth: '575px', margin: '100px auto' }} />
          </Box>
          <Box
            flex={{ base: '1', md: '1/2' }}
            order={{ base: '1', md: '2' }}
            mb={{ base: '4', md: '0' }}
            position="relative"
          >
            {/* Conditionally render the login form and other content */}
            {showLoginForm && (
              <VStack position="absolute" top="0" left="0" right="0" zIndex="999" p="4">
                <LoginForm
                  onLogin={() => {
                    setIsAuthenticated(true);
                    setShowLoginForm(false);
                    toast({
                      title: 'Login Successful',
                      description: 'You have been successfully logged in.',
                      status: 'success',
                      duration: 3000,
                      isClosable: true,
                    });
                    window.location.replace("/generator")
                  }}
                />
              </VStack>
            )}
            <Form1 />
          </Box>
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );
};

export default HomePage;
