import { useDispatch } from 'react-redux';
import { fetchHourlyWeather, updateWeatherAction } from 'redux/apiWeather';
import { BtnUpd } from './ButtonUpd.styled';
import PropTypes from 'prop-types';

export const ButtonUpd = ({ cityName, textButton, coord }) => {
  const dispatch = useDispatch();

  const updCardHandler = () => {
    dispatch(updateWeatherAction(cityName));
  };

  if (coord) {
    dispatch(fetchHourlyWeather(coord));
  }

  return (
    <div onClick={updCardHandler} role="button">
      {textButton ? <p>{textButton}</p> : ''}
      <BtnUpd />
    </div>
  );
};

ButtonUpd.propTypes = {
  cityName: PropTypes.string,
  textButton: PropTypes.string,
  coord: PropTypes.number,
};
