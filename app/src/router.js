import * as React from 'react';
import SignIn from './Pages/SignIn';
import Header from './Elements/Header';
import SignUp from './Pages/SignUp';
import {
  Routes,
  Route,
  MemoryRouter,
} from 'react-router-dom';
import Statistics from './Pages/Statistics';
import AccountInfoPage from './Pages/AccountInfoPage';
import FeedPage from './Pages/Feed';
import PagesPage from './Pages/PagesList';
import PageNotFound from './Pages/PageNotFound';
import { HeaderLayout } from './Elements/HeaderLayout';

export default function AppRoutes() {
  return (
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element=<HeaderLayout /> >
          <Route path="/" element={<h1>Main</h1>} />
          <Route path="/myaccount" element={<AccountInfoPage />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/pages" element={<PagesPage />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
  );
}