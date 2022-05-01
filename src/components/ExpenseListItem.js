import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeExpense } from '../actions/expenses.js';
import moment from "moment";
import numeral from "numeral";

numeral.register('locale', 'hu', {
  delimiters: {
    thousands: ' ',
    decimal: ','
  },
  abbreviations: {
    thousand: 'E',  // ezer
    million: 'M',   // millió
    billion: 'Mrd', // milliárd
    trillion: 'T'   // trillió
  },
  ordinal: function (number) {
    return '.';
  },
  currency: {
    symbol: ' Ft'
  }
});

numeral.locale('hu');

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      {description}
    </Link>
    {numeral(amount).format('0,0[.]00 $')} {moment(createdAt).format('MMMM Do, YYYY')}
    <button onClick={(e) => {
      dispatch(removeExpense({ id }));
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