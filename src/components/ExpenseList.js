import React from "react";
import ExpenseListItem from "./ExpenseListItem.js";
import { connect } from "react-redux";
import numeral from "numeral";
import selectExpenses from '../selectors/expenses';

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
const ExpenseList = (props) => (
  <div>
    <h1>Expense list</h1>
      {props.expenses.map((expense) => {
        return <ExpenseListItem key={expense.id} {...expense} />
      })
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
