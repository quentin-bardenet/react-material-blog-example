import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 200,
  },
}));

const PostDetail = ({ createdAt, detail, image, nbLike, title, className }) => {
  const classes = useStyles();
  return (
    <Card className={(classes.root, className)}>
      <CardMedia className={classes.media} image={image} title={title} />
      <CardContent>
        <Typography variant="caption">{createdAt}</Typography>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {detail}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <span>Vote: {nbLike}</span>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PostDetail;
