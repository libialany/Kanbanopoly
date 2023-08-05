import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

import { useDrop } from "react-dnd";
import CardTask from "./CardTask";

type task = { id: string; name: string; status: string };
interface Props {
  tasks: task[];
  setTask: (list: task[]) => void;
  status: string;
  name: string;
}
type itemType = {
  id: string;
};
function CardStyles({ status, setTask, tasks, name }: Props) {
  const [{ isOver }, drop] = useDrop({
    accept: "task",
    drop: (item: itemType) => {
      const { id } = item;
      console.log("Item dropped!", id, tasks);
      const newTask = tasks.filter((item) => item.id === id)[0];
      newTask.status = "done";
      const prevList = tasks.filter((item) => item.id !== id);
      setTask([...prevList, newTask]);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  const backgroundColor = isOver ? "#f0f0f0" : "#007fff";
  const taskList = tasks.filter((item) => item.status === status);
  return (
    <Card ref={drop} sx={{ background: backgroundColor, height: "100%" }}>
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
