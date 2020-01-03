import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from '../reducer';
import {
  WrappedWeather,
  WithWeatherProps,
  Weather
} from '../components/Weather';

const store = createStore(reducer);

export default () => (
  <Provider store={store}>
    <WithWeatherProps>
      {props => {
        return <Weather {...props} theme="yellow" />;
      }}
    </WithWeatherProps>
  </Provider>
);
