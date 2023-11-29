import React from "react";
import {
  Box,
  Card,
  Divider,
  Stack,
  Heading,
  Image,
  ButtonGroup,
  CardFooter,
  CardBody,
  Checkbox,
  Flex,
  Text,
} from "@chakra-ui/react";
import { PrimaryButton, SecondaryButton } from "./Button";
import { QRCode } from "antd";

const CustomCard = () => {
  return (
    <Box p="5">
      <Card maxWidth="md">
        {/* <Card maxW="35vh" maxH="35vh" minW="35vh" minH="35vh"> */}
        <CardBody>
          {/* <Flex align="center" justify="space-between"> */}
          <Stack mt="6" spacing="3">
            <Heading size="md">
              {" "}
              <Checkbox
              // isChecked={isSelected}
              // onChange={handleCheckboxChange}
              >
                <Text ml="4">QR code name</Text>
              </Checkbox>
            </Heading>
            <Box align="center" justify="space-between">
              <QRCode value="https://www.figma.com/file/wE1w3T0FH61FQa5oPo3XBM/Prototype?type=design&node-id=14-23616&mode=design&t=FLoJIR1Y7TQ6fMHn-0" />
            </Box>
          </Stack>
          {/* </Flex> */}
        </CardBody>
        {/* <Divider /> */}
        <CardFooter>
          <ButtonGroup spacing="2">
            <PrimaryButton /* click={() => window.location.replace("/generator")} */
            >
              Stats
            </PrimaryButton>
            <PrimaryButton /* click={() => window.location.replace("/generator")} */
            >
              Edit
            </PrimaryButton>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default CustomCard;
