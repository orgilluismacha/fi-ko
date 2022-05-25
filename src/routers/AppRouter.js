import React from 'react';
import EditExpensePage from '../components/EditExpensePage';
import FiKoDashboardPage from '../components/FiKoDashboardPage';

import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

import LoginPage from '../components/LoginPage';
import Root from '../components/Root';
import { BrowserRouter as Router, useNavigate, useLocation, Routes, Route, Switch, Link, NavLink } from 'react-router-dom'


const AppRouter = () => {
  return (
    <Router>
      <div>
        <Root/>
        <Routes>
          <Route path='/' element={<LoginPage />} exact={true} />
          <Route path='/dashboard' element={<FiKoDashboardPage />} exact={true} />
          <Route path="/edit/:id" element={<EditExpensePage />} />
          <Route path="/help" element={<HelpPage />} />

          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}



export default AppRouter;