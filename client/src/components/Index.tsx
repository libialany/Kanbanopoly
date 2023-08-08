import React, { useEffect, useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import AddTask from "./AddTask";
import ButtonStyled from "./ButtonStyled";
import CardStyles from "./CardStyles";
import axios from "axios";
import { BASE_URL } from "../common";
import { task } from "../types";

function Index() {
  const [tasksDone, setTasksDone] = useState<task[]>([]);
  const [tasksPendding, setTasksPendding] = useState<task[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const loadData = async () => {
    try {
      let res = await axios.get(`${BASE_URL}/tasks/done`);
      setTasksDone(res.data);
      res  = await axios.get(`${BASE_URL}/tasks/pendding`);
      setTasksPendding(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    loadData();
  }, []);
  useEffect(() => {
    
  }, [tasksDone,tasksPendding]);
  
  return (
    <Box>
      <AddTask handleClose={handleClose} open={open} loadData={loadData}/>
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
            tasks={tasksPendding}
            status={"Pending"}
            loadData={loadData}
          />
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", flexDirection: "column" }}>
          <CardStyles
            name={"Done"}
            tasks={tasksDone}
            status={"Done"}
            loadData={loadData}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Index;
