import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

import { useDrop } from "react-dnd";
import CardTask from "./CardTask";
import { task } from "../types";
import axios from "axios";
import { BASE_URL, config } from "../common";
interface Props {
  tasks: task[];
  status: string;
  name: string;
  loadData: () => void;
}
type itemType = {
  id: string;
};
function CardStyles({ status, tasks, name, loadData }: Props) {
  const changeStatus = async (id: string) => {
    try {
      const body = JSON.stringify({
        status: status,
      });
      await axios.patch(`${BASE_URL}/${id}/task`, body, config);
      loadData()
    } catch (err) {
      console.log(err);
    }
  };
  const [{ isOver }, drop] = useDrop({
    accept: "task",
    drop: (item: itemType) => {
      const { id } = item;
      changeStatus(id);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  const backgroundColor = isOver ? "#f0f0f0" : "#007fff";
  const taskList = tasks.filter((item) => item.status === status);
  return (
    <Card ref={drop} sx={{ background: backgroundColor, height: "100%", borderRadius: '20px' }}>
      <CardContent>
        <Typography variant="h5" sx={{ fontFamily: "inherit" }}>
          {name}
        </Typography>
        {taskList.map((task, j) => (
          <CardTask task={task} key={j} />
        ))}
      </CardContent>
    </Card>
  );
}

export default CardStyles;
