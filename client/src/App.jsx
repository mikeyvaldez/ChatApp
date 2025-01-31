import { VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";


export default function App() {
  return (
    <VStack spacing={4} align="center" justify="center">
      <Outlet />
    </VStack>
  );
}
