import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import "./Backlog.css";

const backlog = (props) => {
  const { tasks, openSubtaskBar, getCurrentSubtask, currentTask } = props;
  const taskMap = Object.keys(tasks).map((task) => {
    const { assignee, priority, title, isCompleted } = tasks[task];
    const completion = isCompleted ? (
      <i
        className="fa fa-check-square task_completion task_completed"
        aria-hidden="true"
      ></i>
    ) : (
      <i
        className="fa fa-bookmark task_completion task_pending"
        aria-hidden="true"
      ></i>
    );
    return (
      <ListGroupItem
        style={{ backgroundColor: currentTask === task ? "#DEEBFF" : null }}
        className="ListItem"
        onClick={() => {
          openSubtaskBar();
          getCurrentSubtask(task);
        }}
      >
        {completion}
        {title}
        <div className="Operation">
          <img src={assignee} alt="icon" className="Round" />
          <i className={`fa fa-arrow-up ${priority}`} aria-hidden="true"></i>
        </div>
      </ListGroupItem>
    );
  });

  return <ListGroup>{taskMap}</ListGroup>;
};

export default backlog;
