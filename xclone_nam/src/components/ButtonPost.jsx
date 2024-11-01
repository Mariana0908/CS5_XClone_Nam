import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Textarea from "@mui/joy/Textarea";
import Typography from "@mui/joy/Typography";

const ButtonPost = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [text, setText] = React.useState("");

  return (
    <>
      <Button
        sx={{ backgroundColor: "#2790B0", color: "white", mr: 5 }}
        variant="outlined"
        onClick={handleClickOpen}
      >
        Post
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            handleClose();
          },
        }}
      >
        <DialogTitle>What is happening?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Textarea
              placeholder="Write here…"
              value={text}
              onChange={(event) => setText(event.target.value)}
              minRows={2}
              maxRows={4}
              endDecorator={
                <Typography level="body-xs" sx={{ ml: "auto" }}>
                  {text.length} character(s)
                </Typography>
              }
              sx={{ minWidth: 300 }}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Post</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ButtonPost;
