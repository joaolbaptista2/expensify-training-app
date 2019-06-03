import { addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
test('should setup add expense object', () => {
    const action = addExpense(expenses[0]);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenses[0],
            id: expect.any(String)
        }
    });
});

test('should setup addExpense with default values', () => {
    const defaultExpense = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    };

    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...defaultExpense,
            id: expect.any(String)
        }
    });
});

test('should setup removeExpense', () => {
    const action = removeExpense({ id: '100' });

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '100'

    })
});

test('should setup editExpense', () => {
    const action = editExpense('123ABC', { note: 'Hello' });

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123ABC',
        updates: {
            note: 'Hello'
        }
    });
});