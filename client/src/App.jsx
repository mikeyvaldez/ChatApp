import { Button, Text, useColorMode, VStack } from "@chakra-ui/react";
import HomePage from "./pages/HomePage";

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode(); // Hook to get and toggle color mode

  return (
    <VStack spacing={4} align="center" justify="center">
      <HomePage />
      <Button onClick={toggleColorMode}>
        Switch to {colorMode === "light" ? "Dark" : "Light"} Mode
      </Button>
    </VStack>
  );
}
