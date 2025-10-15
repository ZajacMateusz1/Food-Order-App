import { use } from "react";
import CartContext from "../../store/cart-context.tsx";
import type { Meal } from "../../types/types.ts";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
export default function MealCard({
  id,
  name,
  price,
  description,
  image,
}: Meal) {
  const { handleAddToCart } = use(CartContext);
  return (
    <Card
      sx={{
        width: { xs: "300px", md: "325px" },
        height: "100%",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        src={image}
        alt={name}
        sx={{ height: 180 }}
      ></CardMedia>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" sx={{ fontWeight: 500 }}>
          {name}
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          {price}$
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center", mb: "0.5rem" }}>
        <Button
          onClick={() => handleAddToCart(id)}
          variant="contained"
          sx={{
            mt: "auto",
            backgroundColor: "primary.main",
            color: "primary.contrastText",
          }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
