import React, { useEffect } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpensesSummary from "./ExpensesSummary";
import { connect } from "react-redux";
import { startAddExpense, startSetExpenses } from "../actions/expenses";

const FiKoDashboardPage = (props) => {
  useEffect(()=>{
    props.dispatch(startSetExpenses());
  });

  return (
    <div>
      <ExpenseForm
        onSubmit={(expense) => {
          props.dispatch(startAddExpense(expense));
        }}
      />

      <ExpensesSummary />
      <ExpenseListFilters />
      <ExpenseList />

    </div>
  );
}


export default connect()(FiKoDashboardPage);