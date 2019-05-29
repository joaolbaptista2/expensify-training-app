import React from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';
class ExpenseForm extends React.Component {

    handleForm = (e) => {
        e.preventDefault();
        console.log(this.props);
        const description = e.target.elements.description.value;
        const amount = e.target.elements.amount.value;
        const createdAt = e.target.elements.createdAt.value;
        this.props.dispatch(addExpense({ description, amount, createdAt }));
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleForm}>
                    <input type="text" placeholder="Description.." name="description" />
                    <input type="number" placeholder="Amount.." name="amount" />
                    <input type="number" placeholder="CreatedAt.." name="createdAt" />
                    <button> Add Expense</button>
                </form>
            </div>
        )


    }
}

export default connect()(ExpenseForm)

