// import React from 'react';
// import {
//   IconButton,
//   Box,
//   CloseButton,
//   Flex,
//   Icon,
//   useColorModeValue,
//   Text,
//   Drawer,
//   DrawerContent,
//   useDisclosure,
// } from '@chakra-ui/react';
// import { FiHome, FiCode, FiArchive, FiInfo, FiSettings, FiMenu } from 'react-icons/fi';

// const LinkItems = [
//   { name: 'Home', icon: FiHome },
//   { name: 'QR Code Generator', icon: FiCode },
//   { name: 'Archive', icon: FiArchive },
//   { name: 'About', icon: FiInfo },
// ];

// const SimpleSidebar = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <Flex minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
//       <SidebarContent onClose={onClose} display={{ base: 'none', md: 'block' }} />
//       <Drawer
//         isOpen={isOpen}
//         placement="left"
//         onClose={onClose}
//         returnFocusOnClose={false}
//         onOverlayClick={onClose}
//         size="full"
//       >
//         <DrawerContent>
//           <SidebarContent onClose={onClose} />
//         </DrawerContent>
//       </Drawer>
//       {/* <Box flex="1" ml={{ base: 0, md: 60 }} p="4" overflow="auto">
//         <Box p={4}>
//           <Text fontSize="xl">Main Content Goes Here</Text>
//         </Box>
//       </Box> */}
//     </Flex>
//   );
// };

// const SidebarContent = ({ onClose, ...rest }) => {
//   return (
//     <Box
//       bg="#F5F5F5"
//       borderRight="1px"
//       borderRightColor={useColorModeValue('gray.200', 'gray.700')}
//       w={{ base: 'full', md: 60 }}
//     // To move the sidebar with the content->  pos={{ base: 'static', md: 'fixed' }}
//       h={{ base: 'auto', md: 'full' }}
//       {...rest}
//     >
//       {/* Space above the menu points */}
//       <Box h="20" />

//       <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
//         {/* Remove the "Logo" text */}
//         <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
//       </Flex>
//       {LinkItems.map((link) => (
//         <NavItem key={link.name} icon={link.icon}>
//           {link.name}
//         </NavItem>
//       ))}
//     </Box>
//   );
// };

// const NavItem = ({ icon: IconComponent, children, ...rest }) => {
//   return (
//     <Box
//       as="a"
//       href="#"
//       style={{ textDecoration: 'none' }}
//       _focus={{ boxShadow: 'none' }}
//     >
//       <Flex
//         align="center"
//         p="4"
//         mx="4"
//         borderRadius="lg"
//         role="group"
//         cursor="pointer"
//         _hover={{
//           bg: '#E6E6F8',
//           color: 'white',
//         }}
//         {...rest}
//       >
//         {IconComponent && (
//           <Icon
//             mr="4"
//             fontSize="16"
//             _groupHover={{
//               color: 'white',
//             }}
//             as={IconComponent}
//           />
//         )}
//         {children}
//       </Flex>
//     </Box>
//   );
// };

// export default SimpleSidebar;

// import React, { useState } from 'react';
// import { Box, IconButton, useMediaQuery, Flex } from '@chakra-ui/react';
// import { FiHome, FiCode, FiArchive, FiInfo, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// const LinkItem = ({ name, icon: Icon, onClick, isSmallerScreen }) => (
//   <Box
//     cursor="pointer"
//     display="flex"
//     alignItems="center"
//     p="2"
//     _hover={{ bg: 'gray.200' }}
//     onClick={onClick}
//   >
//     {isSmallerScreen && <Icon />}
//     {!isSmallerScreen && (
//       <>
//         <Icon />
//         <Box ml="4">{name}</Box>
//       </>
//     )}
//   </Box>
// );

// const Sidebar = () => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(true);
//   const [isSmallerScreen] = useMediaQuery('(max-width: 600px)');

//   const handleToggleDrawer = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//   };

//   const handleCloseDrawer = () => {
//     setIsDrawerOpen(false);
//   };

