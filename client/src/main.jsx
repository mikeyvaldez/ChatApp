import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider } from "@chakra-ui/react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ColorModeProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ColorModeProvider>
  </BrowserRouter>
);