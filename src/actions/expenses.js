import { v4 as uuidv4 } from 'uuid';

import { app, db } from '../firebase/firebase';
import { getDatabase, ref, set, onValue, update, remove, off, push, get, child, onChildRemoved, onChildChanged, onChildAdded } from "firebase/database";

// Action generators

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    push(ref(db, 'expenses'), {
      description,
      note,
      amount,
      createdAt
    }).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));

      console.log('New expense added!');
    }).catch((e) => {
      console.log('[ERR] Writing to database failed! Error:', e);
    });

  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id = 0 } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});


//SET_EXPENSES

export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpenses = () => {
  return (dispatch) => {
    return get(child(ref(db), 'expenses')).then((snapshot) => {
      if (snapshot.exists()) {
        const expenses = []
        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        dispatch(setExpenses(expenses));
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }
}