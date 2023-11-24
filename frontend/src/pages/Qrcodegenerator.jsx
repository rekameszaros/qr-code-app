import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import General from '../components/Tabone';
import Logo from '../components/Tabthree';
import Design from '../components/Tabtwo';

const QrCodeGenerator = () => {
  return (
    <Flex direction="column" minH="100vh" minW="100vh">
      <Header />

      <Flex flex="1">
        <Sidebar />
        {/* Add your archive content here */}
        <Box mt="20" ml="10" p="4">
          <Tabs>
            <TabList>
              <Tab>General</Tab>
              <Tab>Design</Tab>
              <Tab>Logo</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <General />
              </TabPanel>
              <TabPanel>
                <Design />
              </TabPanel>
              <TabPanel>
                <Logo />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>

      <Footer />
    </Flex>
  );
};

export default QrCodeGenerator;
