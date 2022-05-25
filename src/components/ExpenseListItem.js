import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startRemoveExpense } from '../actions/expenses.js';
import moment from "moment";
import numeral from "numeral";



const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div >
    <Link className="list-item" to={`/edit/${id}`}>
      <div>
        <h3>{description}</h3>
        {moment(createdAt).format('MMMM Do, YYYY')}
      </div>

      <div>
        <span>{numeral(amount).format('0,0[.]00 $')}</span>
        <div>
        <button className="button"onClick={(e) => {
          dispatch(startRemoveExpense({ id }));
          console.log(id);

        }}>Remove</button>

        </div>
      </div>

    </Link>




  </div>
);


const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect()(ExpenseListItem);