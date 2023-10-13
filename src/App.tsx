import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Link,
  useParams,
  Navigate,
} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Loading from './components/Loading/Loading';
import { getCityList } from './api/rajaOngkir';

const AsyncComponent = React.lazy(
  () => import('./components/AsyncComponent/AsyncComponent'),
);
const AuthRequired = React.lazy(() => import('./components/Auth/AuthRequired'));
const Home = React.lazy(() => import('./page/Home/Home'));

const App: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCityList()
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data from RajaOngkir API:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home isLoading={isLoading} data={data} />} />
      </Routes>
    </Router>
  );
};

export default App;
