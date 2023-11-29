import React from "react";
import { Flex, Box, SimpleGrid } from "@chakra-ui/react";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import Sidebar from "../components/shared/Sidebar";
import Card from "../components/shared/Card";

const ArchivePage = () => {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Flex flex="1">
        <Sidebar />
        <Box ml="10" mr="10" mt="10" mb="10">
          <SimpleGrid
            spacing={4}
            // templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            templateColumns="repeat(4, 1fr)" // Set to four cards in a row
          >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </SimpleGrid>
        </Box>
      </Flex>

      <Footer />
    </Flex>
  );
};

export default ArchivePage;
