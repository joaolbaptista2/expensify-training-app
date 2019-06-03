import React from 'react';
import { connect } from 'react-redux';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary'
const ExpenseDashboardPage = () => (
  <div>
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);


export default ExpenseDashboardPage;
