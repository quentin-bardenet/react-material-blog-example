import { Button, makeStyles, Paper, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import PostDetail from "./PostDetail";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    margin: "0 auto",
    padding: 20,
  },
  itemForm: {
    marginTop: 10,
    marginBottom: 10,
  },
  form: {
    padding: 15,
    marginBottom: 15,
  },
  post: {
    marginTop: 15,
    marginBottom: 15,
  },
}));

const PostsList = (props) => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [image, setImage] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = () => {
    axios.get("https://wcs-blog-api.herokuapp.com/posts").then((response) => {
      setPosts(response.data);
    });
  };

  const createPost = () => {
    axios
      .post("https://wcs-blog-api.herokuapp.com/posts", {
        title: title,
        detail: detail,
        image: image,
      })
      .then(() => {
        refreshData();
      });
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.form}>
        <TextField
          value={title}
          variant="outlined"
          label="Titre"
          fullWidth
          className={classes.itemForm}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          value={detail}
          variant="outlined"
          label="Contenu"
          multiline
          fullWidth
          className={classes.itemForm}
          onChange={(e) => setDetail(e.target.value)}
        />
        <TextField
          value={image}
          variant="outlined"
          label="Lien de l'image"
          multiline
          fullWidth
          className={classes.itemForm}
          onChange={(e) => setImage(e.target.value)}
        />
        <Button
          size="large"
          color="primary"
          variant="contained"
          fullWidth
          className={classes.itemForm}
          onClick={createPost}
        >
          Créer
        </Button>
      </Paper>

      {posts.map((post) => (
        <PostDetail className={classes.post} key={post._id} {...post} />
      ))}
    </div>
  );
};

export default PostsList;
