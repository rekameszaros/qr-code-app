import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

const CustomButton = ({ children, click, ...rest }) => {
  return (
    <ChakraButton
      borderRadius="50px"
      bg="#0303B8"
      color="white"
      ml="auto"
      paddingX="10"
      _hover={{ backgroundColor: '#5464F8' }} 
      onClick={click}
      {...rest}
    >
      {children}
    </ChakraButton>
  );
};

export default CustomButton;
