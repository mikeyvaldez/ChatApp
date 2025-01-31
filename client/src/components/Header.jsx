import { Button, Flex, useColorMode } from "@chakra-ui/react";

export default function ThemeProvider() {
  const { colorMode, toggleColorMode } = useColorMode(); // Hook to get and toggle color mode

  return (
    <Flex px={4} py={4} gap={3} justifyContent={"right"}>
      <Button onClick={toggleColorMode}>
        Switch to {colorMode === "light" ? "Dark" : "Light"} Mode
      </Button>
    </Flex>
  );
}
