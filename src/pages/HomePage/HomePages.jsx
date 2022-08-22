// import { CardList } from 'components/Cardlist/CardList';
// import { Header } from 'components/Header/Header';
// import { Loader } from 'components/Loader/Loader';
// import { CITIES } from 'constants';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchWeather } from '../../redux/apiWeather';

// export const HomePage = () => {
//   const dispatch = useDispatch();
//   const { cityNames, cities, loading } = useSelector(({ weather }) => weather);

//   useEffect(() => {
//     const cities = localStorage.getItem(CITIES);
//     const parsedCities = cities ? JSON.parse(cities) : [];

//     Array.from(new Set(cityNames.concat(parsedCities))).forEach(cityName => {
//       dispatch(fetchWeather(cityName));
//     });
//   }, [dispatch, cityNames]);
//   return (
//     <>
//       {!loading ? (
//         <Loader />
//       ) : (
//         <>
//           <Header />
//           <CardList cities={cities} />
//         </>
//       )}
//     </>
//   );
// };
