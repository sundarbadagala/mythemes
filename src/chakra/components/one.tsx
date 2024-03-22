import { useColorMode, Box, Button } from "@chakra-ui/react";
import Wrapper from "../atoms/wrapper";
import Container from "../atoms/container";

function One() {
  const { toggleColorMode } = useColorMode();
  return (
    <Wrapper bgColor="bgSecondary">
      <Container>
        <Box>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque earum
          libero a quis quibusdam accusamus fuga, numquam voluptatum adipisci.
          Quidem, adipisci. Accusantium, labore repudiandae error similique
          optio provident cum eaque?
        </Box>
        <Button variant={"primary"} size={"sm"} onClick={toggleColorMode}>
          Mode
        </Button>
      </Container>
    </Wrapper>
  );
}

export default One;
