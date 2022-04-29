import React from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import EditItemModal from "./EditItemModal.js";
>>>>>>> 67915e4dd74689288c6073cdcd0538296f4adb5a
import { connect } from "react-redux";
import { removeExpense } from '../actions/expenses.js'

const ExpenseListItem = ({dispatch, id, description, amount,createdAt}) => (
  <div>
<<<<<<< HEAD
    <Link to={`/edit/${id}`}>
      {description}
    </Link>
    {amount}Ft {createdAt}
=======
    {description} {amount}Ft {createdAt}
    
    <button>Edit</button>

>>>>>>> 67915e4dd74689288c6073cdcd0538296f4adb5a
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