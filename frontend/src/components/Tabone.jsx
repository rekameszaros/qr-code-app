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

import React, { useState } from 'react';
import { Box, SimpleGrid, Input, FormControl, FormLabel, Heading } from '@chakra-ui/react';
import CustomButton from './Button';
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

    if (url != "") {
      fullUrl = url + "?";
    }
    else {
      alert("A url must be set");
      return;
    }

    if (campaign != "" && source != "" && medium != "") {
      const BASE_UTM = "&utm_";

      // Add checked UTMS
      fullUrl += BASE_UTM + "campaign=" + campaign + BASE_UTM + "source=" + source + BASE_UTM + "medium=" + medium; //gea.com?&utm_campaign&utm_source&utm_medium

      // Check for the last UTMS
      if (content != "") {
        fullUrl += BASE_UTM + "content=" + content;
      }
      if (term != "") {
        fullUrl += BASE_UTM + "term=" + term;
      }

      // create QR with UTM
      setQrurl(fullUrl);
    }
    else if (campaign === "" && source === "" && medium === "") {
      // create QR without UTM
      setQrurl(fullUrl);
    }
    else
      alert("All or none UTM"); // TODO: figure out a better wording
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
          or
        </Heading>

        <Heading as="h2" size="md" mb={4}>
          Add UTM
        </Heading>

        <FormControl>
        <FormLabel>Campaign</FormLabel>
        <Input bg="white" placeholder="Input 2" mb={4} onChange={(e) => setCampaign(e.target.value)}/>
        </FormControl>

        <FormControl>
        <FormLabel>Source</FormLabel>
        <Input bg="white" placeholder="Input 2" mb={4} onChange={(e) => setSource(e.target.value)}/>
        </FormControl>

        <FormControl>
        <FormLabel>Medium</FormLabel>
        <Input bg="white" placeholder="Input 3" mb={4} onChange={(e) => setMedium(e.target.value)}/>
        </FormControl>

        <FormControl>
        <FormLabel>Content</FormLabel>
        <Input bg="white" placeholder="Input 4" mb={4} onChange={(e) => setContent(e.target.value)}/>
        </FormControl>

        <FormControl>
        <FormLabel>Term</FormLabel>
        <Input bg="white" placeholder="Input 5" mb={4} onChange={(e) => setTerm(e.target.value)}/>
        </FormControl>


        <CustomButton onClick={generatetheqr}> Generate </CustomButton>
      </Box>

      {/* Second Box */}
      <Box bg="#E6E6F8" p="10" w={[100, 200, 250, 250, 400]} minH="50vh" maxW="md">
        <Heading as="h2" size="md">
          QR Code
        </Heading>
        <QRCode value={qrurl || '-'} />
      </Box>
    </SimpleGrid>
  );
};

export default General;


