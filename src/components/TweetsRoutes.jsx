import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import ScrollUp from './ScrollUp/ScrollUp';
import Loader from './Loader/Loader';

const Layout = lazy(() => import('./Layout/Layout'));
const Home = lazy(() => import('../pages/Home/Home'));
const Tweets = lazy(() => import('../pages/Tweets/Tweets'));

const TweetsRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tweets" element={<Tweets />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <ScrollUp />
    </Suspense>
  );
};

export default TweetsRoutes;
