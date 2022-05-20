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
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    push(ref(db, `users/${uid}/expenses`), {
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

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return remove(ref(db, `users/${uid}/expenses/${id}`)
    ).then(() => {
      console.log('hello');
      dispatch(removeExpense({ id }));
    }).catch((e) => {
      console.log(e);
    });
  };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return update(ref(db, `users/${uid}/expenses/${id}`), updates).then(() => {
      dispatch(editExpense(id, updates));
    });
  };
};
//SET_EXPENSES

export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return get(child(ref(db), `users/${uid}/expenses`)).then((snapshot) => {
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