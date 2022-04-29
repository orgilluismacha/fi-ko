import React from "react";
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format('YYYY MMM Do'));

export default class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    calendarFocused: false,
    error: ''
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({description}));
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    // or use e.persist, and assign it to the object property
    this.setState(() => ({note}));
  };

  onDateChange = (createdAt) => {
    if(createdAt){
      this.setState(() => ({ createdAt}));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
  };

  onAmountChange = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^[0-9]*$/)){
      this.setState(() => ({amount }));

    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    
    if(!this.state.description || !this.state.amount){
      // Set error state equal to "Please provide description and amount."
      this.setState(() => ({error: 'Please check if the values you have entered is valid.'}));
      console.log('bruh');
    } else {
      // Clear the error
      console.log('submitted');
      this.setState(() => ({error: ''}));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseInt(this.state.amount, 10),
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  render(){
    return (
    <div>
      {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
        
      <form onSubmit={this.onSubmit}>
        <input
          text="text"
          placeholder="Description"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}/>

        <input
          text="number"
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
          value={this.state.note}
          onChange={this.onNoteChange}
          placeholder="Addd a note for your expense (optional)">
        </textarea>

        <button>Add</button>
      </form>
    </div>
    )
  }
};
