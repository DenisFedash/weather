import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import PageNotFound from 'pages/PageNotFound/PageNotFound';

import DetailsPage from 'pages/DetailsPage/DetailsPage';
import HomePage from 'pages/HomePage/HomePages';
import { Loader } from './Loader/Loader';
import { Header } from './Header/Header';
import { CardList } from './Cardlist/CardList';

export const App = () => {
  return (
    <>
      <Loader />
      <Header />
      <CardList />

      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="city/:id/" element={<DetailsPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster />
    </>
  );
};
