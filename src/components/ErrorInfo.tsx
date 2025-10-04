import { Alert, Typography } from "@mui/material";
export default function ErrorInfo({ errorText }: { errorText: string }) {
  return (
    <Alert severity="error">
      <Typography
        sx={{
          fontSize: { xs: "2rem", lg: "2.5rem" },
          textAlign: "center",
          color: "error.light",
        }}
      >
        {errorText}
      </Typography>
    </Alert>
  );
}
