import React from "react";
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';


export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    // or use e.persist, and assign it to the object property
    this.setState(() => ({ note }));
  };

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }

  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
  };

  onAmountChange = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^[0-9]*$/)) {
      this.setState(() => ({ amount }));

    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      // Set error state equal to "Please provide description and amount."
      this.setState(() => ({ error: 'Nothing to add' }));

    } else {
      // Clear the error and/or the input fieldd
      console.log('submitted');
      this.setState(() => ({
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        calendarFocused: false,
        error: ''
      }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseInt(this.state.amount, 10),
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });

      //clear input field
    }
  };

  render() {
    return (
      <div className="input-form-expense">
        <div className="page-header">
          <div className="content-container">
            <form onSubmit={this.onSubmit}>
            {this.state.error && <p className='form__error'>{this.state.error}</p>}

              <input
                className="text-input"
                text="text"
                placeholder="Description"
                autoFocus
                value={this.state.description}
                onChange={this.onDescriptionChange} />

              <input
                text="number"
                className="text-input"
                placeholder="Amount"
                value={this.state.amount}
                onChange={this.onAmountChange}
              />

              <SingleDatePicker
                date={this.state.createdAt}
                onDateChange={this.onDateChange}
                focused={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={() => false}
              />

              <textarea
                className="textarea"
                value={this.state.note}
                onChange={this.onNoteChange}
                placeholder="Add a note for your expense (optional)">
              </textarea>

              <button className="button">Save Expense</button>
            </form>
          </div>
        </div>

      </div>
    )
  }

};
