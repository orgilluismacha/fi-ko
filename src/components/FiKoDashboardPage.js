import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";

const FiKoDashboardPage = () => (
  <div>
    <ExpenseListFilters/>
    <ExpenseList />
  </div>
);

export default FiKoDashboardPage;