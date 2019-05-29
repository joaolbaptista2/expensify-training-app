import React from 'react';
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';
// Add html form
// connect values
// dispatch the data into the state
const AddExpensePage = (props) => (
  <div>
    <ExpenseForm
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense))
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddExpensePage);
