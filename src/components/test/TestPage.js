import React, { Component } from 'react';
import './TestPage.css'

const TaskItem = ({onTaskClick, task}) => {
    return (
        <li onClick={onTaskClick}>
            {task}
        </li>
    );
};

class TestPage extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
            taskList: [],
            doneTaskNumber: 0,
            remainTaskNumber: 0
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.addTask = this.addTask.bind(this);
        this.onTaskClick = this.onTaskClick.bind(this);
    }

    onInputChange(event) {
        this.setState({
            inputValue: event.target.value
        });
    }

    addTask() {
        if (this.state.inputValue) {
            let taskList = this.state.taskList;
            let doneTaskNumber = this.state.doneTaskNumber;
            taskList.push(this.state.inputValue);
            this.setState({
                taskList: taskList,
                inputValue: '',
                remainTaskNumber: taskList.length - doneTaskNumber
            });
        }
    }

    onTaskClick(event) {
        let { taskList, doneTaskNumber } = this.state
        if (event.target.className === '') {
            event.target.className = 'done-item';
            ++doneTaskNumber;
        } else {
            event.target.className = '';
            --doneTaskNumber;
        }

        this.setState({
            doneTaskNumber: doneTaskNumber,
            remainTaskNumber: taskList.length - doneTaskNumber
        });
    }

    render() {
        const { remainTaskNumber, taskList } = this.state;
        return (
            <div className="page-wrapper">
                <div>
                    <div>
                        <input value={this.state.inputValue}
                            onChange={this.onInputChange}/>
                        <button onClick={this.addTask}>Add</button>
                    </div>
                    <div>
                        remain {remainTaskNumber}, total {taskList.length}
                    </div>
                    <div>
                        <ul>
                            {this.state.taskList.map((task, index) =>
                                <TaskItem key={index}
                                    onTaskClick={this.onTaskClick}
                                    task={task} />
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default TestPage;
