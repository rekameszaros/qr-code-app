// // Sidebar.jsx
// import React, { useState } from 'react';
// import { Box, IconButton, useMediaQuery } from '@chakra-ui/react';
// import { FiHome, FiCode, FiArchive, FiInfo, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// const LinkItem = ({ name, icon: Icon, onClick, isSmallerScreen, isDrawerOpen }) => (
//   <Box
//     cursor="pointer"
//     display="flex"
//     alignItems="center"
//     p="2"
//     _hover={{ bg: 'gray.200' }}
//     onClick={onClick}
//     marginTop="4" // Add top margin
//   >
//     <Icon />
//     {!isSmallerScreen && isDrawerOpen && <Box ml="4">{name}</Box>}
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
//         position="relative"
//         width={isDrawerOpen ? (isSmallerScreen ? '250px' : '250px') : '60px'} // Adjust width when closed
//         height="auto"
//         bg="gray.100"
//         transition="width 0.3s"
//         top="0"
//         left="0"
//         overflowX="hidden"
//         boxShadow="md"
//       >
//         <IconButton
//           icon={isDrawerOpen ? <FiChevronLeft /> : <FiChevronRight />}
//           onClick={handleToggleDrawer}
//           position="absolute"
//           top="50%" // Center the arrow icon vertically
//           transform="translateY(-50%)" // Adjust for vertical centering
//           left={isDrawerOpen ? '200px' : '10px'}
//           zIndex="999"
//         />
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
//               isDrawerOpen={isDrawerOpen}
//             />
//           ))}
//         </Box>
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
    onClick={isSmallerScreen ? onClick : undefined} // Only call onClick on smaller screens
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

  return (
    <Box
      display="flex"
      flexDirection="column"
      width={isDrawerOpen ? '250px' : '60px'}
      height="auto"
      bg="gray.100"
      transition="width 0.3s"
      boxShadow="md"
    >
      <IconButton
        icon={isDrawerOpen ? <FiChevronLeft /> : <FiChevronRight />}
        onClick={handleToggleDrawer}
        alignSelf="flex-start"
        m="2"
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
            onClick={() => {}} // Empty function or no function to avoid closing the sidebar
            isSmallerScreen={isSmallerScreen}
            isDrawerOpen={isDrawerOpen}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
