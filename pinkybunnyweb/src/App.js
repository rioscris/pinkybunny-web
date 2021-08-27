import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Landing from "features/Landing";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};
const theme = extendTheme({ colors });

function App() {
  // 2. Use at the root of your app
  return (
    <ChakraProvider theme={theme}>
      <Landing>
      </Landing>
    </ChakraProvider>
  );
}

export default App;
