// import React from 'react';
// import { Box, SimpleGrid } from '@chakra-ui/react';

// const General = () => {
//   return (
//     <SimpleGrid columns={[1, null, 2]} spacing={[4, 8, 12]} minW="lg" /* gridTemplateRows="repeat(2, 1fr)" */>
//       {/* First Box */}
//       <Box bg="#E6E6F8" p="4" w={[100, 300, 300, 400, 560]}>
//         <h2>Form</h2>
//       </Box>

//       {/* Add spacing between the boxes */}
//       {/* <Box display={['none', 'none', 'none', 'none', 'block']} /> */}

//       {/* Second Box */}
//       <Box bg="#E6E6F8" p="4" w={[100, 200, 250, 250, 400]} minH="50vh" maxW="md">
//         <h2>QR Code</h2>
//       </Box>
//     </SimpleGrid>
//   );
// };

// export default General;

// import React, { useState } from 'react';
// import { Box, Flex, SimpleGrid, Input, FormControl, FormLabel, Tooltip, IconButton, Heading, Text } from '@chakra-ui/react';
// import { PrimaryButton, ProgressButton } from './Button';
// import { ChevronRightIcon, ChevronLeftIcon, DownloadIcon, InfoIcon } from '@chakra-ui/icons';
// import { QRCode } from 'antd';

// const General = () => {

//   const [url, setUrl] = useState('');
//   const [campaign, setCampaign] = useState('');
//   const [source, setSource] = useState('');
//   const [medium, setMedium] = useState('');
//   const [content, setContent] = useState('');
//   const [term, setTerm] = useState('');

//   const [qrurl, setQrurl] = useState('');

//   function generatetheqr() {
//     let fullUrl;

//     if (url != "") {
//       fullUrl = url + "?";
//     }
//     else {
//       alert("A url must be set");
//       return;
//     }

//     if (campaign != "" && source != "" && medium != "") {
//       const BASE_UTM = "&utm_";

//       // Add checked UTMS
//       fullUrl += BASE_UTM + "campaign=" + campaign + BASE_UTM + "source=" + source + BASE_UTM + "medium=" + medium; //gea.com?&utm_campaign&utm_source&utm_medium

//       // Check for the last UTMS
//       if (content != "") {
//         fullUrl += BASE_UTM + "content=" + content;
//       }
//       if (term != "") {
//         fullUrl += BASE_UTM + "term=" + term;
//       }

//       // create QR with UTM
//       setQrurl(fullUrl);
//     }
//     else if (campaign === "" && source === "" && medium === "") {
//       // create QR without UTM
//       setQrurl(fullUrl);
//     }
//     else
//       alert("All or none UTM"); // TODO: figure out a better wording
//   }
  

//   return (
//     <SimpleGrid columns={[1, null, 2]} spacing={[4, 8, 12]} minW="lg" >
//       {/* First Box */}
//       <Box bg="#E6E6F8" border="1px" borderColor="#D9D9FC" px="20" py="10" w={[100, 300, 300, 400, 560]} maxH="50vh" overflowY="auto">
//         <Heading as="h2" size="md" mb={4}>
//           Create QR code
//         </Heading>

//         <FormControl isRequired>
//           <FormLabel>URL</FormLabel>
//           <Input bg="white" placeholder="Input 1" mb={4} onChange={(e) => setUrl(e.target.value)}/>
//         </FormControl>

//         <Heading as="h2" size="md" my={6} textAlign="center">
//           and
//         </Heading>

//         <Heading as="h2" size="md" mb={4}>
//           Add UTM (Optional)
//         </Heading>

