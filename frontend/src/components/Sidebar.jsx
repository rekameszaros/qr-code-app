// // Sidebar.jsx
// import React, { useState } from 'react';
// import { Box, IconButton, useMediaQuery } from '@chakra-ui/react';
// import { FiHome, FiCode, FiArchive, FiInfo, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// const LinkItem = ({ name, icon: Icon, onClick, isSmallerScreen, isDrawerOpen }) => (
//   <Box
//     cursor="pointer"
//     display="flex"
//     alignItems="center"
//     p="4"
//     _hover={{ bg: '#E6E6F8', width: 'auto' }} // Set hover effect color and width
//     onClick={isSmallerScreen ? onClick : undefined}
//   >
//     <Icon /> {/* Add margin to the left of the icon */}
//     {!isSmallerScreen && isDrawerOpen && <Box ml="4">{name}</Box>}
//   </Box>
// );

// const Sidebar = () => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(true);
//   const [isSmallerScreen] = useMediaQuery('(max-width: 600px)');

//   const handleToggleDrawer = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//   };

//   return (
//     <Box
//       display="flex"
//       flexDirection="column"
//       width={isDrawerOpen ? '250px' : '60px'}
//       height="auto"
//       bg="#F5F5F5"
//       transition="width 0.3s"
//       position="relative"
//       overflowX="hidden"
//     >
//       <IconButton
//         icon={isDrawerOpen ? <FiChevronLeft /> : <FiChevronRight />}
//         onClick={handleToggleDrawer}
//         alignSelf="flex-end"
//         m="2"
//         position="absolute"
//         marginTop={8}
//         right="0"
//         borderRadius="50px" // Set border radius to 50
//         backgroundColor="#0303B8" // Set background color to #0303B8
//         color="white" // Set color to white
//         _hover={{ backgroundColor: '#5464F8' }} // Set hover color to a lighter shade
//       />
//       <Box marginTop="40">
//         {[
//           { name: 'Home', icon: FiHome },
//           { name: 'QR Code Generator', icon: FiCode },
//           { name: 'Archive', icon: FiArchive },
//           { name: 'About', icon: FiInfo },
//         ].map((item, index) => (
//           <LinkItem
//             key={index}
//             name={item.name}
//             icon={item.icon}
//             onClick={() => {}}
//             isSmallerScreen={isSmallerScreen}
//             isDrawerOpen={isDrawerOpen}
//           />
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default Sidebar;

// Sidebar.jsx
import React, { useState } from 'react';
import { Box, IconButton, useMediaQuery } from '@chakra-ui/react';
import { FiHome, FiCode, FiArchive, FiInfo, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const LinkItem = ({ name, icon: Icon, url, onClick, isSmallerScreen, isDrawerOpen }) => (
    <Link to={url}>
        <Box
            cursor="pointer"
            display="flex"
            alignItems="center"
            p="4"
            _hover={{ bg: '#E6E6F8', width: 'auto' }} // Set hover effect color and width
            onClick={isSmallerScreen ? onClick : undefined}
            >
            <Icon /> {/* Add margin to the left of the icon */}
            {!isSmallerScreen && isDrawerOpen && <Box ml="4">{name}</Box>}
        </Box>
    </Link>
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
      bg="#F5F5F5"
      transition="width 0.3s"
      position="relative"
      overflowX="hidden"
    >
      <IconButton
        icon={isDrawerOpen ? <FiChevronLeft /> : <FiChevronRight />}
        onClick={handleToggleDrawer}
        alignSelf="flex-end"
        m="2"
        position="absolute"
        marginTop={8}
        right="0"
        borderRadius="50px" // Set border radius to 50
        backgroundColor="#0303B8" // Set background color to #0303B8
        color="white" // Set color to white
        _hover={{ backgroundColor: '#5464F8' }} // Set hover color to a lighter shade
      />
      <Box marginTop="40">
        {/* datastructure here, to define the parameters in LinkItem*/}
        {[
          { name: 'Home', icon: FiHome, url: '/home'},
          { name: 'QR Code Generator', icon: FiCode, url: '/generator'},
          { name: 'Archive', icon: FiArchive, url: '/archive' },
          { name: 'About', icon: FiInfo, url: 'https://geacloud.sharepoint.com/sites/DigitalMarketingKnowledgeCenter/?ovuser=0e17f90f-88a3-4f93-a5d7-cc847cff307e%2cIon.Cioca%40gea.com&OR=Teams-HL&CT=1667483440977&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiIyNy8yMjEwMjgwNzIwMCIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D'},
        ].map((item, index) => (
          <LinkItem
            key={index}
            name={item.name}
            icon={item.icon}
            url={item.url}
            onClick={() => {}}
            isSmallerScreen={isSmallerScreen}
            isDrawerOpen={isDrawerOpen}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
