import React from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";

const FiKoDashboardPage = (props) => (
  <div>
    <ExpenseForm
      onSubmit = {(expense) => {
        props.dispatch(addExpense(expense));
      }}
      />
    <ExpenseListFilters/>
    <ExpenseList />
    
  </div>
);

export default connect()(FiKoDashboardPage);