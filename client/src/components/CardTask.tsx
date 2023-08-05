import React from "react";
import { useDrag } from "react-dnd";
interface Props {
  task: { id: string,name: string; status: string };
}
function CardTask({ task }: Props) {
  const [{ isDragging }, drag] = useDrag({
    type: "task", 
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0.4 : 1;
  return (
    <div
      ref={drag}
      style={{
        opacity,
        padding: "8px",
        borderRadius: "4px",
        backgroundColor: "#007bff",
        color: "#fff",
        cursor: "move",
      }}
    >
      {task.name}
    </div>
  );
}

export default CardTask;
