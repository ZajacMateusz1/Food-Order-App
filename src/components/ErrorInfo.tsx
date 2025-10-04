import { Box, Typography } from "@mui/material";
export default function ErrorInfo({ errorText }: { errorText: string }) {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: { xs: "2rem", lg: "2.5rem" },
          textAlign: "center",
          color: "error.light",
        }}
      >
        {errorText}
      </Typography>
    </Box>
  );
}
