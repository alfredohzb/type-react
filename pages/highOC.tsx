import { Provider } from 'react-redux';
import { reducer } from '../reducer';
import { ConnectedTasksList } from '../components/TaskLists';
import { createStore } from 'redux';

const store = createStore(reducer);

export default () => (
  <Provider store={store}>
    <ConnectedTasksList />
  </Provider>
);
