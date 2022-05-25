import React, { useEffect } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpensesSummary from "./ExpensesSummary";
import SideNavBar from '../components/SideNavBar';
import { connect } from "react-redux";
import { startAddExpense, startSetExpenses } from "../actions/expenses";

const FiKoDashboardPage = (props) => {
  useEffect(() => {
    props.dispatch(startSetExpenses());
  });

  return (
    <div>
      <SideNavBar />
      <div className="content-container">

        <ExpenseForm
          onSubmit={(expense) => {
            props.dispatch(startAddExpense(expense));
          }}
        />
      </div>

      <ExpensesSummary />
      <ExpenseListFilters />
      <ExpenseList />

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    expenses: startSetExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(FiKoDashboardPage);