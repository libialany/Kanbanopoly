import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { TransitionProps } from "@mui/material/transitions";
import Slide from "@mui/material/Slide";
import { forwardRef, useState } from "react";
import Form from "./Form";
const Transition = forwardRef<
  unknown,
  TransitionProps & {
    children?: React.ReactElement;
  }
>((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});
interface Props {
  open: boolean;
  handleClose: () => void;
}
function AddTask({ handleClose, open }: Props) {
  const handleSubmit = () => {
    console.log("Task Name:", taskName);
    console.log("Task Status:", taskStatus);
    // send request

  };
  const [taskName, setTaskName] = useState("");
  const [taskStatus, setTaskStatus] = useState("");
  const setSelectTask = (status: string) => {
    setTaskStatus(status);
  };
  const setNameTask = (name: string) => {
    setTaskName(name);
  };
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          <Form
            taskStatus={taskStatus}
            taskName={taskName}
            setTaskName={setNameTask}
            setTaskStatus={setSelectTask}
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>cancel</Button>
        <Button onClick={()=>{handleSubmit();handleClose()}}>create</Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddTask;
