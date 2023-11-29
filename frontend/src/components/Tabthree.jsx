// import React, { useState } from 'react';
// import { Box, Flex, SimpleGrid, Input, FormControl, FormLabel, Tooltip, IconButton, Heading, Text } from '@chakra-ui/react';
// import { PrimaryButton, ProgressButton } from './Button';
// import { ChevronRightIcon, ChevronLeftIcon, DownloadIcon, InfoIcon } from '@chakra-ui/icons';
// import { QRCode } from 'antd';

// const Logo = () => {
//   return (    <SimpleGrid columns={[1, null, 2]} spacing={[4, 8, 12]} minW="lg" /* gridTemplateRows="repeat(2, 1fr)" */>
//   {/* First Box */}
//   <Box bg="#E6E6F8" border="1px" borderColor="#D9D9FC" px="20" py="10" w={[100, 300, 300, 400, 560]} maxH="50vh" overflowY="auto">
//     <Heading as="h2" size="md" mb={4}>Choose Logo</Heading>

//     <FormControl>
//       <FormLabel>Industry Icons</FormLabel>
//       <Input bg="white" placeholder="Input 1" mb={4} />
//     </FormControl>

//     <FormControl>
//       <FormLabel>'Scan me' Icons</FormLabel>
//       <Input bg="white" placeholder="Input 2" mb={4} />
//     </FormControl>

//     <FormControl>
//       <FormLabel>GEA Logos</FormLabel>
//       <Input bg="white" placeholder="Input 3" mb={4} />
//     </FormControl>

//     <Flex mt="8" mb="2" justifyContent="space-between">
//       <PrimaryButton>
//         <ChevronLeftIcon mr="2" /> Back
//       </PrimaryButton>
//       <PrimaryButton >
//         Generate <ChevronRightIcon ml="2" />
//       </PrimaryButton>
//     </Flex>
//   </Box>

//   {/* Add spacing between the boxes */}
//   {/* <Box display={['none', 'none', 'none', 'none', 'block']} /> */}

//   {/* Second Box */}
//   <Box bg="#E6E6F8" p="4" w={[100, 200, 250, 250, 400]} minH="50vh" maxW="md">
//   <Flex mt="4" direction="column" align="center">
//         <Flex mt="40">
//           <ProgressButton mx="2" leftIcon={<DownloadIcon />}> SVG</ProgressButton>
//           <ProgressButton mx="2" leftIcon={<DownloadIcon />}> PNG</ProgressButton>
//         </Flex>
//       </Flex>
//   </Box>
// </SimpleGrid>
//   );
// };

// export default Logo;

// import React, { useState } from 'react';
// import { Box, Flex, SimpleGrid, Input, FormControl, FormLabel, Tooltip, IconButton, Heading } from '@chakra-ui/react';
// import { PrimaryButton, ProgressButton } from './Button';
// import { ChevronRightIcon, ChevronLeftIcon, DownloadIcon } from '@chakra-ui/icons';
// import { QRCode } from 'antd';

// const Logo = () => {
//   const [industryIcons, setIndustryIcons] = useState('');
//   const [scanMeIcons, setScanMeIcons] = useState('');
//   const [geaLogos, setGeaLogos] = useState('');

//   const handleGenerate = () => {
//     // Add logic to generate QR code with selected logo
//     // You can use the values of industryIcons, scanMeIcons, and geaLogos to customize the QR code logo
//   };

//   return (
//     <SimpleGrid columns={[1, null, 2]} spacing={[4, 8, 12]} minW="lg">
//       {/* First Box */}
//       <Box bg="#E6E6F8" border="1px" borderColor="#D9D9FC" px="20" py="10" w={[100, 300, 300, 400, 560]} maxH="50vh" overflowY="auto">
//         <Heading as="h2" size="md" mb={4}>Choose Logo</Heading>

//         <FormControl>
//           <FormLabel>Industry Icons</FormLabel>
//           <Input bg="white" placeholder="Input 1" mb={4} onChange={(e) => setIndustryIcons(e.target.value)} />
//         </FormControl>

