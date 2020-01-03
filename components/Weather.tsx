import React from 'react';
interface Props extends WeatherProps {
  theme: 'yellow' | 'green';
}

export const Weather: React.FC<Props> = ({ temperature, scale }) => {
  return (
    <div>
      The temperature is {temperature} °{scale}
    </div>
  );
};

interface WeatherProps {
  temperature: number;
  scale: 'C' | 'F';
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

function withWeatherProps<P extends WeatherProps>(
  Component: React.ComponentType<P>
) {
  return (props: Omit<P, keyof WeatherProps>) => {
    return <Component {...(props as P)} temperature={25} scale="C"></Component>;
  };
}

export const WrappedWeather = withWeatherProps(Weather);

interface withWeatherProps {
  children(props: WeatherProps): JSX.Element;
}

export const WithWeatherProps: React.FC<withWeatherProps> = ({ children }) => {
  const props: WeatherProps = {
    temperature: 50,
    scale: 'F'
  };
  return children(props);
};
