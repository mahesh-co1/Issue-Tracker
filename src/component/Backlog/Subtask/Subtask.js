import React from "react";
import { Form, Input, FormGroup, Button } from "reactstrap";
import "./Subtask.css";

class Subtask extends React.Component {
  state = {
    inputValue: "",
  };

  handleInputValue = (e, shouldClear) => {
    if (shouldClear) {
      this.setState({
        inputValue: "",
      });
    } else {
      this.setState({
        inputValue: e.target.value,
      });
    }
  };

  render() {
    const { task, addSubtaskToTask, taskKey } = this.props;

    const subtasks = task.subtasks.map((subtask) => {
      return <p>{subtask}</p>;
    });

    return (
      <div className="Container">
        <h4 className="Tasktitle">{task.title}</h4>
        <div className="Functionality__container">
          <i class="fa fa-paperclip" aria-hidden="true"></i>
          <i class="fa fa-tasks" aria-hidden="true"></i>
          <i class="fa fa-link" aria-hidden="true"></i>
        </div>

        <Input className="Todo__Workflow" type="select" size="sm">
          <option style={{ padding: 10, marginTop: 10 }}>
            To do jsklelkjelkjklsjtlkj elk
          </option>
          <option style={{ padding: 10, marginTop: 10 }}>To do</option>
        </Input>

        <p className="Description">Description</p>

        {subtasks}
        {/* <Form>
        <FormGroup> */}

        <Input
          type="text"
          name="subtask"
          placeholder="Add Subtask Here!"
          value={this.state.inputValue}
          onChange={(e) => {
            this.handleInputValue(e, false);
          }}
          size="md"
        />
        <Button
          className="Button"
          color="primary"
          size="sm"
          onClick={() => {
            addSubtaskToTask(this.state.inputValue, taskKey);
            this.handleInputValue(null, true);
          }}
        >
          Add Task
        </Button>
        <Button color="secondary" className="Button" size="sm">
          Cancel
        </Button>
        {/* </FormGroup>
      </Form> */}
      </div>
    );
  }
}

export default Subtask;
