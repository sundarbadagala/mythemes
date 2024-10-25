import { Button } from "@mui/material";
import { StyledButton } from "./styles";

function Main() {
  return (
    <div>
      <StyledButton>click here</StyledButton>
      <Button color="secondary" variant="contained">hello</Button>
    </div>
  );
}

export default Main;
