import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHourlyWeather, getCurrentCityAction } from 'redux/apiWeather';
import { getCityName } from 'utils/selcteCity';
import { HourlyWeather } from 'components/HourlyWeather/HourlyWeather';
import {
  CityDetails,
  CloudsDetails,
  ImgDetails,
  InfoContainer,
  TempContainer,
  TempDeatils,
  TextDetails,
  WeatherContainer,
} from './WeatherDetails.styled';
import CardContent from '@mui/material/CardContent';
import { ButtonBack } from 'components/ButtonBack/ButtonBack';

export const WeatherDetails = () => {
  const dispatch = useDispatch();
  const { currentCity } = useSelector(state => state.weather);

  useEffect(() => {
    dispatch(getCurrentCityAction(getCityName()));
  }, [dispatch]);

  useEffect(() => {
    if (currentCity) {
      dispatch(
        fetchHourlyWeather({
          lon: currentCity.coord.lon,
          lat: currentCity.coord.lat,
        })
      );
    }
  }, [currentCity, dispatch]);

  return (
    <>
      {!currentCity ? (
        <Loader />
      ) : (
        <>
          <WeatherContainer>
            <ButtonBack />
            <ImgDetails
              component="img"
              image={`https://openweathermap.org/img/wn/${
                currentCity.weather ? currentCity.weather[0].icon : ''
              }@4x.png`}
              alt={
                currentCity.weather ? currentCity.weather[0].description : ''
              }
            />
            <CardContent>
              <TempContainer>
                <TempDeatils>
                  {Math.round(currentCity.main.temp)}&deg;C
                </TempDeatils>
                <CloudsDetails>
                  {currentCity.weather
                    ? currentCity.weather[0].description
                    : ''}
                </CloudsDetails>
              </TempContainer>
              <CityDetails>{currentCity.name}</CityDetails>

              <InfoContainer>
                <TextDetails>Country</TextDetails>
                <TextDetails>{currentCity.sys.country}</TextDetails>
              </InfoContainer>
              <InfoContainer>
                <TextDetails>Min t°</TextDetails>
                <TextDetails>
                  {Math.round(currentCity.main.temp_min)}&deg;C
                </TextDetails>
              </InfoContainer>
              <InfoContainer>
                <TextDetails>Max t°</TextDetails>
                <TextDetails>
                  {Math.round(currentCity.main.temp_max)}&deg;C
                </TextDetails>
              </InfoContainer>

              <InfoContainer>
                <TextDetails>Feels like</TextDetails>
                <TextDetails>
                  {Math.round(currentCity.main.feels_like)}&deg;C
                </TextDetails>
              </InfoContainer>
              <InfoContainer>
                <TextDetails>Wind speed</TextDetails>
                <TextDetails>{currentCity.wind.speed} m/h</TextDetails>
              </InfoContainer>
              <InfoContainer>
                <TextDetails>Humidity</TextDetails>
                <TextDetails>{currentCity.main.humidity}%</TextDetails>
              </InfoContainer>

              <InfoContainer>
                <TextDetails>Sunrise</TextDetails>
                <TextDetails>
                  {format(currentCity.sys.sunrise, 'HH:mm')} a.m.
                </TextDetails>
              </InfoContainer>
              <InfoContainer>
                <TextDetails>Sunset</TextDetails>
                <TextDetails>
                  {format(currentCity.sys.sunset, 'HH:mm')} p.m.
                </TextDetails>
              </InfoContainer>
            </CardContent>
          </WeatherContainer>
          <HourlyWeather />
        </>
      )}
    </>
  );
};
