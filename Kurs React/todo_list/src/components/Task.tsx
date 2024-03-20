import React, { useState } from "react";

interface TaskIProps {
  id: number;
  taskname: string;
  done: boolean;
  onTap: (id:number) => void;
  onDelete: (id: number) => void;
}

const TaskTitle = ({
  id,
  taskname,
  done,
  onTap,
  onDelete,
}: TaskIProps) => {
  const doneButtonClass = done ? "undone-button" : "done-button";
  return (
    <div className="title">
      <div className="task">
        <button className={doneButtonClass} onClick={() => onTap(id)}>
          {" "}
          {done ? "Undone" : "Done"}
        </button>
        <h2 className={`title--text ${done ? "done" : ""}`}>{taskname}</h2>
      </div>
      <div className="task-button-container">
        <button className="delete-button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default function Task({
  id,
  taskname,
  done = false,
  onTap,
  onDelete,
}: TaskIProps) {
  return (
    <div className={`task-container ${done ? "done" : ""}`}>
      <TaskTitle
        id={id}
        taskname={taskname}
        done={done}
        onTap={onTap}
        onDelete={onDelete}
      />
    </div>
  );
}
