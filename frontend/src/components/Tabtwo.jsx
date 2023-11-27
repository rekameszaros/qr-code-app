// import React, { useState } from 'react';
// import { Box, Flex, SimpleGrid, Input, FormControl, FormLabel, Tooltip, IconButton, Heading, Text } from '@chakra-ui/react';
// import { PrimaryButton, ProgressButton } from './Button';
// import { ChevronRightIcon, ChevronLeftIcon, DownloadIcon, InfoIcon } from '@chakra-ui/icons';
// import { QRCode } from 'antd';

// const Design = () => {
//   return (
//     <SimpleGrid columns={[1, null, 2]} spacing={[4, 8, 12]} minW="lg" /* gridTemplateRows="repeat(2, 1fr)" */>
//       {/* First Box */}
//       <Box bg="#E6E6F8" border="1px" borderColor="#D9D9FC" px="20" py="10" w={[100, 300, 300, 400, 560]} maxH="50vh" overflowY="auto">
//         <Heading as="h2" size="md" mb={4}>Style your QR Code</Heading>

//         <FormControl>
//           <FormLabel>Color</FormLabel>
//           <Input bg="white" placeholder="Input 1" mb={4} />
//         </FormControl>

//         <FormControl>
//           <FormLabel>Color</FormLabel>
//           <Input bg="white" placeholder="Input 2" mb={4} />
//         </FormControl>

//         <FormControl>
//           <FormLabel>Size</FormLabel>
//           <Input bg="white" placeholder="Input 3" mb={4} />
//         </FormControl>

//         <Flex mt="8" mb="2" justifyContent="space-between">
//           <PrimaryButton>
//             <ChevronLeftIcon mr="2" /> Back
//           </PrimaryButton>
//           <PrimaryButton >
//             Generate <ChevronRightIcon ml="2" />
//           </PrimaryButton>
//         </Flex>
//       </Box>

//       {/* Add spacing between the boxes */}
//       {/* <Box display={['none', 'none', 'none', 'none', 'block']} /> */}

//       {/* Second Box */}
//       <Box bg="#E6E6F8" p="4" w={[100, 200, 250, 250, 400]} minH="50vh" maxW="md">
//       <Flex mt="4" direction="column" align="center">
//             <Flex mt="40">  
//               <ProgressButton mx="2" leftIcon={<DownloadIcon />}> SVG</ProgressButton>
//               <ProgressButton mx="2" leftIcon={<DownloadIcon />}> PNG</ProgressButton>
//             </Flex>
//           </Flex>
//       </Box>
//     </SimpleGrid>
//   );
// };

// export default Design;

// import React, { useState, useEffect } from 'react';
// import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
// import { ProgressButton, ChevronRightIcon, DownloadIcon } from '@chakra-ui/icons';
// import { QRCode } from 'antd';

// const Design = () => {
//   const [qrUrl, setQrUrl] = useState('');

//   useEffect(() => {
//     // Retrieve the stored QR code URL from sessionStorage
//     const storedQrUrl = sessionStorage.getItem('qrUrl');
//     setQrUrl(storedQrUrl || ''); // Set the QR code URL or an empty string if not found
//   }, []);

//   return (
//     <SimpleGrid columns={[1, null, 2]} spacing={[4, 8, 12]} minW="lg">
//       {/* First Box */}
//       <Box bg="#E6E6F8" border="1px" borderColor="#D9D9FC" px="20" py="10" w={[100, 300, 300, 400, 560]} maxH="50vh" overflowY="auto">
//         {/* Display the stored QR code URL */}
//         <Text mt="4" color="gray.600" fontSize="sm">
//           {qrUrl}
//         </Text>

//         <Flex mt="8" mb="2" justifyContent="space-between">
//           <ProgressButton>
//             <ChevronRightIcon ml="2" /> Next
//           </ProgressButton>
//         </Flex>
//       </Box>

//       {/* Add spacing between the boxes */}
//       {/* <Box display={['none', 'none', 'none', 'none', 'block']} /> */}

//       {/* Second Box */}
//       <Box bg="#E6E6F8" p="4" w={[100, 200, 250, 250, 400]} minH="50vh" maxW="md">
//         <Flex mt="4" direction="column" align="center">
//           {/* Render the QR code using the retrieved URL */}
//           <QRCode value={qrUrl || '-'} />

//           <Flex mt="40">
//             <ProgressButton mx="2" leftIcon={<DownloadIcon />}>
//               SVG
//             </ProgressButton>
//             <ProgressButton mx="2" leftIcon={<DownloadIcon />}>
//               PNG
//             </ProgressButton>
//           </Flex>
//         </Flex>
//       </Box>
//     </SimpleGrid>
//   );
// };

// export default Design;

import React, { useState, useEffect } from 'react';
import { Box, Flex, SimpleGrid, Input, FormControl, FormLabel, Tooltip, IconButton, Heading, Text } from '@chakra-ui/react';
import { PrimaryButton, ProgressButton } from './Button';
import { ChevronRightIcon, ChevronLeftIcon, DownloadIcon, InfoIcon } from '@chakra-ui/icons';
import { QRCode } from 'antd';

