import logo from "../assets/logo.png";
import { Box, Typography, IconButton, Container } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export default function Header() {
  return (
    <Box
      component="header"
      sx={{
        position: "sticky",
        left: 0,
        top: 0,
        backgroundColor: "secondary.main",
        color: "secondary.contrastText",
        p: 1,
        zIndex: 1,
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: {
                xs: "1.2rem",
                sm: "2rem",
                md: "2.5rem",
                xl: "3.5rem",
              },
            }}
          >
            Food Order App
          </Typography>
          <Box
            component="img"
            src={logo}
            alt="App logo"
            sx={{ height: { xs: "7vh", sm: "10vh" } }}
          ></Box>
        </Box>

        <IconButton>
          {
            <ShoppingCartIcon
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem" },
                color: "secondary.contrastText",
              }}
            />
          }
        </IconButton>
      </Container>
    </Box>
  );
}
