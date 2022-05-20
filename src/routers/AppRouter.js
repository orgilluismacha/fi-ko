import React from 'react';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import FiKoDashboardPage from '../components/FiKoDashboardPage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import SideNavBar from '../components/SideNavBar';
import LoginPage from '../components/LoginPage';
import Root from '../components/Root';
import { BrowserRouter as Router, useNavigate, useLocation, Routes, Route, Switch, Link, NavLink } from 'react-router-dom'
import CustomRouter from './CustomRouter';
import PrivateRoute from './PrivateRoute';
import historyCustom from './history';

const AppRouter = () => {
  return (
    <Router history={historyCustom}>
      <div>
        <Root/>
        <Header />
        <SideNavBar />
        <Routes>
          <Route path='/' element={<LoginPage />} exact={true} />
          <Route path='/dashboard' element={<FiKoDashboardPage />} exact={true} />
          <Route path="/create" element={<AddExpensePage />} />
          <Route path="/edit/:id" element={<EditExpensePage />} />
          <Route path="/help" element={<HelpPage />} />

          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}



export default AppRouter;