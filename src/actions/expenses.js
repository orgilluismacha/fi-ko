import { v4 as uuidv4 } from 'uuid';

// Action generators

// ADD_EXPENSE
export const addExpense = (
  { 
    description = '',
    note = '', 
    amount = 0, 
    createdAt = 0 
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt
  }
});

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
