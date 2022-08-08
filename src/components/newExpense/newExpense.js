import './newExpense.css';
import ExpenseForm from './ExpenseForm';

const newExpense = ({ onAddExpense }) => {

    const saveExpenseDataHandler = (enteredData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredData
        };
        onAddExpense(expenseData);
    };

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default newExpense;