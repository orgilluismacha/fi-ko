import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeExpense } from '../actions/expenses.js'

const ExpenseListItem = ({dispatch, id, description, amount,createdAt}) => (
  <div>
    <Link to={`/edit/${id}`}>
      {description}
    </Link>
    {amount}Ft {createdAt}
    <button onClick={(e) => {
    dispatch(removeExpense({id}));
      console.log(id);

    }}>Remove</button>
    
  </div>
);


const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect()(ExpenseListItem);