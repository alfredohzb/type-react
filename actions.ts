import { Action } from 'redux';
import { Task } from './types';

export interface FectchTasksAction extends Action<'FETCH_TASKS'> {
  tasks: Task[];
}

export const fetchTasks = (): FectchTasksAction => ({
  type: 'FETCH_TASKS',
  tasks: [{ title: 'First Task' }, { title: 'Second Task' }]
});
