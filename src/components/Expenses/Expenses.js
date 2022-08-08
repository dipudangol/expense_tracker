import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItems from './ExpenseItem';
import ExpensesFilter from '../ExpensesFilter/Expensesfilter';
import {  useState } from 'react';

const Expenses = (props) => {
    const [filterYear, SetFilterYear] = useState('2098');

    const selectFilterData = selectData => {
        SetFilterYear(selectData);
        console.log(selectData + "in expenses");
    }
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filterYear} onSelectFilter={selectFilterData} />

                {
                    props.data.map((eachData) => (
                        <ExpenseItems key={eachData.id} title={eachData.title} price={eachData.price} date={eachData.date}></ExpenseItems>
                    ))
                }
            </Card>
        </div>
    )
}

export default Expenses;