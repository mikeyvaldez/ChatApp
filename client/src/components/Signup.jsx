import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Signup() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show)

  return (
    <VStack spacing="5px">
      <FormControl id="fullName" isRequired>
        <FormLabel>Name</FormLabel>
        <Input placeholder="Enter Your Name" />
      </FormControl>

      <FormControl id="signupEmail" isRequired>
        <FormLabel>Email</FormLabel>
        <Input placeholder="Enter Your Email" />
      </FormControl>

      <FormControl id="signupPassword" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input type={show ? "text" : "password"} placeholder="Enter Your Password" />
          <InputRightElement width="4.5rem" onClick={handleShow}>
            <Button height="1.75rem" size="sm">
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      
      <FormControl id="confirmPassword" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup size="md">
          <Input type={show ? "text" : "password"} placeholder="Confirm Your Password" />
          <InputRightElement width="4.5rem" onClick={handleShow}>
            <Button height="1.75rem" size="sm">
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id='pic'>
        <FormLabel>Upload your Picture (optional)</FormLabel>
          <Input
            type="file"
            padding={1.5}
            accept="image/*"            
          />
      </FormControl>

      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}        
      >
        Sign Up
      </Button>
    </VStack>
  );
}
