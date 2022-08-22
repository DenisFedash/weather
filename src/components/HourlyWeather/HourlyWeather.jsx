import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ContainerHourly, HourlyTemp, Item } from './HourluWeather.styled';

export const HourlyWeather = () => {
  const { hourlyWeather } = useSelector(({ weather }) => weather);
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    if (hourlyWeather) {
      setWeather(hourlyWeather.list.slice(0, 9));
    }
  }, [hourlyWeather]);
  return (
    <ContainerHourly>
      {hourlyWeather
        ? weather.map(item => {
            const temp = Math.round(item.main.temp);
            const showTemp = () => (temp > 0 ? `-${temp}px` : `${temp}px`);

            return (
              <Item
                key={item.dt}
                style={{ transform: `translateY(${showTemp()})` }}
              >
                <div>
                  <div>
                    <p>{item.dt_txt.slice(-8, -3)}</p>
                    <div>
                      <img
                        alt={item.weather ? item.weather[0].main : ''}
                        src={`https://openweathermap.org/img/wn/${
                          item.weather ? item.weather[0].icon : ''
                        }.png`}
                      />
                    </div>
                  </div>
                </div>
                <HourlyTemp>
                  <p>
                    {Math.round(item.main.temp)}
                    <span>&deg;C</span>
                  </p>
                </HourlyTemp>
              </Item>
            );
          })
        : ''}
    </ContainerHourly>
  );
};
