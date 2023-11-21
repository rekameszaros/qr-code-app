// // Login.jsx
// import React from 'react';
// import {
//   Box,
//   Button,
//   FormControl,
//   FormErrorMessage,
//   FormLabel,
//   Input,
//   Stack,
// } from '@chakra-ui/react';

// const Login = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your login logic here
//     // Use authenticator to auth the user

//     // Take the output from the auth and get the user in the DB (In mock, use hardcoded data)
//     // let username = 'Réka';
//     // let email = YOUR_EMAIL;
//     // let id = 1;
//     // If they don't exist, create them

//     // Set the data gotten from the DB to the session

//     // Redirect to the desired page :)
//   };

//   return (
//     <Box
//       maxW="md"
//       borderWidth="1px"
//       borderRadius="lg"
//       p="6"
//       boxShadow="base"
//       m="auto"
//       mt="20"
//     >
//       <form onSubmit={handleSubmit}>
//         <Stack spacing="4">
//           <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
//             Login
//           </Button>
//         </Stack>
//       </form>
//     </Box>
//   );
// };

// export default Login;

// LoginForm.jsx
import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react';

const LoginForm = ({ onLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock data for user
    const username = 'Réka';
    const email = 'YOUR_EMAIL';
    const id = 1;

    // Set user data in the session (you might want to use a more secure method)
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('id', id);

    // Trigger the login callback
    onLogin();
  };

  return (
    <Box
      maxW="md"
      borderWidth="1px"
      borderRadius="lg"
      p="6"
      boxShadow="base"
      m="auto"
      mt="20"
    >
      <form onSubmit={handleSubmit}>
        <Stack spacing="4">
          {/* Add your login form fields here if needed */}
          <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
            Login
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default LoginForm;
