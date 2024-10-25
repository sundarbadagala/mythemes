import { Button, styled } from "@mui/material";

export const StyledButton = styled(Button)(({ theme }: { theme: any }) => ({
  color: theme.status.danger,
}));
