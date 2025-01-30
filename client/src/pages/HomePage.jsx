import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  useColorMode,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Login from "../components/Login";
import Signup from "../components/Signup";

export default function HomePage() {
  const { colorMode } = useColorMode();

  return (
    <Container maxWidth="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        padding={3}
        backgroundColor={colorMode === "light" ? "white" : "dark"}
        width="100%"
        margin="40px 0 15px 0"
        borderRadius="3xl"
        borderWidth="3px"
      >
        <Text fontSize="4xl" fontFamily="Work sans">
          Dia Log Us
        </Text>
      </Box>
      <Box
        backgroundColor={colorMode === "light" ? "white" : "dark"}
        width="100%"
        padding={4}
        borderRadius="3xl"
        borderWidth="3px"
      >
        <Tabs variant="soft-rounded">
          <TabList marginBottom="1em">
            <Tab width="50%" color={colorMode === "dark" ? "white" : "dark"}>Login</Tab>
            <Tab width="50%" color={colorMode === "dark" ? "white" : "dark"}>Sign Up!</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel><Signup /></TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}
