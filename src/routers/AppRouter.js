import React from 'react';
import  AddExpensePage  from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import FiKoDashboardPage from '../components/FiKoDashboardPage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import SideNavBar from '../components/SideNavBar';

import {BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <SideNavBar/>
      <Routes>
        <Route path="/" element={<FiKoDashboardPage/>} exact={true}/>
        <Route path="/create" element={<AddExpensePage/>}/>
        <Route path="/edit/:id" element={<EditExpensePage/>}/>
        <Route path="/help" element={<HelpPage/>}/>

        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </div>
  </BrowserRouter>

);

export default AppRouter;