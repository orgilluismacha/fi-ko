import React from "react";
import EditItemModal from "./EditItemModal.js";
import { connect } from "react-redux";
import { removeExpense } from '../actions/expenses.js'

const ExpenseListItem = ({dispatch, id, description, amount,createdAt}) => (
  <div>
    {description} {amount}Ft {createdAt}
    
    <button>Edit</button>

    <button onClick={(e) => {
    dispatch(removeExpense({id}));
      console.log(id);

    }}>Remove</button>
    <EditItemModal/>
  </div>
);


const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect()(ExpenseListItem);