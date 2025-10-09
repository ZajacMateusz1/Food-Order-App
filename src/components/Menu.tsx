import useFetch from "../hooks/useFetch.ts";
import { fetchAllMeals } from "../../http.ts";
import MealCard from "./MealCard.tsx";
import Loading from "./Loading.tsx";
import ErrorInfo from "./ErrorInfo.tsx";
import type { Meal } from "../../types/types.ts";
import { Box, Typography, Grid } from "@mui/material";
export default function Menu() {
  const { data: meals, error, isLoading } = useFetch<Meal[]>(fetchAllMeals, []);
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
      {!error && !isLoading && (
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
                  id={meal.id}
                  name={meal.name}
                  price={meal.price}
                  description={meal.description}
                  image={meal.image}
                />
              </Grid>
            );
          })}
        </Grid>
      )}
    </Box>
  );
}
