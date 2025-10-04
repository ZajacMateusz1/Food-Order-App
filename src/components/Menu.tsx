import { use } from "react";
import MealsContext from "../../store/meals-context.tsx";
import MealCard from "./MealCard.tsx";
import Loading from "./Loading.tsx";
import ErrorInfo from "./ErrorInfo.tsx";
import { Box, Typography, Grid } from "@mui/material";
export default function Menu() {
  const { meals, error, isLoading } = use(MealsContext);
  return (
    <Box component="main" sx={{ minHeight: "100vh" }}>
      <Typography
        variant="h1"
        sx={{
          my: { xs: "1rem", md: "1.5rem" },
          textAlign: "center",
        }}
      >
        Menu
      </Typography>
      {error && <ErrorInfo errorText={error} />}
      {isLoading && <Loading />}
      <Grid
        container
        columns={{ xs: 1, sm: 1 }}
        spacing={{ xs: 2, md: 6 }}
        justifyContent="center"
      >
        {meals.map((meal) => {
          return (
            <Grid
              key={meal.id}
              columns={{ xs: 1, md: 2, lg: 3 }}
              spacing={{ xs: 1, md: 2, lg: 3 }}
            >
              <MealCard
                name={meal.name}
                price={meal.price}
                description={meal.description}
                image={meal.image}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
