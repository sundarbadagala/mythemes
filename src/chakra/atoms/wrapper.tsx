import { Box } from "@chakra-ui/react";

function Wrapper({
  children,
  styles,
  bgColor = "bgPrimary",
}: {
  children: React.ReactElement;
  styles?: object;
  bgColor?: "bgPrimary" | "bgSecondary";
}) {
  return (
    <Box style={styles} bgColor={bgColor} color={"text"}>
      {children}
    </Box>
  );
}

export default Wrapper;