//   return (
//     <>
//       <Box
//         width={isSmallerScreen ? (isDrawerOpen ? '250px' : '60px') : '250px'}
//         height="auto"
//         bg="gray.100"
//         transition="width 0.3s"
//         top="0"
//         left="0"
//         overflowX="hidden"
//         boxShadow="md"
//       >
//         {isSmallerScreen && (
//           <IconButton
//             icon={isDrawerOpen ? <FiChevronLeft /> : <FiChevronRight />}
//             onClick={handleToggleDrawer}
//             position="absolute"
//             top="2"
//             left={isDrawerOpen ? '200px' : '10px'}
//             zIndex="999"
//           />
//         )}
//         <Box p="4">
//           {[
//             { name: 'Home', icon: FiHome },
//             { name: 'QR Code Generator', icon: FiCode },
//             { name: 'Archive', icon: FiArchive },
//             { name: 'About', icon: FiInfo },
//           ].map((item, index) => (
//             <LinkItem
//               key={index}
//               name={item.name}
//               icon={item.icon}
//               onClick={handleCloseDrawer}
//               isSmallerScreen={isSmallerScreen}
//             />
//           ))}
//         </Box>
//       </Box>
//     </>
//   );
// };

// const Header = ({ onLogoClick }) => (
//   <Flex
//     justify="space-between"
//     align="center"
//     p="4"
//     borderBottom="1px solid"
//     borderColor="gray.200"
//     bg="white"
//     position="fixed"
//     top="0"
//     width="100%"
//     zIndex="999"
//   >
//     <Box onClick={onLogoClick} cursor="pointer">
//       {/* Your Logo Component Goes Here */}
//       Logo
//     </Box>
//   </Flex>
// );

// const App = () => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(true);

//   const handleLogoClick = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//   };

//   return (
//     <>
//       <Header onLogoClick={handleLogoClick} />
//       {isDrawerOpen && <Sidebar />}
//       <Box ml={isDrawerOpen && !useMediaQuery('(max-width: 600px)') ? '250px' : '60px'} p="4">
//         {/* Your Main Content Goes Here */}
//         Main Content
//       </Box>
//     </>
//   );
// };

// export default Sidebar;


// Sidebar.jsx
import React, { useState } from 'react';
import { Box, IconButton, useMediaQuery } from '@chakra-ui/react';
import { FiHome, FiCode, FiArchive, FiInfo, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const LinkItem = ({ name, icon: Icon, onClick, isSmallerScreen, isDrawerOpen }) => (
  <Box
    cursor="pointer"
    display="flex"
    alignItems="center"
    p="2"
    _hover={{ bg: 'gray.200' }}
    onClick={onClick}
    marginTop="4" // Add top margin
  >
    <Icon />
    {!isSmallerScreen && isDrawerOpen && <Box ml="4">{name}</Box>}
  </Box>
);

const Sidebar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [isSmallerScreen] = useMediaQuery('(max-width: 600px)');

  const handleToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <Box
        position="relative"
        width={isDrawerOpen ? (isSmallerScreen ? '250px' : '250px') : '60px'} // Adjust width when closed
        height="auto"
        bg="gray.100"
        transition="width 0.3s"
        top="0"
        left="0"
        overflowX="hidden"
        boxShadow="md"
      >
        <IconButton
          icon={isDrawerOpen ? <FiChevronLeft /> : <FiChevronRight />}
          onClick={handleToggleDrawer}
          position="absolute"
          top="50%" // Center the arrow icon vertically
          transform="translateY(-50%)" // Adjust for vertical centering
          left={isDrawerOpen ? '200px' : '10px'}
          zIndex="999"
        />
        <Box p="4">
          {[
            { name: 'Home', icon: FiHome },
            { name: 'QR Code Generator', icon: FiCode },
            { name: 'Archive', icon: FiArchive },
            { name: 'About', icon: FiInfo },
          ].map((item, index) => (
            <LinkItem
              key={index}
              name={item.name}
              icon={item.icon}
              onClick={handleCloseDrawer}
              isSmallerScreen={isSmallerScreen}
              isDrawerOpen={isDrawerOpen}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
