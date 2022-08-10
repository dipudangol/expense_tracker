import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItems from './ExpenseItem';
import ExpensesFilter from '../ExpensesFilter/Expensesfilter';
import ExpensesChart from './ExpensesChart';
import { useState } from 'react';

const Expenses = (props) => {
    const [filterYear, SetFilterYear] = useState('2098');

    const selectFilterData = selectData => {
        SetFilterYear(selectData);
    }

    const filteredArray = props.data.filter(item => {
        return new Date(item.date).getFullYear().toString() == filterYear;
    });


    return (
        <div>
            <li>
                <Card className="expenses">
                    <ExpensesFilter selected={filterYear} onSelectFilter={selectFilterData} />

                    <ExpensesChart expenses={filteredArray} />

                    {filteredArray.length == 0 && <h1>No data found!</h1>}

                    {filteredArray.length > 0 &&
                        filteredArray.map((eachData) => (
                            <ExpenseItems key={eachData.id} title={eachData.title} price={eachData.price} date={eachData.date}></ExpenseItems>
                        ))
                    }
                </Card>
            </li>
        </div>
    )
}

export default Expenses;