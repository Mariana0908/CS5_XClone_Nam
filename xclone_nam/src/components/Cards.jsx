import {
  Avatar,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

export const Cards = () => {
  return (
    <Card>
      <CardActionArea>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "#2790B0" }} aria-label="recipe">
              N
            </Avatar>
          }
          title="NOMBRE"
          subheader="DIA/MES/AÑO"
        />

        <CardContent>
          <Typography variant="h5">TITLE</Typography>
          <Typography component="p" variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
            vero dolores repudiandae dolorem magnam, illo sit qui numquam
            assumenda ea fuga ipsum temporibus repellat delectus quam labore
            ipsa pariatur aliquam!
          </Typography>
        </CardContent>

        <CardMedia
          component={"img"}
          image="https://via.placeholder.com/1000x200"
          height={200}
          alt="nombre"
        ></CardMedia>
      </CardActionArea>

      <CardActions>
        <Stack direction="row" spacing={1}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </Stack>
      </CardActions>
    </Card>
  );
};
