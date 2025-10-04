import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
interface MealCardProps {
  name: string;
  price: number;
  description: string;
  image: string;
}
export default function MealCard({
  name,
  price,
  description,
  image,
}: MealCardProps) {
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
      <CardMedia component="img" src={image} sx={{ height: 180 }}></CardMedia>
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
          variant="contained"
          sx={{
            mt: "auto",
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
