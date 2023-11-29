import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  SimpleGrid,
  FormControl,
  FormLabel,
  IconButton,
  Heading,
  Text,
} from "@chakra-ui/react";
import { PrimaryButton, ProgressButton } from "./shared/Button";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  DownloadIcon,
  InfoIcon,
} from "@chakra-ui/icons";
import { QRCode } from "antd";

const Design = () => {
  const [displayQR, setDisplayQR] = useState(false);
  const [qrurl, setQrurl] = useState("");
  // setQrCodeColor is a function which sets the QR code color
  const [qrCodeColor, setQrCodeColor] = useState(
    sessionStorage.getItem("qrColor")
  ); // Initializes with the color stored in the session
  const [selectedLogo, setSelectedLogo] = useState(
    sessionStorage.getItem("qrLogo")
  );
  // set bg color
  const [qrCodeBgColor, setQrCodeBgColor] = useState(
    sessionStorage.getItem("qrBg")
  ); // Initializes with the bg color stored in the session
  // set bg color
  const [errorLevel, setErrorLevel] = useState(
    sessionStorage.getItem("qrError")
  );

  // Function for setting the color when a color is pressed
  const handleColorChange = (selectedColor) => {
    setQrCodeColor(selectedColor);
    // Store the color in session storage
    sessionStorage.setItem("qrColor", selectedColor);
  };

  // Function for setting the bg color when a color is pressed
  const handleColorBgChange = (selectedBgColor) => {
    setQrCodeBgColor(selectedBgColor);
    // Store the color in session storage
    sessionStorage.setItem("qrBg", selectedBgColor);
  };

  // Function for setting the error level when a button is clicked
  const handleErrorLevelChange = (selectedErrorLevel) => {
    setErrorLevel(selectedErrorLevel);
    sessionStorage.setItem("qrError", selectedErrorLevel);
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
  const colorPalette = [
    "#000000",
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
    "#800080",
    "#808080",
    "#FFFFFF",
  ];

  // Define the color palette of QR background
  const colorPaletteBg = [
    "#000000",
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
    "#800080",
    "#808080",
    "#FFFFFF",
  ];

  // Define the border color palette of QR background
  const errorLevelPalette = ["L", "M", "Q", "H"];

  useEffect(() => {
    // Check if there's a QR code URL in sessionStorage
    const storedQRUrl = sessionStorage.getItem("qrUrl");
    if (storedQRUrl) {
      setQrurl(storedQRUrl);
      setDisplayQR(true); // Set the state to display the QR code
    }
  }, []); // Empty dependency array means this effect runs once when the component mounts

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
          Select style
        </Heading>
        {/* Color Palette Box */}
        <FormControl>
          <FormLabel>Dots color</FormLabel>
          <Box
            bg="#FFFFFF"
            border="1px"
            borderColor="#D9D9FC"
            mb={4}
            display="flex"
            justifyContent="space-between"
            p="2"
          >
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
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => handleColorChange(color)}
              />
            ))}
          </Box>
        </FormControl>

        <FormControl>
          <FormLabel>Background color</FormLabel>
          <Box
            bg="#FFFFFF"
            border="1px"
            borderColor="#D9D9FC"
            mb={4}
            display="flex"
            justifyContent="space-between"
            p="2"
          >
            {colorPaletteBg.map((color) => (
              <button
                key={color}
                style={{
                  backgroundColor: color,
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => handleColorBgChange(color)}
              />
            ))}
          </Box>
        </FormControl>
        <FormControl>
          <FormLabel>Error level </FormLabel>
          <Box
            bg="#FFFFFF"
            border="1px"
            borderColor="#D9D9FC"
            mb={4}
            display="flex"
            justifyContent="space-between"
            p="2"
          >
            {errorLevelPalette.map((level) => (
              <button
                key={level}
                style={{
                  backgroundColor: level === errorLevel ? "#ddd" : "#fff",
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => handleErrorLevelChange(level)}
              >
                {level}
              </button>
            ))}
          </Box>
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

export default Design;
