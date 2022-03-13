import React from "react";
import ExpenseListItem from "./ExpenseListItem.js";
import { connect } from "react-redux";
import selectExpenses from '../selectors/expenses';


const ExpenseList = (props) => (
  <div>
    <h1>Expense list</h1>
      {props.expenses.map((expense) => {
        return <ExpenseListItem key={expense.id} {...expense} />
      })
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