const Design = () => {
  const [displayQR, setDisplayQR] = useState(false);
  const [qrurl, setQrurl] = useState('');
  // setQrCodeColor is a function which sets the QR code color
  const [qrCodeColor, setQrCodeColor] = useState(sessionStorage.getItem('qrColor')); // Initializes with the color stored in the session
  const [selectedLogo, setSelectedLogo] = useState(sessionStorage.getItem('qrLogo'));
  // set bg color
  const [qrCodeBgColor, setQrCodeBgColor] = useState(sessionStorage.getItem('qrBg')); // Initializes with the color stored in the session

  // Function for setting the color when a color is pressed
  const handleColorChange = (selectedColor) => { 
    setQrCodeColor(selectedColor); 
    // Store the color in session storage
    sessionStorage.setItem('qrColor', selectedColor);
  };

    // Function for setting the bg color when a color is pressed
    const handleColorBgChange = (selectedBgColor) => { 
      setQrCodeBgColor(selectedBgColor); 
      // Store the color in session storage
      sessionStorage.setItem('qrBg', selectedBgColor);
    };

  // This is what the sessionStorage.getItem() does:
  // function getItem(key) {
  //   const storage = [{key: "qrUrl", value: "1234"}, {key: "qrColor", value: "#0000"}];
  //   for (let i = 0; i > storage.length; i++) {
  //     if (storage[i].key === key) {
  //       return storage[i].value;
  //     }
  //   }
  // }


// Define the color palette of QR
const colorPalette = ['#000000', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#800080', '#808080', '#FFFFFF'];

// Define the color palette of QR background
const colorPaletteBg = ['#000000', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#800080', '#808080', '#FFFFFF'];

  useEffect(() => {
    // Check if there's a QR code URL in sessionStorage
    const storedQRUrl = sessionStorage.getItem('qrUrl');
    if (storedQRUrl) {
      setQrurl(storedQRUrl);
      setDisplayQR(true); // Set the state to display the QR code
    }
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <SimpleGrid columns={[1, null, 2]} spacing={[4, 8, 12]} minW="lg">
      {/* First Box */}
      <Box bg="#E6E6F8" border="1px" borderColor="#D9D9FC" px="20" py="10" w={[100, 300, 300, 400, 560]} maxH="50vh" overflowY="auto">
        <Heading as="h2" size="md" mb={4}>
          Style QR color
        </Heading>
        {/* Color Palette Box */}
        <FormControl>
          <FormLabel>Select QR Code Color</FormLabel>
          <Box bg="#FFFFFF" border="1px" borderColor="#D9D9FC" mb={4} display="flex" justifyContent="space-between" p="2">
            {colorPalette.map((color) => ( 
              /*
              * When using the map function, it runs through a list of elements, with an optional value.
              * When running through the array, the optional value becomes equal to the value at the current index.
              * I.e. it says colorPalette[0, 1, 2.... and so on] and takes the value so we can use it later.
              */
              <button
                key={color}
                style={{
                  backgroundColor: color,
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onClick={() => handleColorChange(color)}
              />
            ))}
          </Box>
        </FormControl>

        <FormControl>
          <FormLabel>Select QR Code Bg Color</FormLabel>
          <Box bg="#FFFFFF" border="1px" borderColor="#D9D9FC" mb={4} display="flex" justifyContent="space-between" p="2">
            {colorPaletteBg.map((color) => ( 
              /*
              * When using the map function, it runs through a list of elements, with an optional value.
              * When running through the array, the optional value becomes equal to the value at the current index.
              * I.e. it says colorPalette[0, 1, 2.... and so on] and takes the value so we can use it later.
              */
              <button
                key={color}
                style={{
                  backgroundColor: color,
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onClick={() => handleColorBgChange(color)}
              />
            ))}
            </Box>

        </FormControl>
        <FormLabel>Select QR Code Border Color</FormLabel>

        <FormControl>
        <Box bg="#FFFFFF" border="1px" borderColor="#D9D9FC" mb={4} display="flex" justifyContent="space-between" p="2">
          
        </Box>
        </FormControl>

        {/* Something needs to be out here for sure */}
        {/* Add more fields for customization for  example */}

        <Flex mt="8" mb="2" justifyContent="space-between">
          <PrimaryButton>
            <ChevronLeftIcon mr="2" /> Back
          </PrimaryButton>
          <PrimaryButton>
            Generate <ChevronRightIcon ml="2" />
          </PrimaryButton>
        </Flex>
      </Box>

      {/* Second Box */}
      <Box bg="#E6E6F8" border="1px" borderColor="#D9D9FC" p="10" w={[100, 200, 250, 250, 400]} minH="50vh" maxW="md">
        {/* Display the QR code if the state is set to true */}
        {displayQR && (
          <>
            {/* Generated full URL */}
            {qrurl && (
              <Text mt="4" color="gray.600" fontSize="sm">
                {qrurl}
              </Text>
            )}
            <Flex mt="4" direction="column" align="center">
              <QRCode errorLevel={'H'} type='svg' value={qrurl || '-'} color={qrCodeColor} bgColor={qrCodeBgColor} icon={selectedLogo}/>
              <Flex mt="40">
                <ProgressButton mx="2" leftIcon={<DownloadIcon />}>
                  SVG
                </ProgressButton>
                <ProgressButton mx="2" leftIcon={<DownloadIcon />}>
                  PNG
                </ProgressButton>
              </Flex>
            </Flex>
          </>
        )}
      </Box>
    </SimpleGrid>
  );
};

export default Design;