//         <FormControl>
//           <FormLabel>
//             Campaign
//             <Tooltip label="The utm_campaign is the group holder for all links promoted under the same marketing effort." placement="right" bg="gray.500">
//               <IconButton
//                 size="sm"
//                 icon={<InfoIcon />}
//                 aria-label="Campaign Information"
//                 ml="2"
//                 _hover={{ bg: 'none' }}
//                 style={{ backgroundColor: 'transparent', boxShadow: 'none' }}
//               />
//             </Tooltip>
//           </FormLabel>
//           <Input bg="white" placeholder="Input 2" mb={4} onChange={(e) => setCampaign(e.target.value)} />
//         </FormControl>

//         <FormControl>
//           <FormLabel>
//             Source
//             <Tooltip label="Source is used to track the channel or platform where the link is displayed." placement="right" bg="gray.500">
//               <IconButton
//                 size="sm"
//                 icon={<InfoIcon />}
//                 aria-label="Source Information"
//                 ml="2"
//                 _hover={{ bg: 'none' }}
//                 style={{ backgroundColor: 'transparent', boxShadow: 'none' }}
//               />
//             </Tooltip>
//           </FormLabel>
//           <Input bg="white" placeholder="Input 2" mb={4} onChange={(e) => setSource(e.target.value)} />
//         </FormControl>

//         <FormControl>
//           <FormLabel>
//             Medium
//             <Tooltip label="Medium is used to track the marketing medium used to display the link." placement="right" bg="gray.500">
//               <IconButton
//                 size="sm"
//                 icon={<InfoIcon />}
//                 aria-label="Medium Information"
//                 ml="2"
//                 _hover={{ bg: 'none' }}
//                 style={{ backgroundColor: 'transparent', boxShadow: 'none' }}
//               />
//             </Tooltip>
//           </FormLabel>
//           <Input bg="white" placeholder="Input 3" mb={4} onChange={(e) => setMedium(e.target.value)} />
//         </FormControl>

//         <FormControl>
//           <FormLabel>
//             Content
//             <Tooltip label="If you are promoting the same link in similar content and would like to see the traffic difference, you can use the “content” parameter to add an identifier to the link." placement="right" bg="gray.500">
//               <IconButton
//                 size="sm"
//                 icon={<InfoIcon />}
//                 aria-label="Content Information"
//                 ml="2"
//                 _hover={{ bg: 'none' }}
//                 style={{ backgroundColor: 'transparent', boxShadow: 'none' }}
//               />
//             </Tooltip>
//           </FormLabel>
//           <Input bg="white" placeholder="Input 4" mb={4} onChange={(e) => setContent(e.target.value)} />
//         </FormControl>

//         <FormControl>
//           <FormLabel>
//             Term
//             <Tooltip label="The “term” parameter is mostly used when you are doing Search Engine Marketing/Advertising. In such cases, the Term parameter shall be used to store the keyword connected to each link. This way, it is possible to understand which terms or keywords are mostly used to access the website and are more likely to convert." placement="right" bg="gray.500">
//               <IconButton
//                 size="sm"
//                 icon={<InfoIcon />}
//                 aria-label="Term Information"
//                 ml="2"
//                 _hover={{ bg: 'none' }}
//                 style={{ backgroundColor: 'transparent', boxShadow: 'none' }}
//               />
//             </Tooltip>
//           </FormLabel>
//           <Input bg="white" placeholder="Input 5" mb={4} onChange={(e) => setTerm(e.target.value)} />
//         </FormControl>

//         <Flex mt="8" mb="2" justifyContent="space-between">
//           <PrimaryButton > 
//           <ChevronLeftIcon mr="2" /> Back 
//           </PrimaryButton>
//           <PrimaryButton onClick={generatetheqr}> 
//             Generate <ChevronRightIcon ml="2" />
//           </PrimaryButton>
//         </Flex>

//       </Box>

