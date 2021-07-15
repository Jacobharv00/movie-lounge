import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

// Styles
const StyledButton = withStyles({
  root: {
    background:
      "linear-gradient(53deg, rgba(200,126,126,1) 34%, rgba(124,0,0,1) 82%)",
    "&:hover": {
      background:
        "linear-gradient(53deg, rgba(126,0,0,1) 10%, rgba(255,255,255,1) 13%, rgba(255,255,255,1) 88%, rgba(124,0,0,1) 91%);)",
      color: "crimson",
      transition: "all 0.3s ease",
    },
    borderRadius: 3,
    border: 0,
    color: "white",
    height: "36px",
    width: "80px",
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .5)",
    justify: "center",
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

const LikeButton = withStyles({
  root: {
    background:
      "linear-gradient(53deg, rgba(200,126,126,1) 34%, rgba(124,0,0,1) 82%)",
    borderRadius: 3,
    border: 0,
    height: "36px",
    width: "10px",
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .5)",
    justify: "center",
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

const DislikeButton = withStyles({
  root: {
    background:
      "linear-gradient(53deg, rgba(200,126,126,1) 34%, rgba(124,0,0,1) 82%)",
    borderRadius: 3,
    border: 0,
    height: "36px",
    width: "10px",
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .5)",
    justify: "center",
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

function WatchListCard({ img, id, removeMovie }) {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  function handleLike() {
    setLike(!like);
  }

  function handleDislike() {
    setDislike(!dislike);
  }

  function handleClick(e) {
    fetch(`http://localhost:3000/watchList/${id}`, {
      method: "DELETE",
    });
    removeMovie(id);
  }

  // prettier-ignore
  return (
    <div
      style={{ display: "block", paddingLeft: "30px", paddingBottom: "35px" }}
    >
      <img src={img} alt="Movie Poster" style={ {boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)", borderRadius: '3px'}}/>
      <div>
        <LikeButton onClick={handleLike}
          style={
            like
              ? { background: "mediumseagreen", maxWidth: "4px", minWidth: "1px" }
              : { background: null, maxWidth: "4px", minWidth: "1px" }
          }>
          👍
        </LikeButton>
        <DislikeButton onClick={handleDislike}
          style={
            dislike
              ? { background: "crimson", maxWidth: "4px", minWidth: "1px" }
              : { background: null, maxWidth: "4px", minWidth: "1px" }
          }>
          👎
        </DislikeButton>
        <StyledButton onClick={handleClick}>Remove</StyledButton>
      </div>
    </div>
  );
}

export default WatchListCard;
