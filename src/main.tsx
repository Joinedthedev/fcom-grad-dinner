import { Box, ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import NavBar from "./NavBar.tsx";
import "./index.css";
import customTheme from "./theme.ts";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <NavBar/>
      <Box className="bg">
        <App />
      </Box>
    </ChakraProvider>
  </React.StrictMode>
);
