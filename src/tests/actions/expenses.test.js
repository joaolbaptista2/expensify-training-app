import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';
const createMockStore = configureMockStore([thunk]);
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

test('should setup add expense action object with provided values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'mouse',
        amount: 3000,
        note: 'note',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});



test('should add expense with defaults to database and store', () => {
    const store = createMockStore({});
    const expenseData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});




// test('should setup addExpense with default values', () => {
//     const defaultExpense = {
//         description: '',
//         note: '',
//         amount: 0,
//         createdAt: 0
//     };

//     const action = addExpense();

//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             ...defaultExpense,
//             id: expect.any(String)
//         }
//     });
// });

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