//         {/* Second Box */}
//         <Box bg="#E6E6F8" border="1px" borderColor="#D9D9FC" p="10" w={[100, 200, 250, 250, 400]} minH="50vh" maxW="md">
//         {/* Generated full URL */}
//         {qrurl && (
//           <Text mt="4" color="gray.600" fontSize="sm">
//             {qrurl}
//           </Text>
//         )}
//           <Flex mt="4" direction="column" align="center">
//             <QRCode /* style={{ backgroundColor: "#FFFFFF" }} */ value={qrurl || '-'} />
//             <Flex mt="40">  
//               <ProgressButton mx="2" leftIcon={<DownloadIcon />}> SVG</ProgressButton>
//               <ProgressButton mx="2" leftIcon={<DownloadIcon />}> PNG</ProgressButton>
//             </Flex>
//           </Flex>
//         </Box>

//     </SimpleGrid>
//   );
// };

// export default General;

import React, { useState } from 'react';
import { Box, Flex, SimpleGrid, Input, FormControl, FormLabel, Tooltip, IconButton, Heading, Text } from '@chakra-ui/react';
import { PrimaryButton, ProgressButton } from './Button';
import { ChevronRightIcon, ChevronLeftIcon, DownloadIcon, InfoIcon } from '@chakra-ui/icons';
import { QRCode } from 'antd';

