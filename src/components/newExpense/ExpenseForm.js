import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseData }) => {
    const [userInput, setUserInput] = useState({
        title: " ",
        price: " ",
        date: " "
    });

    const [isEditing, setIsEditing] = useState(true);

    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                title: event.target.value
            }
        });
    }

    const amountChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                price: event.target.value
            }
        });
    }

    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                date: event.target.value
            }
        });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        onSaveExpenseData(userInput);
        addedExpenseHandler();
    };

    const addExpenseHandler = () => {
        setIsEditing(false);
    }
    const addedExpenseHandler = () => {
        !isEditing ? setIsEditing(true) : setIsEditing(false);
    }

    return (

        <div>
            {isEditing && <div className='new-expense__control'>
                <div >
                    <button onClick={addExpenseHandler}>Add New Expense</button>
                </div>
            </div>
            }
            {!isEditing && <form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input
                            type='text'
                            value={userInput.title}
                            onChange={titleChangeHandler}>
                        </input>
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type='number' min='0.01' step='0.01' value={userInput.amount} onChange={amountChangeHandler}></input>
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type='date' min='2020-7-10' max='2023-12-30' value={userInput.date} onChange={dateChangeHandler}></input>
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button onClick={addedExpenseHandler}>Cancel</button>
                    <button type='submit'>Add expense</button>
                </div>

            </form>}
        </div>
    )
}

export default ExpenseForm;