import React from 'react';
interface Task {
  title: String;
}
interface TasksListProps {
  initialTasks: Task[];
}
interface TaskListState {
  tasks: Task[];
}

class TaskList extends React.Component<TasksListProps, TaskListState> {
  constructor(props: TasksListProps) {
    super(props);
    this.state = {
      tasks: props.initialTasks
    };
  }
  render() {
    const { tasks } = this.state;
    return (
      <ul>
        {tasks.map((task, i) => {
          return <li key={i}>{task.title}</li>;
        })}
      </ul>
    );
  }
}

const tasks = [
  { title: 'Task One' },
  { title: 'Task Two' },
  { title: 'Task Three' }
];
export default () => (
  <div>
    <TaskList initialTasks={tasks} />
  </div>
);
