import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from "@chakra-ui/react";
import { useState } from "react";


export default function Login() {
    const [show, setShow] = useState(false);
  
    const handleShow = () => setShow(!show)
  return (
    <VStack spacing="5px">
        <FormControl id="loginEmail" isRequired>
            <FormLabel>Email</FormLabel>
            <Input placeholder="Enter Your Email"/>
        </FormControl>

        <FormControl id="loginPassword" isRequired>
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

        <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}                
      >
        Login
      </Button>

      <Button
        variant="solid"
        colorScheme="red"
        width="100%"
      >
        Get Guest User Credentials
      </Button>

    </VStack>
  )
}
