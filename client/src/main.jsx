import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import Header from "./components/Header";

createRoot(document.getElementById("root")).render(
  <ColorModeProvider>
    <ChakraProvider>
      <BrowserRouter>
        <Header />
        <Routes path="/" element={<App />}>          
          <Route path="/" element={<HomePage />} />
          <Route path="/chats" element={<ChatPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </ColorModeProvider>
);