//         <FormControl>
//           <FormLabel>'Scan me' Icons</FormLabel>
//           <Input bg="white" placeholder="Input 2" mb={4} onChange={(e) => setScanMeIcons(e.target.value)} />
//         </FormControl>

//         <FormControl>
//           <FormLabel>GEA Logos</FormLabel>
//           <Input bg="white" placeholder="Input 3" mb={4} onChange={(e) => setGeaLogos(e.target.value)} />
//         </FormControl>

//         <Flex mt="8" mb="2" justifyContent="space-between">
//           <PrimaryButton>
//             <ChevronLeftIcon mr="2" /> Back
//           </PrimaryButton>
//           <PrimaryButton onClick={handleGenerate}>
//             Generate <ChevronRightIcon ml="2" />
//           </PrimaryButton>
//         </Flex>
//       </Box>

//       {/* Add spacing between the boxes */}
//       {/* <Box display={['none', 'none', 'none', 'none', 'block']} /> */}

//       {/* Second Box */}
//       <Box bg="#E6E6F8" border="1px" borderColor="#D9D9FC" p="10" w={[100, 200, 250, 250, 400]} minH="50vh" maxW="md">
//         {/* Display the QR code if the state is set to true */}
//         {displayQR && (
//           <>
//             {/* Generated full URL */}
//             {qrurl && (
//               <Text mt="4" color="gray.600" fontSize="sm">
//                 {qrurl}
//               </Text>
//             )}
//             <Flex mt="4" direction="column" align="center">
//               <QRCode value={qrurl || '-'} color={qrCodeColor} />
//               <Flex mt="40">
//                 <ProgressButton mx="2" leftIcon={<DownloadIcon />}>
//                   SVG
//                 </ProgressButton>
//                 <ProgressButton mx="2" leftIcon={<DownloadIcon />}>
//                   PNG
//                 </ProgressButton>
//               </Flex>
//             </Flex>
//           </>
//         )}
//       </Box>
//     </SimpleGrid>
//   );
// };

// export default Logo;

import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  SimpleGrid,
  Input,
  FormControl,
  FormLabel,
  Tooltip,
  IconButton,
  Heading,
  Text,
  Image,
  Collapse,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { PrimaryButton, ProgressButton } from "./shared/Button";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  DownloadIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  RepeatClockIcon,
} from "@chakra-ui/icons";
import { QRCode } from "antd";

