import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startRemoveExpense } from '../actions/expenses.js';
import moment from "moment";
import numeral from "numeral";



const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      {description}
    </Link>
    {numeral(amount).format('0,0[.]00 $')} {moment(createdAt).format('MMMM Do, YYYY')}
    <button onClick={(e) => {
      dispatch(startRemoveExpense({ id }));
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