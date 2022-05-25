import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import LoadingPage from './components/LoadingPage';

import history from './routers/history';
import { login, logout } from './actions/auth';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth"; // https://firebase.google.com/docs/auth/web/manage-users
import { Navigate, useNavigate } from 'react-router-dom';

import './firebase/firebase';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

const store = configureStore();



// store.dispatch(addExpense({ description: 'Water bill', amount: 5400, createdAt:5843298400}));
// store.dispatch(addExpense({ description: 'Gas bill', amount: 7600, createdAt:10432800}));
// store.dispatch(addExpense({ description: 'Electricity bill', amount: 3000, createdAt:2482380748300}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />

  </Provider>
);

ReactDOM.render(<LoadingPage/>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});
// let hasRendered = false;

// const renderApp = () => {
//   if (!hasRendered) {
//     ReactDOM.render(jsx, document.getElementById('app'));
//     hasRendered = true;
//   }
// };

// const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     console.log('login');
//     store.dispatch(startSetExpenses()).then(() => {
//       renderApp();
//       if (history.location.pathname === '/') {
//       }
//     })
//   } else {
//     renderApp();
//     history.push('/');
//     console.log('logout');
//   }
// });