import React, { useEffect, useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import AddTask from "./AddTask";
import ButtonStyled from "./ButtonStyled";
import CardStyles from "./CardStyles";
type task = { id: string; name: string; status: string };
function Index() {
  const initialtasks = [
    { id: "1", name: "s", status: "pendding" },
    { id: "12", name: "s", status: "done" },
  ];

  const [tasks, setTasks] = useState<task[]>(initialtasks)
  const setNewTask = (taskList:task[])=>{
    setTasks(taskList)
  }
  const [open, setOpen] = useState<boolean>(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(()=>{
  },[tasks])
  return (
    <Box>
      <AddTask handleClose={handleClose} open={open} />
      <Box>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
          }}
          container
        >
          <Grid item xs={3} xl={4} paddingTop={1}>
            <Typography variant="inherit">Kanbanopoly</Typography>
          </Grid>
          <Grid
            item
            xs={3}
            xl={4}
            sx={{
              marginLeft: 3,
            }}
          >
            <ButtonStyled handleClickOpen={handleClickOpen} />
          </Grid>
        </Grid>
      </Box>
      <Grid
        container
        spacing={{ xs: 3, sm: 3, md: 3 }}
        style={{ height: "80vh" }}
        padding={2}
      >
        <Grid item xs={6} sx={{ display: "flex", flexDirection: "column" }}>
          <CardStyles 
          name={"In progress"}
          tasks={tasks} setTask={setNewTask} status={"pendding"} />
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", flexDirection: "column" }}>
          <CardStyles
           name={"Done"}
           tasks={tasks} setTask={setNewTask} status={"done"} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Index;
