import React from 'react';
interface Task {
  title: String;
}
interface TasksListProps {
  tasks: Task[];
}
const TaskList: React.FC<TasksListProps> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task, i) => {
        return <li key={i}>{task.title}</li>;
      })}
    </ul>
  );
};
const tasks = [
  { title: 'Task One' },
  { title: 'Task Two' },
  { title: 'Task Three' }
];
export default () => (
  <div>
    <TaskList tasks={tasks} />
  </div>
);
