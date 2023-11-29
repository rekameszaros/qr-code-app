// import React from 'react';
// import { Button as ChakraButton } from '@chakra-ui/react';
// import { ChevronRightIcon } from '@chakra-ui/icons';

// const CustomButton = ({ children, click, ...rest }) => {
//   return (
//     <ChakraButton
//       borderRadius="50px"
//       bg="#0303B8"
//       color="white"
//       ml="auto"
//       paddingX="10"
//       _hover={{ backgroundColor: '#4F4FCD' }} 
//       onClick={click}
//       {...rest}
//     >
//       {children}
//     </ChakraButton>
//   );
// };

// export default CustomButton;

import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

const PrimaryButton = ({ click, ...rest }) => (
  <ChakraButton
    borderRadius="50px"
    color="white"
    ml="auto"
    paddingX="10"
    bg="#0303B8" // Default color
    _hover={{ backgroundColor: '#4F4FCD' }} // Hover color
    _active={{ backgroundColor: '#020281' }} // Active color
    _focus={{ backgroundColor: '#0303B8' }} // Focus color
    _disabled={{ backgroundColor: '#E6E6E6', cursor: 'not-allowed', color: '#B3B3B3' }} // Disabled color
    onClick={click}
    {...rest}
  />
);

const SecondaryButton = ({ click, ...rest }) => (
  <ChakraButton
    borderRadius="50px"
    color="black"
    ml="auto"
    paddingX="10"
    bg="#FFFFFF" // Default color
    _hover={{ backgroundColor: '#DDDDDD' }} // Hover color
    _active={{ backgroundColor: '#CCCCCC' }} // Active color
    _focus={{ backgroundColor: '#FFFFFF' }} // Focus color
    _disabled={{ backgroundColor: '#F5F5F5', cursor: 'not-allowed', color: '#CCCCCC' }} // Disabled color
    onClick={click}
    {...rest}
  />
);

const ProgressButton = ({ click, ...rest }) => (
  <ChakraButton
    borderRadius="50px"
    color="black"
    ml="auto"
    paddingX="10"
    bg="#FFDD2D" // Default color
    _hover={{ backgroundColor: '#FFE45B' }} // Hover color
    _active={{ backgroundColor: '#F2CB00' }} // Active color
    _focus={{ backgroundColor: '#FFDD2D' }} // Focus color
    _disabled={{ backgroundColor: '#E6E6E6', cursor: 'not-allowed', color: '#CCCCCC' }} // Disabled color
    onClick={click}
    {...rest}
  />
);

const DangerButton = ({ click, ...rest }) => (
  <ChakraButton
    borderRadius="50px"
    borderRightColor={{ backgroundColor: '#000F41' }}  // Adding borderRightColor
    color="white"
    ml="auto"
    paddingX="10"
    bg="#FF0000" // Default color
    _hover={{ backgroundColor: '#FFA4A9' }} // Hover color
    _active={{ backgroundColor: '#FFFFFF' }} // Active color
    _focus={{ backgroundColor: '#FFFFFF', borderRightColor: '#000F41' }} // Focus color with different borderRightColor
    _disabled={{ backgroundColor: '#FFFFFF', cursor: 'not-allowed', color: '#FFFFFF', border: '1px solid #DCDCDC' }} // Disabled color with different border
    onClick={click}
    {...rest}
  />
);

export { PrimaryButton, SecondaryButton, ProgressButton, DangerButton };
