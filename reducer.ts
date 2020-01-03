import { Task } from './types';
import { FectchTasksAction } from './actions';

export interface AppState {
  tasks: Task[];
}

const defaultState = {
  tasks: []
};

export const reducer = (
  state: AppState = defaultState,
  action: FectchTasksAction
) => {
  switch (action.type) {
    case 'FETCH_TASKS':
      return {
        ...state,
        tasks: action.tasks
      };
  }
  return state;
};