const General = () => {

  const [url, setUrl] = useState('');
  const [campaign, setCampaign] = useState('');
  const [source, setSource] = useState('');
  const [medium, setMedium] = useState('');
  const [content, setContent] = useState('');
  const [term, setTerm] = useState('');

  const [qrurl, setQrurl] = useState('');

  function generatetheqr() {
    let fullUrl;

    if (url !== "") {
      fullUrl = url + "?";
    } else {
      alert("A URL must be set");
      return;
    }

    if (campaign !== "" && source !== "" && medium !== "") {
      const BASE_UTM = "&utm_";

      // Add checked UTMS
      fullUrl += BASE_UTM + "campaign=" + campaign + BASE_UTM + "source=" + source + BASE_UTM + "medium=" + medium;

      // Check for the last UTMS
      if (content !== "") {
        fullUrl += BASE_UTM + "content=" + content;
      }
      if (term !== "") {
        fullUrl += BASE_UTM + "term=" + term;
      }

      // create QR with UTM
      setQrurl(fullUrl);

      // Store the qrurl in session storage
      sessionStorage.setItem('qrUrl', fullUrl);
      console.log('Full URL:', fullUrl);
    } else if (campaign === "" && source === "" && medium === "") {
      // create QR without UTM
      setQrurl(fullUrl);

      // Store the qrurl in session storage
      sessionStorage.setItem('qrUrl', fullUrl);
    } else {
      alert("All or none UTM"); // TODO: figure out a better wording
    }
  }

  return (
    <SimpleGrid columns={[1, null, 2]} spacing={[4, 8, 12]} minW="lg" >
      {/* First Box */}
      <Box bg="#E6E6F8" border="1px" borderColor="#D9D9FC" px="20" py="10" w={[100, 300, 300, 400, 560]} maxH="50vh" overflowY="auto">
        <Heading as="h2" size="md" mb={4}>
          Create QR code
        </Heading>

        <FormControl isRequired>
          <FormLabel>URL</FormLabel>
          <Input bg="white" placeholder="Input 1" mb={4} onChange={(e) => setUrl(e.target.value)}/>
        </FormControl>

        <Heading as="h2" size="md" my={6} textAlign="center">
          and
        </Heading>

        <Heading as="h2" size="md" mb={4}>
          Add UTM (Optional)
        </Heading>

        <FormControl>
          <FormLabel>
            Campaign
            <Tooltip label="The utm_campaign is the group holder for all links promoted under the same marketing effort." placement="right" bg="gray.500">
              <IconButton
                size="sm"
                icon={<InfoIcon />}
                aria-label="Campaign Information"
                ml="2"
                _hover={{ bg: 'none' }}
                style={{ backgroundColor: 'transparent', boxShadow: 'none' }}
              />
            </Tooltip>
          </FormLabel>
          <Input bg="white" placeholder="Input 2" mb={4} onChange={(e) => setCampaign(e.target.value)} />
        </FormControl>

        <FormControl>
          <FormLabel>
            Source
            <Tooltip label="Source is used to track the channel or platform where the link is displayed." placement="right" bg="gray.500">
              <IconButton
                size="sm"
                icon={<InfoIcon />}
                aria-label="Source Information"
                ml="2"
                _hover={{ bg: 'none' }}
                style={{ backgroundColor: 'transparent', boxShadow: 'none' }}
              />
            </Tooltip>
          </FormLabel>
          <Input bg="white" placeholder="Input 2" mb={4} onChange={(e) => setSource(e.target.value)} />
        </FormControl>

        <FormControl>
          <FormLabel>
            Medium
            <Tooltip label="Medium is used to track the marketing medium used to display the link." placement="right" bg="gray.500">
              <IconButton
                size="sm"
                icon={<InfoIcon />}
                aria-label="Medium Information"
                ml="2"
                _hover={{ bg: 'none' }}
                style={{ backgroundColor: 'transparent', boxShadow: 'none' }}
              />
            </Tooltip>
          </FormLabel>
          <Input bg="white" placeholder="Input 3" mb={4} onChange={(e) => setMedium(e.target.value)} />
        </FormControl>

        <FormControl>
          <FormLabel>
            Content
            <Tooltip label="If you are promoting the same link in similar content and would like to see the traffic difference, you can use the “content” parameter to add an identifier to the link." placement="right" bg="gray.500">
              <IconButton
                size="sm"
                icon={<InfoIcon />}
                aria-label="Content Information"
                ml="2"
                _hover={{ bg: 'none' }}
                style={{ backgroundColor: 'transparent', boxShadow: 'none' }}
              />
            </Tooltip>
          </FormLabel>
          <Input bg="white" placeholder="Input 4" mb={4} onChange={(e) => setContent(e.target.value)} />
        </FormControl>

        <FormControl>
          <FormLabel>
            Term
            <Tooltip label="The “term” parameter is mostly used when you are doing Search Engine Marketing/Advertising. In such cases, the Term parameter shall be used to store the keyword connected to each link. This way, it is possible to understand which terms or keywords are mostly used to access the website and are more likely to convert." placement="right" bg="gray.500">
              <IconButton
                size="sm"
                icon={<InfoIcon />}
                aria-label="Term Information"
                ml="2"
                _hover={{ bg: 'none' }}
                style={{ backgroundColor: 'transparent', boxShadow: 'none' }}
              />
            </Tooltip>
          </FormLabel>
          <Input bg="white" placeholder="Input 5" mb={4} onChange={(e) => setTerm(e.target.value)} />
        </FormControl>

        <Flex mt="8" mb="2" justifyContent="space-between">
          <PrimaryButton > 
          <ChevronLeftIcon mr="2" /> Back 
          </PrimaryButton>
          <PrimaryButton onClick={generatetheqr}> 
            Generate <ChevronRightIcon ml="2" />
          </PrimaryButton>
        </Flex>

      </Box>

      {/* Second Box */}
      <Box bg="#E6E6F8" border="1px" borderColor="#D9D9FC" p="10" w={[100, 200, 250, 250, 400]} minH="50vh" maxW="md">
        {/* Generated full URL */}
        {qrurl && (
          <Text mt="4" color="gray.600" fontSize="sm">
            {qrurl}
          </Text>
        )}
        <Flex mt="4" direction="column" align="center">
          <QRCode value={qrurl || '-'} />
          <Flex mt="40">  
            <ProgressButton mx="2" leftIcon={<DownloadIcon />}> SVG</ProgressButton>
            <ProgressButton mx="2" leftIcon={<DownloadIcon />}> PNG</ProgressButton>
          </Flex>
        </Flex>
      </Box>

    </SimpleGrid>
  );
};

export default General;