const ThirdTab = () => {
  const [qrurl, setQrurl] = useState(sessionStorage.getItem("qrUrl"));
  const [qrCodeColor, setQrCodeColor] = useState(
    sessionStorage.getItem("qrColor")
  );
  const [qrCodeBgColor, setQrCodeBgColor] = useState(
    sessionStorage.getItem("qrBg")
  );
  const [selectedLogo, setSelectedLogo] = useState(
    sessionStorage.getItem("qrLogo")
  );
  const [errorLevel, setErrorLevel] = useState(
    sessionStorage.getItem("qrError")
  );

  // Function to handle logo selection
  const handleLogoSelect = (logo) => {
    setSelectedLogo(logo);
    sessionStorage.setItem("qrLogo", logo);
  };

  // Function to handle logo reset
  const handleLogoReset = () => {
    setSelectedLogo(null);
    sessionStorage.removeItem("qrLogo");
  };

  const logos = [
    { id: 1, src: "/icons/Cell-based food-blue.svg" },
    { id: 2, src: "/icons/Cell-based food-white.svg" },
    { id: 3, src: "/icons/Beverage-blue.svg" },
    { id: 4, src: "/icons/Beverage-white.svg" },
    { id: 5, src: "/icons/Chemicals-blue.svg" },
    { id: 6, src: "/icons/Chemicals-white.svg" },
    { id: 7, src: "/icons/Dairy-Processing-blue.svg" },
    { id: 8, src: "/icons/Dairy-Processing-white.svg" },
    // { id: 9, src: '/icons/Dairy-Farming-blue.svg' },
    // { id: 10, src: '/icons/Dairy-Farming-white.svg' },
  ];

  const scanme = [
    { id: 1, src: "/images/scan-me.png" },
    { id: 2, src: "/images/scan-me.png" },
    { id: 3, src: "/images/scan-me.png" },
    { id: 4, src: "/images/scan-me.png" },
    { id: 5, src: "/images/scan-me.png" },
    { id: 6, src: "/images/scan-me.png" },
    { id: 7, src: "/images/scan-me.png" },
    { id: 8, src: "/images/scan-me.png" },
    // { id: 9, src: '/images/scan-me.png' },
    // { id: 10, src: '/images/scan-me.png' },
  ];

  const geaLogos = [
    { id: 1, src: "/images/GEA-Logo-wo-Claim-Solid-neg.svg" },
    { id: 1, src: "/images/GEA-Logo-wo-Claim-Solid-neg.svg" },
    { id: 1, src: "/images/GEA-Logo-wo-Claim-Solid-neg.svg" },
    { id: 1, src: "/images/GEA-Logo-wo-Claim-Solid-neg.svg" },
    { id: 1, src: "/images/GEA-Logo-wo-Claim-Solid-neg.svg" },
    { id: 1, src: "/images/GEA-Logo-wo-Claim-Solid-neg.svg" },
    { id: 1, src: "/images/GEA-Logo-wo-Claim-Solid-neg.svg" },
    { id: 1, src: "/images/GEA-Logo-wo-Claim-Solid-neg.svg" },
    { id: 1, src: "/images/GEA-Logo-wo-Claim-Solid-neg.svg" },
    { id: 1, src: "/images/GEA-Logo-wo-Claim-Solid-neg.svg" },
    { id: 11, src: "/images/GEA-Logo-wo-Claim-Solid-neg.svg" },
    { id: 1, src: "/images/GEA-Logo-wo-Claim-Solid-neg.svg" },
    { id: 1, src: "/images/GEA-Logo-wo-Claim-Solid-neg.svg" },
    { id: 1, src: "/images/GEA-Logo-wo-Claim-Solid-neg.svg" },
    { id: 1, src: "/images/GEA-Logo-wo-Claim-Solid-neg.svg" },
    { id: 1, src: "/images/GEA-Logo-wo-Claim-Solid-neg.svg" },
    { id: 1, src: "/images/GEA-Logo-wo-Claim-Solid-neg.svg" },
    { id: 1, src: "/images/GEA-Logo-wo-Claim-Solid-neg.svg" },
    { id: 1, src: "/images/GEA-Logo-wo-Claim-Solid-neg.svg" },
    { id: 1, src: "/images/GEA-Logo-wo-Claim-Solid-neg.svg" },
    { id: 1, src: "/images/GEA-Logo-wo-Claim-Solid-neg.svg" },
    { id: 11, src: "/images/GEA-Logo-wo-Claim-Solid-neg.svg" },
    { id: 1, src: "/images/GEA-Logo-wo-Claim-Solid-neg.svg" },
    { id: 11, src: "/images/GEA-Logo-wo-Claim-Solid-neg.svg" },
  ];

  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <SimpleGrid columns={[1, null, 2]} spacing={[4, 8, 12]} minW="lg">
      {/* First Box */}
      <Box
        bg="#E6E6F8"
        border="1px"
        borderColor="#D9D9FC"
        px="20"
        py="10"
        w={[100, 300, 300, 400, 560]}
        maxH="50vh"
        overflowY="auto"
      >
        <Heading as="h2" size="md" mb={4}>
          Choose an embeded icons
          <Button
            bg="transparent"
            size="sm"
            leftIcon={<RepeatClockIcon />}
            onClick={handleLogoReset}
          ></Button>
        </Heading>

        <FormControl>
          <FormLabel>Industry icons</FormLabel>
          {/* Logo Selection */}
          <Box
            bg="#FFFFFF"
            border="1px"
            borderColor="#D9D9FC"
            mb={4}
            display="flex"
            justifyContent="space-between"
            p="2"
          >
            {logos.map((logo) => (
              <IconButton
                key={logo.id}
                aria-label={`Select Logo ${logo.id}`}
                icon={
                  <Image
                    src={logo.src}
                    alt={`Logo ${logo.id}`}
                    boxSize="30px"
                  />
                }
                onClick={() => handleLogoSelect(logo.src)}
                isActive={selectedLogo?.id === logo.id}
              />
            ))}
          </Box>
        </FormControl>

        <FormControl>
          <FormLabel>Scan me icons</FormLabel>
          {/* Logo Selection */}
          <Box
            bg="#FFFFFF"
            border="1px"
            borderColor="#D9D9FC"
            mb={4}
            display="flex"
            justifyContent="space-between"
            p="2"
          >
            {scanme.map((logo) => (
              <IconButton
                key={logo.id}
                aria-label={`Select Logo ${logo.id}`}
                icon={
                  <Image
                    src={logo.src}
                    alt={`Logo ${logo.id}`}
                    boxSize="30px"
                  />
                }
                onClick={() => handleLogoSelect(logo.src)}
                isActive={selectedLogo?.id === logo.id}
              />
            ))}
          </Box>
        </FormControl>
        <FormControl>
          <FormLabel marginRight={0}>
            <Box display="flex" justifyContent="space-between" minW={"100%"}>
              GEA logos{" "}
              <Button bg="transparent" size="sm" onClick={handleToggle}>
                {show ? <ChevronDownIcon /> : <ChevronUpIcon />}
              </Button>
            </Box>
          </FormLabel>
          {/* Logo Selection */}
          <Collapse startingHeight={58} in={show}>
            {/* {Array(Math.round(geaLogos.length / 8))
              .fill(1)
              .map((index) => )} */}
            <Box
              bg="#FFFFFF"
              borderColor="#D9D9FC"
              display="flex"
              justifyContent="space-between"
              p="2"
            >
              {geaLogos.slice(0, 8).map((logo) => (
                <IconButton
                  key={logo.id}
                  aria-label={`Select Logo ${logo.id}`}
                  icon={
                    <Image
                      src={logo.src}
                      alt={`Logo ${logo.id}`}
                      boxSize="30px"
                    />
                  }
                  onClick={() => handleLogoSelect(logo.src)}
                  isActive={selectedLogo?.id === logo.id}
                />
              ))}
            </Box>

            <Box
              bg="#FFFFFF"
              display="flex"
              justifyContent="space-between"
              p="2"
            >
              {geaLogos.slice(8, 16).map((logo) => (
                <IconButton
                  key={logo.id}
                  aria-label={`Select Logo ${logo.id}`}
                  icon={
                    <Image
                      src={logo.src}
                      alt={`Logo ${logo.id}`}
                      boxSize="30px"
                    />
                  }
                  onClick={() => handleLogoSelect(logo.src)}
                  isActive={selectedLogo?.id === logo.id}
                />
              ))}
            </Box>

            <Box
              bg="#FFFFFF"
              borderColor="#D9D9FC"
              mb={4}
              display="flex"
              justifyContent="space-between"
              p="2"
            >
              {geaLogos.slice(16, 24).map((logo) => (
                <IconButton
                  key={logo.id}
                  aria-label={`Select Logo ${logo.id}`}
                  icon={
                    <Image
                      src={logo.src}
                      alt={`Logo ${logo.id}`}
                      boxSize="30px"
                    />
                  }
                  onClick={() => handleLogoSelect(logo.src)}
                  isActive={selectedLogo?.id === logo.id}
                />
              ))}
            </Box>
          </Collapse>
        </FormControl>

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
      <Box
        bg="#E6E6F8"
        border="1px"
        borderColor="#D9D9FC"
        p="10"
        w={[100, 200, 250, 250, 400]}
        minH="50vh"
        maxH="md"
        maxW="md"
      >
        {/* Display the QR code with selected logo */}
        {qrurl && (
          <>
            {/* Generated full URL */}
            {qrurl && (
              <Text mt="4" color="gray.600" fontSize="sm">
                {qrurl}
              </Text>
            )}
            <Flex mt="4" direction="column" align="center">
              <QRCode
                errorLevel={errorLevel}
                type="svg"
                value={qrurl || "-"}
                color={qrCodeColor}
                bgColor={qrCodeBgColor}
                icon={selectedLogo}
              />
              <Flex mt="10">
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

export default ThirdTab;
