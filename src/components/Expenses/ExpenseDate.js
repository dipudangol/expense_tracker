import './ExpenseDate.css';

const ExpenseDate = (props) => {

    const dateMonth = new Date(props.date).toLocaleString('en-US', { month: 'long' });
    const dateDay = new Date(props.date).toLocaleString('en-US', { day: '2-digit' });
    const year = new Date(props.date).getFullYear();
    // const year = '2020';
    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{dateMonth}</div>
            <div className='expense-date__day'>{dateDay}</div>
            <div className='expense-date__year '>{year}</div>
        </div>
    )

}

export default ExpenseDate;