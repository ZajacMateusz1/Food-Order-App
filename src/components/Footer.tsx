import { Box, IconButton, Container } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.contrastText",
        color: "secondary.contrastText",
        p: 2,
        mt: { xs: "1rem", md: "2rem" },
      }}
    >
      <Container>
        <IconButton
          component="a"
          href="https://github.com/ZajacMateusz1"
          target="_blank"
        >
          <GitHubIcon
            sx={{ color: "secondary.contrastText", fontSize: "2rem" }}
          />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/mateusz-zaj%C4%85c-371971387/"
          target="_blank"
        >
          <LinkedInIcon
            sx={{ color: "secondary.contrastText", fontSize: "2rem" }}
          />
        </IconButton>
      </Container>
    </Box>
  );
}
