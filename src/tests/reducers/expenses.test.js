import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';
test('should setup default filter values', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([])
});

test('should remove expense', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not expense', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -10
    }
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('should add expense', () => {
    const expense = {
        id: '121',
        description: 'Internet Bill',
        note: '',
        amount: 3500,
        createdAt: moment(0)
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([...expenses, expense]);
});

test('should add expense', () => {
    const amount = 1;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);

    expect(state[1].amount).toBe(amount);
});

test('should not add expense if id not found', () => {
    const amount = 1;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});