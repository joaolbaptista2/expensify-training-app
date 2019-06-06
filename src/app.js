import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'
import './firebase/firebase';
const store = configureStore();

//add expense -> water bill
// store.dispatch(addExpense({ description: 'Water Bill', amount: 200, createdAt: 1000 }));
//add expense -> gas bill
// store.dispatch(addExpense({ description: 'Gas Bill', amount: 120, createdAt: 23000 }));
// store.dispatch(addExpense({ description: 'Water Bill', amount: 212100, createdAt: 213 }));

// store.subscribe(() => {
//     const state = store.getState();
//     console.log(getVisibleExpenses(state.expenses, state.filters));
// });


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));