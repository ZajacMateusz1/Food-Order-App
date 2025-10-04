import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
export default function MealCard() {
  return (
    <Card sx={{ width: "300px", textAlign: "center" }}>
      <CardMedia
        component="img"
        src="https://ik.imagekit.io/2ffs9oqgg/FoodOrderApp/mac-and-cheese.jpg?tr=w-300,h-300,c-maintain_ratio"
        sx={{ height: 180 }}
      ></CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" sx={{ fontWeight: 500 }}>
          "Mac & Cheese"
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          9.99$
        </Typography>
        <Typography variant="body2">
          "Creamy cheddar cheese mixed with perfectly cooked macaroni, topped
          with crispy breadcrumbs. A classic comfort food."
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center", mb: "0.5rem" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "secondary.main",
            color: "secondary.contrastText",
          }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
