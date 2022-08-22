// import { HomePage } from 'pages/HomePage/HomePages';
// import { DetailsPage } from 'pages/DetailsPage/DetailsPage';
// import { Route, Routes } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import PageNotFound from 'pages/PageNotFound/PageNotFound';

import DetailsPage from 'pages/DetailsPage/DetailsPage';
import HomePage from 'pages/HomePage/HomePages';

export const App = () => {
  return (
    <>
      <h1>Hello</h1>
      <HomePage />
      <DetailsPage />
      {/* <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="city/:id/" element={<DetailsPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster /> */}
    </>
  );
};
