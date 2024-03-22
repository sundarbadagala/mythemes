import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import Main from "./components/main";


function Index() {
  return (
    <ChakraProvider theme={theme}>
      <Main/>
    </ChakraProvider>
  );
}

export default Index;
