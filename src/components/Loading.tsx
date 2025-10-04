import { Box, Typography } from "@mui/material";
export default function Loading() {
  return (
    <Box>
      <Typography
        sx={{ fontSize: { xs: "2rem", lg: "2.5rem" }, textAlign: "center" }}
      >
        Loading data...
      </Typography>
    </Box>
  );
}
