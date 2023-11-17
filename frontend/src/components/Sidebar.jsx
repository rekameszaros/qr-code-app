import React from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
} from '@chakra-ui/react';
import { FiHome, FiCode, FiArchive, FiInfo } from 'react-icons/fi';

const LinkItems = [
  { name: 'Home', icon: FiHome },
  { name: 'QR Code Generator', icon: FiCode },
  { name: 'Archive', icon: FiArchive },
  { name: 'About', icon: FiInfo },
];

const SimpleSidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent onClose={onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <Box flex="1" ml={{ base: 0, md: 60 }} p="4" overflow="auto">
        <Box p={4}>
          <Text fontSize="xl">Main Content Goes Here</Text>
        </Box>
      </Box>
    </Flex>
  );
};

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos={{ base: 'static', md: 'fixed' }}
      h={{ base: 'auto', md: 'full' }}
      {...rest}
    >
      {/* Space above the menu points */}
      <Box h="20" />

      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        {/* Remove the "Logo" text */}
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon: IconComponent, children, ...rest }) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}
      >
        {IconComponent && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={IconComponent}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

export default SimpleSidebar;
