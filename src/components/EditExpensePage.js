import React from "react";
import ExpenseForm from "./ExpenseForm";
import { useParams, useNavigate } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import SideNavBar from "./SideNavBar";
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const expense = useSelector((state) => state.expenses.find(expense => expense.id === params.id));

  return (
    <div>
    <SideNavBar />
      <div className="page-header">
        <div className="content-container"></div>
        <h1 className="page-header__title">Edit expense</h1>
      </div>
      <div className="content-container">
        <ExpenseForm
          expense={expense}
          onSubmit={(expense) => {
            props.dispatch(startEditExpense(params.id, expense));
            navigate('/');
          }}
        />
        <button 
          className="button"
          onClick={(e) => {
          props.dispatch(startRemoveExpense({ id: params.id }));
          navigate('/');
        }}>Remove</button>

      </div>
    </div>
  );
};

export default connect()(EditExpensePage);