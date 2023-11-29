import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import Sidebar from '../components/shared/Sidebar';
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
          <Tabs isLazy> {/* Lazy loading the tabs allows us to reload all our hooks. This way, we can make sure that the tabs are always reading the newest values from the session, when a tab is changed */}
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
