import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider, Box } from "@chakra-ui/react";
import customTheme from "./theme.ts";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar.tsx"
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
