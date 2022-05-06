import React from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpensesSummary from "./ExpensesSummary";
import { connect } from "react-redux";
import { startAddExpense } from "../actions/expenses";

const FiKoDashboardPage = (props) => (
  <div>
    <ExpenseForm
      onSubmit = {(expense) => {
        props.dispatch(startAddExpense(expense));
      }}
      />
    
    <ExpensesSummary/>
    <ExpenseListFilters/>
    <ExpenseList />
    
  </div>
);

export default connect()(FiKoDashboardPage);