import * as React from 'react';
import SignIn from './Pages/Common/SignIn';
import SignUp from './Pages/Common/SignUp';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Statistics from './Pages/Pages/Statistics';
import AccountInfoPage from './Pages/Account/AccountInfoPage';
import FeedPage from './Pages/Common/Feed';
import PagesPage from './Pages/Common/PagesList';
import PageNotFound from './Pages/Common/PageNotFound';
import { HeaderLayout } from './Elements/HeaderLayout';
import AccountEditPage from './Pages/Account/AccountPageEdit';
import FollowRequests from './Pages/Pages/FollowRequests';
import SinglePage from './Pages/Pages/SinglePage';
import SinglePost from './Pages/Posts/SinglePost';
import PostEdit from './Pages/Posts/PostEdit';
import PageEdit from './Pages/Pages/PageEdit';
import PostCreate from './Pages/Posts/PostCreate';
import PageCreate from './Pages/Pages/PageCreate';
import userdata from './userdata';
import pageData from './Pages/Pages/pagedata';
import postData from './Pages/Posts/postdata';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route element=<HeaderLayout /> >
        <Route path="/" element={<PagesPage />} />
        <Route path="/myaccount" element={<AccountInfoPage userdata={userdata} />} />
        <Route path="/myaccount/edit" element={<AccountEditPage userdata={userdata} />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/pages/new" element={<PageCreate />} />
        <Route path="/pages/page" element={<SinglePage />} />
        <Route path="/pages/page/edit" element={<PageEdit pageData={pageData} />} />
        <Route path="/pages/page/followrequests" element={<FollowRequests />} />
        <Route path="/pages/page/statistics" element={<Statistics />} />
        <Route path="/pages/page/post" element={<SinglePost />} />
        <Route path="/pages/page/post/edit" element={<PostEdit postData={postData} />} />
        <Route path="/pages/page/post/new" element={<PostCreate />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}