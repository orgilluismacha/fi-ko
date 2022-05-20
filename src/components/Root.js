import React, { useEffect } from 'react';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import FiKoDashboardPage from '../components/FiKoDashboardPage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import SideNavBar from '../components/SideNavBar';
import LoginPage from '../components/LoginPage';
import { BrowserRouter as Router, useNavigate, useLocation, Routes, Route, Switch, Link, NavLink } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {login, logout} from '../actions/auth';
import { connect, useSelector } from "react-redux";
import { startAddExpense } from '../actions/expenses';

const auth = getAuth();
const Root = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  let isLoggedIn = true;


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('uid ', user.uid);
        props.dispatch(login(user.uid));
        if (location.pathname === '/') {
          isLoggedIn = true;
          navigate('/dashboard');
          console.log('logged in');
        }
      } else {
        
        props.dispatch(logout());
        navigate('/');
        console.log('logged out');
      }
    });

  }, [navigate]);

  return (
    <div></div>
  );

}



export default connect()(Root);