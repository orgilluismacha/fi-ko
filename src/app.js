import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

const store = configureStore();


store.dispatch(addExpense({ description: 'Water bill', amount: 5400, createdAt:5843298400}));
store.dispatch(addExpense({ description: 'Gas bill', amount: 7600, createdAt:10432800}));
store.dispatch(addExpense({ description: 'Electricity bill', amount: 3000, createdAt:2482380748300}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

const jsx = (
  <Provider store = {store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));


