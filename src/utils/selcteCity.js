const CITY_NAME = 'cityName';

export const getCityName = () => {
  const cityName = localStorage.getItem(CITY_NAME);
  return cityName ?? '';
};

export const saveCityName = cityName => {
  localStorage.setItem('cityName', cityName);
};
