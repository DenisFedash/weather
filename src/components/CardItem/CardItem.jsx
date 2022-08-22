import CardContent from '@mui/material/CardContent';

import { useDispatch } from 'react-redux';
import { deleteCity, getSelectCityName } from 'redux/weatherSlice';

import { ButtonUpd } from 'components/ButtonUpd/ButtonUpd';
import {
  AboutContainer,
  BtnContainer,
  BtnDel,
  BtnDetails,
  CardWeather,
  City,
  Clouds,
  Img,
  Info,
  Temp,
  TempContainer,
} from './CardItem.styled';

export const CardItem = ({ city }) => {
  const dispatch = useDispatch();

  const deleteCardHandler = () => {
    dispatch(deleteCity(city));
  };

  const selectCityNameHandler = () => {
    dispatch(getSelectCityName(city.name));
  };
  return (
    <CardWeather sx={{ width: 300 }}>
      <Img
        component="img"
        height="150"
        image={`https://openweathermap.org/img/wn/${
          city.weather ? city.weather[0].icon : ''
        }@4x.png`}
        alt={city.weather ? city.weather[0].description : ''}
      />
      <CardContent>
        <City gutterBottom variant="h5" component="div">
          {city.name}
        </City>
        <TempContainer>
          <Temp variant="body2" color="text.secondary">
            {Math.round(city.main.temp)}&deg;C
          </Temp>
          <Clouds variant="body2" color="text.secondary">
            {city.weather ? city.weather[0].description : ''}
          </Clouds>
        </TempContainer>
        <div>
          <AboutContainer>
            <Info>Feels like</Info>
            <Info>{Math.round(city.main.feels_like)}&deg;C</Info>
          </AboutContainer>
          <AboutContainer>
            <Info>Wind speed</Info>
            <Info>{city.wind.speed} m/h</Info>
          </AboutContainer>
          <AboutContainer>
            <Info>Humidity</Info>
            <Info>{city.main.humidity}%</Info>
          </AboutContainer>
        </div>
      </CardContent>
      <BtnContainer>
        <BtnDetails to={`city/${city.id}`} onClick={selectCityNameHandler}>
          Details
        </BtnDetails>
        <ButtonUpd size="small" color="primary" cityName={city.name} />

        <BtnDel onClick={deleteCardHandler} />
      </BtnContainer>
    </CardWeather>
  );
};
